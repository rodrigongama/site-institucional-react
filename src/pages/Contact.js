import React from 'react';
import '../styles/global.css';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div>
      <section className="photo-ship3">
          <div className="float-contact">
              <h1>Contato</h1>
          </div>
      </section>

      <main className="main-form-contact">
          <form className="form-contact" action="" method="post">
              <div>
                  <label for="name">Nome:</label>
                  <input type="text" name="name" id="name" />
              </div>
              
              <div>
                  <label for="email">Email:</label>
                  <input type="email" name="email" id="email" />
              </div>
              
              <div>
                  <label for="object">Assunto:</label>
                  <select name="object" id="object">
                      <option value="Pedido de cotação">Pedido de cotação</option>
                  </select>
              </div>
              
              <div>
                  <label for="telefone">Telefone:</label>

                  <div className="tel">
                      <input type="text" name="telefone" id="tel1" maxlength="2" />

                      <span>-</span>
                      <input type="tel" name="telefone" id="tel2" maxlength="9" />
                  </div>
              </div>
              
              <div>
                  <label for="mensagem">Mensagem:</label>
                  <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
              </div>
                  
              <button type="submit">Enviar mensagem</button>
          </form>
      
          <div className="info-adress">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29402.78532081979!2d-43.19562813339666!3d-22.900525607716357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e151c7217%3A0x7ffdf9c2fc30b97d!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1619199896586!5m2!1spt-BR!2sbr" 
                loading="lazy" 
                id="map-contact" 
                title={"mapa"}
                ></iframe>
            
              <div>
                  <h2>Brasil</h2>
                  <p>Estrada de Lorem, 1003 - Ipsum <br />Rio de Janeiro - RJ | Tel: +55 21 2222 2222</p>

                  <h2>EUA</h2>
                  <p>1050 Lorem Ipsum Blvd South - Miami Beach, FL 31055 | Tel: +1 932 555 5555</p>
              </div>
              
          </div>
      </main>
    </div>
  )
}
