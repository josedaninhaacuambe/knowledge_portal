import { useEffect } from "react";
import { useState } from "react";
import MessageAlert from "../../components/Alert";
import Aside from "../../components/Aside";
import { BASE_URL } from "../../utils/utils";
import Header from "../../components/Header";
import "react-data-table-component-extensions/dist/index.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function ListChats() {
  const [chat, setChats] = useState(false);

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await fetch(`${BASE_URL}chat/`);
        const data = await response.json();
        setChats(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getChats();
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <div className="uk-padding">
          <h3 className="h3 mb-3 font-weight-normal uk-margin-medium-top  uk-text-bold">
            Base de Dados de Chats
          </h3>
          <MessageAlert  />
          
          <table
            className="uk-table uk-table-hover uk-table-striped"
            id="generic-table"
          >
            <thead>
              <th className="uk-text-left uk-text-uppercase">Nome do chat</th>
              <th className="uk-text-left uk-text-uppercase">Posicao</th>
              <th className="uk-text-left uk-text-uppercase">Conhecimento que detem</th>
              <th
                className="uk-text-left uk-table-shrink uk-text-uppercase"
                colSpan="2"
              >
                ::
              </th>
            </thead>
            <tbody>
              {chat &&
                chat.map((chats, key) => (
                  <tr key={key}>
                    <td>{chats.sender}</td>
                    <td>{chats.message}</td>
                    <td>{chats.createdAt}</td>
                    <td>

                    {   
                        <p>
                          <a
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            href="/chats"
                          >
                            <span uk-icon="icon: file-text; ratio: 1.2 "></span>
                          </a>

                          <Link
                            className="uk-button uk-text-capitalize uk-button-small uk-margin-small-right"
                            to="/viewPdf5"
                            state={chats}
                          >
                            <span uk-icon="icon: file-pdf; ratio: 1.2"></span>
                          </Link>
                        </p>
                      }
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

export default ListChats;
