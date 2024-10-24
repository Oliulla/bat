import { api } from '@/redux/api/apiSlice';

export const visitCallApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllRegularCampaign: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/execution/visit-call/regular-campaign',
                method: 'POST',
                body: filters,
            }),
        }),

        getAllOthersCampaign: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/execution/visit-call/others-campaign',
                method: 'POST',
                body: filters,
            }),
        }),

        getExecutionById: builder.query({
            query: (id) => ({
                url: `/api/v1/execution/${id}`,
                method: 'GET',
            }),
        }),

        getAllTsr: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/tsrexecution/get-all-for-portal',
                method: 'POST',
                body: filters,
            }),
        }),
    }),
});

export const {
    useGetAllRegularCampaignMutation,
    useGetAllOthersCampaignMutation,
    useGetExecutionByIdQuery,
    useGetAllTsrMutation,
} = visitCallApi;
