import { Link } from 'react-router-dom';
import './style.css';
import cesto from './cesto-pão.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fotos from '../../components/Fotos';

function Galeria(){
    return(
        <div>
            <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>GALERIA<span></span></h1>
                        <p>Desde 1993 fazendo história, preparamos os melhores pães, tortas, bolos,
                            salgados e doces para saborear e compartilhar em todos os momentos. Visite nossa padaria na Colônia Vitória, Entre Rios, Guarapuava-PR 
                            ou faça a sua encomenda.</p>

                        <div className="btn-contato">
                            <Link to = '/contato'>
                                <button>Entre em contato</button>
                            </Link>
                        </div>
                    </div>

                    <div className="img-topo-site">
                        <img src={cesto} alt="cesto-de-pão"/>
                    </div>
                </div>
            </div>
        </section>    
        <Fotos/>
        </div>
           
    );
}

export default Galeria;