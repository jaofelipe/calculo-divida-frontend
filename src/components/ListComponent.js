import React from 'react';
import Money from '../utils/MoneyConverter';


const List = (props) => {
  const { repos } = props;
  if (repos.length === 0 || !repos) return <p>Não há lista de dívidas disponível</p>;
  return (
          
      <ul className="spot-list">
        { repos.map(repo => (
          <li key={repo._id}>
            <strong>valor original </strong> {Money(repo.valorOriginal)}
            <strong>data de vencimento </strong>  {repo.dataVencimento}
            <strong>telefone para negociar com um colaborador </strong>{repo.telefone}                    
          </li>
      ))}          
      </ul>   
      
  );
};
export default List;
