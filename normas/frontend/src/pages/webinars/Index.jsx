import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../../components/Alert";
import Aside from "../../components/Aside";
import { BASE_URL } from "../../utils/utils";
import Header from "../../components/Header";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function ListWebinars() {
  const [webinars, setWebinars] = useState(false);

  useEffect(() => {
    const getWebinars = async () => {
      try {
        const response = await fetch(`${BASE_URL}webinars/`);
        const data = await response.json();
        setWebinars(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getWebinars();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">
          <h3 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            Webinares
          </h3>
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-text-uppercase">Tema</th>
              <th className="uk-text-left uk-text-uppercase">Resumo</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                ACÇÃO
              </th>
            </thead>
            <tbody>
              {webinars &&
                webinars.map((webinar, key) => (
                  <tr key={key}>
                    <td>{webinar.tema}</td>
                    <td>{webinar.data}</td>
                    <td>{webinar.resumo}</td>
                    <td>
                    {   
                        <p>
                          <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/webinar"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <Link
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewWebinar"
                            state={webinar}
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
                        state={webinar}
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

export default ListWebinars;
