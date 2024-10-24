import { api } from '@/redux/api/apiSlice';

const newOutletApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllOutlet: builder.query({
            query: (filters) => ({
                url: `/api/v1/new-outlet`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAllOutletQuery } = newOutletApi;
