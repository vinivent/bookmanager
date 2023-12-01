import "./BookList.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BookList = ({ books, onDelete, onEdit }) => {
  const navigate = useNavigate();
  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleEdit = (index) => {
    onEdit(index);
    navigate("/addbooks"); 
  };

  return (
    <div className="book-list-container">
      <h2>Lista de Livros</h2>
      <div className="book-list">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <p>Livro {index + 1}</p>
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <div className="button-container">
              <button className="delete-button" onClick={() => handleDelete(index)}>Deletar</button>
              <button className="edit-button" onClick={() => handleEdit(index)}>Editar</button>
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
