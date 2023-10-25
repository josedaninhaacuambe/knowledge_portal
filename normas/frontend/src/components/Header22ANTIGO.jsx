import { useState } from "react";
import { useSearchParams } from "react-router-dom";
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
    const [searchParams, setSearchParams] = useSearchParams();

    if(searchParams.get("tipo")){
        if(searchParams.get("tipo").toLowerCase()=="ordem" || searchParams.get("tipo").toLowerCase() == "ordens"){
            window.location.href = "/pesquisa/ordens";
        } else if (searchParams.get("tipo").toLowerCase()=="document" || searchParams.get("tipo").toLowerCase() == "documents") {
            window.location.href = "documents";

          } else if (searchParams.get("tipo").toLowerCase()=="Norma" || searchParams.get("tipo").toLowerCase() == "Normas") {
            window.location.href = "Normas";
          }

          else if (searchParams.get("tipo").toLowerCase()=="projecto" || searchParams.get("tipo").toLowerCase() == "Projectos") {
            window.location.href = "projecto";
          }

          else if (searchParams.get("tipo").toLowerCase()=="legislation" || searchParams.get("tipo").toLowerCase() == "legislacao") {
            window.location.href = "legislation";
          }

          else if (searchParams.get("tipo").toLowerCase()=="specialist" || searchParams.get("tipo").toLowerCase() == "especialista") {
            window.location.href = "specialist";
          }
    }
  return (
    <header1 className="" id="">
      {isLoading ? <Spinner /> : ""}
        <div class="uk-position-relative uk-visible-toggle uk-light" autoplay loop tabindex="-1" uk-slider="autoplay: true" uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 6000">
            <ul class="uk-slideshow-items background_home">
                {/* <li className="">
                    <img src="images/ComponentTMP_0-image.jpg" alt="" id="background_home" className="background_home"/>  
                </li> */}
                {/* <li>
                   <img src="images/ImageBannerEDM11.jpg" alt="" className="background_home"/>
                </li> */}
                <li>
                   <img src="images/ImageBannerEDM15.jpg" alt="" className="" uk-cover/>
                    {/* <iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent&amp;playsinline=1" width="1920" height="1080" allowfullscreen uk-cover></iframe> */}
                </li>
                <li>
                   <img src="images/ImageBannerEDM14.png" alt="" className="" uk-cover/>
                    {/* <iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent&amp;playsinline=1" width="1920" height="1080" allowfullscreen uk-cover></iframe> */}
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

            <div className="uk-position-large hidden-mobile uk-margin uk-position-center-left uk-overlay">
                <div className="uk-grid-match" uk-grid="uk-grid">
                    <div> 
                        <h6 className="uk-text-bold uk-margin-bottom-remove uk-text-truncate" style={{ color:"#fff" }} > Seja bem vindo </h6>
                        <h5 className="uk-text-bolder uk-margin-remove-top " style={{ color:"#fa7f22"}}> AO PORTAL DE <br />CONHECIMENTO DA EDM</h5>
                    </div>
                </div>
            </div>


            <div className="uk-position-large hidden-mobile uk-position-bottom-left uk-margin-remove-top uk-margin-large-bottom uk-overlay">
                <div className="uk-child-width-1-2@s uk-grid-match" uk-grid="uk-grid">
                    <div>
                        <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded1" style={{border: "5px solid red"}}>
                            <p className="uk-text-bolder uk-h4">
                                <span uk-icon="icon:  info; ratio: 1.2 "></span> 
                            </p>
                            <h3 className="uk-text-bold" style={{ color:"#000" }}>Pensamento do dia</h3>
                            <p href=""  className="uk-margin-remove uk-text-bold uk-text-default" style={{ color:"#000" }}>“Nós somos o que fazemos repetidamente. Excelência, portanto, não é um ato, mas um hábito” <br /> – Aristóteles.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded1">  
                            <p className="uk-text-bolder uk-h4">
                                <span uk-icon="icon: link; ratio: 1.2 "></span> 
                            </p>
                            <p className="uk-text-default uk-text-center uk-text-bold  uk-margin-remove" ><span className="uk-text-light uk-margin-remove"></span>
                            <form class="uk-search uk-search-default">
                                <span class="uk-search-icon-flip" uk-search-icon></span>
                                <input class="uk-search-input uk-border-rounded" type="search" name="tipo" placeholder="Pesquisar" style={{ border: "2px solid", borderRadius: "5px" }}/>
                            <button type="submit" className="uk-text-normal uk-button uk-button-default uk-align-left uk-margin-top">pesquisar</button>        

                            </form>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-position-small uk-hidden@s uk-position-center-left uk-overlay">
                <div className="uk-child-width-1-1@s uk-grid-match" uk-grid="uk-grid">
                                        
                    <div>
                        <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded">  

                            <form class="uk-search uk-search-default">
                                <span class="uk-search-icon-flip" uk-search-icon></span>
                                <input class="uk-search-input uk-border-rounded" type="search" name="tipo" placeholder="Pesquisar"/>
                            
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        {/* <div className="uk-position-relative"   
            style={{
                backgroundImage: "url(images/ComponentTMP_0-image.jpg)",
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover",
                width: 1340, 
                height: 1000
            }}> */}
        {/* <img src="https://lh3.googleusercontent.com/pw/AL9nZEWmoiIcJ8PaBgVrFnZ-xp0TKG6wd67unhiaOTfJd63GsOwx00Y44XRbUQXyCE3AzGCUl5WAKpxI1B3Enband_bZC8A7AHcwToYZ0h91N8mBnBBaHTS2Htzk8C-71yz0Rxtfv-qBiOTMhz4mIMRBsV56=w1366-h768-no" width={1800} height={1000} alt="" style={{opacity: 1}} /> */}
        
        {/* <div class="uk-padding-small hidden-mobile">
            <div class=" uk-position-center-right uk-overlay uk-border-rounded uk-card uk-card-body" style={{ borderRadius:12  }}> <br />
                <h4 className="uk-text-bold uk-text-light uk-text-center uk-text-truncate" style={{ color:"#fff" }} > Seja bem vindo
                <h2 className="uk-text-bold " style={{ color:"#fff"}}> AO PORTAL DE <br />CONHECIMENTO DA EDM</h2></h4>
                <form class="uk-search  uk-text-center uk-margin-remove-top  uk-search-default" >
                    <div class="uk-margin uk-inline uk-padding-remove uk-margin-remove" uk-grid="uk-grid">
                        <span class="uk-search-icon-flip" uk-search-icon ></span>
                    </div>
                </form>
            </div>
        </div> */}


<div class="uk-section-primary uk-preserve-color">
    <div className="uk-position-top uk-overlay uk-padding-remove uk-margin-remove">
        <div uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; uk-light">

          
            <nav
            className="uk-navbar uk-light uk-navbar-container"
            data-uk-navbar="mode:click; duration: 250"
            >
            <div className="uk-navbar-left">
                {/* <div className="uk-navbar-item uk-hidden@m">
                    <a className="uk-logo" href="/">
                        <img className="custom-logo" src="https://lh3.googleusercontent.com/pw/AL9nZEUdEwsYLnmeANQ1zo9bREqSTCiMZHHQK3idkCIndyy4m94sEX_lbJRkCD4kIDQvO-6e8SsqfD7y3s2TxgBxNe45UK-vK0yStIPEu7BlHL-1WaFOHzjtUWqfu_ajx9VX2tTt5mOXQkcByF58_7o3KIz4=w207-h55-no?authuser=0" alt="" />
                    </a>
                    <a class="uk-navbar-toggle" href="#">
                        <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                    </a>
                </div> */}
                <div className="uk-navbar-item ">
                    <a className="uk-logo uk-visible@m" href="">
                    <img className="custom-logo" src="https://lh3.googleusercontent.com/pw/AL9nZEUdEwsYLnmeANQ1zo9bREqSTCiMZHHQK3idkCIndyy4m94sEX_lbJRkCD4kIDQvO-6e8SsqfD7y3s2TxgBxNe45UK-vK0yStIPEu7BlHL-1WaFOHzjtUWqfu_ajx9VX2tTt5mOXQkcByF58_7o3KIz4=w207-h55-no?authuser=0" alt="" />
                    </a>
                    <a class="uk-navbar-toggle uk-navbar-toggle-animate uk-hidden@m"> 
                        <span class="uk-padding-remove-horizontal uk-margin-small-left" uk-icon="icon: menu; ratio: 2"></span> Menu
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active">
                                    <a href="/">HOME <span></span></a>
                                </li>
                                <li class="uk-active">
                                    <a href="/documents">Documentos <span uk-icon=""></span></a>
                                    {/*<div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
	 				    <li><a href="/documents">Legislações</a></li>
                                            <li><a href="/documents">Ordens de Servições</a></li>
					    <li><a href="/documents">Processos criticos</a></li>
	  				    <li><a href="/documents">Diagramas de Rede</a></li>
	  				    <li><a href="/documents">Normas de Padronização</a></li>
                                        </ul>
                                    </div>*/}
                                </li>

                                <li class="uk-active">
                                    <a href="/OrdenSs">Ordens de Servico <span uk-icon="chevron-down"></span></a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><a href="/pesquisa/ordens">2022</a></li>
					    {/* <li><a href="/OrdenSs">2021</a></li>*/}
                                        </ul>
                                    </div>
                                </li>

                                <li class="uk-active">
                                    <a href="/Projecto">Projectos <span uk-icon="chevron-down"></span></a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><a href="/Projecto">Em execucao</a></li>
	  				    {/*<li><a href="/Projecto">Concluido</a></li>*/}
                                        </ul>
                                    </div>
                                </li>

                                
                                <li class="uk-active">
                                    <a href="/Evento">Eventos <span></span></a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li><a href="/Evento">Webinar</a></li>
	  				    {/* <li><a href="/webinars">Palestras</a></li>*/}
				       	    {/*<li><a href="/Evento">Jornadas Cientificas</a></li>*/}
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
                </div>

            </div>
            <div  className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@m">
                <li class="uk-active">
                    <a href="/">HOME <span></span></a>
                    {/* <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">...</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">IEEE</a></li>
                        </ul>
                    </div> */}
                </li>

                {/* <li>
                    <a href="#">LegislaÃ§Ãµes <span uk-icon="chevron-down"></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/legislacao">Decretos</a></li>
                            <li><a href="/legislacao">Diplomas</a></li>
                            <li><a href="/legislacao">Lei</a></li>
                        </ul>
                    </div>
                </li> */}

                <li class="uk-active">
                    <a href="/documents">Documentos <span uk-icon=""></span></a>
                    {/*<div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
	  		    <li><a href="/documents">Legislações</a></li>
                            <li><a href="/documents">Ordens de Servições</a></li>
	  		    <li><a href="/documents">Processos criticos</a></li>
                            <li><a href="/documents">Diagramas de Rede</a></li>
	  		    <li><a href="/documents">Normas de Padronização</a></li>
                        </ul>
                    </div>*/}
                </li>

                <li class="uk-active">
                    <a href="/pesquisa/ordens">Ordens de Servico <span uk-icon="chevron-down"></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/pesquisa/ordens">2022</a></li>
	  		    {/*<li><a href="/OrdenSs">2021</a></li>*/}
                        </ul>
                    </div>
                </li>

                <li class="uk-active">
                    <a href="/Projecto">Projectos <span uk-icon="chevron-down"></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/Projecto">Em execucao</a></li>
	 		    {/*<li><a href="/Projecto">Concluido</a></li>*/}
                        </ul>
                    </div>
                </li>

                
                <li class="uk-active">
                    <a href="/Evento">Eventos <span></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/Evento">Webinar</a></li>
	 		    {/*<li><a href="/webinars">Palestras</a></li>*/}
	  		    {/* <li><a href="/Evento">Jornadas Cientificas</a></li>*/}
                        </ul>
                    </div>
                </li>
                
                <li class="uk-active">
                    <a href="/Contacto">Contacto <span></span></a>
                    {/* <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/ordens">2022</a></li>
                            <li><a href="/ordens">2021</a></li>
                        </ul>
                    </div> */}
                </li>

                <li class=""><a href="http://museu.edm.co.mz/">Museu</a></li>
                {/* <li>
                    <a href="#">Normas</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">ISO</a></li>
                            <li><a href="#">IEEE</a></li>
                        </ul>
                    </div>
                </li> */}
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

