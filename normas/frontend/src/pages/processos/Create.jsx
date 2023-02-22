import { useState } from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { BASE_URL } from "../../utils/utils";
import Button from "../../components/Button";
import Layout from "../Layout";
import axios from "axios";
import Spinner from "../../utils/Spinner";

async function CreateProcessos(formData) {
  return await axios.post(
    `${BASE_URL}processos`,
    formData /* , { headers: { 'Content-Type': 'multipart/form-data' } } */
  );
}

function CreateProcessoLayout() {
  const [name, setTema] = useState();
  const [description, setDescription] = useState();
  const [isoFile, setIsoFile] = useState();
  const [Type, setType] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const type = [
    { value: "Estudo", key: "Estudo" },
    { value: "Implementacao", key: "Implementacao" },
    { value: "Manutencao", key: "Manutencao" },
    { value: "operacao", key: "operacao" },    
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", Type);
    formData.append("file_name", isoFile);
    formData.append("description", description);
    // console.log(tema);
    // console.log("formData");


    try {
      const response = await CreateProcessos(formData);
      setIsLoading(false);
      window.location.href = "/processos";
      console.log(response);
    } catch (e) {
      // console.log(e);
      setIsLoading(false);
      //Alert to be added when error handled
    }
  };

  return (
    <>
      {" "}
      {isLoading ? <Spinner /> : ""}
      <div className="uk-background-default uk-padding">
        <h3 className="h3 mb-3 uk-text-bold uk-margin-medium-left uk-margin-top">
          Registo do processo
        </h3>
        <form
          className="uk-form-stacked uk-width-1-1@s uk-margin-large-top uk-margin-medium-right"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="uk-width-1-1@s uk-grid">
            <div className="uk-margin uk-width-1-2@s uk-padding-remove-right">
              <label className="uk-form-label" htmlFor="tema">
                Nome do processo
              </label>
              <div className="uk-form-controls">
                <input className="uk-input"
                  placeholder="Nome do processo"
                  name="name"
                  onChange={(e) => setTema(e.target.value)}
                  id="name"
                  type="text"
                  required
                />
              </div>
              <p className="uk-text-danger"></p>
            </div>

            <div className="uk-margin-bottom uk-width-1-2@s">
                <label className="uk-form-label" htmlFor="published">
                  Tipo de processo
                </label>
                <select
                  className="uk-select uk-margin-small-top"
                  name="type"
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="">Por favor seleccione...</option>
                  {type.map(function (value, key) {
                    return (
                      <option key={key} index={value.value} value={value.key}>
                        {value.value}
                      </option>
                    );
                  })}
                </select>
              </div>

            {/* <div className="uk-margin-bottom uk-width-1-2@s">
                <label className="uk-form-label" htmlFor="data">
                  Data da realização
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    min="1900"
                    max="2100"
                    type="number"
                    step="1"
                    placeholder="2000"
                    required
                    name="data"
                    id="data"
                    onChange={(e) => setData(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div> */}


              <div className="uk-margin">
                <span className="uk-text-middle uk-text-normal">
                  Selecione o processo que deseja guardar
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
            


            <div className="uk-width-1-1@s uk-border-rounded">
                <label className="uk-form-label" htmlFor="description">
                Descrição
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
              

            <div className="uk-width-1-1@s">
              <Button text="Registar" direction="uk-align-right" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default function CreateProcesso() {
  return (
    <Layout
      header={<Header />}
      content={<CreateProcessoLayout />}
      aside={<Aside />}
    />
  );
}
