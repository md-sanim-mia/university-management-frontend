import { Button, Row } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/Auth/authApi";
import { verifyToken } from "../utils/verifyJwtToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInupt from "../components/form/PhInupt";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();
  const onSubmit = async (datas: FieldValues) => {
    console.log(datas);
    const tostId = toast.loading("Logging in");
    try {
      const res = await login(datas).unwrap();
      const user = verifyToken(res?.data?.accessToken);
      dispatch(setUser({ user: user, token: res?.data?.accessToken }));
      navigation("/");
      toast.success("success fully loging done ", {
        id: tostId,
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.error("something is wrong", { id: tostId, duration: 2000 });
    }
  };
  return (
    <div>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <PhForm onSubmit={onSubmit}>
          <PhInupt type="text" name="id" label="ID" />

          <PhInupt type="text" name="password" label="Password" />

          <Button htmlType="submit">Login</Button>
        </PhForm>
      </Row>
    </div>
  );
};

export default Login;
