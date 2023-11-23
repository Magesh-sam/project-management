import PrimaryDetailsForm from "./components/PrimaryDetailsForm";
import SecondaryDetailsForm from "./components/SecondaryDetailsForm";
import ContactInfoForm from "./components/ContactInfoForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Router>
        <Routes>
          <Route path="/" element={<PrimaryDetailsForm />} />
          <Route path="/secondaryform" element={<SecondaryDetailsForm />} />
          <Route path="/contactform" element={<ContactInfoForm />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </main>
  );
}
