import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/books";

// Query Hook (GET)
export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axios.get(API_URL);
      return data;
    },
  });
};

// Mutation Hooks (POST, PUT, DELETE)
export const useCreateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // This is where the HTTP POST request is generated
    mutationFn: (newBook) => axios.post(API_URL, { book: newBook }), // Rails expects nested params
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

export const useUpdateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...updates }) =>
      axios.put(`${API_URL}/${id}`, { book: updates }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};
