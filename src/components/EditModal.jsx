import React, { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, onSave, book }) => {
  const [editedBook, setEditedBook] = useState({ ...book });

  useEffect(() => {
    setEditedBook({ ...book });
  }, [book]);

  const handleSave = () => {
    onSave(editedBook);
    onClose();
  };

  return (
    <div className={`edit-modal ${isOpen ? "open" : ""}`}>
      <div className="edit-modal-content">
        <h3>Editar Livro</h3>

        <input
          type="text"
          placeholder="Título"
          value={editedBook.title}
          onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Autor"
          value={editedBook.author}
          onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
        />

        <div className="button-div">
          <button onClick={handleSave}>Salvar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
