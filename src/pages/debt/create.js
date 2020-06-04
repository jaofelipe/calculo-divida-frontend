import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import app from '../../firebase/base';

export default function Create(){
  const { register, handleSubmit} = useForm();
  
  let history = useHistory();
  
  const onSubmit = (data) =>{
      
    try {
      console.log(JSON.stringify(data));
      localStorage.setItem('configuracao', JSON.stringify(data));
      history.push('/outcome');
    } catch (err) {
      alert('Erro ao enviar dados configuração, tente novamente.');
      console.log(err);
    }
  }

  return (
        
    <div className="container content">
      <p>
        <strong>Configuração para cálculo de dívidas</strong>
      </p>
      <button onClick={() => app.auth().signOut()}>Logout</button>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="qtParcelas">Parcelas *</label>
        <input 
          name="qtParcelas" 
          type="number" 
          placeholder="Quant. máxima de parcelas"
          ref={register({required: true, maxLenght: 5})}
        />

        <label htmlFor="tipoJuros">Juros *</label>
        <div>
            <input type="radio" name="tipoJuros" value="C" ref={register} /> Composto
            <input type="radio" name="tipoJuros" value="S" ref={register} /> Simples                 
        </div>

        <label htmlFor="jurosDia">Percentual Juros *</label>
        <input 
          name="jurosDia" 
          type="text" 
          placeholder="Percentual Juros ex.: 0.2"
          ref={register({ required: true})}
        />

        <label htmlFor="comissao">Comissão *</label>
        <input 
          name="comissao" 
          type="text" 
          placeholder="Percentual Paschoalotto"
          ref={register({required: true})}
        />

        <button className="btn" type="submit">Calcular</button>
      </form>
    </div>
  )
}
