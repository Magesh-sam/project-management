// ProjectPreview.js
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetContactInfo } from "../redux/features/contactInfo";
import { resetPrimaryDetails } from "../redux/features/primaryProjectDetails";
import { resetSecondaryDetails } from "../redux/features/secondaryProjectDetails";
import { resetProjectDetails } from "../redux/features/projectDetails";
export default function ProjectDetails() {
  const dispatch = useDispatch<AppDispatch>();

  const projectDetails = useSelector(
    (state: RootState) => state.projectDetails.projectDetailsData
  );

  const {
    projectName,
    projectDescription,
    projectType,
    projectSize,
    client,
    projectStatus,
    projectLocation,
    startDate,
    endDate,
    email,
    alternativeEmail,
    contactNo,
    emergencyContactNo,
  } = projectDetails;
  const navigate = useNavigate();

  const [isAgreementChecked, setIsAgreementChecked] = useState(false);

  const resetFormData = () => {
    dispatch(resetPrimaryDetails());
    dispatch(resetSecondaryDetails());
    dispatch(resetContactInfo());
  };
  const handleSubmit = () => {
    if (!isAgreementChecked) {
      alert(
        "Please agree to the terms and conditions before submitting the form."
      );
      return;
    }
    resetFormData();
    dispatch(resetProjectDetails());

    navigate("/");
  };
  if (
    projectName === "" ||
    projectDescription === "" ||
    projectType === "" ||
    projectSize === "" ||
    client === "" ||
    projectStatus === "" ||
    projectLocation.country === "" ||
    projectLocation.city === "" ||
    startDate === "" ||
    endDate === "" ||
    email === "" ||
    alternativeEmail === "" ||
    contactNo === "" ||
    emergencyContactNo === ""
  ) {
    return (
      <main className="flex h-screen flex-col items-center justify-center ">
        <h1>Empty Project Details</h1>
        <p>Please provide all project details.</p>
        <Link to="/" className="font-semibold underline underline-offset-4">
          Click here to fill the form{" "}
        </Link>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-[80%]">
      <div className="flex flex-col gap-3 p-8 rounded-md border border-blue-500 w-[90%] ">
        <section className="flex flex-col gap-3 mb-3">
          <h2 className="font-bold underline underline-offset-2">
            Primary Details
          </h2>
          <div>
            <p>
              <span className="font-bold">Project Name:</span> {projectName}
            </p>
            <p>
              <span className="font-bold">Project Description:</span>{" "}
              {projectDescription}
            </p>
            <p>
              <span className="font-bold">Project Type:</span> {projectType}
            </p>
            <p>
              <span className="font-bold">Project Size:</span> {projectSize}
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-3 mb-3">
          <h2 className="font-bold underline underline-offset-2">
            Secondary Details
          </h2>
          <div>
            <p>
              <span className="font-bold">Client:</span> {client}
            </p>
            <p>
              <span className="font-bold">Project Status:</span> {projectStatus}
            </p>
            <div>
              <p>
                <span className="font-bold">Country:</span>{" "}
                {projectLocation.country}
              </p>
              <p>
                <span className="font-bold">City:</span> {projectLocation.city}
              </p>
            </div>
            <p>
              <span className="font-bold">Start Date:</span> {startDate}
            </p>
            <p>
              <span className="font-bold">End Date:</span> {endDate}
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-3 mb-3">
          <h2 className="font-bold underline underline-offset-2">
            Contact Details
          </h2>
          <div>
            <p>
              <span className="font-bold">Email:</span> {email}
            </p>
            <p>
              <span className="font-bold">Alternative Email:</span>{" "}
              {alternativeEmail}
            </p>
            <p>
              <span className="font-bold">Contact No:</span> {contactNo}
            </p>
            <p>
              <span className="font-bold">Emergency Contact No:</span>{" "}
              {emergencyContactNo}
            </p>
          </div>
        </section>
      </div>
      <div>
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            onChange={() => setIsAgreementChecked(!isAgreementChecked)}
          />
          <label htmlFor="agreement">
            {" "}
            I agree to the terms and conditions{" "}
          </label>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <button
            className="border-2 border-blue-500  p-3 rounded-md"
            onClick={() => {
              navigate(-1);
            }}
          >
            Previous
          </button>
          <button
            disabled={!isAgreementChecked}
            className="bg-blue-500 text-white p-3 rounded-md"
            onClick={() => handleSubmit()}
            style={{ cursor: isAgreementChecked ? "pointer" : "not-allowed" }}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
