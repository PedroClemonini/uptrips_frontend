import React, { useState, useEffect } from 'react';
import '../styles/TripFilter.css';

const tripsData = [
  { id: 1, name: 'Ilha Bela', destination: 'Ilha Bela', relevance: 7, price: 500, duration: 5, date: '2024-11-25', image: 'ilhabela.jpg' },
  { id: 2, name: 'Guarulhos', destination: 'Guarulhos', relevance: 6, price: 100, duration: 2, date: '2024-12-10', image: 'guarulhos.jpg' },
  { id: 3, name: 'Rio de Janeiro', destination: 'Rio de Janeiro', relevance: 9, price: 200, duration: 4, date: '2024-12-05', image: 'riodejaneiro.jpg' },
  { id: 4, name: 'Praias', destination: 'Praias', relevance: 8, price: 900, duration: 7, date: '2024-12-15', image: 'praias.jpg' },
  { id: 5, name: 'Holambra', destination: 'Holambra', relevance: 5, price: 400, duration: 3, date: '2024-11-30', image: 'holambra.jpg' },
  { id: 6, name: 'Campos do Jordão', destination: 'Campos do Jordão', relevance: 10, price: 1200, duration: 6, date: '2024-12-20', image: 'camposdojordao.jpg' },
  { id: 7, name: 'Natal', destination: 'Natal', relevance: 7, price: 300, duration: 3, date: '2024-12-18', image: 'natal.jpg' },
  { id: 8, name: 'São Paulo', destination: 'São Paulo', relevance: 8, price: 200, duration: 2, date: '2024-12-08', image: 'saopaulo.jpg' },
];

const TripFilter = () => {
  const [trips, setTrips] = useState(tripsData);
  const [filteredTrips, setFilteredTrips] = useState(tripsData);
  const [sortOrder, setSortOrder] = useState('relevance');
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    let filtered = trips.filter(trip =>
      trip.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (destination === '' || trip.destination === destination) &&
      (startDate === '' || new Date(trip.date) >= new Date(startDate)) &&
      (endDate === '' || new Date(trip.date) <= new Date(endDate))
    );

    filtered = filtered.sort((a, b) => {
      const compare = a[sortOrder] - b[sortOrder];
      return sortDirection === 'asc' ? compare : -compare;
    });

    setFilteredTrips(filtered);
  }, [searchTerm, sortOrder, sortDirection, destination, startDate, endDate, trips]);

  return (
    <div className="trip-filter">
      <h2>Explore Nossas Viagens</h2>
      <div className="controls">
        <input 
          type="text" 
          placeholder="Buscar por nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Destino..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input 
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Data de Início"
        />
        <input 
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="Data de Fim"
        />
        <div>
          <label>Ordenar por: </label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="relevance">Relevância</option>
            <option value="price">Preço</option>
            <option value="duration">Duração</option>
          </select>
          <select value={sortDirection} onChange={(e) => setSortDirection(e.target.value)}>
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </div>
      </div>
      <ul>
        {filteredTrips.map(trip => (
          <li key={trip.id} className="trip-card">
            <img src={trip.image} alt={trip.destination} className="trip-image" />
            <div className="trip-info">
              <h3>{trip.name}</h3>
              <p>Destino: {trip.destination}</p>
              <p>Relevância: {trip.relevance}</p>
              <p>Preço: R${trip.price}</p>
              <p>Duração: {trip.duration} dias</p>
              <p>Data: {trip.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripFilter;