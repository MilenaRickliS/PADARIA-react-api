import './style.css';
import logo from './logo-padaria.png'


function Login(){
    return(
        <section className="formulario">
            <div className="interface">
                <h2 className="titulo">ENTRE NA CONTA <span>OU INSCREVA-SE</span></h2>

                <div className="login-box">
                    <main className="container-login">
                        <img src={logo}  className="logo" alt="logo padaria" width="100%"/>
                        <form action="">
                            <div className="input-field">
                                <input type="text" name="username" id="username"
                                    placeholder="Insira seu login"/>
                                <div className="underline"></div>
                            </div>
                            <div className="input-field">
                                <input type="password" name="password" id="password"
                                    placeholder="Insira sua senha"/>
                                <div className="underline"></div>
                            </div>
                
                            <input id="login" type="submit" value="Entrar"/>
                        </form>
                
                        <div className="footer-login">
                            <span>Ou Conecte com o Google ou Facebook</span>
                            <div className="social-fields">
                                <div className="social-field google">
                                    <a href="#">
                                        <i className="bi bi-google"></i>
                                        Sign in with Google
                                    </a>
                                </div>
                                <div className="social-field facebook">
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                        Sign in with Facebook
                                    </a>
                                </div>
                            </div>
                            <br/>
                            <span>Não possui conta? <a href="#">Crie uma conta</a></span>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default Login;