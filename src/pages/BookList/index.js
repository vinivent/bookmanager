import "./BookList.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BookList = ({ books, onDelete }) => {
  const navigate = useNavigate();
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="book-list-container">
      <h2>Lista de Livros</h2>
      <div className="book-list">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <p>Livro {index + 1}</p>
            <img src={book.bookLink} alt="Book Image" className="bookImage" />
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <div className="button-container">
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link className="link-add-book" to="/addbooks">
        Adicionar Novo Livro
      </Link>
    </div>
  );
};

export default BookList;
