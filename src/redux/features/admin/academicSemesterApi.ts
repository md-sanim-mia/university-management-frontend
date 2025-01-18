import { TSemester } from "../../../types/academicMenagement";
import { TQueryParam, TResponseRedux } from "../../../types/gobal";
import { baseApi } from "../../api/baseApi";
const allAcademicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
            console.log("this is item", item);
          });
        }
        console.log(params);
        return {
          url: "/academic-semester/get-academic-semester",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});
export const { useGetAllAcademicSemesterQuery } = allAcademicSemesterApi;

const createAcademicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicSemester: builder.mutation({
      query: (academicSemesterInfo) => ({
        url: "/academic-semester/create-academic-semester",
        method: "POST",
        body: academicSemesterInfo,
      }),
    }),
  }),
});

export const { useAcademicSemesterMutation } = createAcademicSemesterApi;
