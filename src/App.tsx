import PrimaryDetailsForm from "./components/PrimaryDetailsForm";
import SecondaryDetailsForm from "./components/SecondaryDetailsForm";
import ContactInfoForm from "./components/ContactInfoForm";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import FormWizard from "./components/FormWizard";
import ProjectTable from "./components/ProjectTable";

export default function App() {
  const location = useLocation();

  return (
    <main className="flex min-h-screen flex-col items-center ">
      {location.pathname !== "/" && <FormWizard />}
      <Routes>
        <Route path="/primaryform" element={<PrimaryDetailsForm />} />

        <Route path="/secondaryform" element={<SecondaryDetailsForm />} />
        <Route path="/contactform" element={<ContactInfoForm />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/" element={<ProjectTable />} />
      </Routes>
    </main>
  );
}
