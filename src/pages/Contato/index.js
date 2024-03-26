import { Link } from 'react-router-dom';
import './style.css';
import cesto from './cesto-pão.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from '../../components/Formulario'
import Portifolio from '../../components/Portifolio';

function Contato(){
    return(
        <div>
            <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>CONTATO<span></span></h1>
                        <p><strong>Endereço</strong><br/>Rua Bento Munhoz da Rocha Neto, n° 1028 
                            <br/>(42) 3625-1832<br/>(42) 98413-4953<br/><br/><strong>Segunda a Sábado</strong><br/>6:30h - 20h<br/><strong>Domingo</strong><br/>6:30h - 18h
                            <br/><br/>panificadora_vitoria@hotmail.com</p>

                            <div class="btn-social">
                                <a href="#"><button><i class="bi bi-instagram"></i></button></a>
                                <a href="#"><button><i class="bi bi-whatsapp"></i></button></a>
                                <a href="#"><button><i class="bi bi-facebook"></i></button></a>
                            </div>
                    </div>

                    <div className="img-topo-site">
                        <img src={cesto} alt="cesto-de-pão"/>
                    </div>
                </div>
            </div>
        </section>
        <Formulario/>
        <Portifolio/>
        </div>       
    );
}

export default Contato;