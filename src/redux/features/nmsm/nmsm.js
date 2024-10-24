import { api } from '@/redux/api/apiSlice';

const nmsmApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllNmsm: build.mutation({
            query: (filters) => ({
                url: '/api/v1/nmsmexecution/get-all-for-portal',
                method: 'POST',
                body: filters,
            }),
        }),

        getNmsmById: build.query({
            query: (id) => ({
                url: `/api/v1/nmsmexecution/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAllNmsmMutation, useGetNmsmByIdQuery } = nmsmApi;
