import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { submitContactInfo } from "../../redux/features/contactInfo";
import { contactInfoProps, projectDetailsProps } from "../../lib/types";
import { useNavigate } from "react-router-dom";

import { submitProjectDetails } from "../../redux/features/projectDetails";

function ContactInfoForm() {
  const primaryFormData = useSelector(
    (state: RootState) => state.primaryProjectDetails.primaryProjectDetails
  );
  const secondaryFormData = useSelector(
    (state: RootState) => state.secondaryProjectDetails.secondaryProjectDetails
  );
  const contactFormData = useSelector(
    (state: RootState) => state.contactInfo.contactInfo
  );
  const ProjectDetailsData = useSelector(
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
  } = ProjectDetailsData;
  const dispatch = useDispatch<AppDispatch>();
  const contactForm = useForm<contactInfoProps>({
    defaultValues: {
      ...contactFormData,
    },
  });

  const navigate = useNavigate();

  const { register, handleSubmit, formState } = contactForm;
  const { errors } = formState;
  const submitForm = (data: contactInfoProps) => {
    dispatch(submitContactInfo(data));
    const finalFormData: projectDetailsProps = {
      ...primaryFormData,
      ...secondaryFormData,
      ...data,
    };
    
    dispatch(submitProjectDetails(finalFormData));
    if (
      projectDescription === "" ||
      projectType === "" ||
      projectSize === "" ||
      projectName === "" ||
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
      navigate("/projectdetails");
    } else {
      navigate("/updateprojectdetails");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center gap-4 mt-5 max-w-md mx-auto"
      noValidate
    >
      <h2 className="text-2xl self-start font-bold underline underline-offset-4  my-3 ">
        Contact Information
      </h2>
      <label className="w-full">
        <span className="block mb-2">Email</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "Please fill the primary email",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "invalid email format!",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </label>
      <label className="w-full">
        <span className="block mb-2">Alternate Email</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="email"
          placeholder="Alternate Email"
          {...register("alternativeEmail", {
            required: {
              value: true,
              message: "Please fill the alternate email",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.alternativeEmail && (
          <p className="text-red-500">{errors.alternativeEmail.message}</p>
        )}
      </label>
      <label className="w-full">
        <span className="block mb-2">Contact Number</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px]  border-2 border-blue-500 p-3 rounded-md"
          type="number"
          placeholder="Contact Number"
          {...register("contactNo", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Please fill the contact number",
            },
          })}
        />
        {errors.contactNo && (
          <p className="text-red-500">{errors.contactNo.message}</p>
        )}
      </label>
      <label className="w-full">
        <span className="block mb-2">Emergency Contact Number</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px]  border-2 border-blue-500 p-3 rounded-md"
          type="number"
          placeholder="Emergency Contact Number"
          {...register("emergencyContactNo", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Please fill the emergency contact number",
            },
          })}
        />
        {errors.emergencyContactNo && (
          <p className="text-red-500">{errors.emergencyContactNo.message}</p>
        )}
      </label>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="border-2 border-blue-500  p-3 rounded-md"
          onClick={() => {
            navigate("/secondaryform");
          }}
        >
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white p-3 rounded-md">
          Next
        </button>
      </div>
    </form>
  );
}

export default ContactInfoForm;
