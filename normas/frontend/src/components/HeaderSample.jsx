import React, { useState } from "react";
//import { useState } from "react";
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
                        <a className="uk-logo" href="/">
                            <img className="custom-logo" width={"100%"} src="https://lh3.googleusercontent.com/pw/AL9nZEUdEwsYLnmeANQ1zo9bREqSTCiMZHHQK3idkCIndyy4m94sEX_lbJRkCD4kIDQvO-6e8SsqfD7y3s2TxgBxNe45UK-vK0yStIPEu7BlHL-1WaFOHzjtUWqfu_ajx9VX2tTt5mOXQkcByF58_7o3KIz4=w207-h55-no?authuser=0" alt="" />
                        </a>
                    </div>
                </div>

                <div  className="uk-navbar-right">
		   <ul className="uk-navbar-nav">
                        <li class="uk-active uk-text-capitalize">
                            <a className="uk-text-capitalize" href="/"><span uk-icon="home"></span>Home</a>
                        </li>
                        <li class="uk-active uk-text-capitalize">
                            <a className="uk-text-capitalize" href="">Repositório<span uk-icon="chevron-down"></span></a>
                            <div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top">
                                <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
                                    <li class="uk-active uk-text-bolder"><a href="/aboutRepository">Sobre Repositório</a></li>
                                        <li class="uk-active"><a href="/legislation">Legislações</a></li>
                                        <li class="uk-active"><a href="/serviceorders">Ordens <o class="uk-text-lowercase">de</o> serviço</a></li>
                                        <li class="uk-active"><a href="/normas">Normas <o class="uk-text-lowercase">de</o> Padronização</a></li>
					<li class="uk-active"><a href="/books">Publicações</a></li>

                                    <li class="uk-active uk-text-bolder"><a href="#">Projectos</a></li>
                                        <li class="uk-active"><a href="/projecto?status=planificado">Planificados</a></li>
                                        <li class="uk-active"><a href="/projecto?status=emcurso">Em curso</a></li>
                                        <li class="uk-active"><a href="/projecto?status=concluido">Concluídos</a></li>
                                        <li class="uk-active"><a href="/projecto?status=licoes">Lições apreendidas</a></li>
                                        <li class="uk-active"><a href="projectfile">Documentos <o class="uk-text-lowercase">dos</o> Projectos</a></li>
                                </ul>
                            </div>
                        </li>
	  			    <li class="uk-active uk-text-capitalize">
                                        <a className="uk-text-capitalize" href="">Gestão <o class="uk-text-lowercase">do</o> conhecimento<span uk-icon="chevron-down"></span></a>
                                        <div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top uk-width-auto uk-margin-large-bottom uk-padding-large-bottom uk-padding-right uk-margin-medium uk-margin-large-right">
                                            <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
						<li class="uk-active uk-text-capitalize">
                                                    <a className="uk-text-capitalize uk-active" href="">Sobre Gestão <o class="uk-text-lowercase">do</o> conhecimento<span uk-icon="chevron-down"></span></a>
                                                    <div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top">
                                                        <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
                                                            <li class="uk-active"><a href="/about">Sobre</a></li>
                                                            <li class="uk-active"><a href="/purpose">Objectivos Estratégicos</a></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li class="uk-active"><a href="/PageNotFound">Base <o class="uk-text-lowercase">de</o> Dados <o class="uk-text-lowercase">de</o> Especialistas</a></li>
                                                    <li class="uk-active"><a href="/PageNotFound">Comunidades de Praticas</a></li>
                                                    <li class="uk-active"><a href="/hability">Boas praticas</a></li>
                                                    <li class="uk-active"><a href="/PageNotFound">Narrativas</a></li>
                                                    
						    <li class="uk-active uk-text-capitalize">
                                                        <a className="uk-text-capitalize uk-active" href="">Gestão <o class="uk-text-lowercase">dos</o> arquivos<span uk-icon="chevron-down"></span></a>
                                                        <div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top">
                                                            <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
                                                               <li class="uk-active"><a href="/ClassificationPlan">Plano de classificação & Tabela de Temporalidade</a></li>
                                                                {/*<li><a href="/ClassificationPlan">Plano de classificação</a></li>
                                                                <li class="uk-active"><a href="/TemporalityTable">Tabela de temporalidade</a></li>*/}
                                                            </ul>
                                                        </div>
                                                    </li>
						   
						    {/*<li class="uk-active uk-text-capitalize">
                                                        <a className="uk-text-capitalize uk-active" href="">Tabela de temporalidade<span uk-icon="chevron-down"></span></a>
                                                        <div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top">
                                                            <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
                                                                <li><a href="/TemporalityTable"> Actividades meio</a></li>
                                                                <li><a href="/TemporalityTable"> Actividades fins</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>*/}
						    {/*<li class="uk-active uk-text-bolder"><a href="/Evento">Evento</a></li>*/}                                            </ul>
                                        </div>
                                    </li>
                                    <li class="uk-active uk-text-capitalize"> <a class="uk-text-capitalize" href="/Evento">Evento</a> </li>
                                    <li class="uk-active uk-text-capitalize"> <a class="uk-text-capitalize" href="http://museu.edm.co.mz/">Museu Virtual</a></li>

                        {/*<li>
                            <div class="uk-navbar-item">
                                <form class="uk-search uk-search-default">
                                    <input class="p-inputtext p-component uk-margin-small uk-form-width-small" width="100%" type="search" name="tipo" placeholder="Pesquisar" aria-label="Input" style={{ paddingTop: "10px", paddingBottom: "10px" }}/>
                                    <button type="submit" class="uk-button uk-padding-small-horizontal uk-button-default" style={{ marginBottom: "5px", paddingRight: "18px", paddingLeft: "18px", paddingTop: "2px !important", paddingBottom: "2px", marginLeft: "3px" }}><span uk-icon="search"></span></button>
                                </form>
                            </div>
                        </li>*/}                                

                        {/* <li class="uk-active">
                            <a href="/Projecto">Projectos <span uk-icon="chevron-down"></span></a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="">Planificados</a></li>
                                    <li><a href="/Projecto">Em curso</a></li>
                                    <li><a href="">Concluídos</a></li>
                                    <li><a href="">Lições apreendidas</a></li>
                                </ul>
                            </div>
                        </li> */}

                        {/* <li class="uk-active">
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
                        </li> */}

                        
                        {/*<li class="uk-active">
                            <a className="uk-text-capitalize" href="/Contacto">Contacto <span></span></a>
                        </li>

                        <li class=""><a className="uk-text-capitalize" href="http://museu.edm.co.mz/">Museu</a></li>*/}
                        <li>
                            <a
                            //   onClick={logOut}
                            className="uk-text-white uk-text-capitalize"
                            href="/accounts/login"
                            title="Acessar o portal"
                            data-uk-tooltip=""
                            >
                                Entrar em <span uk-icon="sign-in"></span>
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
                                            <li class="uk-active"><a href="/legislation">Legislações</a></li>
                                            <li class="uk-active"><a href="/serviceorders">Ordens de serviço</a></li>
                                            <li class="uk-active"><a href="/normas">Normas de Padronização</a></li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-active"><a href="#">Gestao de conhecimento</a></li>
                                            <li class="uk-active"><a href="/PageNotFound">Base de Dados de Especialistas</a></li>
                                            <li class="uk-active"><a href="/PageNotFound">Comunidades de Praticas</a></li>
                                            <li class="uk-active"><a href="/hability">Boas praticas</a></li>
                                            <li class="uk-active"><a href="/PageNotFound">Narrativas</a></li>
                                            <li class="uk-active"><a href="">Arquivos</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-active"><a href="/Projecto">Projectos</a></li>
                                            <li class="uk-active"><a href="/Projecto">Planificados</a></li>
                                            <li class="uk-active"><a href="/Projecto">Em curso</a></li>
                                            <li class="uk-active"><a href="/Projecto">Concluídos</a></li>
                                            <li class="uk-active"><a href="/Projecto">Lições apreendidas</a></li>
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
    </header1>
  );
}

export default Header1;
