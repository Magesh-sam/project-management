import React, { Suspense } from "react";

const PrimaryDetailsForm = React.lazy(
  () => import("./components/pages/PrimaryDetailsForm")
);
const SecondaryDetailsForm = React.lazy(
  () => import("./components/pages/SecondaryDetailsForm")
);
const ContactInfoForm = React.lazy(
  () => import("./components/pages/ContactInfoForm")
);
import { Routes, Route, useLocation, Link } from "react-router-dom";
const ProjectDetails = React.lazy(
  () => import("./components/pages/ProjectDetails")
);
import ProjectGrid from "./components/pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import FormWizard from "./components/formNavbar/FormWizard";
import Charts from "./components/pages/Charts";

const UpdateForm = React.lazy(() => import("./components/pages/UpdateForm"));
import { Skeleton } from "./components/skeleton/Skeleton";

export default function App() {
  const location = useLocation();

  const validatePathNameForForm = () => {
    if (
      location.pathname === "/primaryform" ||
      location.pathname === "/secondaryform" ||
      location.pathname === "/contactform" ||
      location.pathname === "/projectdetails"
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

        <Route
          path="/primaryform"
          element={
            <Suspense
              fallback={<Skeleton className="min-w-[80vw] min-h-[80vh] " />}
            >
              <PrimaryDetailsForm />
            </Suspense>
          }
        />
        <Route
          path="/secondaryform"
          element={
            <Suspense
              fallback={<Skeleton className="min-w-[80vw] min-h-[80vh] " />}
            >
              <SecondaryDetailsForm />
            </Suspense>
          }
        />
        <Route
          path="/contactform"
          element={
            <Suspense
              fallback={<Skeleton className="min-w-[80vw] min-h-[80vh] " />}
            >
              <ContactInfoForm />
            </Suspense>
          }
        />
        <Route
          path="/projectdetails"
          element={
            <Suspense
              fallback={<Skeleton className="min-w-[80vw] min-h-[80vh] " />}
            >
              <ProjectDetails />
            </Suspense>
          }
        />
        <Route
          path="/update"
          element={
            <Suspense
              fallback={<Skeleton className="min-w-[80vw] min-h-[80vh] " />}
            >
              <UpdateForm />
            </Suspense>
          }
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
