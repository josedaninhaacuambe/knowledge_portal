import React from "react";
import { useLocation } from "react-router-dom";
import PdfViewer1 from "../pdf/PdfViewer1";

function CallPDF1() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="content uk-padding-large">
        <div className="left-logo uk-flex uk-flex-middle ">
          <img
            className="uk-border-rounded profile-img uk-align-right uk-margin-large-top"
            src="/images/logo.PNG"
            alt=""
          />
          <div>
          <p className="uk-margin-large-right">
            <span className="uk-text-bolder uk-text-lead">{`${data.name}`}</span>
            <span className="uk-text-light uk-text-large uk-text-lighter"> N°:- {`${data.code}`} / </span>
            <data>{data.id}</data>
          </p>
          </div>
        </div>

      <PdfViewer1 pdf={data.data} />
    </div>
  );
}

export default CallPDF1;