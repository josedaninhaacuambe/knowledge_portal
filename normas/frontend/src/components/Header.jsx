import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const userStorage = JSON.parse(localStorage.getItem("user"));
    setUser(userStorage);
    setIsLoading(false);
  }, []);

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
    <header className="fixed  w-full">
      {/* <div className="left-content-box content-box-dark">
        <img
          className="uk-border-rounded profile-img"
          src="/images/logo.PNG"
          alt=""
        />
        <h4 className="uk-text-center uk-margin-remove-vertical text-light">
          {user.first_name}
        </h4>
        <div className="uk-position-relative uk-text-center uk-display-block">
          <a
            className="uk-text-small uk-text-muted uk-display-block uk-text-center"
            href="/perfil"
            data-uk-icon="icon: triangle-down; ratio: 0.7"
          >
            {user
              ? user.role === "admin"
                ? "Administrador"
                : user.role === "basic"
                ? "Usuario Normal"
                : user.role === "supervisor"
                ? "Supervisor"
                : "Desconhecido"
              : "NA"}
          </a>

          <div
            className="uk-dropdown user-drop"
            data-uk-dropdown="mode: click; pos: bottom-center; animation: uk-animation-slide-bottom-small; duration: 150"
          >
            <ul className="uk-nav uk-dropdown-nav uk-text-left">
              <li>
                <a href="/perfil">
                  <span data-uk-icon="icon: image"></span> Your Data
                </a>
              </li>
              <li className="uk-nav-divider"></li>
              <li>
                <a href="/account/logout">
                  <span data-uk-icon="icon: sign-out"></span> Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {isLoading ? <Spinner /> : ""}
      <div className="uk-container uk-container-expand uk-background-primary py-5 ">
        <nav
          className="uk-navbar uk-light"
          data-uk-navbar="mode:click; duration: 250"
        >
          <div className="uk-navbar-right">
            <div className="flex items-center gap-4 ">
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014dsdfd
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
