import { useState } from 'react';
import axios from 'axios';

import '../styles/news.css';

export default function News() {
  const [cepData, setCepData] = useState({
    street: '',
    state: '',
    city: '',
    neighborhood: '',
  });

  const [messageError, setMessageError] = useState(false);

  const handleChange = (event) => {
    setCepData({ ...cepData, [event.target.name]: event.target.value });
  };

  const adressForm = async (event) => {
    const { value } = event.target;

    if (value.length === 8) {
      try {
        const { data } = await axios.get(
          `https://brasilapi.com.br/api/cep/v1/${value}`,
        );
        setCepData(data);
        setMessageError(false);
      } catch (err) {
        setMessageError(true);
      }
    }
  };
  
  return(
    <main className="main-news">
      <div className="float-pageNews">
        <h1>Novidades</h1>
      </div>
      
      <section className="section-texts">
        <div>
          <h2>BOAT COMPANY 2021</h2>
          <p>
          Pelo 6º ano consecutivo a Boat Company marca presença na Expo Boat. Foram 3 dias de grandes encontros com clientes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ut sint officiis cumque odit illo excepturi odio minima quae sapiente expedita, nemo beatae modi voluptatibus tempora id quibusdam earum sed!
          </p>
        </div>
        
        <div>
        <h2>NOVO GPS MARINE</h2>
          <p>
          Apresentamos o novo GPS-9000, um GPS mais potente e com o wireless "lorem ipsum". Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus corporis maxime expedita nemo magnam ducimus, pariatur non cum vitae natus reiciendis, quia, tempore atque rem obcaecati voluptatibus? Modi, laborum velit.
          </p>
        </div>
        
        <div>
          <h2>NOVO GPS MARINE</h2>
          <p>
          Apresentamos o novo GPS-9000, um GPS mais potente e com o wireless "lorem ipsum". Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque odit nam nesciunt earum, culpa fugiat? Repudiandae alias iure itaque rem similique nisi esse obcaecati, nobis commodi. Aliquid, aspernatur incidunt?
          </p>
        </div>
      </section>

      <section>
        <h2>Inscreva-se para receber as novidades</h2>
        <form className="form-news" action="" method="post">
          
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name"/>

          <label htmlFor="cep">CEP:</label>
          <input
            type="cep"
            name="cep"
            id="cep"
            onKeyUp={adressForm}
            maxLength={8}
          />

          {messageError && (
            <strong className="pMessageError">Digite um cep válido!</strong>
          )}

          <div>
              <div className="format-input">
                <label htmlFor="street">Endereço:</label>
                <input 
                  type="text" 
                  name="street" 
                  id="street" 
                  onChange={handleChange}
                  value={cepData.street}
                />
              </div>
              <div className="format-input">
                <label htmlFor="number">Número:</label>
                <input type="text" name="number" id="number"/>
              </div>
          </div>
          

          <div className="format-input">
              <label htmlFor="complement">Complemento:</label>
              <input type="text" name="complement" id="complement"/>
          </div>
          
          
          <div>
            <div className="format-input">
              <label htmlFor="state">Estado:</label>
              <input 
                type="text" 
                name="state" 
                id="state" 
                maxLength="2" 
                onChange={handleChange} 
                value={cepData.state}
              />
            </div>
            <div className="format-input">
              <label htmlFor="city">Cidade:</label>
              <input 
                type="text" 
                name="city" 
                id="city" 
                onChange={handleChange} 
                value={cepData.city}
              />
            </div>

            <div className="format-input">
              <label htmlFor="neighborhood">Bairro:</label>
              <input 
                type="text" 
                name="neighborhood" 
                id="neighborhood" 
                onChange={handleChange} 
                value={cepData.neighborhood}
              />
            </div>
          </div>
          
          <button type="submit">Enviar</button>
          
        </form>
      </section>
    </main>
  )
}