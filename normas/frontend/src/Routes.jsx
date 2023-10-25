import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import ListUsers from 		"./pages/users/Index";
import ListSectores from 	"./pages/sectores/Index";
import ListWebinars from 	"./pages/webinars/Index";
import ListOrdens from 		"./pages/ordens/Index";
import ListProjectos from 	"./pages/projectos/Index";
import ListEspecialista from 	"./pages/especialistas/Index";
import ListProcessos from 	"./pages/processos/Index";
import ListLegislacao from 	"./pages/legislacao/Index";
import ListDocuments from 	"./pages/documents/Index";
import ListTrainings from 	"./pages/training/Index";
import ListBooks from 		"./pages/books/Index";


import Index from "./pages/Index";
import Contacto from "./pages/Contacto";
import Projectfiles from "./pages/projectfiles";
import Plano from "./pages/Plano";
import PageNotFound from "./pages/404";
import About from "./pages/about"; 
import Repositor from "./pages/Repositorabout";
import Purpose from "./pages/Purpose";
import Indice from "./pages/Indice";
import TabelaTemporalidade from "./pages/TabelaTemporal";

import Evento from "./pages/Evento";
import Documents from "./pages/Documents";
import Legislation from "./pages/legislation";
import Normas from "./pages/Normas";
import Ordens from "./pages/Ordens";
import Projecto from "./pages/Projecto";
import Specialist from "./pages/specialist";
import Hability from "./pages/hability";
import Books from "./pages/books";
import Login from "./pages/users/Login";
import Signup from "./pages/users/Signup";

import CreateSector from "./pages/sectores/Create";
import CreateWebinar from "./pages/webinars/Create";
import CreateOrdens from "./pages/ordens/Create";
import CreateProjecto from "./pages/projectos/Create";
import CreateProcesso from "./pages/processos/Create";
import CreateEspecialista from "./pages/especialistas/Create";
import CreateLegislacao from "./pages/legislacao/Create";
import CreateDocument from "./pages/documents/Create";
import CreateBooks from "./pages/books/Create";
import CreateTrainings from "./pages/training/Create";
import ProtectedRoute from "./protectedRoute";
import CallWEBINAR from "./pages/webinars/Display";
import CallPDF from "./pages/documents/Display";
import CallPDF1 from "./pages/ordens/Display";
import CallPDF2 from "./pages/processos/Display";
import CallPDF3 from "./pages/legislacao/Display";
import CallPDF4 from "./pages/projectos/Display";
import CallPDF5 from "./pages/especialistas/Display";
import CallPDF7 from "./pages/books/Display";
import EditSector from "./pages/sectores/Edit";

export function AppRoutes() {
  // const [currentUser, setCurrentUser] = useState();
  // setCurrentUser(localStorage.getItem("accessToken"));

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<PublicRoute />}>
          <Route path="accounts/login" element={<Login />} />
        </Route> */}

        <Route path="accounts/login" element={<Login />} />
        <Route path="accounts/logout" />
        <Route path="/">


          <Route path="/dashboard" element={<App />} />
          <Route path="/" element={<Index />} />


          {/*<Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<App />} /> */}
          <Route path="accounts/create" element={<Signup />} />
          <Route path="contacto" element={<Contacto />} />
	        <Route path="PageNotFound" element={<PageNotFound/>} />
          <Route path="about" element={<About/>} />
          <Route path="aboutRepository" element={<Repositor/>}/>
          <Route path="purpose" element={<Purpose/>} />
          <Route path="evento" element={<Evento />} />
          <Route path="legislation" element={<Legislation />} />
          <Route path="projectfile" element={<Projectfiles/>}/>
          <Route path="books" element={<Books />} />
          <Route path="normas" element={<Normas />} />

          <Route path="serviceorders" element={<Ordens />} />
          <Route path="projecto" element={<Projecto />} />
          <Route path="specialist" element={<Specialist />} />
          <Route path="hability" element={<Hability />} />

	        <Route path="ClassificationPlan" element={<Plano />} />
          <Route path="ReferralIndex" element={<Indice />} />
          <Route path="TemporalityTable" element={<TabelaTemporalidade />} />
          
          <Route path="accounts" element={<ListUsers />} />
          <Route path="sectores" element={<ListSectores />} />
          <Route path="webinars" element={<ListWebinars />} />
          <Route path="processos" element={<ListProcessos />} />
	        <Route path="especialistas" element={<ListEspecialista />} />
          <Route path="legislacao" element={<ListLegislacao />} />
          <Route path="projectos" element={<ListProjectos />} />
          <Route path="documents" element={<ListDocuments />} />
          <Route path="ordens" element={<ListOrdens />} />
	        <Route path="displaybooks" element={<ListBooks />} />
          <Route path="training" element={<ListTrainings />} />
          <Route path="webinars/create" element={<CreateWebinar />} />

          {/* <Route path="webinars/Evento" element={<DisplayEvento />} />
          <Route path="webinars/Evento" element={<Displaycontacto />} /> */}

          <Route path="ordens/create" element={<CreateOrdens />} />
          <Route path="projectos/create" element={<CreateProjecto />} />
          <Route path="processos/create" element={<CreateProcesso />} />
	        <Route path="especialistas/create" element={<CreateEspecialista />} />
          <Route path="legislacao/create" element={<CreateLegislacao />} />
	        <Route path="books/create" element={<CreateBooks />} />

          <Route path="training/create" element={<CreateTrainings />} />

          <Route path="sectores/create" element={<CreateSector />} />
          <Route path="sectores/edit" element={<EditSector />} />
          <Route path="viewWebinar" element={<CallWEBINAR />} />
          <Route path="viewPdf" element={<CallPDF />} />
          <Route path="viewPdf1" element={<CallPDF1 />} />
          <Route path="viewPdf2" element={<CallPDF2 />} />
          <Route path="viewPdf3" element={<CallPDF3 />} />
          <Route path="viewPdf4" element={<CallPDF4 />} />
          <Route path="viewPdf5" element={<CallPDF5 />} />
          <Route path="viewPdf7" element={<CallPDF7 />} />
          <Route path="normas/create" element={<CreateDocument />} />
        </Route>
      </Routes>
    </Router>
  );
}
