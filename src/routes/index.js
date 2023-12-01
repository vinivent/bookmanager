import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import AddBooks from "../pages/AddBooks";
import BookList from "../pages/BookList";

function RoutesApp() {
  const [books, setBooks] = useState([]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleEdit = (index) => {
    setSelectedBookIndex(index);
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/addbooks"
        element={<AddBooks books={books} setBooks={setBooks} />}
      />
      <Route
        path="/booklist"
        element={
          <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />
        }
      />
    </Routes>
  );
}

export default RoutesApp;
