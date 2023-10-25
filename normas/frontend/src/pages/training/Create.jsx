import { useState } from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { BASE_URL } from "../../utils/utils";
import Layout from "../Layout";
import axios from "axios";
import Spinner from "../../utils/Spinner";

async function createNorma(formData) {
  return await axios.post(
    `${BASE_URL}training`,
    formData  , { headers: { 'Content-Type': 'multipart/form-data' } } 
  );
}

function CreateDocumentLayout() {
  const [sector, setSector] = useState();
  const [name, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [endereco, setEndereco] = useState();
  //const [caminho, setCaminho] = useState();
  const [published, setPublished] =useState();
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
    formData.append("email", email);
    formData.append("telefone", telefone);
    formData.append("endereco", endereco);
    //formData.append("caminho", caminho);
    formData.append("published", published);
    formData.append("sector_id", sector_id);
    //formData.append("file_name", isoFile);

    // isoFile.forEach((isoFile) => {
    //   formData.append('file_name', isoFile);
    // });
    if (Array.isArray(isoFile)) {
      isoFile.forEach((file) => {
        formData.append('file_name', file);
      });
    }

    console.log(name);
    console.log("formData");

    try {
      const response = await createNorma(formData);
      setIsLoading(false);
      window.location.href = "/trainings";
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
      {isLoading ? <Spinner /> : ""}
      <div className="uk-background-default uk-padding">
        <div className="uk-padding-small">
          <h3 className="h3 mb-3 uk-text-bold uk-margin-small-top">
            Cadastro de treinamentos
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
                  Nome
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="name"
                    name="name"
                    id="name"
                    type="text"
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="uk-margin-remove uk-width-1-4@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="email">
                  Email
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="email"
                    name="email"
                    id="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin-remove uk-width-1-4@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="telefone">
                  Telefone
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="telefone"
                    name="telefone"
                    id="telefone"
                    type="text"
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin-remove uk-width-1-4@s  uk-padding-remove-right">
                <label className="uk-form-label" htmlFor="endereco">
                  Endereco
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    placeholder="endereco"
                    name="endereco"
                    id="endereco"
                    type="text"
                    onChange={(e) => setEndereco(e.target.value)}
                    required
                  />
                </div>
              </div>


              <div className="uk-margin-bottom uk-width-1-4@s">
                <label className="uk-form-label" htmlFor="published">
                  Ano do treinamento
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    min="1900"
                    max="2100"
                    type="number"
                    step="1"
                    placeholder="1999"
                    required
                    name="published"
                    id="published"
                    onChange={(e) => setPublished(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div>
              {/* <div className="uk-margin-bottom uk-padding-remove-left uk-width-1-4@s">
                <label className="uk-form-label" htmlFor="category">
                  Categoria
                </label>
                <select
                  className="uk-select uk-margin-small-top"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Por favor seleccione...</option>
                  {categorias.map(function (value, key) {
                    return (
                      <option key={key} index={value.value} value={value.key}>
                        {value.value}
                      </option>
                    );
                  })}
                </select>
              </div> */}
              <div className="uk-margin-remove uk-padding-remove-left uk-padding-remove-right uk-width-1-4@s">
                <label className="uk-form-label" htmlFor="sector">
                  Sector {user.first_name}
                </label>
                <div className="uk-form-controls  uk-margin-small-top">
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
              <div className="uk-margin">
                <span className="uk-text-middle uk-text-normal">
                  Selecione os ficheiros que deseja guardar
                </span>
                <div className="uk-form-custom">
                  <input
                    className="uk-input"
                    type="file"
                    required
                    id="files"
                    name="file_name"
                    accept="application/pdf"
                    multiple 
                    onChange={(event) => {
                      const files = event.target.files[0];
                      setIsoFile(files);
                    }}
                  />
                  <span className="uk-link uk-margin-small-right">
                    &nbsp;Seleccionar
                  </span>
                </div>
              </div>
              {/* <div className="uk-width-1-1@s uk-padding-remove-left uk-border-rounded">
                <label className="uk-form-label" htmlFor="description">
                  Designação
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
              </div> */}
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

export default function CreateDocument() {
  return (
    <Layout
      header={<Header />}
      content={<CreateDocumentLayout />}
      aside={<Aside />}
    />
  );
}
