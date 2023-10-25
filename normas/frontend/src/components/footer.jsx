import React, { useState } from "react";
import Spinner from "./Spinner";
//import Teste from "./assets/images/logo_45A_0.PNG";

function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  //   const logOut = () => {
  //     setTimeout(() => {
  //     setIsLoading(true);
  //       localStorage.clear();
  //     }, 6000);
  //     localStorage.clear();
  //     setIsLoading(false);
  //     console.log("DONE");
  //   };
  return (
    <div class="uk-section uk-section-default uk-margin-remove-top uk-text-light uk-padding-remove-top"
	       style={{
        		backgroundImage: "linear-gradient(#fa7f22cc, #fa7f2200), url(images/BannerDocuments.png)",
        		backgroundRepeat: "no-repeat",
        		backgroundSize: "cover",
        		//background: "linear-gradient(#844718cc, #fa7f22cc)",
    		}}>
	       <img className="uk-visible@m" width={ 150 } height={ 150 } src="/images/LogoTransparente.png" alt="" />
       <hr className="uk-visible@m" /> 
          <div class="uk-grid-match uk-child-width-1-3@m uk-margin uk-margin-remove" uk-grid="uk-grid" style={{ color:"#fff"}}>
              <div className="uk-divider-vertical uk-margin-top">
                <h6 class="uk-margin-small uk-margin-small" style={{ color: "#fff" }}>Contacte-nos</h6>
                <ul class="uk-thumbnav" uk-margin>
                <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
                <a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
                <a href="" class="uk-icon-button" uk-icon="youtube"></a> 
		
		{/*<li class="uk-active">
                	<a className="uk-text-capitalize" href="/Contacto">Contacto<span></span></a>
                </li>
		
		<li class="uk-margin-small"><a className="uk-text-capitalize" href="http://museu.edm.co.mz/">Museu</a></li>*/}

                </ul>
		<h6 class="uk-margin-small" style={{ color: "#fff" }}>Outros links</h6>
		<a href="/Contacto" class="uk-margin-small-right uk-visible@m uk-margin-small uk-link-reset" style={{ color:"#fff" }}>Formulário de contacto</a>
                <a href="http://museu.edm.co.mz/" class=" uk-margin-small-right uk-margin-small uk-link-reset" style={{ color:"#fff" }}>Museu Virtual</a>
              </div>
              <div class="uk-margin-small uk-visible@m">                  
                <a href="uk-margin-small" class="uk-margin-small-right uk-link-reset" style={{ color:"#fff" }}>Políticas</a>
                <a href="uk-margin-small" class=" uk-margin-small-right uk-link-reset" style={{ color:"#fff" }}>Termos</a>
                <a href="uk-margin-small" class="uk-link-reset" style={{ color:"#fff" }}>Procedimentos</a>
  
              </div>
              <div>
                <a href="uk-margin-small" class="uk-margin-small-right uk-visible@m uk-link-reset" style={{ color:"#fff" }}><span uk-icon="phone"></span> +258 21 30 60</a>
                <a href="uk-margin-small" class=" uk-margin-small-right uk-link-reset" style={{ color:"#fff" }}><span uk-icon="mail"></span> academy@edm.co.mz</a>
                <a href="uk-margin-small" class="uk-link-reset" style={{ color:"#fff" }} ><span uk-icon="location"></span> Av.Eduardo Mondlane 1352, <br /> 2 Andar, Maputo</a>
                  
              </div>
          </div>
          {/* <hr></hr> */}
	  <h3 className="uk-text-small uk-text-center" style={{ color:"#000" }} > &#169;  ELECTRICIDADE DE MOÇAMBIQUE (EDM) <br /> Designed<a className="uk-link-reset" href="/dashboard"> by:</a>  ACADEMIA EDM</h3>
          {/*<h3 className="uk-text-small uk-text-bold uk-text-center" style={{ color:"#000" }} >EDM HÁ 45 ANOS ILUMINANDO A TRANSFORMAÇÃO <a className="uk-link-reset" href="/dashboard">DE</a> MOÇAMBIQUE</h3>*/}
    </div>    
  );
}

export default Footer;
