import ProjectGridTable from "../components/ProjectGrid/ProjectGrid";
import { useMemo, useState } from "react";
import CountElement from "./countElement/CountElement";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProjectGrid() {
  const [showAlert, setShowAlert] = useState(true);
  const ProjectTableData = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const totalProjectCount = useMemo(() => {
    return ProjectTableData.length;
  }, [ProjectTableData]);
  const newProjectCount = useMemo(() => {
    return ProjectTableData.filter((project) => project.projectStatus === "new")
      .length;
  }, [ProjectTableData]);
  const inProgressProjectCount = useMemo(() => {
    return ProjectTableData.filter(
      (project) => project.projectStatus === "ongoing"
    ).length;
  }, [ProjectTableData]);
  const completedProjectCount = useMemo(() => {
    return ProjectTableData.filter(
      (project) => project.projectStatus === "completed"
    ).length;
  }, [ProjectTableData]);
  const cancelledProjectTableCount = useMemo(() => {
    return ProjectTableData.filter(
      (project) => project.projectStatus === "cancelled"
    ).length;
  }, [ProjectTableData]);

  return (
    <main className="max-w-full min-h-screen mb-8">
      <h1 className="text-3xl text-center my-3">Project Management</h1>
      <h2 className="text-2xl  my-3 underline underline-offset-4">
        Project Data
      </h2>
      {showAlert && (
        <div className="bg-red-300 px-3 py-2 flex gap-2 my-3 justify-between ">
          <p>This is best viewed in a desktop . Minimum width of 1024px</p>
          <button
            aria-label="close alert button"
            onClick={() => setShowAlert(false)}
          >
            x
          </button>
        </div>
      )}
      <section className="flex flex-wrap justify-evenly mt-5 gap-2">
        <CountElement
          title="Total Projects"
          count={totalProjectCount}
          bgColor="bg-blue-300"
        />
        <CountElement
          title="New"
          count={newProjectCount}
          bgColor="bg-yellow-300"
        />
        <CountElement
          title="Completed"
          count={completedProjectCount}
          bgColor="bg-green-300"
        />
        <CountElement
          title="Ongoing"
          count={inProgressProjectCount}
          bgColor="bg-violet-300"
        />
        <CountElement
          title="Cancelled"
          count={cancelledProjectTableCount}
          bgColor="bg-red-300"
        />
      </section>
      <Link
        to="/charts"
        className="my-5 block underline underline-offset-4 border-2 p-1 pl-3 hover:no-underline border-transparent  hover:border-black max-w-[250px] hover:bg-blue-500 hover:text-white "
      >
        View More Graphical Insights
      </Link>
      <ProjectGridTable />
    </main>
  );
}

export default ProjectGrid;
