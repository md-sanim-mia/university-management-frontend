import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormProp = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};
const PhForm = ({ onSubmit, children }: TFormProp) => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      {" "}
      <form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PhForm;
