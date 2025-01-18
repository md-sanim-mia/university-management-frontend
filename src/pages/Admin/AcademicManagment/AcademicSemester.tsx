import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicSemesterApi";
import type { TableColumnsType, TableProps } from "antd";
import { Table } from "antd";
import { TSemester } from "../../../types/academicMenagement";
import { useState } from "react";
import { TQueryParam } from "../../../types/gobal";

type OnChange = NonNullable<TableProps<TDataType>["onChange"]>;

type TDataType = Partial<TSemester>;
const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  // console.log(params);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllAcademicSemesterQuery(params);
  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year, code }) => ({
      _id,
      name,
      startMonth,
      endMonth,
      year,
      code,
    })
  );

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
      key: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
      key: "endMonth",
    },
    {
      title: "Semester Code",
      dataIndex: "code",
      key: "code",
    },
  ];
  const handleChange: OnChange = (pagination, filters, sorter, extra) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) => {
        queryParams.push({ name: "name", value: item });
      });
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };
  return (
    <>
      <Table<TDataType>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={handleChange}
      />
    </>
  );
};

export default AcademicSemester;
