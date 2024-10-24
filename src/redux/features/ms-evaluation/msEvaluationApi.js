import { api } from '@/redux/api/apiSlice';

export const attendanceApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // getAllRegularCampaign: builder.query({
        //     query: (filters) => ({
        //         url: '/api/v1/execution/visit-call/regular-campaign',
        //         method: 'POST',
        //         body: {
        //             from: '2024-10-10T18:30:43.045Z',
        //             to: '2024-10-15T18:30:43.045Z',
        //         },
        //     }),
        // }),
        getAllRegularCampaign: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/execution/visit-call/regular-campaign',
                method: 'POST',
                body: {
                    ...filters,
                    from: '2024-10-10T14:17:19.425Z',
                    to: '2024-10-17T14:17:19.425Z',
                },
            }),
        }),

        // Query to fetch execution report by ID
        getExecutionById: builder.query({
            query: (id) => ({
                url: `/api/v1/execution/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAllRegularCampaignMutation, useGetExecutionByIdQuery } =
    attendanceApi;
