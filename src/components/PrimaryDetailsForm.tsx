import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { submitPrimaryProjectDetails } from "../redux/features/primaryProjectDetails";
import { primaryProjectDetailsProps } from "../lib/types";
function PrimaryDetailsForm() {
  const primaryFormData = useSelector(
    (state: RootState) => state.primaryProjectDetails.primaryProjectDetails
  );
  const dispatch = useDispatch<AppDispatch>();
  const primaryForm = useForm<primaryProjectDetailsProps>({
    defaultValues: {
      ...primaryFormData,
    },
  });
  const { register, handleSubmit, control } = primaryForm;
  const navigate = useNavigate();
  const submitForm = (data: primaryProjectDetailsProps) => {
    dispatch(submitPrimaryProjectDetails(data));
    navigate("/secondaryform");
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col row-gap-4 mt-5 w-full md:max-w-md my-8 "
    >
      <h2 className="text-2xl font-bold underline underline-offset-4 text-center my-3 ">
        Primary Project Details
      </h2>
      <label>
        <span className="block mb-2 font-semibold">Project Name</span>
        <input
          className="w-full border-2 border-blue-500 p-3 rounded-md"
          type="text"
          placeholder="Project Name"
          {...register("projectName", { required: true })}
        />
      </label>
      <label>
        <span className="block mb-2 font-semibold ">Project Description</span>
        <textarea
          className="w-full border-2 border-blue-500 p-3 rounded-md"
          placeholder="brief description of the project"
          {...register("projectDescription", { required: true })}
        />
      </label>
      <fieldset className="w-full border-2 border-blue-500 p-3 rounded-md">
        <legend className="mb-2 font-semibold">Project Type</legend>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Web development"}
            {...register("projectType", { required: true })}
          />
          <span className="ml-2">Web Development</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Mobile app development"}
            {...register("projectType", { required: true })}
          />
          <span className="ml-2">Mobile App Development</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            id="cloudComputing"
            type="radio"
            value={"Cloud computing"}
            {...register("projectType", { required: true })}
          />
          <span className="ml-2">Cloud Computing</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Artificial intelligence"}
            {...register("projectType", { required: true })}
          />
          <span className="ml-2">Artificial Intelligence</span>
        </label>
      </fieldset>
      <fieldset className="w-full border-2 border-blue-500 p-3 rounded-md">
        <legend className="mb-2 font-semibold">Project Size</legend>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Small"}
            {...register("projectSize", { required: true })}
          />
          <span className="ml-2">Small</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Medium"}
            {...register("projectSize", { required: true })}
          />
          <span className="ml-2">Medium</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Large"}
            {...register("projectSize", { required: true })}
          />
          <span className="ml-2">Large</span>
        </label>
      </fieldset>
      <label>
        <span className="block mb-2 font-semibold">Client Name</span>
        <input
          className="w-full border-2 border-blue-500 p-3 rounded-md"
          type="text"
          placeholder="Client Name"
          {...register("client", { required: true })}
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-md w-20 mx-auto mt-5"
      >
        Next
      </button>
      <DevTool control={control} />
    </form>
  );
}

export default PrimaryDetailsForm;
