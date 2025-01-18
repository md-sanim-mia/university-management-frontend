import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TSelectProp = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};
const PhSelect = ({ label, name, options }: TSelectProp) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "250px" }}
            options={options}
            {...field}
            size="large"
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
