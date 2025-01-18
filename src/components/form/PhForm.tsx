import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormConfig = {
  resolver?: any;
};
type TFormProp = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PhForm = ({ onSubmit, children, resolver }: TFormProp) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const method = useForm(formConfig);
  return (
    <FormProvider {...method}>
      {" "}
      <Form layout="vertical" onFinish={method.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PhForm;
