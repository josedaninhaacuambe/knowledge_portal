import { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../components/HeaderSample";
import Layout from "./Layout";
import Footer from "../components/footer";
import { BASE_URL } from "../utils/utils";

async function SaveFiles(formData) {
  return await axios.post(
    `${BASE_URL}savedir`,
    formData /* , { headers: { 'Content-Type': 'multipart/form-data' } } */
  );
}

function FileUploader() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [path, setPath] = useState('');
  const [size, setSize] = useState('');
  const [mimetype, setMimetype] = useState('');
  const [directory, setDirectory] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setName(e.target.files[0].name);
    setPath(e.target.files[0].path);
    setSize(e.target.files[0].size);
    setMimetype(e.target.files[0].mimetype);
  }

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('path', path);
    formData.append('size', size);
    formData.append('mimetype', mimetype);
    formData.append('directory', directory);

    console.log(name);
    console.log("formData");

    try {
      const response = await SaveFiles(formData);
      //setIsLoading(false);
      //window.location.href = "/savedir";
      console.log(response);
    } catch (e) {
      console.log(e);
      //setIsLoading(false);
      // try {
      //   const response = await axios.post(`${BASE_URL}savedir/`, formData, {
      //     maxContentLength: Infinity,
      //     onUploadProgress: progressEvent => {
      //         const { loaded, total } = progressEvent;
      //         let percent = Math.floor((loaded * 100) / total);
      //         const progressbar = document.getElementById("js-progressbar");
      //         progressbar.setAttribute("value", percent);
      //         progressbar.setAttribute("hidden", false);
      //         if (percent === 100) {
      //             setTimeout(() => {
      //                 progressbar.setAttribute("hidden", true);
      //             }, 1000);
      //         }
      //     }
      // });
      //   console.log(response.data);
      //} catch (err) {
      // console.error(err);
    }
  }

  return (
//    <Layout
//       header={<Header />}
///       content={
  <div className="uk-padding-large uk-margin-large">    
    <h1 className="uk-flex uk-flex-center ">Carregue os seus ficheiro</h1>
      <div class="js-upload uk-placeholder uk-text-center">
          <span uk-icon="icon: cloud-upload"></span>
          <span class="uk-text-middle">Anexe os seus ficheiros soltando-os aqui</span>
          <div uk-form-custom>
            <form className="" 
              method="POST" 
              onSubmit={handleSubmit} 
              encType="multipart/form">
              <input type="file" name="file" id="file"
                onChange={handleFileChange}
                //onChange={(e) => setFile(e.target.value)}
                required
                multiple/>
              <input type="text" name="directory" id="directory" required
                placeholder="Digite o nome do diretório"
                value={directory}
                onChange={(e) => setDirectory(e.target.value)}
                multiple/>
              <button type="submit">Upload</button>
            </form>
          </div>
      </div>
    <progress id="js-progressbar" class="uk-progress" value="0" max="100" hidden></progress>
  </div>//}
//       footer={<Footer />}
//    />
  );
}

export default FileUploader;