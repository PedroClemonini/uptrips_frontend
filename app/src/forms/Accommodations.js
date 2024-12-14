import { React, useState, useEffect } from "react";
import getAccommodation from "../services/accommodationServices/getAccommodation";
import setAccommodation from "../services/accommodationServices/setAccommodation";
import updateAccommodation from "../services/accommodationServices/updateAccommodation";
import deleteAccommodation from "../services/accommodationServices/deleteAccommodation";
import '../styles/components/btn.css';

function Accommodation({ onClose, id }) {
  const [fields, setFields] = useState({
    name: "",
    description: "",
    price: "",
    hosting_id: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateAccommodation(fields);
      } else {
        await setAccommodation(fields);
      }
      if (onClose) onClose();
    } catch (error) {
      console.error("Erro ao enviar dados:", error.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await deleteAccommodation(id);
      }
      if (onClose) onClose();
    } catch (error) {
      console.error("Erro ao deletar:", error.message);
    }
  };

  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        if (id) {
          const accommodationData = await getAccommodation(id);
          setFields(accommodationData);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error.message);
      }
    };

    fetchAccommodation();
  }, [id]);

  return (
    <div className="menu_user">
      <h1>Acomodação</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Descrição:
          <textarea
            rows={4}
            name="description"
            value={fields.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Preço:
          <input
            type="number"
            name="price"
            value={fields.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ID da Hospedagem:
          <input
            type="text"
            name="hosting_id"
            value={fields.hosting_id}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="btn-submit">Enviar</button>
        <button type="button" className="btn-close" onClick={onClose}>Sair</button>
        {id && (
          <button type="button" className="btn-delete" onClick={handleDelete}>Deletar</button>
        )}
      </form>
    </div>
  );
}

export default Accommodation;

