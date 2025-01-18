import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { monthOptions } from "../../../Constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academic.semester.schema";
import { useAcademicSemesterMutation } from "../../../redux/features/admin/academicSemesterApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/gobal";

const CreateAcademicSemester = () => {
  const [academicSemester] = useAcademicSemesterMutation();
  const nameOption = [
    { value: "01", label: "Autumn" },
    { value: "02", label: "Summer" },
    { value: "03", label: "Fall" },
  ];
  const currenYear = new Date().getFullYear();
  const YearOption = [0, 1, 2, 3, 4]?.map((number) => ({
    value: String(currenYear + number),
    label: String(currenYear + number),
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = nameOption[Number(data?.name) - 1].label;
    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    console.log(semesterData);
    try {
      const res = (await academicSemester(semesterData)) as TResponse;
      console.log(res);
      if (res.error) {
        toast.error(res.error?.data?.message);
      } else {
        toast.success(res?.data?.message);
      }
      // toast.success("Academic semester created");
    } catch (error) {
      toast.error("somthing went wrong ");
      console.log(error);
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh", width: "100%" }}
    >
      <Col span={6}>
        <PhForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <PhSelect label="Name" name="name" options={nameOption} />
            <PhSelect label="Year" name="year" options={YearOption} />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <PhSelect
              label="Start Month"
              name="startMonth"
              options={monthOptions}
            />
            <PhSelect
              label="End Month"
              name="endMonth"
              options={monthOptions}
            />
          </div>

          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
