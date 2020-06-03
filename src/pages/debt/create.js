import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Create(){
  const { register, handleSubmit} = useForm();
  localStorage.clear();
  let history = useHistory();
  
  const onSubmit = (data) =>{
      
    try {
      localStorage.setItem('configuracao', JSON.stringify(data));
      history.push('/outcome');
    } catch (err) {
      alert('Erro ao enviar dados configuração, tente novamente.');
    }
  }

  return (
        
    <div className="container content">
      <p>
        <strong>Configuração para cálculo de dívidas</strong>
      </p>

      <form className="" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="parcelas">Parcelas *</label>
        <input 
          name="parcelas" 
          type="text" 
          placeholder="Quant. máxima de parcelas"
          ref={register({required: true, maxLenght: 5})}
        />

        <label htmlFor="tipoJuros">Juros *</label>
        <div className="radio">
            <input type="radio" name="tipoJuros" value="C" ref={register} /> Composto
            <input type="radio" name="tipoJuros" value="S" ref={register} /> Simples                 
        </div>

        <label htmlFor="percentual">Percentual Juros *</label>
        <input 
          name="percentual" 
          type="text" 
          placeholder="Percentual Juros"
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
