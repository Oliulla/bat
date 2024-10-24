import { api } from '@/redux/api/apiSlice';

export const filtersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        managementData: builder.mutation({
            query: (filterBody) => ({
                url: '/api/v1/data-management/all',
                method: 'POST',
                body: filterBody,
            }),
        }),
    }),
});

export const { useManagementDataMutation } = filtersApi;
