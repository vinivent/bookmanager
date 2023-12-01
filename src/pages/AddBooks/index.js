import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Books.css";

const AddBooks = ({ books, setBooks }) => {
  const [newBook, setNewBook] = useState({
    bookLink: "",
    title: "",
    author: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const addBook = () => {
    if (newBook.title === "" || newBook.author === "" || newBook.bookLink) {
      alert("Ops, você deixou algum campo vazio.");
      return;
    }
    if (editIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[editIndex] = newBook;
      setBooks(updatedBooks);
      setEditIndex(null);
    } else {
      setBooks([...books, newBook]);
    }
    setNewBook({ title: "", author: "" });
  };

  useEffect(() => {
    if (editIndex !== null) {
      setNewBook(books[editIndex]);
    } else {
      setNewBook({ title: "", author: "" });
    }
  }, [editIndex, books]);

  return (
    <div className="books-container">
      <div className="add-book-form">
        <h3>{editIndex !== null ? "Editar Livro" : "Adicionar Novo Livro"}</h3>

        <input
          className="todo-input"
          placeholder="Link do Livro"
          type="text"
          required
          value={newBook.bookLink}
          onChange={(e) => setNewBook({ ...newBook, bookLink: e.target.value })}
        />

        <input
          className="todo-input"
          placeholder="Título"
          type="text"
          required
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />

        <input
          className="todo-input"
          placeholder="Autor"
          type="text"
          required
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />

        <div className="button-div">
          <button onClick={addBook}>
            {editIndex !== null ? "Editar Livro" : "Adicionar Livro"}
          </button>
          <Link className="button-2" to="/booklist">
            Ver Livros
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
