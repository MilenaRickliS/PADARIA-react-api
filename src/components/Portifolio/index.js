import './style.css';


function Portifolio(){
    return(
        <section className="portfolio">
            <div className="interface">
                <div className="flex">
                    <div className="video">
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/vGchkqBDpdQ"
                            title="Portal RSN | Determinação faz a trajetória da Padaria Vitória em Entre Rios"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                    <div className="video">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.1776740101436!2d-51.49240451891925!3d-25.565754980179392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef4fd942cd30a1%3A0x37922f66db5604a5!2sPanificadora%20Vit%C3%B3ria!5e0!3m2!1spt-BR!2sbr!4v1697571468637!5m2!1spt-BR!2sbr"
                            width="100%" height="300px" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>     
    );
}

export default Portifolio;
