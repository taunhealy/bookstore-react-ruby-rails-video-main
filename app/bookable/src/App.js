import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Books from "./components/Books";

const API_URL = "http://localhost:3000/api/v1/books";

// You can move this to a separate api/hooks file
const useBooks = () => {
  return useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const { data } = await axios.get(API_URL);
      return data;
    }
  });
}

function App() {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Books books={books} />
    </div>
  );
}

export default App;
