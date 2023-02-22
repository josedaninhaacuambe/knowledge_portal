import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../../components/Alert";
import Aside from "../../components/Aside";
import { BASE_URL } from "../../utils/utils";
import Header from "../../components/Header";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function ListLegislacao() {
  const [legislation, setLegislacao] = useState(false);

  useEffect(() => {
    const getLegislacao = async () => {
      try {
        const response = await fetch(`${BASE_URL}legislacao/`);
        const data = await response.json();
        setLegislacao(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getLegislacao();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">
          <h3 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            Legislações
          </h3>
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-text-uppercase">Numero</th>
              <th className="uk-text-left uk-text-uppercase">Nome</th>
              <th className="uk-text-left uk-text-uppercase">Descrição</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                
              </th>
            </thead>
            <tbody>
              {legislation &&
                legislation.map((legislations, key) => (
                  <tr key={key}>
                    <td>{legislations.data}</td>
                    <td>{legislations.name}</td>
                    {/* <td>{legislations.type}</td> */}
                    <td>{legislations.description}</td>
                    <td>
                    {   
                        <p>
                          <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/legislacao"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <Link
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewPdf3"
                            state={legislations}
                          >
                            <span uk-icon="icon: file-pdf; ratio: 1.2"></span>
                          </Link>
                        </p>
                      }


                      {" "}
                      {/* <a
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        href="/sectores/edit/1"
                      >
                    {" "}
                    <span
                      href="#"
                      uk-icon="icon:  file-text; ratio: 1.2"
                      ></span>
                    </a> */}
                      {/* <Link
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        to="/sectores/edit"
                        state={legislations}
                      >
                        <span
                          href="#"
                          uk-icon="icon: file-text; ratio: 1.2"
                        ></span>
                      </Link>
                      <a
                        className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                        href="/sectores/show/1"
                      >
                        <span
                          href="#"
                          uk-icon="icon:  chevron-right; ratio: 1.2"
                        >
                          {" "}
                        </span>
                      </a> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      }
      aside={<Aside />}
    />
  );
}

export default ListLegislacao;
