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

  const { register, handleSubmit, control } = secondaryForm;
  const submitForm = (data: secondaryProjectDetailsProps) => {
    dispatch(submitSecondaryProjectDetails(data));
    navigate("/contactform");
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center gap-4 mt-5 max-w-md mx-auto"
    >
      <label className="w-full">
        <span className="block mb-2">Project Status</span>
        <select
          className="w-full border-2 border-blue-500 p-3 rounded-md"
          {...register("projectStatus", { required: true })}
        >
          <option>--Select--</option>
          <option value={"ongoing"}>New</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </label>
      <label className="w-full">
        <span className="block mb-2">Project Location</span>
        <input
          className="w-full border-2 border-blue-500 p-3 rounded-md"
          type="text"
          placeholder="Country"
          {...register("projectLocation.country", { required: true })}
        />
        <input
          className="w-full border-2 border-blue-500 p-3 rounded-md mt-2"
          type="text"
          placeholder="City"
          {...register("projectLocation.city", { required: true })}
        />
      </label>
      <label className="w-full">
        <span className="block mb-2">Start Date</span>
        <input
          className="w-full border-2 border-blue-500 p-3 rounded-md"
          type="date"
          placeholder="Start Date"
          {...register("startDate", { required: true })}
        />
      </label>
      <label className="w-full">
        <span className="block mb-2">End Date</span>
        <input
          className="w-full border-2 border-blue-500 p-3 rounded-md"
          type="date"
          placeholder="End Date"
          {...register("endDate", { required: true })}
        />
      </label>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="border-2 border-blue-500  p-3 rounded-md"
          onClick={() => {
            navigate(-1);
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
