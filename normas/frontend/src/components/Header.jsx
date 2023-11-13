import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";

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
    <header className="fixed bg-white z-50 w-full shadow-md">
      {isLoading ? <Spinner /> : ""}
      <div className="uk-container uk-container-expand py-2 px-12">
        <nav className="flex flex-rows justify-between items-center">
          <div className=" flex justify-center ">
            <img className="w-56" src="/images/EDM.png" alt="" />
          </div>
          <div className="">
            <div className="flex items-center gap-4 ">
              <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute w-12 h-12 text-gray-400 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="font-medium ">
                <div> {user.first_name}</div>
                <div className="text-sm text-gray-500 ">
                  <NavLink className="!no-underline" to="/perfil">
                    {user
                      ? user.role === "admin"
                        ? "Administrador"
                        : user.role === "basic"
                        ? "Usuario Normal"
                        : user.role === "supervisor"
                        ? "Supervisor"
                        : "Desconhecido"
                      : "NA"}
                  </NavLink>
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
