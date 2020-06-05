import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import ListComponent from '../../components/ListComponent';
import api from '../../services/api';
import withListLoading from '../../components/withListLoading';

export default function List() {
  const ListLoading = withListLoading(ListComponent);

  const [appState, setAppState] = useState({
    loading: false,
    repos: [],
  });

  useEffect(() => {
    const fetchData = async () =>{
      setAppState({ loading: true });
      await api.get('/list').then(res => {
        const resp = res.data;
        setAppState({ loading: false, repos: resp});

      });
    };
    fetchData();
    
  }, [setAppState]);

  
  return (
    <div className="container-list content">
      <Link to="/">
        <p>Lista de Dívidas</p>
      </Link>
      <div>
        <ListLoading isLoading={appState.loading} repos={appState.repos} /> 
      </div>
    </div>
      
  );
}

