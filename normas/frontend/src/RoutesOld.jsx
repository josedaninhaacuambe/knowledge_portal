import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import ListUsers from "./pages/users/Index";
import ListSectores from "./pages/sectores/Index";
import ListWebinars from "./pages/webinars/Index";
import ListOrdens from "./pages/ordens/Index";
import ListProjectos from "./pages/projectos/Index";
import ListProcessos from "./pages/processos/Index";
import ListLegislacao from "./pages/legislacao/Index";
import Index from "./pages/Index";
import Login from "./pages/users/Login";
import Signup from "./pages/users/Signup";
import CreateSector from "./pages/sectores/Create";
import CreateWebinar from "./pages/webinars/Create";
import CreateOrdens from "./pages/ordens/Create";
import CreateProjecto from "./pages/projectos/Create";
import CreateProcesso from "./pages/processos/Create";
import CreateLegislacao from "./pages/legislacao/Create";
import ListDocuments from "./pages/documents/Index";
import CreateDocument from "./pages/documents/Create";
import ProtectedRoute from "./protectedRoute";
//import PublicRoute from "./publicRoute";
// import CallPDF from "./pages/documents/Display";
import CallWEBINAR from "./pages/webinars/Display";
import CallPDF from "./pages/documents/Display";
import CallPDF1 from "./pages/ordens/Display";
import CallPDF2 from "./pages/processos/Display";
import CallPDF3 from "./pages/legislacao/Display";
import CallPDF4 from "./pages/projectos/Display";
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


        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<App />} />
          <Route path="accounts/create" element={<Signup />} />
          <Route path="index" element={<Index />} />
          <Route path="accounts" element={<ListUsers />} />
          <Route path="sectores" element={<ListSectores />} />
          <Route path="webinars" element={<ListWebinars />} />
          <Route path="processos" element={<ListProcessos />} />
          <Route path="legislacao" element={<ListLegislacao />} />
          <Route path="ordens" element={<ListOrdens />} />
	  <Route path="projectos" element={<ListProjectos />} />
          <Route path="webinars/create" element={<CreateWebinar />} />
          <Route path="ordens/create" element={<CreateOrdens />} />
	  <Route path="projectos/create" element={<CreateProjecto />} />
          <Route path="processos/create" element={<CreateProcesso />} />
          <Route path="legislacao/create" element={<CreateLegislacao />} />
          <Route path="sectores/create" element={<CreateSector />} />
          <Route path="sectores/edit" element={<EditSector />} />
          <Route path="normas" element={<ListDocuments />} />
          <Route path="viewWebinar" element={<CallWEBINAR />} />
          <Route path="viewPdf" element={<CallPDF />} />
          <Route path="viewPdf1" element={<CallPDF1 />} />
          <Route path="viewPdf2" element={<CallPDF2 />} />
          <Route path="viewPdf3" element={<CallPDF3 />} />
	  <Route path="viewPdf4" element={<CallPDF4 />} />
          <Route path="normas/create" element={<CreateDocument />} />
        </Route>
      </Routes>
    </Router>
  );
}
