import '../styles/products.css';

import ProductsCom from '../assets/produtos-com.png';
import ProductsNav from '../assets/produtos-nav.png';
import ProductsSeg from '../assets/produtos-seg.png';

export default function Products() {
  return (
    <div className="products">
          <h2>Nossos Produtos</h2>
          <div className="box-products">
            <button>
              <img src={ProductsCom} alt="Produtos de Comunicação" />
              <p>Comunicação</p>
            </button>

            <button>
              <img
                src={ProductsNav}
                alt="Produtos de Navegação"
                className="product-nav"
              />
              <p>Navegação</p>
            </button>

            <button>
              <img
                src={ProductsSeg}
                alt="Produtos de Segurança"
                className="product-seg"
              />
              <p>Segurança</p>
            </button>
          </div>
        </div>
  )
}