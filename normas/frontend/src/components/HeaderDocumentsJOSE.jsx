import React, { useState } from "react";
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
		
		<nav className="uk-navbar uk-light uk-visible@m uk-navbar-transparent" data-uk-navbar="mode:click; duration: 250" >
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item ">
                        <a className="uk-logo" href="">
                            <img className="custom-logo" width={"100%"} src="https://lh3.googleusercontent.com/pw/AL9nZEUdEwsYLnmeANQ1zo9bREqSTCiMZHHQK3idkCIndyy4m94sEX_lbJRkCD4kIDQvO-6e8SsqfD7y3s2TxgBxNe45UK-vK0yStIPEu7BlHL-1WaFOHzjtUWqfu_ajx9VX2tTt5mOXQkcByF58_7o3KIz4=w207-h55-no?authuser=0" alt="" />
                        </a>
                    </div>
                </div>

                <div  className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li class="uk-active">
                            <a href="/">HOME <span></span></a>
                        </li>
                        <li class="uk-active">
                            <a href="/documents">Documentos <span uk-icon="chevron-down"></span></a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="/legislation">Legislações</a></li>
                                    <li><a href="/pesquisa/ordens">Ordens de Servições</a></li>
                                    <li><a href="/Normas">Normas de Padronização</a></li>
                                </ul>
                            </div>
                        </li>                                

                        <li class="uk-active">
                            <a href="/Projecto">Projectos <span uk-icon="chevron-down"></span></a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="/Projecto">Planificados</a></li>
                                    <li><a href="/Projecto">Em curso</a></li>
                                    <li><a href="/Projecto">Concluídos</a></li>
                                    <li><a href="/Projecto">Lições apreendidas</a></li>
                                </ul>
                            </div>
                        </li>

                        <li class="uk-active">
                            <a href="">Gestão de conhecimento<span uk-icon="chevron-down"></span></a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="/specialist">Base de Dados de Especialistas</a></li>
                                    <li><a href="">Comunidades de Praticas</a></li>
                                    <li><a href="">Boas praticas</a></li>
                                    <li><a href="/specialist">Narrativas</a></li>
                                    <li><a href="">Arquivos</a></li>
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


              <nav class="uk-navbar-container uk-hidden@m" uk-navbar="dropbar: true; target: !.uk-navbar; align: center;">
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item ">
                        <a className="uk-logo" href="/">
                            <img className="custom-logo2" src="/images/LogoTransparente.png" alt="" />
                        </a>
                    </div>
                </div>

                <div class="uk-navbar-right">

                    <ul class="uk-navbar-nav">
                        <li>
                            <span class="uk-padding-remove-horizontal uk-margin-small-left" uk-icon="icon: menu; ratio: 2"></span>
                            <div class="uk-navbar-dropdown uk-navbar-dropdown-width-3 uk-width-large" uk-dropdown>
                                <div class="uk-margin-remove-right uk-grid uk-child-width-1-3" uk-grid>
                                    <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-active"><a href="/">Home</a></li>
                                            <li class="uk-active"><a href="/documents">Documentos</a></li>
                                            <li><a href="/legislation">Legislações</a></li>
                                            <li><a href="/pesquisa/ordens">Ordens de Servições</a></li>
                                            <li><a href="/Normas">Normas de Padronização</a></li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-active"><a href="#">Gestao de conhecimento</a></li>
                                            <li><a href="/specialist">Base de Dados de Especialistas</a></li>
                                            <li><a href="">Comunidades de Praticas</a></li>
                                            <li><a href="">Boas praticas</a></li>
                                            <li><a href="">Narrativas</a></li>
                                            <li><a href="">Arquivos</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-active"><a href="#">Projectos</a></li>
                                            <li><a href="/Projecto">Planificados</a></li>
                                            <li><a href="/Projecto">Em curso</a></li>
                                            <li><a href="/Projecto">Concluídos</a></li>
                                            <li><a href="/Projecto">Lições apreendidas</a></li>
                                            <li class="uk-active"><a href="/Contacto">Contacto <span></span></a></li>
                                            <li class="uk-active"><a href="http://museu.edm.co.mz/">Museu</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </li>
                    </ul>

                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li>
                            <button
                            //   onClick={logOut}
                            className="uk-text-white uk-button uk-button-default"
                            style={{borderRadius:"20px"}}
                            href="/accounts/login"
                            title="Acessar o portal"
                            data-uk-tooltip=""
                            >
                            sign-in <span uk-icon="users"></span>
                            </button>
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
               // background: "linear-gradient( #fa7f22 , #858585cc), url(https://i.pinimg.com/originals/b3/e3/cc/b3e3cc044b85e80663b5c0d05f81e115.jpg)",
                //backgroundRepeat: "no-repeat",
                //backgroundColor:"#e35a26", 
                backgroundImage: "url(images/BannerDocuments.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
                //background: "linear-gradient( #858585cc , #fa7f22cc), url(https://i.pinimg.com/originals/f7/c8/8c/f7c88c4da92ec40f09694a26ace487fa.jpg) no-repeat" 
            }}>
            <div className="uk-container">
            <h1 className="uk-text-center">Arquivos</h1>
                <div className="uk-grid-match uk-child-width-1-1@m" uk-grid="">
                    <div>
                        <p className="uk-text-center">
                            Encontre aqui todos os aquivos e documentos de todas as unidades organicas da Empresa de forma rapida e segura.
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
