import React, {useContext} from 'react';
import Money from '../utils/MoneyConverter';
import { AuthContext } from "../firebase/Auth";





const ListDebts = (props) => {
    const {currentUser} = useContext(AuthContext);
    const { repos, config } = props;
    if (repos.length === 0 || !repos) return <p>Não há lista de cálculo de dívidas disponível</p>;
    if (config.length === 0 || !config) return <p>Não há registro de cálculo de dívida</p>;

    return (
          
        <ul className="spot-list">
        { repos.map(debt => (
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
                { currentUser && (
                    <div><strong>comissão Paschoalotto</strong><br />  {Money(debt.calcComissao)} </div>
                )}
        
            </li>
        ))} 
        </ul>               
    );
};
export default ListDebts;
