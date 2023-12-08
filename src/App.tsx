import PrimaryDetailsForm from "./components/pages/PrimaryDetailsForm";
import SecondaryDetailsForm from "./components/pages/SecondaryDetailsForm";
import ContactInfoForm from "./components/pages/ContactInfoForm";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import ProjectDetails from "./components/pages/ProjectDetails";
import ProjectGrid from "./components/pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import FormWizard from "./components/formNavbar/FormWizard";
import Charts from "./components/pages/Charts";
import UpdateForm from "./components/pages/UpdateForm";

export default function App() {
  const location = useLocation();

  const validatePathNameForForm = () => {
    if (
      location.pathname === "/primaryform" ||
      location.pathname === "/secondaryform" ||
      location.pathname === "/contactform" ||
      location.pathname === "/projectdetails" ||
      location.pathname === "/updateprojectdetails"
    ) {
      return true;
    }
    return false;
  };
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navbar />
      {validatePathNameForForm() ? <FormWizard /> : null}
      <Routes>
        <Route path="/" element={<ProjectGrid />} />
        <Route path="/primaryform" element={<PrimaryDetailsForm />} />
        <Route path="/secondaryform" element={<SecondaryDetailsForm />} />
        <Route path="/contactform" element={<ContactInfoForm />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route
          path="/update"
          element={<UpdateForm />}
          errorElement={
            <main className="flex min-h-screen flex-col items-center ">
              <h2>To edit a project click through the data table</h2>
              <Link to="/">Go Back</Link>
            </main>
          }
        />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </main>
  );
}
