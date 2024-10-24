import { api } from "@/redux/api/apiSlice";


const ticketsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createTicket: builder.mutation({
            query: (data) => ({
                url: '/api/v1/ticket',
                method: 'POST',
                body: data,
            }),
        }),

        getAllTickets: builder.query({
            query: () => ({
                url: '/api/v1/ticket',
                method: 'GET',
            }),
        }),
    }),
});

export const { useCreateTicketMutation, useGetAllTicketsQuery } = ticketsApi;
