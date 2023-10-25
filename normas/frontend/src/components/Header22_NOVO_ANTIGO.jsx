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
    let checkedItems = ['location1', 'location2']
    // using template literals
    let url = `/api/search?checkedItems=${checkedItems.join(',')}`

    if(searchParams.get("tipo")){
        if(searchParams.get("tipo").toLowerCase()=="ordem" || searchParams.get("tipo").toLowerCase() == "ordens"){
            // navigate("/pesquisa/ordens");
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
        <div class="uk-position-relative uk-visible-toggle uk-light" autoplay loop tabindex="-1" uk-slider="autoplay: true" uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 6000; min-height: 250; max-height: 600">
            
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


                                                {/* <div>
                                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                                        <li class="uk-active">
                                                            <a href="/">HOME <span></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <ul class="uk-nav uk-navbar-dropdown-nav">
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
                                                    </ul>
                                                </div>

                                                    <li class="uk-active">
                                                        <a href="/Projecto">Projectos <span className="uk-margin-left" uk-icon="chevron-down"></span></a>
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
                                                        <a href="">Gestão de conhecimento<span className="uk-margin-remove-right" uk-icon="chevron-down"></span></a>
                                                        <div class="uk-navbar-dropdown">
                                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                <li><a href="/specialist">Base de Dados de Especialistas</a></li>
                                                                <li><a href="">Comunidades de Praticas</a></li>
                                                                <li><a href="">Boas praticas</a></li>
                                                                <li><a href="">Narrativas</a></li>
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
                                                    </li> */}

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


            <ul class="uk-slideshow-items">
                {/* <li className="">
                    <img src="images/ComponentTMP_0-image.jpg" alt="" id="background_home" className="background_home"/>  
                </li> */}
                {/* <li>
                   <img src="images/ImageBannerEDM11.jpg" alt="" className="background_home"/>
                </li> */}
                <li>
                   <img src="images/ImageBannerEDM15.jpg" alt="" className="" uk-cover/>
                </li>
                <li>
                   <img src="images/ImageBannerEDM14.png" alt="" className="" uk-cover/>
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

            <div className="uk-position-large uk-visible@m uk-margin uk-margin-remove-top uk-position-center-left uk-overlay">
                <div className="uk-grid-match" uk-grid="uk-grid" style={{marginTop:" -90px"}}>
                    <div> 
                        <h4 className="uk-text-bold uk-margin-bottom-remove uk-text-truncate" style={{ color:"#fff" }} > Seja bem vindo </h4>
                        <h3 className="uk-text-bolder uk-margin-remove-top " style={{ color:"#fa7f22"}}> 
	  			AO PORTAL DE CONHECIMENTO DA EDM
	  		</h3>
                    </div>
                </div>
            </div>


            <div className="uk-position-large uk-visible@m uk-position-bottom-left uk-margin-remove-top uk-margin-large-bottom uk-overlay">
                <div className="uk-child-width-1-2@s uk-grid-match" uk-grid="uk-grid">
                    <div>
                        <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded1" style={{border: "5px solid red"}}>
                            <p className="uk-text-bolder uk-h4">
                                <span uk-icon="icon:  info; ratio: 1.2 "></span> 
                            </p>
                            <h3 className="uk-text-large uk-text-bold" style={{ color:"#000" }}>Pensamento do dia</h3>
                            <p className="uk-margin-remove uk-text-bold" style={{ color:"#000" }}>“Nós somos o que fazemos repetidamente. Excelência, portanto, não é um ato, mas um hábito” <br /> – Aristóteles.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="uk-card uk-card-small  uk-card-hover uk-card-body uk-border-rounded1" style={{ border: "5px solid !important",  borderRadius: "10px" }}>  
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

            <div className="uk-position-small uk-hidden@m  uk-position-center-left uk-overlay">
                <div className="uk-child-width-1-1@s uk-grid-match" uk-grid="uk-grid">                    
                    <div><br /><br />
                        <h6 className="uk-text-bold uk-text-center uk-margin-bottom-remove uk-text-truncate" style={{ color:"#fff" }} > Seja bem vindo </h6>
                        <h3 className="uk-text-bold uk-text-center uk-margin uk-margin-remove-vertical " style={{ color:"#fa7f22"}}> REPOSITÓRIO <br />CONHECIMENTO</h3>
                         
                            <form class="uk-search uk-search-default">
                                <span class="uk-search-icon-flip" uk-search-icon></span>
                                <input width="100%" class="uk-search-input uk-text-secondary uk-border-rounded" style={{background: "rgb(0 0 0 / 60%)", borderRadius:"10px"}} type="search" aria-label="Pesquisar" name="tipo" placeholder="Pesquisar"/>
                                <button type="submit" className="uk-button uk-button-primary uk-align-center uk-margin-small" style={{borderRadius:"50px", color:"#fff"}}>pesquisar</button>
                            </form>
                    </div>
                </div>
            </div>

        </div>
    </header1>
  );
}

export default Header1;

