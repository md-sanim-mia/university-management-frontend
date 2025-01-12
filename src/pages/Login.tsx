import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/Auth/authApi";
import { verifyToken } from "../utils/verifyJwtToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/Auth/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const [login, { data, error }] = useLoginMutation();
  const onSubmit = async (datas) => {
    console.log(datas);
    const res = await login(datas).unwrap();
    const user = verifyToken(res?.data?.accessToken);
    dispatch(setUser({ user: user, token: res?.data?.accessToken }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID: </label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
