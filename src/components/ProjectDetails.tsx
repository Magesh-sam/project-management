import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { resetContactInfo } from "../redux/features/contactInfo";
import { resetPrimaryDetails } from "../redux/features/primaryProjectDetails";
import { resetSecondaryDetails } from "../redux/features/secondaryProjectDetails";

const ProjectDetails: React.FC = () => {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const primaryDetails = useSelector(
    (state: RootState) => state.primaryProjectDetails.primaryProjectDetails
  );
  const secondaryDetails = useSelector(
    (state: RootState) => state.secondaryProjectDetails.secondaryProjectDetails
  );
  const contactInfo = useSelector(
    (state: RootState) => state.contactInfo.contactInfo
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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
    dispatch(resetContactInfo());
    console.log("Form submitted successfully!", {
      finalFormData: { primaryDetails, secondaryDetails, contactInfo },
    });
    navigate("/");
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <article className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">
          {primaryDetails.projectName}
        </h1>
        <p className="text-gray-600 mb-4">
          {primaryDetails.projectDescription}
        </p>

        <div className="mb-4">
          <strong>Project Type:</strong>{" "}
          <span>{primaryDetails.projectType}</span>
        </div>

        <div className="mb-4">
          <strong>Project Size:</strong>{" "}
          <span>{primaryDetails.projectSize}</span>
        </div>

        <div className="mb-4">
          <strong>Client:</strong> <span>{primaryDetails.client}</span>
        </div>

        <div className="mb-8">
          <strong>Project Status:</strong>{" "}
          <span>{secondaryDetails.projectStatus}</span>
        </div>

        <div className="mb-4">
          <strong>Location:</strong>{" "}
          <span>
            {secondaryDetails.projectLocation.city},{" "}
            {secondaryDetails.projectLocation.country}
          </span>
        </div>

        <div className="mb-4">
          <strong>Start Date:</strong> <span>{secondaryDetails.startDate}</span>
        </div>

        <div className="mb-8">
          <strong>End Date:</strong> <span>{secondaryDetails.endDate}</span>
        </div>

        <div className="mb-4">
          <strong>Email:</strong> <span>{contactInfo.email}</span>
        </div>

        <div className="mb-4">
          <strong>Alternative Email:</strong>{" "}
          <span>{contactInfo.alternativeEmail}</span>
        </div>

        <div className="mb-4">
          <strong>Contact No:</strong> <span>{contactInfo.contactNo}</span>
        </div>

        <div>
          <strong>Emergency Contact No:</strong>{" "}
          <span>{contactInfo.emergencyContactNo}</span>
        </div>
      </article>
      <form className="flex gap-3">
        <input
          type="checkbox"
          id="agreement"
          name="agreement"
          checked={isAgreementChecked}
          onChange={() => setIsAgreementChecked(!isAgreementChecked)}
        />
        <label htmlFor="agreement">I agree to the terms and conditions</label>
      </form>
      <div className="flex justify-center gap-4">
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
    </section>
  );
};

export default ProjectDetails;
