import { useState } from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { BASE_URL } from "../../utils/utils";
import Layout from "../Layout";
import axios from "axios";
//import Spinner from "../../utils/Spinner";

async function CreateEspecialista(formData) {
  return await axios.post(
    `${BASE_URL}especialistas`,
    formData /* , { headers: { 'Content-Type': 'multipart/form-data' } } */
  );
}

function CreateEspecialistaLayout() {
  const [, setSector] = useState();
  const [name, setName] = useState();
  const [adress, setAdress] = useState();
  const [email, setEmail] = useState();
  const [video, setVideo] = useState();
  const [status, setStatus] = useState();
  const [inicio, setInicio] = useState();
  const [fim, setFim] = useState();
  const [description, setDescription] = useState();
  const [isoFile, setIsoFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSector(user.sector.id);
    const sector_id = user.sector.id;
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("adress", adress);
    formData.append("email", email);
    formData.append("video", video);
    formData.append("status", status);
    formData.append("inicio", inicio);
    formData.append("fim", fim);
    formData.append("description", description);
    formData.append("sector_id", sector_id);
    formData.append("file_name", isoFile);
    console.log(name);
    console.log("formData");

    try {
      const response = await CreateEspecialista(formData);
      setIsLoading(false);
      window.location.href = "/especialista";
      console.log(response);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      //Alert to be added when error handled
    }
  };

  return (
    <>
      {" "}
      {/* {isLoading ? <Spinner /> : ""} */}
      <div className="uk-background-default uk-padding">
        <div className="uk-padding-small">
          <h3 className="h3 mb-3 uk-text-bold uk-margin-small-top">
            Registo dos Especialistas
          </h3>
          <form
            className="uk-form-stacked uk-width-1-1@s uk-padding-remove-top uk-margin-large-top"
            method="POST"
            onSubmit={handleSubmit}
            encType="multipart/form"
          >
            <div className="uk-width-1-1@s uk-padding-remove uk-grid">

              <div className="uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="name">
                  Nome do Especialista
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Nome do Especialista"
                    name="name"
                    id="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin uk-width-1-2@s uk-margin-remove-top uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="adress">
                  Endereco do Especialista
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="adress"
                    name="adress"
                    id="adress"
                    type="text"
                    onChange={(e) => setAdress(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="ambito">
                  Email do especialista
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Email"
                    name="email"
                    id="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              

              <div className="uk-margin uk-width-1-2@s uk-margin-top uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="distrito">
                  Link da narrativa
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="link"
                    name="video"
                    id="video"
                    type="text"
                    onChange={(e) => setVideo(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="status">
                  PosiÃ§Ã£o do Especialista
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Exemplo:. Eng"
                    name="status"
                    id="status"
                    type="text"
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin uk-width-1-2@s uk-margin-top uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="inicio">
                  Contacto
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Contacto"
                    required
                    name="inicio"
                    id="inicio"
                    onChange={(e) => setInicio(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div>


              {/* <div className="uk-margin-top uk-width-1-4@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="fim">
                  Fim do financiamento
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    min="1900"
                    max="2100"
                    type="text"
                    step="1"
                    placeholder="1999"
                    required
                    name="fim"
                    id="fim"
                    onChange={(e) => setFim(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div> */}
              <div className="uk-margin uk-width-1-2@s uk-padding-remove uk-padding-remove-right uk-margin-top">
                <label className="uk-form-label" htmlFor="sector">
                  Sector {user.first_name}
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="Nome do Sector"
                    id="sector"
                    defaultValue={user.sector.name}
                    type="text"
                    readOnly
                  />
                  <input
                    className="uk-input"
                    placeholder="Sector ID"
                    name="sector_id"
                    id="sector_id"
                    defaultValue={user.sector.id}
                    onChange={(e) => setSector(e.target.value)}
                    type="text"
                    hidden
                  />
                </div>
              </div>
              <div className="uk-margin uk-margin-top">
                <span className="uk-text-middle uk-text-normal">
                  Selecione o ficheiro que deseja guardar
                </span>
                <div className="uk-form-custom">
                  <input
                    className="uk-input"
                    type="file"
                    required
                    id="file"
                    name="file_name"
                    accept="application/pdf"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      setIsoFile(file);
                    }}
                  />
                  <span className="uk-link uk-margin-small-right">
                    &nbsp;Seleccionar
                  </span>
                </div>
              </div>
              <div className="uk-width-1-1@s uk-padding-remove-left uk-border-rounded">
                <label className="uk-form-label" htmlFor="description">
                  DescriÃ§Ã£o
                </label>
                <div className="uk-form-controls">
                  <textarea
                    className="uk-textarea"
                    rows="3"
                    id="description"
                    required
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="uk-margin uk-width-1-1@s">
                <button
                  className="uk-button uk-button-secondary uk-align-right"
                  type="submit"
                >
                  Registar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function CreateEspecialistas() {
  return (
    <Layout
      header={<Header />}
      content={<CreateEspecialistaLayout />}
      aside={<Aside />}
    />
  );
}
