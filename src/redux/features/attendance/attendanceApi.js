import { api } from '@/redux/api/apiSlice';

export const attendanceApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllAttendance: builder.mutation({
            query: () => ({
                url: '/api/v1/attendance/attendanceTracker',
                method: 'POST',
            }),
        }),
    }),
});

export const { useGetAllAttendanceMutation } = attendanceApi;
