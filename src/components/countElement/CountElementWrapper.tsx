import { useMemo, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CountElement from "./CountElement";
import { projectTableRowProps } from "../../lib/types";

function CounterElementWrapper() {
  const ProjectTableData = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const totalProjectCount = useMemo(() => {
    return ProjectTableData.length;
  }, [ProjectTableData]);
  const newProjectCount = useMemo(() => {
    return ProjectTableData.filter(
      (project: projectTableRowProps) => project.projectStatus === "new"
    ).length;
  }, [ProjectTableData]);
  const inProgressProjectCount = useMemo(() => {
    return ProjectTableData.filter(
      (project: projectTableRowProps) => project.projectStatus === "ongoing"
    ).length;
  }, [ProjectTableData]);
  const completedProjectCount = useMemo(() => {
    return ProjectTableData.filter(
      (project: projectTableRowProps) => project.projectStatus === "completed"
    ).length;
  }, [ProjectTableData]);
  const TotalCountComponent = memo(() => (
    <CountElement
      title="Total Projects"
      count={totalProjectCount}
      bgColor="bg-blue-300"
    />
  ));
  const NewCountComponent = memo(() => (
    <CountElement title="New" count={newProjectCount} bgColor="bg-yellow-300" />
  ));
  const InProgressCountComponent = memo(() => (
    <CountElement
      title="In Progress"
      count={inProgressProjectCount}
      bgColor="bg-green-300"
    />
  ));
  const CompletedCountComponent = memo(() => (
    <CountElement
      title="Completed"
      count={completedProjectCount}
      bgColor="bg-red-300"
    />
  ));

  return (
    <section className="flex flex-wrap justify-evenly mt-5 gap-2">
      <TotalCountComponent />
      <NewCountComponent />
      <InProgressCountComponent />
      <CompletedCountComponent />
    </section>
  );
}

export default CounterElementWrapper;
