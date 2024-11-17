import { useCreateBook } from "../hooks/useBooks";

export default function NewBook() {
  const createBook = useCreateBook();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook.mutate({
      title: "New Book",
      body: "Book content",
    });
  };

  return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
}
