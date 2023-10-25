import React, { useState } from "react";
import ReactPlayer from "react-player";
import Spinner from "../../components/Spinner";
//import "../../PdfViewer.css";
import { BASE_URL } from "../../utils/utils";

const WebinarViewer = ({ webinar }) => {
  const [isLoading, setIsLoading] = useState(false);



  return (
    <div>
      <div className="backtohome">
        <button className="uk-button-secondary uk-border-rounded uk-button-small"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/webinar';
          }}
        >
          <span uk-icon="arrow-left"></span> Voltar a pagina anterior
        </button>
      </div>

        <button class="uk-button uk-button-default uk-margin-bottom" type="button" uk-toggle="target: +">Toggle YouTube Video</button>

        <iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="1920" height="1080" allowfullscreen uk-responsive uk-video="automute: true"></iframe>

        <ReactPlayer
            className='react-player'
            url={`${BASE_URL}webinas/${webinar}/display`}
            //url={webinar}
            width='100%'
            height='100%'
        />
    </div>
  );
};

export default WebinarViewer;
