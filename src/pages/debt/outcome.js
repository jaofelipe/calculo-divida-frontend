import React, { useState, useEffect, useContext } from 'react';
import api from '../../services/api';
import './list.css';
import Money from '../../utils/MoneyConverter';
import { AuthContext } from "../../firebase/Auth";

export default function Outcome() {
    
   const [debts, setDebts] = useState([]);
   const {currentUser} = useContext(AuthContext);

  function IsAuth(props){
   
    if (!currentUser) return null;
     
    return <div><strong>comissão Paschoalotto</strong><br /> {Money(props.value)} </div>;
  } 
  useEffect(() => {
    async function loadDebts() {
      const config = localStorage.getItem('configuracao');
      if (config === null || config === undefined) { alert("configuração não definida!"); return;}
      const response = await api.post('/calc', JSON.parse(config), {
        //headers: { user_id }
      });

      setDebts(response.data);
    }

    loadDebts();
  }, [debts]);
  
   
  
    return (

      <div className="container-list content">
        <p>
          Cálculo de dívidas no dia: <strong> {new Date().toLocaleDateString()} </strong>
        </p>
         <ul className="notifications">
          
        </ul>        
        <ul className="spot-list">
          { debts.map(debt => (
            <li key={debt._id}>
              <strong>data de vencimento </strong>  {debt.dataVencimento}
              <strong>dias atraso </strong> {debt.atraso} 
              <strong>valor original </strong> {Money(debt.original)}
              <strong>valor juros </strong> {Money(debt.juros)}
              <strong>valor final </strong> {Money(debt.calcDivida)}
              <strong>valor final de cada parcela  </strong>  
              <ul>  
              { debt.parcelas.map(parcela => (
                <li key={parcela.id}>     
                  <span> {parcela.id} - {Money(parcela.parcela)} - DataVencimento: {parcela.vencimento}</span>
                </li>
                ))}
              </ul>
              <strong>telefone para negociar com um colaborador </strong>{debt.telefone}
              <IsAuth value={debt.calcComissao} /> 
              
          </li>
        ))}          
        </ul>   
      </div>
    )
  }