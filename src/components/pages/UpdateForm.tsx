import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { geoDataMap } from "../../lib/geoData";
import { projectDetailsProps } from "../../lib/types";
import { updateProjectTableDetails } from "../../redux/features/projectTable";
import { useEffect } from "react";

const UpdateForm = () => {
  const location = useLocation();
  console.log("location from hook", location);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state === null || location.state === undefined) {
      console.log("navigate from useEffect", location.state);
      navigate("/");
      return;
    }
  }, [navigate, location]);
  const state = location.state;
  const projectData = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const dispatch = useDispatch<AppDispatch>();

  const projectDefaultValue = projectData.find(
    (project) => project.id === state.id
  );
  const defaultValues = {
    projectName: projectDefaultValue?.projectName,
    projectDescription: projectDefaultValue?.projectDescription,
    projectType: projectDefaultValue?.projectType,
    projectSize: projectDefaultValue?.projectSize,
    client: projectDefaultValue?.client,
    projectStatus: projectDefaultValue?.projectStatus,
    projectLocation: {
      country: projectDefaultValue?.projectLocation?.country,
      city: projectDefaultValue?.projectLocation?.city,
    },
    startDate: projectDefaultValue?.startDate,
    endDate: projectDefaultValue?.endDate,
    email: projectDefaultValue?.email,
    alternativeEmail: projectDefaultValue?.alternativeEmail,
    contactNo: projectDefaultValue?.contactNo,
    emergencyContactNo: projectDefaultValue?.emergencyContactNo,
  };
  const updateFormData = useForm<projectDetailsProps>({
    defaultValues: {
      ...defaultValues,
    },
  });
  const { handleSubmit, register, watch } = updateFormData;
  const countryName =
    watch("projectLocation.country") || defaultValues.projectLocation.country;
  const cityName =
    watch("projectLocation.city") || defaultValues.projectLocation.city;

  const onSubmit = (data: projectDetailsProps) => {
    console.log({ ...data, id: state.id });
    dispatch(updateProjectTableDetails({ ...data, id: state.id }));
    navigate("/");
  };

  return (
    <form
      className="min-w-[340px] w-[700px] mx-auto p-6 bg-white rounded-md shadow-md"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className="text-2xl font-bold mb-4 text-center bg-[#f3a950] p-2">
        Project Update Form
      </h2>

      <div className="mb-4">
        <label
          htmlFor="projectName"
          className="block text-sm font-bold text-gray-700"
        >
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          {...register("projectName")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="projectDescription"
          className="block text-sm font-bold text-gray-700"
        >
          Project Description
        </label>
        <textarea
          id="projectDescription"
          {...register("projectDescription")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        ></textarea>
      </div>

      <fieldset className=" w-[300px] sm:w-[450px] md:w-[600px] border-2 border-blue-500 p-3 rounded-md">
        <legend className="mb-2 font-semibold">Project Type</legend>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"web development"}
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
            value={"mobile app development"}
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
            value={"cloud computing"}
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
            value={"artificial intelligence"}
            {...register("projectType", {
              required: {
                value: true,
                message: "Please select the project type!",
              },
            })}
          />
          <span className="ml-2">Artificial Intelligence</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"block chain"}
            {...register("projectType", {
              required: {
                value: true,
                message: "Please select the project type!",
              },
            })}
          />
          <span className="ml-2">Blockchain</span>
        </label>
      </fieldset>

      <fieldset className=" w-[300px] sm:w-[450px] md:w-[600px]  border-2 border-blue-500 p-3 rounded-md">
        <legend className="mb-2 font-semibold">Project Size</legend>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value={"small"}
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
            value={"medium"}
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
            value={"large"}
            {...register("projectSize", {
              required: {
                value: true,
                message: "Please select the project size!",
              },
            })}
          />
          <span className="ml-2">Large</span>
        </label>
      </fieldset>

      <div className="mb-4">
        <label
          htmlFor="client"
          className="block text-sm font-bold text-gray-700"
        >
          Client
        </label>
        <input
          type="text"
          id="client"
          {...register("client")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        />
      </div>

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

      <label className="w-full ">
        <span className="block mb-2">Project Location</span>
        <>
          <select
            autoComplete="on"
            defaultValue={countryName}
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
          {countryName && countryName.length > 0 && (
            <p className="font-semibold">Selected Country: {countryName}</p>
          )}
        </>
        {countryName &&
          countryName?.length > 0 &&
          countryName !== undefined && (
            <>
              <select
                defaultValue={cityName}
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
              {cityName && cityName.length > 0 && (
                <p className="font-semibold">Selected City: {cityName}</p>
              )}
            </>
          )}
      </label>

      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="block text-sm font-bold text-gray-700"
        >
          Start Date
        </label>
        <input
          type="text"
          id="startDate"
          {...register("startDate")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="endDate"
          className="block text-sm font-bold text-gray-700"
        >
          End Date
        </label>
        <input
          type="text"
          id="endDate"
          {...register("endDate")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="alternativeEmail"
          className="block text-sm font-bold text-gray-700"
        >
          Alternative Email
        </label>
        <input
          type="text"
          id="alternativeEmail"
          {...register("alternativeEmail")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="contactNo"
          className="block text-sm font-bold text-gray-700"
        >
          Contact Number
        </label>
        <input
          type="text"
          id="contactNo"
          {...register("contactNo")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="emergencyContactNo"
          className="block text-sm font-bold text-gray-700"
        >
          Emergency Contact Number
        </label>
        <input
          type="text"
          id="emergencyContactNo"
          {...register("emergencyContactNo")}
          className="mt-1 p-2  rounded w-full border-2 border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateForm;
