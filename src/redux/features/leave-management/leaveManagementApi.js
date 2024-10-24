import { api } from '@/redux/api/apiSlice';

const leaveManagementApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllLeaveSummary: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/leave/leave-summary-portal',
                method: 'POST',
                body: filters,
            }),
        }),

        getAllLeaveRequest: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/leave/leave-requests',
                method: 'POST',
                body: filters,
            }),
        }),

        updateLeaveRequest: builder.mutation({
            query: (data) => ({
                url: '/api/v1/leave/approve-reject',
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetAllLeaveSummaryMutation,
    useGetAllLeaveRequestMutation,
    useUpdateLeaveRequestMutation,
} = leaveManagementApi;
