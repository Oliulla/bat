import { api } from '@/redux/api/apiSlice';

const priceComplienceApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPriceComplience: build.mutation({
            query: (data) => ({
                url: '/api/v1/price-compliance-execution/get-all-for-portal',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetPriceComplienceMutation } = priceComplienceApi;
