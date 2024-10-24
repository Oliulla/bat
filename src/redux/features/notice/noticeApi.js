import { api } from '@/redux/api/apiSlice';

const noticeApi = api.injectEndpoints({
    endpoints: (build) => ({
        getNotice: build.query({
            query: () => ({
                url: '/api/v1/notice/portal',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetNoticeQuery } = noticeApi;
