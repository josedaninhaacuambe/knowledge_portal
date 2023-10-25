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
        <div className="uk-position-relative">
        {/* <div class="uk-cover-container">
            <video src="//www.youtube.com/embed/UmDD11uIZ4s?wmode=opaque" width={1800} height={1000}  autoplay loop muted playsinline uk-cover></video>
        </div> */}

        {/* <iframe src="//www.youtube.com/embed/UmDD11uIZ4s?wmode=opaque" width={1800} height={1000} autoplay loop muted playsinline uk-cover frameborder="0" allowfullscreen=""></iframe> */}

        {/* <iframe src="https://www.youtube.com/embed/8pPZLbEHuv4" width={1349} height={1000} autoplay loop muted playsinline uk-cover  allowfullscreen></iframe> */}
        {/* <iframe src="https://www.youtube.com/watch?v=8pPZLbEHuv4" width={1349} height={1000} name="iframe_a" autoplay loop muted playsinline uk-cover title="Iframe Example"></iframe> */}

        {/* <img src="https://i.pinimg.com/originals/28/12/45/2812456be6678762c8caa3dc90e0f89b.jpg" width={1800} height={1000} alt="" style={{opacity: 1}} /> */}
        {/* <img src="/images/ComponentTMP_0-image.jpg" width={1800} height={1000} alt="" style={{opacity: 1}} /> */}
        <img src="https://lh3.googleusercontent.com/pw/AL9nZEWmoiIcJ8PaBgVrFnZ-xp0TKG6wd67unhiaOTfJd63GsOwx00Y44XRbUQXyCE3AzGCUl5WAKpxI1B3Enband_bZC8A7AHcwToYZ0h91N8mBnBBaHTS2Htzk8C-71yz0Rxtfv-qBiOTMhz4mIMRBsV56=w1366-h768-no" width={1800} height={1000} alt="" style={{opacity: 1}} />
        {/* https://lh3.googleusercontent.com/pw/AL9nZEWmoiIcJ8PaBgVrFnZ-xp0TKG6wd67unhiaOTfJd63GsOwx00Y44XRbUQXyCE3AzGCUl5WAKpxI1B3Enband_bZC8A7AHcwToYZ0h91N8mBnBBaHTS2Htzk8C-71yz0Rxtfv-qBiOTMhz4mIMRBsV56=w1366-h768-no */}

        <br/> <br/>
        <div class="uk-padding-small">
            <div class=" uk-position-center-right uk-overlay uk-overlay-primary uk-card-hover uk-border-rounded uk-card uk-card-primary uk-card-body" style={{ borderRadius:12  }}>
                <h3 className="uk-text-bold uk-text-truncate" >Portal Corpororativo de conhecimento</h3>
                <p className="">Busque aqui o conhecimento para o crescimento da nossa organização</p>
                  <form class="uk-search  uk-search-default" >
                      <div class="uk-margin">
                        {/* <label class="uk-form-label" for="form-stacked-text"><h6 style={{marginBotton:-300}}>Busque a aqui o conteúdo de interesse</h6></label> */}
                          <span class="uk-search-icon-flip" uk-search-icon style={{color:"#fff"}}></span>
                            <input class="uk-search-input uk-form-width-medium" type="search" placeholder="Pesquise aqui..." style={{borderRadius:20, color:"#fff", border:"2px solid #fff"}}/>
                      </div>
                  </form>
            </div>
        </div>

      <div class="uk-section-primary uk-preserve-color">
        <div className="uk-position-top uk-overlay uk-padding-remove uk-margin-remove">
          <div uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light">
              <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
              <div class="uk-navbar-left">
              <div className="uk-navbar-item ">
                <a className="uk-logo" href="/">
                  <img className="custom-logo" src="https://lh3.googleusercontent.com/pw/AL9nZEUdEwsYLnmeANQ1zo9bREqSTCiMZHHQK3idkCIndyy4m94sEX_lbJRkCD4kIDQvO-6e8SsqfD7y3s2TxgBxNe45UK-vK0yStIPEu7BlHL-1WaFOHzjtUWqfu_ajx9VX2tTt5mOXQkcByF58_7o3KIz4=w207-h55-no?authuser=0" alt="" />
                  {/* https://lh3.googleusercontent.com/pw/AL9nZEUdEwsYLnmeANQ1zo9bREqSTCiMZHHQK3idkCIndyy4m94sEX_lbJRkCD4kIDQvO-6e8SsqfD7y3s2TxgBxNe45UK-vK0yStIPEu7BlHL-1WaFOHzjtUWqfu_ajx9VX2tTt5mOXQkcByF58_7o3KIz4=w207-h55-no?authuser=0 */}
                </a>
                <a class="uk-navbar-toggle uk-hidden@m" href="/Index">
                  <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                </a>
              </div>
                  {/* <ul class="uk-navbar-nav">
                      <li>
                        <img src="/images/logo123.png" alt="" />
                      </li>
                  </ul> */}
              </div>
              <div class="uk-navbar-right">

                <ul class="uk-navbar-nav">

                  <li class="uk-active"><a href="/">HOME<span uk-navbar-parent-icon></span></a></li>

                  <li className="">
                    <a href="/documents">Documentos <span uk-icon="chevron-down"></span></a>
                      {/* <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                              <li class="uk-active uk-nav-header"><a href="#">Ordens de serviços</a></li>
                              <li><a href="#">2022</a></li>
                              <li class="uk-nav-header">Legislações</li>
                              <li><a href="#">Decretos</a></li>
                              <li><a href="#">Diplomas</a></li>
                              <li><a href="#">Lei</a></li>
                              <li class="uk-nav-divider uk-nav-header">Processos criticos</li>
                              <li><a href="#">Diagramas de Rede</a></li>
                              <li><a href="#">Normas</a></li>
                          </ul>
                      </div> */}
                  </li>

                  <li className="">
                      <a href="/Evento">Eventos <span uk-navbar-parent-icon></span></a>
                      <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                              <li class="uk-active uk-nav-header"><a href="#">Inaugurações</a></li>
                              {/* <li><a href="#">Item</a></li> */}
                              <li class="uk-nav-header"><a href="/Evento">Webinar</a></li>
                              {/* <li><a href="#">Item</a></li>
                              <li><a href="#">Item</a></li> */}
                              <li class="uk-nav-divider uk-nav-header">Conferencias</li>
                              {/* <li><a href="#">Item</a></li> */}
                          </ul>
                      </div>
                  </li>

                  <li className="">
                      <a href="/Contacto">Contacto <span uk-navbar-parent-icon></span></a>
                      {/* <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                              <li class="uk-active"><a href="#">Active</a></li>
                              <li><a href="#">+258 XX XX XXX</a></li>
                              <li class="uk-nav-header">Header</li>
                              <li><a href="#">+258 XX XX XXX</a></li>
                              <li><a href="#">+258 XX XX XXX</a></li>
                              <li class="uk-nav-divider"></li>
                              <li><a href="#">+258 XX XX XXX</a></li>
                          </ul>
                      </div> */}
                  </li>
                  <li class=""><a href="http://museu.edm.co.mz/">Museu</a></li>
                  {/* <li><a href="#">Sobre <span uk-navbar-parent-icon></span></a></li> */}
                  <li className="uk-active"><a href="/accounts/login">Entrar <span uk-icon="sign-in"></span></a></li>
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
