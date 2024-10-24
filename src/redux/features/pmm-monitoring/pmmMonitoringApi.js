import { api } from '@/redux/api/apiSlice';

const pmmMonitoringApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllPmmMonitoring: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/pmmmonitoring/get-all',
                method: 'POST',
                body: filters,
            }),
        }),
    }),
});

export const { useGetAllPmmMonitoringMutation } = pmmMonitoringApi;
