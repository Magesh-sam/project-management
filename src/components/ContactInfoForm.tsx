import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { submitContactInfo } from "../redux/features/contactInfo";
import { contactInfoProps, projectDetailsProps } from "../lib/types";
import { useNavigate } from "react-router-dom";

import { submitProjectDetails } from "../redux/features/projectDetails";

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

  const dispatch = useDispatch<AppDispatch>();
  const contactForm = useForm<contactInfoProps>({
    defaultValues: {
      ...contactFormData,
    },
  });

  const navigate = useNavigate();

  const { register, handleSubmit, control } = contactForm;
  const submitForm = (data: contactInfoProps) => {
    dispatch(submitContactInfo(data));
    const finalFormData: projectDetailsProps = {
      ...primaryFormData,
      ...secondaryFormData,
      ...data,
    };
    console.log(finalFormData);
    dispatch(submitProjectDetails(finalFormData));
    navigate("/projectdetails");
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center gap-4 mt-5 max-w-md mx-auto"
      noValidate
    >
      <label className="w-full">
        <span className="block mb-2">Email</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: " email must be filled",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "invalid email format!",
            },
          })}
        />
      </label>
      <label className="w-full">
        <span className="block mb-2">Alternate Email</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="email"
          placeholder="Alternate Email"
          {...register("alternativeEmail", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
      </label>
      <label className="w-full">
        <span className="block mb-2">Contact Number</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px]  border-2 border-blue-500 p-3 rounded-md"
          type="tel"
          placeholder="Contact Number"
          {...register("contactNo", { required: true })}
        />
      </label>
      <label className="w-full">
        <span className="block mb-2">Emergency Contact Number</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px]  border-2 border-blue-500 p-3 rounded-md"
          type="tel"
          placeholder="Emergency Contact Number"
          {...register("emergencyContactNo", { required: true })}
        />
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
      <DevTool control={control} />
    </form>
  );
}

export default ContactInfoForm;
