import { useMemo, memo } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RootState } from "../../redux/store";
import { geoDataMap } from "../../lib/geoData";
import { projectTableRowProps } from "../../lib/types";
export default memo(function CountryByStatusBarChart() {
  const FullProjectData = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const countries: string[] = useMemo(() => {
    return Array.from(geoDataMap.keys());
  }, []);

  const data = useMemo(
    () =>
      countries.map((country) => {
        let numNew = 0;
        let numOngoing = 0;
        let numCompleted = 0;
        FullProjectData.forEach((project: projectTableRowProps) => {
          if (project.projectLocation.country === country) {
            if (project.projectStatus === "new") {
              numNew += 1;
            } else if (project.projectStatus === "ongoing") {
              numOngoing += 1;
            } else if (project.projectStatus === "completed") {
              numCompleted += 1;
            }
          }
        });
        return {
          country: country,
          new: numNew,
          ongoing: numOngoing,
          completed: numCompleted,
        };
      }),
    [FullProjectData, countries]
  );
  const filteredData = useMemo(() => {
    return data.filter((data) => {
      return data.new !== 0 || data.ongoing !== 0 || data.completed !== 0;
    });
  }, [data]);

  return (
    <div>
      <h2 className="text-lg font-semibold">
        No of Projects per country by Project status
      </h2>

      <ResponsiveContainer
        width={700}
        height={500}
        className="shadow-md p-3 border-2 border-black"
      >
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend offset={10} />
          <Bar dataKey="new" stackId="bar" fill="blue" key={"new"} />
          <Bar dataKey="ongoing" stackId="bar" fill="orange" key={"ongoing"} />
          <Bar
            dataKey="completed"
            stackId="bar"
            fill="green"
            key={"completed"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});
