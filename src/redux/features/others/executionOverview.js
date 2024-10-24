import { api } from '@/redux/api/apiSlice';

const executionOverviewApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getExecutionOverview: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/summary/execution-overview',
                method: 'POST',
                body: filters,
            }),
        }),
    }),
});

export const { useGetExecutionOverviewMutation } = executionOverviewApi;
