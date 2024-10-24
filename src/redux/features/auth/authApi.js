import { logout, setCredentials } from './authSlice';
import { api } from '@/redux/api/apiSlice';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/api/v1/auth/signin',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setCredentials({
                            accessToken: data.access_token,
                            user: data.payload,
                        }),
                    );
                } catch (error) {
                    console.error('Login error:', error);
                }
            },
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/api/v1/auth/signout',
                method: 'POST',
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(logout());
                } catch (error) {
                    console.error('Logout error:', error);
                }
            },
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
