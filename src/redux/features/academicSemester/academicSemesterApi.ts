import { baseApi } from "../../api/baseApi";

const allAcademicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: () => ({
        url: "/academic-semester/get-academic-semester",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllAcademicSemesterQuery } = allAcademicSemesterApi;

// const academicSemesterApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     academicSemester: builder.mutation({
//       query: (academicSemesterInfo) => ({
//         url: "/academic-semester/create-academic-semester",
//         method: "POST",
//         body: academicSemesterInfo,
//       }),
//     }),
//   }),
// });

// export const { useAcademicSemesterMutation } = academicSemesterApi;
