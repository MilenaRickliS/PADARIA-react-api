import { Link } from 'react-router-dom';
import './style.css';
import brioche from './pexels-evgeniy-alekseyev-7333071.jpg';
import craftMalte from './pexels-flo-maderebner-745988.jpg';
import integral100 from './pexels-gil-goldman-1555813.jpg';
import baguete from './pexels-mariana-kurnyk-1775033.jpg';
import graos8 from './pexels-nadin-sh-11214698.jpg';
import italiano from './pexels-pixabay-263168.jpg';

function Especialidades(){
    return(
        <section className="especiliadades">
            <div className="interface">
                <h2 className="titulo">NOSSOS <span>PÃES</span></h2>
                <div className="flex">
                    <div className="especialidades-box">
                        <img className="item-img" src={brioche} width="150px" height="150px"/>
                        <h3>Brioche</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla rem dolore inventore
                            delectus at.</p><br/>
                        <a href="" className="item-a">Mais</a>
                    </div>

                    <div className="especialidades-box">
                        <img className="item-img" src={craftMalte} width="170px" height="150px"/>
                        <h3>Craft Malte</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla rem dolore inventore
                            delectus at.</p><br/>
                        <a href="" className="item-a">Mais</a>
                    </div>

                    <div className="especialidades-box">
                        <img className="item-img" src={integral100} width="150px" height="150px"/>
                        <h3>Integral 100%</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla rem dolore inventore
                            delectus at.</p><br/>
                        <a href="" className="item-a">Mais</a>
                    </div>
                </div>
                <div className="flex">
                    <div className="especialidades-box">
                        <img className="item-img" src={baguete} width="150px"
                            height="150px"/>
                        <h3>Pão Baguete</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla rem dolore inventore
                            delectus at.</p><br/>
                        <a href="" className="item-a">Mais</a>
                    </div>

                    <div className="especialidades-box">
                        <img className="item-img" src={graos8} width="150px" height="150px"/>
                        <h3>8 Grãos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla rem dolore inventore
                            delectus at.</p><br/>
                        <a href="" className="item-a">Mais</a>
                    </div>

                    <div className="especialidades-box">
                        <img className="item-img" src={italiano} width="170px" height="150px"/>
                        <h3>Italiano</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla rem dolore inventore
                            delectus at.</p><br/>
                        <a href="" className="item-a">Mais</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Especialidades;
