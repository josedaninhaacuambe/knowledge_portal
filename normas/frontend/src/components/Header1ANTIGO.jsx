import { useState } from "react";
import Spinner from "./Spinner";
//import Teste from "./assets/images/logo_45A_0.PNG";

function Header1() {
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
    <header1 className="" id="">
      {isLoading ? <Spinner /> : ""}
      <div class="uk-section-primary uk-preserve-color">
       <div uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light">


          <div className="uk-container uk-container-expand uk-background-primary">
            <nav
              className="uk-navbar uk-light"
              data-uk-navbar="mode:click; duration: 250"
            >
              <div className="uk-navbar-left">
                <div className="uk-navbar-item ">
                  <a className="uk-logo" href="/">
                    {/* <img className="custom-logo" src="/images/logo123.png" alt="" /> */}
                    <img className="custom-logo" src="https://lh3.googleusercontent.com/pw/AL9nZEUdEwsYLnmeANQ1zo9bREqSTCiMZHHQK3idkCIndyy4m94sEX_lbJRkCD4kIDQvO-6e8SsqfD7y3s2TxgBxNe45UK-vK0yStIPEu7BlHL-1WaFOHzjtUWqfu_ajx9VX2tTt5mOXQkcByF58_7o3KIz4=w207-h55-no?authuser=0" alt="" />
                  </a>
                    <a class="uk-navbar-toggle uk-hidden@m" href="/">
                        <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                    </a>
                </div>
              </div>
              <div className="uk-navbar-right">

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
                    <a href="/documents">Documentos <span uk-icon="chevron-down"></span></a>
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
	  		    {/* <li><a href="/OrdenSs">2021</a></li>*/}
                        </ul>
                    </div>
                </li>

                <li class="uk-active">
                    <a href="/Projecto">Projectos <span uk-icon="chevron-down"></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/Projecto">Em execucao</a></li>
			    {/* <li><a href="/Projecto">Concluido</a></li>*/}
                        </ul>
                    </div>
                </li>

                
                <li class="uk-active">
                    <a href="/Evento">Eventos <span></span></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/Evento">Webinar</a></li>
			    {/*  <li><a href="/Evento">Jornadas Cientificas</a></li>*/}
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
      <div className="uk-section-default">
        <div
            className="uk-section offsetTop uk-light"
            style={{
                //color: "white",
                //background: "linear-gradient( #fa7f22, #858585cc), url(https://i.pinimg.com/originals/b3/e3/cc/b3e3cc044b85e80663b5c0d05f81e115.jpg)",
		backgroundImage: "url(images/ComponentTMP.jpg)",
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover"
                //backgroundRepeat: "no-repeat",
                //backgroundColor:"#fa7f22", 
                //backgroundImage: "url(images/EDM.jpg)",
                //background: "linear-gradient( #858585cc , #fa7f22cc), url(https://i.pinimg.com/originals/f7/c8/8c/f7c88c4da92ec40f09694a26ace487fa.jpg) no-repeat" 
            }}>
            <div className="uk-container">
            <h1 className="uk-text-center">Eventos</h1>
                <div className="uk-grid-match uk-child-width-1-1@m" uk-grid="">
                    <div>
                        <p className="uk-text-center">
                            Acompanhe aqui os principais eventos que marcaram a semana tal como, conferências, jornadas cientificas, etc...
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </header1>
  );
}

export default Header1;
