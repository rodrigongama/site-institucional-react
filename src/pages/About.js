import React from 'react';
import Products from '../components/Products';
import '../styles/about.css';
import '../styles/products.css';
import WhereAre from '../assets/where-are.png';
import WhatDo from '../assets/what-do.png';

export default function About() {
  return (
    <div>
      <section className="section-photo-about">
          <div className="section-float-blue">
              <h1>Quem Somos</h1>
          </div>   
      </section>

      <main>
          <article>
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt molestiae accusantium qui maiores quisquam ipsum quidem dolore? Repellendus reiciendis esse, earum, architecto dolorum impedit debitis molestias recusandae facere quae quod? Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quibusdam itaque voluptatum esse totam tempora ipsa officiis repellat est. Recusandae laborum officiis rem quos corporis dolore neque soluta omnis iste.
              </p>
      
              <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat blanditiis totam eligendi? Labore odio quam inventore soluta tenetur exercitationem placeat nam eveniet modi, maiores voluptatem. Et, dolores. Minima, commodi itaque.
              </p>
          </article>
      
          <div className="columns-texts">
              <div className="max-columns">
                  <div className="text1">
                      <h2>Missão</h2>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et possimus fugit quas consectetur, est nemo dicta, recusandae vero ad voluptates nihil illum aut saepe ipsa sequi veritatis cum dignissimos incidunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit tenetur voluptatum nisi earum! Veritatis consequuntur magni perspiciatis tenetur saepe possimus dolores, mollitia quas voluptates numquam obcaecati odio neque tempore autem?
                      </p>
                  </div>
          
                  <div className="text2">
                      <h2>Visão</h2>
                      <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, animi consequatur? Inventore praesentium minima maxime quasi, mollitia placeat modi! Odit officiis ut delectus repudiandae odio tempora consequatur deleniti nulla harum.
                      </p>
          
                      <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, cum! Totam vitae rem, tenetur similique nulla iure perferendis repellendus laborum ipsa. Quas molestias hic iusto placeat? Minus quae mollitia iure!
                      </p>
                  </div>
              </div>
          </div>
      
          <section className="where-what">
              <a href="../App.js">
                  <img src={WhereAre} alt="Onde estamos" />
              </a>
              
              <a href="../App.js">
                  <img src={WhatDo} alt="O que fazemos" />
              </a>
          </section>
      </main>

      <Products />
  </div>
  )
}
