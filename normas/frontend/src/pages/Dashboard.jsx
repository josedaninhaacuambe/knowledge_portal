import React from "react";
import Chart from "../components/dashboard/Charts";
import { RxInfoCircled, RxArchive } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../utils/utils";
import { useEffect } from "react";
import { Card } from "../components/dashboard/Card";

export default function Dashboard() {
  let mainSession = JSON.parse(localStorage.getItem("mainSession"));
  const [processos, setProcessos] = React.useState(false);
  const cardsContent = [
    {
      title: "Usuários",
      statistic: mainSession.users,
      icon: FiUsers,
      color: "bg-slate-900",
    },
    {
      title: "Sectores",
      statistic: mainSession.sectors,
      icon: RxArchive,
      color: "bg-blue-800",
    },
    {
      title: "Normas ISO",
      statistic: mainSession.document,
      icon: RxInfoCircled,
      color: "bg-green-500",
    },
    {
      title: "Especialistas",
      statistic: mainSession.document,
      icon: RxInfoCircled,
      color: "bg-gray-500",
    },
  ];

  useEffect(() => {
    const getProcessos = async () => {
      try {
        const response = await fetch(`${BASE_URL}processos/`);
        const data = await response.json();
        setProcessos(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProcessos();
  }, []);

  return (
    <div className="bg-white px-10 pt-20 ">
      <h3 className=" font-bold text-xl ">Dashboard</h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 mt-5">
        {/* Os novos cards */}
        {cardsContent.map((card, key) => {
          return (
            <Card statistic={card.statistic} title={card.title} key={key}>
              <div
                className={`absolute -top-5 left-5 flex justify-center items-center  w-20 h-20 rounded-lg ${card.color}`}
              >
                <card.icon className="scale-150 text-white" />
              </div>
            </Card>
          );
        })}
      </div>
      <div>
        <h3 className=" font-bold text-xl mt-10">Lista de processos</h3>
        <div>
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-text-uppercase">Nome</th>
              <th className="uk-text-left uk-text-uppercase">Descrição</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                ACÇÃO
              </th>
            </thead>
            <tbody>
              {processos &&
                processos.map((processo, key) => (
                  <tr key={key}>
                    <td>{processo.name}</td>
                    <td>{processo.type}</td>
                    <td>{processo.description}</td>
                    <td>
                      {
                        <p>
                          <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/processo"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <NavLink
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewPdf2"
                            state={processo}
                          >
                            <span uk-icon="icon: file-pdf; ratio: 1.2"></span>
                          </NavLink>
                        </p>
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
