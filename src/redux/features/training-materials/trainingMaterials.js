import { api } from '@/redux/api/apiSlice';

const trainingMaterials = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllTrainingMaterials: builder.mutation({
            query: (filters) => ({
                url: '/api/v1/training-material/all',
                method: 'POST',
                body: filters,
            }),
        }),

        uploadNewTrainingMaterial: builder.mutation({
            query: (data) => ({
                url: '/api/v1/training-material',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetAllTrainingMaterialsMutation,
    useUploadNewTrainingMaterialMutation,
} = trainingMaterials;
