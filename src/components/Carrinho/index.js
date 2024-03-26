import './style.css';


function Carrinho(){
    return(
        <section className="sobre">
        <div clasNames="interface" className="carrinho">
            <h2 className="titulo">Carrinho</h2>

            <table className="cart-table">
              <thead>
                <tr>
                  <th className="table-head-item first-col">Item</th>
                  <th className="table-head-item second-col">Preço</th>
                  <th className="table-head-item third-col">Quantidade</th>
                </tr>
              </thead>
    
              <tbody>
                <tr className="cart-product">
                  <td className="product-identification">
                    <img src="assets/imagens/4_grãos-removebg-preview.png" alt="Miniatura" className="cart-product-image"/>
                    <strong className="cart-product-title">4 GRÃOS</strong>
                  </td>
                  <td>
                    <span className="cart-product-price">R$9,00</span>
                  </td>
                  <td>
                    <input type="number" value="1" min="0" class="product-qtd-input"/>
                    <button type="button" className="remove-product-button">Remover</button>
                  </td>
                </tr>
                <tr className="cart-product">
                  <td className="product-identification">
                    <img src="assets/imagens/brioche-removebg-preview.png" alt="Poster 3" className="cart-product-image"/>
                    <strong className="cart-product-title">BRIOCHE</strong>
                  </td>
                  <td>
                    <span className="cart-product-price">R$12,00</span>
                  </td>
                  <td>
                    <input type="number" value="1" min="0" class="product-qtd-input"/>
                    <button type="button" className="remove-product-button">Remover</button>
                  </td>
                </tr> 
              </tbody>
    
              <tfoot>
                <tr>
                  <td colspan="3" className="cart-total-container">
                    <strong>Total</strong>
                    <span>R$0,00</span>
                  </td>
                </tr>
              </tfoot>
            </table>
            <button type="button" className="purchase-button">Finalizar Compra</button>
        </div>
        </section>

    );
}

export default Carrinho;

