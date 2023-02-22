import React, { useState } from "react";
import ReactPlayer from "react-player";
import Spinner from "../../components/Spinner";
//import "../../PdfViewer.css";
import { BASE_URL } from "../../utils/utils";

const WebinarViewer = ({ webinar }) => {
  const [isLoading, setIsLoading] = useState(false);



  return (
    <>
      <div className="backtohome">
        <button className="uk-button-secondary uk-border-rounded uk-button-small"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/webinars';
          }}
        >
          <span uk-icon="arrow-left"></span> Voltar a pagina anterior
        </button>
      </div>
        <div class="uk-inline">

        <button class="uk-button uk-button-default uk-margin-bottom" type="button" uk-toggle="target: +">Assitir ao webinar</button>

        <iframe src={webinar} width="1220" height="680" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
              
        </div>
      </>
  );
};

export default WebinarViewer;
