import "../src/styles/global.css"
import "../src/styles/style.css"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import {useState} from 'react';

function App() {
  const [isNewsOpen, setIsNewsOpen] = useState(false)
  
  return (
    <>
      <Header />
      
      <section className="section-photo">
        <div className="section-float">
            <h1>Radar Samyung</h1>
            <p>Apresentamos o novo radar SMR-7200, um radar mais potente e com a antena aberta "open array".</p>
            <div className="white-arrows">
                <button className="arrow-prev" aria-label="Slide anterior"></button>
                
                <span>1/3</span>

                <button className="arrow-next" aria-label="Próximo slide"></button>
            </div>
        </div>
      </section>

      <button className="float-news" onClick={() => setIsNewsOpen(!isNewsOpen)}>
        <img src="/assets/chat.png" alt="Novidades" />
        <p>Novidades</p>
      </button>

      <section className={`layer ${isNewsOpen && 'layer-active'}`}>
        <div className={`news-hidden ${!isNewsOpen && 'news-open'}`}>
            <button className="close-news">X</button>
            <div className="info">
                <div className="texts-news">
                    <img src="/assets/ship-190.png" alt="Foto de um barco" className="ship-photo" />

                    <h2>Waypoint Navalshore 2014</h2>
                    <p>Pelo 4º ano consecutivo a Waypoint marca presença na Marintec South Navalshore. Foram 3 dias de grandes encontros com clientes...</p>
                    <hr />

                    <h2>Radar Samyung</h2>
                    <p>NEWS: NOVO RADAR SAMYUNG <br /> Apresentamos o novo radar SMR-7200, um radar mais potente e com a antena aberta "open array"...</p>
                    <hr />

                    <h2>Radar Samyung</h2>
                    <p>NEWS: NOVO RADAR SAMYUNG <br /> Apresentamos o novo radar SMR-7200, um radar mais potente e com a antena aberta "open array"...</p>

                    <button className="button-more" onClick={() => setIsNewsOpen(false)}>Todas as novidades</button>
                </div>
            

                <div className="section-submit">
                    <div className="sec-submit">
                        <h4>Receba todas as novidades por e-mail</h4>
                        <label for="E-mail"></label>
                        <input type="email" name="E-mail" id="email" placeholder="seu@email.com" />
                        <button type="submit" className="submit-email">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <main>
        <div className="products">
            <h2>Nossos Produtos</h2>
            <div className="box-products">
                <button>
                    <img src="/assets/produtos-com.png" alt="Produtos de Comunicação" />
                    <p>Comunicação</p>
                </button>
    
                <button>
                    <img src="/assets/produtos-nav.png" alt="Produtos de Navegação"  className="product-nav" />
                    <p>Navegação</p>
                </button>
    
                <button>
                    <img src="/assets/produtos-seg.png" alt="Produtos de Segurança" className="product-seg" />
                    <p>Segurança</p>
                </button>
            </div>
        </div>

        <section className="section-photo2" role="img" aria-label="Foto de um barco e um GPS. Texto: Navegue com segurança.">
            
        </section>

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

            <div className="button-projects">
                Projetos
            </div>
            
        </div>
    </main>

      <section className="section-partners">
        <h2>Marcas Parceiras</h2>

        <div className="partners">
            <button className="arrow-prev2" aria-label="Voltar"></button>
            
            <img src="/assets/partner1.png" alt="Logo do primeiro parceiro" className="none1" />
            <img src="/assets/partner2.png" alt="Logo do segundo parceiro" />
            <img src="/assets/partner3.png" alt="Logo do terceiro parceiro" className="none2" />
            <img src="/assets/partner4.png" alt="Logo do quarto parceiro" className="none1" />

            <button className="arrow-next2" aria-label="Avançar"></button>
            
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
