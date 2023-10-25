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
      {/* <a className="uk-logo" href="">
            <img className="custom-logo" src="/images/logo.PNG" alt="" />
        </a> */}
        <img
          className="uk-border-rounded uk-margin-left custom-logo1"  
          src="/images/logo_45A_0.PNG" 
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
            <ul className="uk-navbar-nav">
            <li class="uk-active"><a href="http://museu.edm.co.mz/">Museu</a></li>
            <li>
                <a href="#">Normas</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">ISO</a></li>
                        <li><a href="#">IEEE</a></li>
                    </ul>
                </div>
            </li>
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
