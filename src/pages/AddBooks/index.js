import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Books.css";

const AddBooks = ({ books, setBooks }) => {
  const [newBook, setNewBook] = useState({
    bookLink: "",
    title: "",
    author: "",
  });


  const isValidLink = (url) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  useEffect(() => {
    if (newBook.bookLink !== "" && !isValidLink(newBook.bookLink)) {
      alert("Ops, o link não é válido.");
      setNewBook({ bookLink: "" });
    }
  }, [newBook.bookLink]);

  const addBook = () => {
    if (
      newBook.title === "" ||
      newBook.author === "" ||
      newBook.bookLink === ""
    ) {
      alert("Ops, você deixou algum campo vazio.");
      return;
    }

    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "", bookLink: "" });
  };

  return (
    <div className="books-container">
      <div className="add-book-form">
        <h3>Adicionar Novo Livro</h3>

        <input
          className="todo-input"
          placeholder="Link da Imagem do Livro"
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
          <button onClick={addBook}>Adicionar Livro</button>
          <Link className="button-2" to="/booklist">
            Ver Livros
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
