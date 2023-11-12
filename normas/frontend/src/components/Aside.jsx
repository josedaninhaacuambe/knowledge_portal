import { FiUsers, FiLogOut, FiSettings } from "react-icons/fi";
import { RxDashboard, RxArchive, RxInfoCircled } from "react-icons/rx";
import { VscPieChart, VscLibrary, VscLaw } from "react-icons/vsc";
import { GiProcessor } from "react-icons/gi";
import { BsBorderStyle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const normas = [
  { index: "NORMAS", url: "/normas" },
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

const diagrama = [
  { index: "DIAGRAMAS", url: "/accounts" },
  { index: "NOVO DIAGRAMA", url: "/accounts/create" },
];

const sectores = [
  { index: "SECTORES", url: "/sectores" },
  { index: "NOVO SECTOR", url: "/sectores/create" },
];

const account = [
  { index: "USUARIOS", url: "/accounts" },
  { index: "NOVO USUARIO", url: "/accounts/create" },
];

function Aside({ router }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const menuItems = [
    {
      title: "Dashboard",
      icon: RxDashboard,
      path: "/",
    },
    {
      title: "Usuarios",
      icon: FiUsers,
      path: "/accounts",
    },
    {
      title: "Sectores",
      icon: RxArchive,
      path: "/sectores",
    },
    {
      title: "Normas",
      icon: RxInfoCircled,
      path: "/normas",
    },
    {
      title: "Werbinars",
      icon: VscLibrary,
      path: "/webinars",
    },
    {
      title: "Processos",
      icon: GiProcessor,
      path: "/processos",
    },
    {
      title: "Legislacao",
      icon: VscLaw,
      path: "/legislacao",
    },
    {
      title: "Ordens",
      icon: BsBorderStyle,
      path: "/ordens",
    },
    {
      title: "Diagramas",
      icon: VscPieChart,
      path: "/diagramas",
    },
  ];

  const settingsMenu = [
    {
      title: "Perfil",
      icon: FiUsers,
      path: "/profile",
    },
    {
      title: "Configuracoes",
      icon: FiSettings,
      path: "/settings",
    },
    {
      title: "Sair",
      icon: FiLogOut,
      path: "/logout",
    },
  ];

  return (
    <aside className="bg-[#FDFDFD]  border-4 border-gray-100 fixed top-0 left-0 z-10 w-72 h-full min-h-screen  overflow-auto ">
      <div className="px-5 flex flex-col h-full py-5   ">
        <ul className="flex flex-col gap-2 pt-28">
          {menuItems.map((items, index) => (
            <li className=" " key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center !no-underline text-orange-500 gap-5 p-4 bg-gray-100 rounded-md "
                    : "flex items-center !no-underline text-black gap-5 p-4 hover:bg-gray-100 rounded-md "
                }
                to={items.path}
              >
                <items.icon />
                {items.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex-1"></div>
        <ul>
          {settingsMenu.map((items, index) => (
            <li className=" " key={index}>
              <NavLink
                className="flex items-center !no-underline text-black gap-5 p-4 hover:bg-gray-100 rounded-md "
                to={items.path}
              >
                <items.icon />
                {items.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
export default Aside;
