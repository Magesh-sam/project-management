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
  const { register, handleSubmit, control, formState } = primaryForm;
  const { errors } = formState;
  const navigate = useNavigate();
  const submitForm = (data: primaryProjectDetailsProps) => {
    dispatch(submitPrimaryProjectDetails(data));
    navigate("/secondaryform");
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col  gap-4 mt-5 max-w-md "
      noValidate
    >
      <h2 className="text-2xl font-bold underline underline-offset-4  my-3 ">
        Primary Project Details
      </h2>
      <label>
        <span className="block mb-2 font-semibold">Project Name</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="text"
          placeholder="Project Name"
          {...register("projectName", {
            required: {
              value: true,
              message: "Please fill the project name!",
            },
          })}
        />
      </label>
      {errors.projectName && (
        <p className="text-red-500">{errors.projectName.message}</p>
      )}
      <label>
        <span className="block mb-2 font-semibold ">Project Description</span>
        <textarea
          className=" w-[300px] sm:w-[450px] md:w-[600px]  border-2 border-blue-500 p-3 rounded-md"
          placeholder="brief description of the project"
          {...register("projectDescription", {
            required: {
              value: true,
              message: "Please fill the project description!",
            },
          })}
        />
      </label>
      {errors.projectDescription && (
        <p className="text-red-500">{errors.projectDescription.message}</p>
      )}
      <fieldset className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md">
        <legend className="mb-2 font-semibold">Project Type</legend>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Web development"}
            {...register("projectType", {
              required: {
                value: true,
                message: "Please select the project type!",
              },
            })}
          />
          <span className="ml-2">Web Development</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Mobile app development"}
            {...register("projectType", {
              required: {
                value: true,
                message: "Please select the project type!",
              },
            })}
          />
          <span className="ml-2">Mobile App Development</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            id="cloudComputing"
            type="radio"
            value={"Cloud computing"}
            {...register("projectType", {
              required: {
                value: true,
                message: "Please select the project type!",
              },
            })}
          />
          <span className="ml-2">Cloud Computing</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Artificial intelligence"}
            {...register("projectType", {
              required: {
                value: true,
                message: "Please select the project type!",
              },
            })}
          />
          <span className="ml-2">Artificial Intelligence</span>
        </label>
        {errors.projectType && (
          <p className="text-red-500">{errors.projectType.message}</p>
        )}
      </fieldset>
      <fieldset className=" w-[300px] sm:w-[450px] md:w-[600px]  border-2 border-blue-500 p-3 rounded-md">
        <legend className="mb-2 font-semibold">Project Size</legend>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Small"}
            {...register("projectSize", {
              required: {
                value: true,
                message: "Please select the project size!",
              },
            })}
          />
          <span className="ml-2">Small</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Medium"}
            {...register("projectSize", {
              required: {
                value: true,
                message: "Please select the project size!",
              },
            })}
          />
          <span className="ml-2">Medium</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"Large"}
            {...register("projectSize", {
              required: {
                value: true,
                message: "Please select the project size!",
              },
            })}
          />
          <span className="ml-2">Large</span>
        </label>
        {errors.projectSize && (
          <p className="text-red-500">{errors.projectSize.message}</p>
        )}
      </fieldset>
      <label>
        <span className="block mb-2 font-semibold">Client Name</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="text"
          placeholder="Client Name"
          {...register("client", {
            required: {
              value: true,
              message: "Please fill the client name!",
            },
          })}
        />
      </label>
      {errors.client && <p className="text-red-500">{errors.client.message}</p>}
      <button
        type="submit"
        className="bg-blue-500 w-[200px] text-white p-3 rounded-md  my-3"
      >
        Next
      </button>
      <DevTool control={control} />
    </form>
  );
}

export default PrimaryDetailsForm;
