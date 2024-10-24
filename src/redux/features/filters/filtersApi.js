import { api } from '@/redux/api/apiSlice';

const filtersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllRegion: builder.mutation({
            query: (data) => ({
                url: '/api/v1/region/all',
                method: 'POST',
                body: data,
            }),
        }),
        getAllArea: builder.mutation({
            query: (data) => ({
                url: '/api/v1/area/all',
                method: 'POST',
                body: data,
            }),
        }),
        getAllTerritory: builder.mutation({
            query: (data) => ({
                url: '/api/v1/territory/all',
                method: 'POST',
                body: data,
            }),
        }),
        getAllDh: builder.mutation({
            query: (data) => ({
                url: '/api/v1/dh/all',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetAllRegionMutation,
    useGetAllAreaMutation,
    useGetAllTerritoryMutation,
    useGetAllDhMutation,
} = filtersApi;
