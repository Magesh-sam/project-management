import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { submitSecondaryProjectDetails } from "../redux/features/secondaryProjectDetails";
import { secondaryProjectDetailsProps } from "../lib/types";

function SecondaryDetailsForm() {
  const secondaryFormData = useSelector(
    (state: RootState) => state.secondaryProjectDetails.secondaryProjectDetails
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const secondaryForm = useForm<secondaryProjectDetailsProps>({
    defaultValues: {
      ...secondaryFormData,
    },
  });

  const { register, handleSubmit, control, formState } = secondaryForm;
  const { errors } = formState;
  const submitForm = (data: secondaryProjectDetailsProps) => {
    dispatch(submitSecondaryProjectDetails(data));
    navigate("/contactform");
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center gap-4 mt-5 max-w-md mx-auto"
      noValidate
    >
      <label className="w-full ">
        <span className="block mb-2">Project Status</span>
        <select
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          {...register("projectStatus", {
            required: {
              value: true,
              message: "Please select the project status",
            },
          })}
        >
          <option value="new">New</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </label>
      {errors.projectStatus && (
        <p className="text-red-500">{errors.projectStatus.message}</p>
      )}
      <label className="w-full ">
        <span className="block mb-2">Project Location</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="text"
          placeholder="Country"
          {...register("projectLocation.country", {
            required: {
              value: true,
              message: "Please enter the country name",
            },
          })}
        />
        {errors.projectLocation && (
          <p className="text-red-500">
            {errors.projectLocation.country?.message}
          </p>
        )}
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md mt-2"
          type="text"
          placeholder="City"
          {...register("projectLocation.city", {
            required: {
              value: true,
              message: "Please enter the city name",
            },
          })}
        />
        {errors.projectLocation && (
          <p className="text-red-500">{errors.projectLocation.city?.message}</p>
        )}
      </label>
      <label className="w-full">
        <span className="block mb-2">Start Date</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="date"
          placeholder="Start Date"
          {...register("startDate", {
            required: {
              value: true,
              message: "Please select the start date",
            },
          })}
        />
        {errors.startDate && (
          <p className="text-red-500">{errors.startDate.message}</p>
        )}
      </label>
      <label className="w-full">
        <span className="block mb-2">End Date</span>
        <input
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          type="date"
          placeholder="End Date"
          {...register("endDate", {
            required: {
              value: true,
              message: "Please select  the end date",
            },
          })}
        />
        {errors.endDate && (
          <p className="text-red-500">{errors.endDate.message}</p>
        )}
      </label>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="border-2 border-blue-500  p-3 rounded-md"
          onClick={() => {
            navigate("/");
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

export default SecondaryDetailsForm;
