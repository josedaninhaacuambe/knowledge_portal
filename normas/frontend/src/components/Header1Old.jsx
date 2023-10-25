import { useState } from "react";
import Spinner from "./Spinner";

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
        <img
          className="uk-margin-left custom-logo1" style={{width:200}} 
       	  src="https://lh3.googleusercontent.com/pw/AL9nZEXqTqxfIEqi_YTcYMVSqC_vlwtBarzvY3eOT148bT728jv-OYi0Gaxh-fxRyi3-7Os7Xk3s2H9kF5dOCleYPPtNbZATGnGOitADQwAzjQDy4NnzytUqs1dHO6tesA6r-DC9twDo7OBlwKEPpIA453FN=w457-h141-no?authuser=0"  
	 //  src={process.env.PUBLIC_URL + './assets/images/logo_45A_0.PNG'}
	 // src={require('/images/logo_45A_0.PNG')}
          alt=""
        />
      <div className="uk-container uk-container-expand uk-background-primary">
        <nav
          className="uk-navbar uk-light"
          data-uk-navbar="mode:click; duration: 250"
        >
          <div className="uk-navbar-left">
            <div className="uk-navbar-item uk-hidden@m">
              {/* <a className="uk-logo" href="/">
                <img className="custom-logo" src="/images/logo.PNG" alt="" />
              </a> */}
                 <a class="uk-navbar-toggle" href="#">
                    <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                </a>
            </div>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-visible@m">
            <li class="uk-active">
                <a href="#">Repositorio <span uk-icon="chevron-down"></span></a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">...</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">IEEE</a></li>
                    </ul>
                </div>
            </li>

            <li>
                <a href="#">Legislações <span uk-icon="chevron-down"></span></a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/legislacao">Decretos</a></li>
                        <li><a href="/legislacao">Diplomas</a></li>
                        <li><a href="/legislacao">Lei</a></li>
                    </ul>
                </div>
            </li>

            <li class="uk-active">
                <a href="#">Ordens de serviços <span uk-icon="chevron-down"></span></a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/ordens">2022</a></li>
                        <li><a href="/ordens">2021</a></li>
                    </ul>
                </div>
            </li>

            
            <li class="uk-active">
                <a href="#">Eventos <span uk-icon="chevron-down"></span></a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/webinars">Webinar</a></li>
                        <li><a href="/webinars">Palestras</a></li>
                        <li><a href="/webinars">Jornadas Cientificas</a></li>
                    </ul>
                </div>
            </li>
             
            <li class="uk-active">
                <a href="#">outros documentos <span uk-icon="chevron-down"></span></a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/processos">Processos criticos</a></li>
                        <li><a href="/processos">Diagramas de Rede</a></li>
                        <li><a href="/processos">Normas</a></li>
                    </ul>
                </div>
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
    </header1>
  );
}

export default Header1;
