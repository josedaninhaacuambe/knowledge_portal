import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";

// import { InputText } from 'primereact/inputtext';
// import { InputNumber } from 'primereact/inputnumber';
// import { Button } from 'primereact/button';
// import { Checkbox } from 'primereact/checkbox';
// import { RadioButton } from 'primereact/radiobutton';


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
            window.location.href = "/ServiceOrders";
        } else if (searchParams.get("tipo").toLowerCase()=="document" || searchParams.get("tipo").toLowerCase() == "documents") {
            window.location.href = "Normas";

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
                                    <li class="uk-active uk-text-capitalize">
                                        <a className="uk-text-capitalize" href="/"><span uk-icon="home"></span>Home</a>
                                    </li>
                                    <li class="uk-active uk-text-capitalize">
                                        <a className="uk-text-capitalize" href="">Repositório<span uk-icon="chevron-down"></span></a>
                                        <div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top">
                                            <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
                                                <li class="uk-active uk-text-bolder"><a href="/aboutRepository">Sobre Repositório</a></li>
						    <li class="uk-active uk-text-capitalize">
                                                        <a className="uk-text-capitalize uk-active" href="/serviceorders">Ordens <o class="uk-text-lowercase">de</o> serviço</a>
                                                        {/*<div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top">
                                                            <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
                                                                <li className="uk-active"><a href="/serviceorders">2022</a></li>
                                                                {/*<li><a href="/ServiceOrders"> 2021 </a></li>
                                                                <li><a href=""> 2020 </a></li>
                                                                <li><a href=""> 2019 </a></li>
                                                                <li><a href=""> 2018 </a></li>
                                                                <li><a href=""> 2017 </a></li>
                                                                <li><a href=""> 2016 </a></li>
                                                             	<li><a href=""> 2015 </a></li>
                                                                <li><a href=""> 2014 </a></li>
                                                                <li><a href=""> 2013 </a></li>
                                                                <li><a href=""> 2012 </a></li>
                                                                <li><a href=""> 2011 </a></li>
                                                                <li><a href=""> 2010 </a></li>
                                                            </ul>
                                                        </div>*/}
                                                    </li>
                                                    <li class="uk-active"><a href="/legislation">Legislações</a></li>
                                                    {/*<li><a href="/pesquisa/ordens">Ordens de Servições</a></li>*/}
                                                    <li class="uk-active"><a class="uk-active" href="/normas">Normas de Padronização</a></li>
						    <li class="uk-active"><a class="uk-active" href="/books">Publicações</a></li>

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
                                        <a className="uk-text-capitalize" href="">Gestão <o class="uk-text-lowercase">do</o> conhecimento  <span uk-icon="chevron-down"></span></a>
                                        <div class="uk-navbar-dropdown uk-margin-remove-top uk-width-auto uk-margin-large-bottom uk-padding-large-bottom uk-padding-right uk-margin-medium uk-margin-large-right uk-padding-remove-top">
                                            <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
						<li class="uk-active uk-text-capitalize">
                                                    <a className="uk-text-capitalize uk-active" href="">Sobre Gestão <o class="uk-text-lowercase">do</o> conhecimento<span uk-icon="chevron-down"></span></a>
                                                    <div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top">
                                                        <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
                                                            <li><a class="uk-active" href="/about">Sobre</a></li>
                                                            <li><a class="uk-active" href="/purpose">Objectivos Estratégicos</a></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li class="uk-active"><a href="/PageNotFound">Base <o class="uk-text-lowercase">de</o> Dados <o class="uk-text-lowercase">de</o> Especialistas</a></li>
                                                    <li class="uk-active"><a href="/PageNotFound">Comunidades <o class="uk-text-lowercase">de</o> Praticas</a></li>
                                                    <li class="uk-active"><a href="/hability">Boas praticas</a></li>
                                                    {/*<li><a href="">Narrativas</a></li>*/}
                                                    
						    <li class="uk-active uk-text-capitalize">
                                                        <a className="uk-text-capitalize uk-active" href="">Gestão <o class="uk-text-lowercase">dos</o> arquivos<span uk-icon="chevron-down"></span></a>
                                                        <div class="uk-navbar-dropdown uk-margin-remove-top uk-padding-remove-top">
                                                            <ul class="uk-nav uk-navbar-dropdown-nav uk-margin-remove-top">
                                                                <li class="uk-active"><a href="/ClassificationPlan">Plano de classificação & Tabela de Temporalidade</a></li>
                                                                {/*<li><a href="/TemporalityTable">Tabela de temporalidade</a></li>*/}
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
						    {/*<li class="uk-active uk-text-bolder"><a href="/Evento">Evento</a></li>*/}
                                                    {/*<li class="uk-active uk-text-bolder"><a href="http://museu.edm.co.mz/">Museu Virtual</a></li>*/}

                                            </ul>
                                        </div>
                                    </li>
                                    <li class="uk-active uk-text-capitalize"> <a class="uk-text-capitalize" href="/Evento">Evento</a> </li>
                                    <li class="uk-active uk-text-capitalize"> <a class="uk-text-capitalize" href="http://museu.edm.co.mz/">Museu Virtual</a></li>	  
                                    <li>

                                        {/*<div class="uk-navbar-item">
                                            <form class="uk-search uk-search-default">
                                                <input class="p-inputtext p-component uk-margin-small uk-form-width-small" width="100%" type="search" name="tipo" placeholder="Pesquisar" aria-label="Input" style={{ paddingTop: "10px", paddingBottom: "10px" }}/>
                                                <button type="submit" class="uk-button p-button uk-padding-small-horizontal uk-button-default" style={{  marginBottom: "5px", paddingRight: "18px", paddingLeft: "18px", paddingTop: "2px !important", paddingBottom: "2px", marginLeft: "3px"}}><span uk-icon="search"></span></button>
                                            </form>
                                        </div>*/}


					{/*<div className="uk-navbar-item uk-text-bolder">
                                            <form class="uk-search uk-search-default uk-text-bolder" style={{ color:"#000" }}>
                                                <InputText className=" uk-form-width-small" type="search" name="tipo" placeholder="Pesquisar" width="100%"/>
                                                <Button icon="pi pi-search" type="submit" className="p-button-warning"/>
                                            </form>
                                        </div>*/}

                                    </li>                                

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
                                                <li><a href="/PageNotFound">Base de Dados de Especialistas</a></li>
                                                <li><a href="/PageNotFound">Comunidades de Praticas</a></li>
                                                <li><a href="">Boas praticas</a></li>
                                                <li><a href="/specialist">Narrativas</a></li>
                                                <li><a href="">Arquivos</a></li>
						<li><a href="">Arquivos</a></li>
						<li><a href="">Arquivos</a></li>
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
                                                        <li><a class="uk-active" href="/legislation">Legislações</a></li>
                                                        <li><a href="/serviceorders">Ordens de serviço</a></li>
                                                        <li><a class="uk-active" href="/Normas">Normas de Padronização</a></li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                                        <li class="uk-active"><a href="#">Gestao de conhecimento</a></li>
                                                        <li class="uk-active"><a href="/PageNotFound">Base de Dados de Especialistas</a></li>
                                                        <li class="uk-active"><a href="/PageNotFound">Comunidades de Praticas</a></li>
                                                        <li class="uk-active"><a href="/hability">Boas praticas</a></li>
                                                        <li class="uk-active"><a href="">Narrativas</a></li>
                                                        <li class="uk-active"><a href="">Arquivos</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                                        <li class="uk-active"><a href="#">Projectos</a></li>
                                                        <li class="uk-active"><a href="">Planificados</a></li>
                                                        <li class="uk-active"><a href="/Projecto">Em curso</a></li>
                                                        <li class="uk-active"><a href="">Concluídos</a></li>
                                                        <li class="uk-active"><a href="">Lições apreendidas</a></li>
                                                        <li class="uk-active"><a href="/Contacto">Contacto <span></span></a></li>
                                                        <li class="uk-active"><a href="http://museu.edm.co.mz/">Museu Virtual</a></li>
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
                                                                <li><a href="">Planificados</a></li>
                                                                <li><a href="/Projecto">Em curso</a></li>
                                                                <li><a href="">Concluídos</a></li>
                                                                <li><a href="">Lições apreendidas</a></li>
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
                <div className="uk-grid-match" uk-grid="uk-grid" style={{marginTop:"-0px"}}>
                    <div> 
                        <h3 className="uk-text-bold uk-margin-bottom-remove" style={{ color:"#000" }} >BEM VINDO AO</h3>
                        <div className="block text-2xl uk-text-bolder uk-padding-remove uk-margin-remove uk-padding-remove uk-margin-remove font-bold mb-1 uk-flex uk-flex-center" style={{ color:"rgb(132 77 35)"}}>REPOSITÓRIO DE GESTÃO DE CONHECIMENTO <br /></div>
                    </div>
                </div>
            </div>

 	   <div className="uk-position-large uk-hidden@m uk-margin uk-position-center-left uk-overlay">
                {/* <div className="uk-grid-match" uk-grid="uk-grid"> */}
                    <div> 
                        <h6 className="uk-text-bold text-3xl uk-margin-bottom-remove" style={{ color:"#000" }} >BEM VINDO AO</h6>
                        <div className="uk-text-bolder uk-padding-remove uk-flex uk-flex-center" style={{ color:"rgb(132 77 35)"}}> REPOSITÓRIO DE GESTÃO DE CONHECIMENTO<br /></div>
                    </div>
                {/* </div> */}
            </div>
            

            <div className="uk-position-large uk-visible@m uk-position-bottom-left uk-margin uk-margin-remove-top uk-margin-large-bottom uk-overlay">
                {/*<div className="uk-child-width-1-3@s uk-grid-match" uk-grid="uk-grid">
                    <div>
                        <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded" style={{border: "5px solid red"}}>
                            <h3 className="uk-text-large" style={{ color:"#000" }}>Documentos</h3>
                            <p className="uk-margin-remove uk-text-justify" style={{ color:"#000" }}>Os documentos constituem um dos maiores activos da EDM, preservar e tornar-los acessível é nossa principal tarefa</p>
                        </div>
                    </div>

                    <div>
                        <div className="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-border-rounded" style={{border: "5px solid red;", boxShadow: "0 14px 25px rgb(0 0 0 / 16%) !important"}}>
                            <h4 className="uk-text-large" style={{color:"#fff"}}>Pensamento do dia</h4>
                            <p className="uk-margin-remove uk-text-emphasis" style={{ color:"#000" }}>Nós somos o que fazemos repetidamente. Excelência, portanto, não é um ato, mas um hábito” <br /> – Aristóteles.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-border-rounded" style={{ border: "5px solid !important",  borderRadius: "10px" }}>
                            <h3 className="uk-text-large" style={{ color:"#000" }}>Gerir o conhecimento</h3>
                            <p className="uk-margin-remove uk-text-justify" style={{ color:"#000" }}>Gestão do conhecimento visa preservar a memória institucional e permite acesso fácil e aberto a todo tipo de conteúdo digital, incluindo texto e conjuntos de dados.</p>
                        </div>
                    </div>
                </div>*/}
		<div className="d-grid gap-2 uk-margin-large d-sm-flex justify-content-sm-center uk-position-large welcome-message uk-visible@m" style={{marginTop: "-150px"}}>
                    <button type="button" className="btn btn-primary uk-button uk-button-primary btn-lg px-4 gap-3" style={{border: "0px solid", marginRight: "10px", paddingTop: "5px", paddingBottom: "5px", color: "#fff"}}>
                    	<a className="uk-link-reset uk-text-bold" href="/about">Sobre Gestão de Conhecimento</a>
                    </button>

                    <button type="button" className="btn uk-button uk-button-default btn-outline-secondary btn-lg px-4" style={{border: "1px solid", color: "#fa7f22", paddingTop: "5px", paddingBottom: "5px"}}>
                    	<a className="uk-link-reset uk-text-bold" href="/purpose" >Leia Mais</a>
                    </button>
                </div>

		
                <div className="gap-2 uk-hidden@m uk-inline d-grid uk-margin-large d-sm-flex justify-content-sm-center uk-position-large welcome-message">
                    <button type="button" className="btn btn-primary uk-hidden@m uk-button uk-margin-small-right uk-button-primary uk-rounded" style={{borderRadius: "5px", color: "#fff"}}>
                        <a className="uk-link-reset" href="/about">Sobre GC</a>
                    </button>

                    <button type="button" className="uk-hidden@m uk-button uk-button-default" style={{border: "1px solid", color: "#000"}}>
                        <a className="uk-link-reset" href="/purpose" >Mais</a>
                    </button>
                </div>
            </div>

            {/*<div className="uk-position-small uk-hidden@m  uk-position-center-left uk-overlay">
                <div className="uk-child-width-1-1@s uk-grid-match" uk-grid="uk-grid">                    
                    <div><br /><br />
                        <h6 className="uk-text-bold uk-text-center uk-margin-bottom-remove uk-text-truncate" style={{ color:"#fff" }} > Seja bem vindo </h6>
                        <h3 className="uk-text-bold uk-text-center uk-margin uk-margin-remove-vertical " style={{ color:"#fa7f22"}}> REPOSITÓRIO <br />CONHECIMENTO</h3>
                         
                        <form class="uk-search uk-search-default">
                            <span class="uk-search-icon-flip" uk-search-icon></span>
                            <input width="100%" class="uk-search-input uk-text-secondary uk-border-rounded" style={{background: "rgb(0 0 0 / 14%)", borderRadius:"0px"}} type="search" aria-label="Pesquisar" name="tipo" placeholder="Pesquisar"/>
                            <button type="submit" className="uk-button uk-button-primary uk-align-center uk-margin-small" style={{borderRadius:"50px", color:"#fff"}}>pesquisar</button>
                        </form>
                    </div>
                </div>
            </div>*/}

        </div>
    </header1>
  );
}

export default Header1;

