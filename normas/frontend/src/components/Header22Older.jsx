import { useState } from "react";
import Spinner from "./Spinner";

function Header1() {
  const [isLoading, setIsLoading] = useState(false);
    const logOut = () => {
      setTimeout(() => {
      setIsLoading(true);
        localStorage.clear();
      }, 6000);
      localStorage.clear();
      setIsLoading(false);
      console.log("DONE");
    };
  return (
    <header1 className="" id="">
      {isLoading ? <Spinner /> : ""}
	<div class="uk-position-relative uk-visible-toggle uk-light" autoplay loop tabindex="-1" uk-slider="autoplay: true" uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 6000">

            <ul class="uk-slideshow-items">
                <li>
                    <img src="images/ComponentTMP_0-image.jpg" alt="" uk-cover/>
                </li>
                <li>
                   <img src="images/ImageBannerEDM11.jpg" alt="" uk-cover/>
                    

                </li>
                <li>
                   <img src="images/ImageBannerEDM15.jpg" alt="" uk-cover/>
                    
                </li>
                <li>
                   <img src="images/ImageBannerEDM14.png" alt="" uk-cover/>
                    
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>



        <div class="uk-padding-small hidden-mobile">
            <div class=" uk-position-center-right uk-overlay uk-border-rounded uk-card uk-card-body" style={{ borderRadius:12  }}>
	  	<br/>
                <h4 className="uk-text-bold uk-text-light uk-text-center uk-text-truncate" style={{ color:"#fff" }} > Seja bem vindo 
                <h2 className="uk-text-bold" style={{ color:"#fff"}}> AO PORTAL DE <br />CONHECIMENTO DA EDM</h2></h4>
                <form class="uk-search  uk-text-center uk-margin-remove-top  uk-search-default" >
                    <div class="uk-margin uk-inline uk-padding-remove uk-margin-remove" uk-grid="uk-grid">
                        {/* <label class="uk-form-label" for="form-stacked-text"><h6 style={{marginBotton:-300}}>Busque a aqui o conteúdo de interesse</h6></label> */}
                        <span class="uk-search-icon-flip" uk-search-icon ></span>
                            {/* <input class="uk-search-input uk-inline uk-form-width-large" type="search" placeholder="Pesquise aqui..." style={{ color:"#000", border:5, backgroundColor:"#fff" }} />  */}
                            {/* <button class="uk-button  uk-inline uk-button-primary" type="submit" style={{ borderRadius:20 }}>Pesquisar</button> */}
                    </div>
                </form>
            </div>
        </div>

<div class="uk-section-primary uk-preserve-color">
    <div className="uk-position-top uk-overlay uk-padding-remove uk-margin-remove">
        <div uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light">

          
            <nav
            className="uk-navbar uk-light uk-navbar-container uk-navbar-transparent"
            data-uk-navbar="mode:click; duration: 250"
            >
            <div className="uk-navbar-left">
                <div className="uk-navbar-item ">
                    <a className="uk-logo uk-visible@m" href="/">
                   	 <img className="custom-logo" src="https://lh3.googleusercontent.com/pw/AL9nZEUdEwsYLnmeANQ1zo9bREqSTCiMZHHQK3idkCIndyy4m94sEX_lbJRkCD4kIDQvO-6e8SsqfD7y3s2TxgBxNe45UK-vK0yStIPEu7BlHL-1WaFOHzjtUWqfu_ajx9VX2tTt5mOXQkcByF58_7o3KIz4=w207-h55-no?authuser=0" alt="" />
                    </a>

	  	     <a class="uk-navbar-toggle uk-navbar-toggle-animate uk-hidden@m"> 
                        <span class="uk-padding-remove-horizontal uk-margin-small-left" uk-icon="icon: menu; ratio: 1"></span> Menu
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active">
                                    <a href="/">HOME <span></span></a>
                                </li>
                                <li class="uk-active">
                                    <a href="/documents">Documentos <span uk-icon="chevron-down"></span></a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><a href="/documents">Legislações</a></li>
                                            {/* <li><a href="/documents">Ordens de Servições</a></li>
                                            <li><a href="/documents">Processos criticos</a></li>
                                            <li><a href="/documents">Diagramas de Rede</a></li>*/}
                                            <li><a href="/documents">Normas de Padronização</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="uk-active">
                                    <a href="/OrdenSs">Ordens de Servico <span uk-icon="chevron-down"></span></a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><a href="/OrdenSs">2022</a></li>
	  				    {/* <li><a href="/OrdenSs">2021</a></li>*/}
                                        </ul>
                                    </div>
                                </li>

                                <li class="uk-active">
                                    <a href="/Projecto">Projectos <span uk-icon="chevron-down"></span></a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><a href="/Projecto">Em execucao</a></li>
                                            <li><a href="/Projecto">Concluido</a></li>
                                        </ul>
                                    </div>
                                </li>

                                
                                <li class="uk-active">
                                    <a href="/Evento">Eventos <span></span></a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><a href="/webinars">Webinar</a></li>
					    {/* <li><a href="/webinars">Palestras</a></li>*/}
                                            <li><a href="/webinars">Jornadas Cientificas</a></li>
                                        </ul>
                                    </div>
                                </li>
                                
                                <li class="uk-active">
                                    <a href="/Contacto">Contacto <span></span></a>
                                </li>

                                <li class=""><a href="http://museu.edm.co.mz/">Museu</a></li>
                                <li>
                                    <a
                                    //   onClick={logOut}
                                    className="uk-text-white"
                                    href="/accounts/login"
                                    title="Acessar o portal"
                                    data-uk-tooltip=""
                                    >
                                    ENTRAR <span uk-icon="sign-in"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>                     
                    </a>
	  	{/*<a class="uk-navbar-toggle uk-hidden@m" href="/Index">
                    <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                    </a>
		  */}
                </div>

            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@m">
                <li class="uk-active">
                    <a href="/">HOME <span></span></a>
                </li>

                <li class="uk-active">
                    <a href="/documents">Documentos <span uk-icon="chevron-down"></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/legislation">Legislações</a></li>

                            <li><a href="/Normas">Normas de Padronização</a></li>
                        </ul>
                    </div>
                </li>

                <li class="uk-active">
                    <a href="/OrdenSs">Ordens de Servico <span uk-icon="chevron-down"></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/OrdenSs">2022</a></li>
	 		    {/* <li><a href="/OrdenSs">2021</a></li>*/}
                        </ul>
                    </div>
                </li>

                <li class="uk-active">
                    <a href="/Projecto">Projectos <span uk-icon="chevron-down"></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/Projecto">Em execucao</a></li>
                            <li><a href="/Projecto">Concluido</a></li>
                        </ul>
                    </div>
                </li>

                
                <li class="uk-active">
                    <a href="/Evento">Eventos <span></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/webinars">Webinar</a></li>
	 		    {/* <li><a href="/webinars">Palestras</a></li>*/}
                            <li><a href="/webinars">Jornadas Cientificas</a></li>
                        </ul>
                    </div>
                </li>
                
                <li class="uk-active">
                    <a href="/Contacto">Contacto <span></span></a>
                </li>

                <li class=""><a href="http://museu.edm.co.mz/">Museu</a></li>
                <li>
                    <a
                    //   onClick={logOut}
                    className="uk-text-white"
                    href="/accounts/login"
                    title="Acessar o portal"
                    data-uk-tooltip=""
                    >
                    ENTRAR <span uk-icon="sign-in"></span>
                    </a>
                </li>
                </ul>
            </div>
            </nav>

        </div>
       </div>
      </div>
    
    </div>
    </header1>
  );
}

export default Header1;

