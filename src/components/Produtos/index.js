import data from "../Data/Data";
import React from "react";
import "./style.css"

const Produtos = ({handleAddProduct}) =>{
    const {productItens} = data;
    return(
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
    );
};

export default Produtos;