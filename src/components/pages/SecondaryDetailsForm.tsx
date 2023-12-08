import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { submitSecondaryProjectDetails } from "../../redux/features/secondaryProjectDetails";
import { secondaryProjectDetailsProps } from "../../lib/types";
import { geoDataMap } from "../../lib/geoData";

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

  const { register, handleSubmit, formState, watch } = secondaryForm;
  const { errors } = formState;
  const countryName = watch("projectLocation.country");
  const validateEndDate = (endDate: string) => {
    const startDate = secondaryForm.getValues("startDate");
    if (endDate > startDate) {
      return true;
    }
  };
  const submitForm = (data: secondaryProjectDetailsProps) => {
    navigate("/contactform");
    dispatch(submitSecondaryProjectDetails(data));
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center gap-4 mt-5 max-w-md mx-auto"
      noValidate
    >
      <h2 className="text-2xl self-start font-bold underline underline-offset-4  my-3 ">
        Project - Secondary Details
      </h2>
      <label className="w-full ">
        <span className="block mb-2">Project Status</span>
        <select
          autoComplete="on"
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
        <select
          autoComplete="on"
          defaultValue={secondaryFormData.projectLocation.country}
          className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md"
          placeholder="Select Country"
          {...register("projectLocation.country", {
            required: {
              value: true,
              message: "Please select the country name",
            },
          })}
        >
          <option value="countries">Select Country</option>
          {Array.from(geoDataMap.keys()).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {countryName?.length > 0 && countryName !== undefined && (
          <select
            defaultValue={secondaryFormData.projectLocation.city}
            className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md mt-3"
            {...register("projectLocation.city", {
              required: {
                value: true,
                message: "Please select the city name",
              },
            })}
          >
            {geoDataMap.get(countryName)?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
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
            validate: {
              dateNotValid: (fieldValue) => {
                return (
                  validateEndDate(fieldValue) ||
                  "End date should be greater than start date"
                );
              },
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
            navigate("/primaryform");
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

export default SecondaryDetailsForm;
