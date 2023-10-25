
import React from "react";
import MenuParent from "./MenuParent";
const normas = [
  { index: "NORMAS", url: "/documents" },
  { index: "NOVA NORMA", url: "/normas/create" },
];

const webinars = [
  { index: "WEBINAR", url: "/webinars" },
  { index: "NOVO WEBINAR", url: "/webinars/create" },
];


const Legislacao = [
  { index: "LEGISLACAO", url: "/legislacao" },
  { index: "NOVA LEGISLACAO", url: "/legislacao/create" },
];

const Ordem = [
  { index: "ORDENS", url: "/ordens" },
  { index: "NOVA ORDEN", url: "/ordens/create" },
];

const processos = [
  { index: "PROCESSOS", url: "/processos" },
  { index: "NOVO PROCESSO", url: "/processos/create" },
];

const Projecto = [
  { index: "PROJECTOS", url: "/projectos" },
  { index: "ADICIONAR PROJECTO", url: "/projectos/create" },
];

const diagrama = [
  { index: "DIAGRAMAS", url: "/accounts" },
  { index: "NOVO DIAGRAMA", url: "/accounts/create" },
];

const especialista = [
  { index: "ESPECIALISTA", url: "/especialistas" },
  { index: "ADICIONAR ESPECIALISTA", url: "/especialistas/create" },
];

const livros = [
  { index: "LIVROS", url: "/displaybooks" },
  { index: "ADICIONAR LIVRO", url: "/books/create" },
];

const training = [
  { index: "TREINAMENTO", url: "/training" },
  { index: "ADICIONAR TREINAMENTO", url: "/training/create" },
];

const sectores = [
  { index: "SECTORES", url: "/sectores" },
  { index: "NOVO SECTOR", url: "/sectores/create" },
];

const account = [
  { index: "USUARIOS", url: "/accounts" },
  { index: "NOVO USUARIO", url: "/accounts/create" },
];

function Aside() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <aside className="uk-light uk-visible@m" id="left-col">
      <div className="left-logo uk-flex uk-flex-middle">
        <img className="custom-logo" src="https://lh3.googleusercontent.com/pw/AL9nZEU-Pml7gon5-l4L3qbgD6BuJXv3SvGXDf_KBNDboOPtH3pejk1VKW5eG9zp0hoe_cLAhNz9NR-rLm6FvepSRrcCtC46QcNlp9s1MBtNheagdlJm3V0tfs_fClrBFB1rgrUFVq_AVnbq33kX8vaIElwt=w457-h438-no?authuser=0" alt="" />
      </div>
      <div className="left-content-box content-box-dark">
        <img
          className="uk-border-rounded profile-img"
          src="https://lh3.googleusercontent.com/pw/AL9nZEU-Pml7gon5-l4L3qbgD6BuJXv3SvGXDf_KBNDboOPtH3pejk1VKW5eG9zp0hoe_cLAhNz9NR-rLm6FvepSRrcCtC46QcNlp9s1MBtNheagdlJm3V0tfs_fClrBFB1rgrUFVq_AVnbq33kX8vaIElwt=w457-h438-no?authuser=0 "
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
          {/* user dropdown */}
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
      </div>

      <div className="left-nav-wrap">
        <ul className="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav="">
          <li className="uk-nav-header">
            <a className="uk-text-white" href="/">
              Pagina Inicial
            </a>
          </li>

          <MenuParent
            mainTitle="USUARIOS"
            icon="icon: thumbnails"
            childTitle={account}
          ></MenuParent>
          <MenuParent
            mainTitle="SECTORES"
            icon="icon: album"
            childTitle={sectores}
          ></MenuParent>
          <MenuParent
            mainTitle="NORMAS"
            icon="icon: file-text"
            childTitle={normas}
          ></MenuParent>
          <MenuParent
            mainTitle="WEBINAR"
            icon="icon: file-text"
            childTitle={webinars}
          ></MenuParent>

          <MenuParent
            mainTitle="PROCESSO"
            icon="icon: file-text"
            childTitle={processos}
          ></MenuParent>

          <MenuParent
            mainTitle="LEGISLACAO"
            icon="icon: file-text"
            childTitle={Legislacao}
          ></MenuParent>

          <MenuParent
            mainTitle="ORDEMS"
            icon="icon: file-text"
            childTitle={Ordem}
          ></MenuParent>

	  <MenuParent
            mainTitle="PROJECTOS"
            icon="icon: file-text"
            childTitle={Projecto}
          ></MenuParent>

	  <MenuParent
            mainTitle="ESPECIALISTA"
            icon="icon: file-text"
            childTitle={especialista}
          ></MenuParent>

          <MenuParent
            mainTitle="LIVROS"
            icon="icon: file-text"
            childTitle={livros}
          ></MenuParent>

          <MenuParent
            mainTitle="TREINAMENTO"
            icon="icon: file-text"
            childTitle={training}
          ></MenuParent>

          <MenuParent
            mainTitle="DIAGRAMAS"
            icon="icon: file-text"
            childTitle={diagrama}
          ></MenuParent>
        </ul>
        <div className="left-content-box uk-margin-top">
          <h5>Acessos Diarios</h5>
          <div>
            <span className="uk-text-small">
              Tráfego <small>(+20)</small>
            </span>
            <progress className="uk-progress" value="20" max="100"></progress>
          </div>
        </div>
      </div>
      <div className="bar-bottom">
        <ul
          className="uk-subnav uk-flex uk-flex-center uk-child-width-1-5"
          data-uk-grid=""
        >
          <li>
            <a
              className="uk-icon-link"
              href="/"
              data-uk-icon="icon: home"
              title="Home"
              data-uk-tooltip=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              className="uk-icon-link"
              href="/"
              data-uk-icon="icon: settings"
              title="Settings"
              data-uk-tooltip=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              className="uk-icon-link"
              href="/"
              data-uk-icon="icon: social"
              title="Social"
              data-uk-tooltip=""
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              className="uk-icon-link"
              href="/account/logout"
              data-uk-tooltip="Sign out"
              data-uk-icon="icon: sign-out"
            >
              &nbsp;
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default Aside;
