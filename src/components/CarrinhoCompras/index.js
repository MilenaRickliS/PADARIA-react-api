import React, { useState } from "react";
import data from "../Data/Data";
import "./style.css"

const CarrinhoCompras = () =>{
    const {productItens} = data;
    const [cartItens, setCartItens] = useState([]);

    const handleAddProduct = (produtos) =>{
        const ProductExist = cartItens.find((item) => item.id === produtos.id)
        if(ProductExist){
            setCartItens(cartItens.map((item) => item.id === produtos.id ? {...ProductExist, quantity: ProductExist.quantity +1}:item))
        }else{
            setCartItens([...cartItens, {...produtos,quantity:1}])
        }
    }

    const handleRemoveProduct = (produtos) =>{
        const ProductExist = cartItens.find((item) => item.id === produtos.id)
        if(ProductExist.quantity === 1){
            setCartItens(cartItens.filter((item) => item.id !== produtos.id))
        }else{
            setCartItens(
                cartItens.map((item) => item.id === produtos.id ? {...ProductExist, quantity: ProductExist.quantity - 1 }:item)
            )
        }
    }

    const totalPrice = cartItens.reduce(
        (price,item) => price + item.quantity * item.price,0
    )

    const handleClear = () =>{
        setCartItens([]);
    }

    return(
        <div>
            <div className="produtos">
            {productItens.map((productItens) =>(
                <div className="card-product">
                    <div>
                        <img className='product-image' src={productItens.image} alt={productItens.name}/>
                    </div>
                    <div>
                        <h3 className="product-name">{productItens.name}</h3>
                    </div>
                    <div className="product-price">${productItens.price}</div>
                    <div>
                        <button className="product-add" onClick={() =>handleAddProduct(productItens)}>Adicionar ao Carrinho</button>
                    </div>
                </div>

            ))}
        </div>
        <div className="cart-Itens">
            <div className="carrinho-header">Carrinho</div>
            <div className="clear-cart">
                {cartItens.length >=1 &&(
                    <button className="clear-button" onClick={handleClear}>Limpar Carrinho</button>
                )}
            </div>

        
            {cartItens.length === 0 &&(
                <div className="cartitens-empty">Não há produtos adicionados</div>
            )}

            <div>
                {cartItens.map((item) =>(
                    <div key={item.id} className="cart-itens-list">
                        <img className="cart-itens-image" src={item.image} alt={item.name}/>
                        <div className="cart-itens-name">{item.name}</div>
                        <div className="cart-itens-function">
                            <button className="cart-itens-add" onClick={() => handleAddProduct(item)}>+</button>
                            <button className="cart-itens-remove" onClick={() => handleRemoveProduct(item)}>-</button>

                        </div>
                        <div className="cart-itens-price">
                            {item.quantity} *${item.price}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-itens-total">
                Total
                <div className="cart-itens-total-price">${totalPrice}</div>

            </div>
            <button className="finalizar">Finalizar Compra</button>

        </div>
        </div>
        
    );

}
export default CarrinhoCompras;