import '../styles/global.css';
import '../styles/style.css';

import { useState } from 'react';
import Products from '../components/Products';
import NewsImage from '../assets/chat.png';
import ShipPhoto from '../assets/ship-190.png';
import Partner1 from '../assets/partner1.png';
import Partner2 from '../assets/partner2.png';
import Partner3 from '../assets/partner3.png';
import Partner4 from '../assets/partner4.png';
import ReactSwipe from 'react-swipe';


function App() {
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  let reactSwipeEl;
  let reactSwipeElem;

  return (
    <>
      <section className="section-photo">
        <div className="section-float">
          <ReactSwipe
              className="carousel"
              swipeOptions={{ continuous: true, auto: 2000, speed: 1000}}
              ref={(elem) => (reactSwipeElem = elem)}
            >
            <div>
              <h1>Radar Samyung</h1>
              <p>
                Apresentamos o novo radar SMR-7200, um radar mais potente e com a
                antena aberta "open array".
              </p>
              
            </div>
            <div>
              <h1>Radar Samyung</h1>
              <p>
                Apresentamos o novo radar SMR-7200, um radar mais potente e com a
                antena aberta "open array".
              </p>
              
            </div>
            <div>
              <h1>Radar Samyung</h1>
              <p>
                Apresentamos o novo radar SMR-7200, um radar mais potente e com a
                antena aberta "open array".
              </p>
              
            </div>
            
          </ReactSwipe>
              <div className="white-arrows">
                <button className="arrow-prev" aria-label="Slide anterior" onClick={() => reactSwipeElem.prev()}></button>
                
                <button className="arrow-next" aria-label="Próximo slide" onClick={() => reactSwipeElem.next()}></button>
              </div>
        </div>
      </section>

      <button className="float-news" onClick={() => setIsNewsOpen(true)}>
        <img src={NewsImage} alt="Novidades" />
        <p>Novidades</p>
      </button>

      <section className={`layer ${isNewsOpen && 'layer-active'}`}>
        {isNewsOpen && (
          <div className="news-open">
            <button className="close-news" onClick={() => setIsNewsOpen(false)}>
              
            </button>
            <div className="info">
              <div className="texts-news">
                <img
                  src={ShipPhoto}
                  alt="Foto de um barco"
                  className="ship-photo"
                />

                <h2>Waypoint Navalshore 2014</h2>
                <p>
                  Pelo 4º ano consecutivo a Waypoint marca presença na Marintec
                  South Navalshore. Foram 3 dias de grandes encontros com
                  clientes...
                </p>
                <hr />

                <h2>Radar Samyung</h2>
                <p>
                  NEWS: NOVO RADAR SAMYUNG <br /> Apresentamos o novo radar
                  SMR-7200, um radar mais potente e com a antena aberta "open
                  array"...
                </p>
                <hr />

                <h2>Radar Samyung</h2>
                <p>
                  NEWS: NOVO RADAR SAMYUNG <br /> Apresentamos o novo radar
                  SMR-7200, um radar mais potente e com a antena aberta "open
                  array"...
                </p>

                <button className="button-more">Todas as novidades</button>
              </div>

              <div className="section-submit">
                <div className="sec-submit">
                  <h4>Receba todas as novidades por e-mail</h4>
                  <label for="E-mail"></label>
                  <input
                    type="email"
                    name="E-mail"
                    id="email-float"
                    placeholder="seu@email.com"
                  />
                  <button type="submit" className="submit-email">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Products />

      <main className="main-home">
        
        <section
          className="section-photo2"
          role="img"
          aria-label="Foto de um barco e um GPS. Texto: Navegue com segurança."
        ></section>

        <div className="projects">
          <h2>Projetos</h2>

          <div className="boxes-projects">
            <div className="box-project">
              <div className="box-title">
                <h3>Fast Supply Vessel UT-4000</h3>
              </div>

              <div className="content-box">
                <div className="flex">
                  <h4 className="number">2015</h4>
                  <span>Marinha do Brasil</span>
                </div>

                <div className="content-p">
                  <h5>Equipamentos</h5>
                  <p>Sailor | Cobham |Samyung enc</p>
                </div>

                <div>
                  <h5>Estaleiro</h5>
                  <p>Santa Cruz</p>
                </div>
              </div>
            </div>

            <div className="box-project">
              <div className="box-title">
                <h3>Fast Supply Vessel UT-4000</h3>
              </div>
              <div className="content-box">
                <div className="flex">
                  <h4 className="number">2014</h4>
                  <span>Marimar S.A.</span>
                </div>

                <div className="content-p">
                  <h5>Equipamentos</h5>
                  <p>Sailor | Cobham |Samyung enc</p>
                </div>

                <div>
                  <h5>Estaleiro</h5>
                  <p>Santa Cruz</p>
                </div>
              </div>
            </div>

            <div className="box-project">
              <div className="box-title">
                <h3>Fast Supply Vessel UT-4000</h3>
              </div>
              <div className="content-box">
                <div className="flex">
                  <h4 className="number">2013</h4>
                  <span>Marinha do Brasil</span>
                </div>

                <div className="content-p">
                  <h5>Equipamentos</h5>
                  <p>Sailor | Cobham |Samyung enc</p>
                </div>

                <div>
                  <h5>Estaleiro</h5>
                  <p>Santa Cruz</p>
                </div>
              </div>
            </div>

            <div className="box-project">
              <div className="box-title">
                <h3>Fast Supply Vessel UT-4000</h3>
              </div>
              <div className="content-box">
                <div className="flex">
                  <h4 className="number">2013</h4>
                  <span>Marinha do Brasil</span>
                </div>

                <div className="content-p">
                  <h5>Equipamentos</h5>
                  <p>Sailor | Cobham |Samyung enc</p>
                </div>

                <div>
                  <h5>Estaleiro</h5>
                  <p>Santa Cruz</p>
                </div>
              </div>
            </div>

            <div className="box-project">
              <div className="box-title">
                <h3>Fast Supply Vessel UT-4000</h3>
              </div>
              <div className="content-box">
                <div className="flex">
                  <h4 className="number">2013</h4>
                  <span>Marimar S.A.</span>
                </div>

                <div className="content-p">
                  <h5>Equipamentos</h5>
                  <p>Sailor | Cobham |Samyung enc</p>
                </div>

                <div>
                  <h5>Estaleiro</h5>
                  <p>Santa Cruz</p>
                </div>
              </div>
            </div>

            <div className="box-project">
              <div className="box-title">
                <h3>Fast Supply Vessel UT-4000</h3>
              </div>
              <div className="content-box">
                <div className="flex">
                  <h4 className="number">2012</h4>
                  <span>Marinha do Brasil</span>
                </div>

                <div className="content-p">
                  <h5>Equipamentos</h5>
                  <p>Sailor | Cobham |Samyung enc</p>
                </div>

                <div>
                  <h5>Estaleiro</h5>
                  <p>Santa Cruz</p>
                </div>
              </div>
            </div>
          </div>

          <a href="/"><div className="button-projects">Projetos</div></a>
        </div>
      </main>

      <section className="section-partners">
        <h2>Marcas Parceiras</h2>

        <div className="partners">
          <button
            className="arrow-prev2"
            aria-label="Voltar"
            onClick={() => reactSwipeEl.prev()}
          ></button>

          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: true, auto: 2000, speed: 1000}}
            ref={(el) => (reactSwipeEl = el)}
          >
            <div className="carousel-item">
              <img
                src={Partner1}
                alt="Logo do primeiro parceiro"
                className="none1"
              />
            </div>
            <div className="carousel-item">
              <img src={Partner2} alt="Logo do segundo parceiro" />
            </div>
            <div className="carousel-item">
              <img
                src={Partner3}
                alt="Logo do terceiro parceiro"
                className="none2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Partner4}
                alt="Logo do quarto parceiro"
                className="none1"
              />
            </div>
          </ReactSwipe>

          <button
            className="arrow-next2"
            aria-label="Avançar"
            onClick={() => reactSwipeEl.next()}
          ></button>
        </div>
      </section>
    </>
  );
}

export default App;
