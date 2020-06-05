import React, { useState, useEffect } from 'react';
import ListDebtComponent from '../../components/ListDebtComponent';
import api from '../../services/api';
import withListLoading from '../../components/withListLoading';
import './styles.css';
import { format } from 'date-fns';

export default function Outcome() {
    
  const ListLoading = withListLoading(ListDebtComponent);
  const config = localStorage.getItem('configuracao');

  const [appState, setAppState] = useState({
    loading: false,
    repos: [],
  });

  
  useEffect(() => {
    async function loadDebts() { 
      setAppState({ loading: true });     
      const response = await api.post('/calc', JSON.parse(config), {
        //headers: { user_id }
      });
      setAppState({ loading: false, repos: response.data});
    }
    loadDebts();
  }, [setAppState,config]);
  
     
    return (

      <div className="container-list content">
        <p>
          Cálculo de dívidas no dia: <strong> {format(new Date(),'dd/MM/yyyy')} </strong>
        </p>
        <div>
          <ListLoading config={config} isLoading={appState.loading} repos={appState.repos} />
        </div>  
        
      </div>
    )
  }