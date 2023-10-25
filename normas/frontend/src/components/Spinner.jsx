import React from "react";
const Spinner = ({ loading }) => {
  return (
    <div
      id="preloader"
      className="uk-margin-large uk-padding-large" style={{ margin:"90px" }}
    >
      <p className="uk-width-1-1  uk-flex uk-flex-center">
        <span className="uk-margin-large-top" uk-spinner="ratio: 3.5"></span>
      </p>
      <p className="uk-text-center uk-text-large uk-text-light">
        Carregando a página. . .
      </p>
    </div>
  );
};

export default Spinner;