import { useState } from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { BASE_URL } from "../../utils/utils";
import Button from "../../components/Button";
import Layout from "../Layout";
import axios from "axios";
import Spinner from "../../utils/Spinner";

// import React, { useEffect, useState } from "react";

// import Aside from "../../components/Aside";
// import Button from "../../components/Button";
// import Header from "../../components/Header";
// import Input from "../../components/Input";
// import Layout from "../Layout";
// import { BASE_URL } from "../../utils/utils";
// import Spinner from "../../components/Spinner";
// import axios from "axios";

async function CreateWebinars(formData) {
  return await axios.post(
    `${BASE_URL}webinars`,
    formData /* , { headers: { 'Content-Type': 'multipart/form-data' } } */
  );
}

function CreateWebinarLayout() {
  const [tema, setTema] = useState();
  const [data, setData] = useState();
  const [url, setUrl] = useState();
  const [resumo, setResumo] = useState();
  const [isoFile, setIsoFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("tema", tema);
    formData.append("data", data);
    formData.append("url", url);
    formData.append("file_name", isoFile);
    formData.append("resumo", resumo);
    // console.log(tema);
    // console.log("formData");


    try {
      const response = await CreateWebinars(formData);
      setIsLoading(false);
      window.location.href = "/webinars";
      console.log(response);
    } catch (e) {
      // console.log(e);
      setIsLoading(false);
      //Alert to be added when error handled
    }
  };

// function CreateWebinarLayout() {
//   let allUsers = [];

//   const [isLoading, setIsLoading] = useState(false);
//   const [tema, setTema] = useState();
//   const [data, setData] = useState();
//   const [resumo, setResumo] = useState();
//   const [isoFile, setIsoFile] = useState();
//   const [users, setUsers] = useState();
//   const axios = require("axios").default;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     axios
//       .post(`${BASE_URL}webinars`, {
//         //user_id: userId.value,
//         tema: tema,
//         data: data,
//         resumo: resumo,
//         isoFile: isoFile
//       })
//       .then(function (response) {
//         localStorage.setItem("info", response.data.title);
//         window.open("/webinars", "_self");
//         setIsLoading(false);
//       })
//       .catch(function (error) {
//         console.log(error.response);
//       });
//   };

  return (
    <>
      {" "}
      {isLoading ? <Spinner /> : ""}
      <div className="uk-background-default uk-padding">
        <h3 className="h3 mb-3 uk-text-bold uk-margin-medium-left uk-margin-top">
          Registo do webinar
        </h3>
        <form
          className="uk-form-stacked uk-width-1-1@s uk-margin-large-top uk-margin-medium-right"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="uk-width-1-1@s uk-grid">
            <div className="uk-margin uk-width-1-2@s uk-padding-remove-right">
              <label className="uk-form-label" htmlFor="tema">
                Tema do webinar
              </label>
              <div className="uk-form-controls">
                <input className="uk-input"
                  placeholder="Tema do webinar"
                  name="tema"
                  onChange={(e) => setTema(e.target.value)}
                  id="tema"
                  type="text"
                  required
                />
              </div>
              <p className="uk-text-danger"></p>
            </div>

            <div className="uk-margin-bottom uk-width-1-2@s">
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
              </div>

              <div className="uk-margin-bottom uk-width-1-1@s">
                <label className="uk-form-label" htmlFor="url">
                  Link do webinar
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="link do video"
                    required
                    name="url"
                    id="url"
                    onChange={(e) => setUrl(e.target.value)}
                    autoComplete="false"
                  />
                </div>
              </div>

                {/* <span className="uk-text-warning">*Caso o vídeo a guardar esteja no dispositivo actual selecione a opção abaixo</span> */}

              <div className="uk-margin">
                <span className="uk-text-middle uk-text-normal">
                  Selecione o ficheiro anexo a apresentação
                </span>
                <div className="uk-form-custom">
                  <input
                    className="uk-input"
                    type="file"
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
                  Contextualização
                </label>
                <div className="uk-form-controls">
                  <textarea
                    className="uk-textarea"
                    rows="3"
                    id="description"
                    required
                    name="resumo"
                    onChange={(e) => setResumo(e.target.value)}
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

export default function CreateWebinar() {
  return (
    <Layout
      header={<Header />}
      content={<CreateWebinarLayout />}
      aside={<Aside />}
    />
  );
}
