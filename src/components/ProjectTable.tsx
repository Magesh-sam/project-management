import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

function ProjectTable() {
  const projectDetails = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const reversedProjectDetails = [...projectDetails].reverse();
  const navigate = useNavigate();
  return (
    <main className="max-w-screen overflow-hidden">
      <button
        className="bg-blue-500 text-white p-3 rounded-md ml-8 w-[200px] fixed top-2 left-2 "
        onClick={() => navigate("/primaryform")}
      >
        Add new record
      </button>
      <table className=" block border-collapse border-2 border-blue-500  whitespace-nowrap mt-[120px] max-w-[95vw] overflow-scroll mb-8">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">Id</th>
            <th className="p-2 border border-gray-300">Project Name</th>
            <th className="p-2 border border-gray-300">Project Description</th>
            <th className="p-2 border border-gray-300">Project Type</th>
            <th className="p-2 border border-gray-300">Project Size</th>
            <th className="p-2 border border-gray-300">Client</th>
            <th className="p-2 border border-gray-300">Project Status</th>
            <th className="p-2 border border-gray-300">Project Location</th>
            <th className="p-2 border border-gray-300">Start Date</th>
            <th className="p-2 border border-gray-300">End Date</th>
            <th className="p-2 border border-gray-300">Email</th>
            <th className="p-2 border border-gray-300">Alternative Email</th>
            <th className="p-2 border border-gray-300">Contact No</th>
            <th className="p-2 border border-gray-300">Emergency Contact No</th>
          </tr>
        </thead>
        <tbody>
          {reversedProjectDetails.map((project, index) => {
            return (
              <tr key={project.id}>
                <td className="p-2 border border-gray-300">{index + 1}</td>
                <td className="p-2 border border-gray-300">
                  {project.projectName}
                </td>
                <td className="p-2 border border-gray-300">
                  {project.projectDescription}
                </td>
                <td className="p-2 border border-gray-300">
                  {project.projectType}
                </td>
                <td className="p-2 border border-gray-300">
                  {project.projectSize}
                </td>
                <td className="p-2 border border-gray-300">{project.client}</td>
                <td className="p-2 border border-gray-300">
                  {project.projectStatus}
                </td>
                <td className="p-2 border border-gray-300">
                  {project.projectLocation.city},{" "}
                  {project.projectLocation.country}
                </td>

                <td className="p-2 border border-gray-300">
                  {project.startDate}
                </td>
                <td className="p-2 border border-gray-300">
                  {project.endDate}
                </td>
                <td className="p-2 border border-gray-300">{project.email}</td>
                <td className="p-2 border border-gray-300">
                  {project.alternativeEmail}
                </td>
                <td className="p-2 border border-gray-300">
                  {project.contactNo}
                </td>
                <td className="p-2 border border-gray-300">
                  {project.emergencyContactNo}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default ProjectTable;
