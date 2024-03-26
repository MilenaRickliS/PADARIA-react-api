import { useState, useContext } from 'react'
import './style.css'

import logo from '../../components/Header/logo-padaria.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'


export default function PageLogin(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext)

  async function handleSignIn(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await signIn(email, password);
    }

  }


  return(
    <div className="container-center">
      <div className="login1">
        <div className="login1-area">
          <img src={logo} alt="Logo da padaria" />
        </div>

        <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input 
            type="text" 
            placeholder="email@email.com"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />

          <input 
            type="password" 
            placeholder="********"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
          />

          <button type="submit">
            {loadingAuth ? "Carregando..." : "Acessar"}
          </button>
        </form>

        <Link to="/register">Criar uma conta</Link>

      </div>
    </div>
  )
}