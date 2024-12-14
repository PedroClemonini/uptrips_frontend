import { React, useState, useEffect } from "react";
import LoadDestination from "../services/destinationServices/LoadDestination";
import getHosting from "../services/hostingServices/getHosting";
import setHosting from "../services/hostingServices/setHosting";
import updateHosting from "../services/hostingServices/updateHosting";
import deleteHosting from "../services/hostingServices/deleteHosting";
import plus from '../imgs/icons/plus.png' 
import '../styles/components/btn.css';
import Accommodations from "./Accommodations";
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
const [currentComponent, setCurrentComponent] = useState("form");
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


  const handleAccommodations = () => {
    setCurrentComponent("accommodations"); // Troca para o componente de acomodações
  };

  return (
    <div className="menu_user" >
     {currentComponent === "form" && (
        <>
         {id && (
            <div className="form-btns">
              <div className="btn-extra" onClick={handleAccommodations}>
                <img src={plus} alt="acomodações" /> Acomodações
              </div>
            </div>
          )}
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
        {id &&
        <button type="button" className="btn-close" onClick={handleDelete}>Delete</button>
        }
      </form>
        </>
      )}

      {currentComponent === "accommodations" && <Accommodations id={id} />}
    </div>
  );
}

export default Hosting;
