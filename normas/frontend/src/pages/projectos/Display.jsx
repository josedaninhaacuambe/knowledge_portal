import React from "react";
//import { Document, Page } from 'react-pdf';
import { useLocation } from "react-router-dom";
//import SimplePdf from "../pdf/SimplePdf";
import { BASE_URL } from "../../utils/utils";


function CallPDF4() {
  const location = useLocation();
  const data = location.state;
  const pdf = `${BASE_URL}${data.file_name}`;
  return (
    
    <div className="">
        {/* <SimplePdf pdf={data.data} /> */}
        <iframe src={pdf} width="100%" height="610px">
    </iframe>
    </div>    
  );
}

export default CallPDF4;