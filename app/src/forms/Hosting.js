import { React, useState, useEffect } from "react";
import LoadDestination from "../services/LoadDestination";
import getHosting from "../services/getHosting";
import setHosting from "../services/setHosting";
import updateHosting from "../services/updateHosting";
import deleteHosting from "../services/deleteHosting";
function Hosting({ onClose, id }) {
  const [fields, setFields] = useState({
    name: "",
    description: "",
    document: "",
    address: "",
    contact_phone: "",
    contact_email: "",
    destination_id: "", 
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
        await updateHosting(fields);
      } else {
        await setHosting(fields);
      }
      if (onClose) onClose(); // Call onClose after submission
    } catch (error) {
      console.error("Erro ao enviar dados:", error.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await deleteHosting(fields.id);
      }
      if (onClose) onClose(); // Call onClose after submission
    } catch (error) {
      console.error("Erro ao enviar dados:", error.message);
    }
  };

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const destinationsData = await LoadDestination();
        setDestinations(destinationsData);
        if (id) {
          const hostingData = await getHosting(id);
          setFields(hostingData);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error.message);
      }
    };

    fetch();
  }, [id]);

  return (
    <div className="menu_user">
      <h1>Hospedagem</h1>
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
          Documento:
          <input
            type="text"
            name="document"
            value={fields.document}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Endereço:
          <input
            type="text"
            name="address"
            value={fields.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Telefone de Contato:
          <input
            type="text"
            name="contact_phone"
            value={fields.contact_phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          E-mail de Contato:
          <input
            type="email"
            name="contact_email"
            value={fields.contact_email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Destino:
          <select
            name="destination_id"
            value={fields.destination_id}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecione um destino
            </option>
            {destinations.map((destination) => (
              <option key={destination.id} value={destination.id}>
                {destination.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit" className="btn-submit">Enviar</button>
        <button type="button" className="btn-close" onClick={onClose}>Sair</button>
        <button type="button" className="btn-close" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default Hosting;

