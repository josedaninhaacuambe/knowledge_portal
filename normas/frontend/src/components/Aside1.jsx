import MenuParent from "./MenuParent";
const Legislacao = [
  { index: "Decreto", url: "/normas" },
  { index: "Diplomas", url: "/normas/create" },
];

const Ordem = [
  { index: "2022", url: "/webinars" },
  { index: "2021", url: "/webinars/create" },
];

const Processos = [
  { index: "DTC", url: "/processos" },
  { index: "DTN", url: "/processos/create" },
];

const Eventos = [
  { index: "Webinares", url: "/accounts" },
  { index: "Jornadas cientificas", url: "/accounts/create" },
];

// const Ordem_Servico = [
//   { index: "ORDENS", url: "/accounts" },
//   { index: "NOVA ORDEM", url: "/accounts/create" },
// ];

// const sectores = [
//   { index: "SECTORES", url: "/sectores" },
//   { index: "NOVO SECTOR", url: "/sectores/create" },
// ];

// const account = [
//   { index: "USUARIOS", url: "/accounts" },
//   { index: "NOVO USUARIO", url: "/accounts/create" },
// ];

function Aside1() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <aside className="uk-light uk-visible@m" id="left-col">
      <div className="left-logo uk-flex uk-flex-middle">
        <img className="custom-logo" src="/images/logo.PNG" alt="" />
      </div>
      <div className="left-content-box content-box-dark">
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
            <a className="uk-text-white" href="/index">
              Visão Geral
            </a>
          </li>

          <MenuParent
            mainTitle="Legislação "
            icon="icon: thumbnails"
            childTitle={Legislacao}
          ></MenuParent>
          <MenuParent
            mainTitle="Ordens de Serviços"
            icon="icon: album"
            childTitle={Ordem}
          ></MenuParent>
          <MenuParent
            mainTitle="Processos de negocio"
            icon="icon: file-text"
            childTitle={Processos}
          ></MenuParent>
          <MenuParent
            mainTitle="Eventos"
            icon="icon: file-text"
            childTitle={Eventos}
          ></MenuParent>

          {/* <MenuParent
            mainTitle="PROCESSO"
            icon="icon: file-text"
            childTitle={processos}
          ></MenuParent>

          <MenuParent
            mainTitle="ORDEMS"
            icon="icon: file-text"
            childTitle={ordem_Servico}
          ></MenuParent>

          <MenuParent
            mainTitle="DIAGRAMAS"
            icon="icon: file-text"
            childTitle={diagrama}
          ></MenuParent> */}
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
export default Aside1;
