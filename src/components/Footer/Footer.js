
import "./Footer.css"

const Footer = () => {


    return(
        <>
       
          <footer className="page-footer purple accent-4 footer">
            <div className="container uno">
            © 2022 Zima Cerámica 
            <a className="grey-text text-lighten-4 right" href="https://www.linkedin.com/in/leandro-varela-3aa96292/" target="_blank">Powered by @LeandroVarela</a>
            </div>
            <div className="container">
            <a className="grey-text text-lighten-4 right redes" href="https://www.facebook.com/zima.ceramic" target="_blank"><i className="fa-brands fa-facebook redesLink"></i></a>
            <a className="grey-text text-lighten-4 right redes" href="https://www.instagram.com/zima_ceramica/" target="_blank" ><i className="fa-brands fa-instagram redesLink"></i></a>
            <a className="grey-text text-lighten-4 right redes" href="https://www.youtube.com/watch?v=_-nHB84P6gE&ab_channel=leandr0varela" target="_blank"> <i className="fa-brands fa-youtube redesLink"></i></a>
            <a className="grey-text text-lighten-4 right redes" href="https://twitter.com/?lang=es" target="_blank" ><i className="fa-brands fa-twitter redesLink"></i></a>
             </div>
          </footer>
       
        </>
    )
}

export default Footer