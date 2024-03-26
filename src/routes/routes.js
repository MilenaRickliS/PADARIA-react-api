import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from '../components/Header'
import Footer from "../components/Footer"


import Inicio from '../pages/Inicio'
import Cardapio from '../pages/Cardapio'
import Pedido from '../pages/Pedido'
import Galeria from '../pages/Galeria'
import Contato from '../pages/Contato'
import Login from '../pages/PageLogin'
import Cadastrar from '../pages/PageCadastrar'
import Private from './private'


function RoutesApp(){
    return(
        <BrowserRouter>       
            <Header/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/cardapio" element={<Private><Cardapio/></Private>}/>
                <Route path="/pedido" element={<Private><Pedido/></Private>}/>
                <Route path="/galeria" element={<Galeria/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastrar' element={<Cadastrar/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;