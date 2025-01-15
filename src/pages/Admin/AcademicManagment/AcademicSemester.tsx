import { useGetAllAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h2>academic semester section</h2>
    </div>
  );
};

export default AcademicSemester;
