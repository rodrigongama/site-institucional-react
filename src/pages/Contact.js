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

      <main className="main-form">
          <form action="" method="post">
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4380834589815!2d-43.1848882852564!3d-22.897207043285185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5ae37aaaab%3A0x5874c85b8e27f4bb!2sAv.%20Venezuela%2C%203%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020081-311!5e0!3m2!1spt-BR!2sbr!4v1618432995063!5m2!1spt-BR!2sbr" 
              loading={"lazy"} 
              title={"mapa"}
              id="map-contact"
              ></iframe>
              
              <div>
                  <h2>Brasil</h2>
                  <p>Av. Venezuela 3, 18º andar - Centro <br />Rio de Janeiro - RJ | Tel: +55 21 2203 9000</p>

                  <h2>EUA</h2>
                  <p>1310 Park Central Blvd South - Pompano Beach, FL 33064 | Tel: +1 954 648 7618</p>
              </div>
              
          </div>
      </main>
    </div>
  )
}
