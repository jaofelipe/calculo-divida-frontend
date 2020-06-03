import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Outcome() {
    const configuracao = localStorage.getItem('configuracao');
    console.log('object:', JSON.parse(configuracao));

    
  
    
    // useEffect(() => {
    //   socket.on('booking_request', data => {
    //     setRequests([...requests, data]);
    //   })
    // }, [requests, socket]);
  
    // useEffect(() => {
    //   async function loadSpots() {
    //     const user_id = localStorage.getItem('user');
    //     const response = await api.get('/dashboard', {
    //       headers: { user_id }
    //     });
  
    //     setSpots(response.data);
    //   }
  
    //   loadSpots();
    // }, []);
  
   
  
    return (
      <>
        {/* <ul className="notifications">
          {requests.map(request => (
            <li key={request._id}>
              <p>
                <strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong>
              </p>
              <button className="accept" onClick={() => handleAccept(request._id)}>ACEITAR</button>
              <button className="reject" onClick={() => handleReject(request._id)}>REJEITAR</button>
            </li>
          ))}
        </ul>
  
        <ul className="spot-list">
          {spots.map(spot => (
            <li key={spot._id}>
              <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
              <strong>{spot.company}</strong>
              <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
            </li>
          ))}
        </ul> */}
        <p>Test Data</p>
  
        <Link to="/">
          <button className="btn">Calcular nova dívida</button>
        </Link>
      </>
    )
  }