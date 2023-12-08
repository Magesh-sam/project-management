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
        let smallProjectCount = 0;
        let mediumProjectCount = 0;
        let largeProjectCount = 0;
        FullProjectData.forEach((project: projectTableRowProps) => {
          if (project.projectLocation.country === country) {
            if (project.projectSize === "small") {
              smallProjectCount += 1;
            } else if (project.projectSize === "medium") {
              mediumProjectCount += 1;
            } else if (project.projectSize === "large") {
              largeProjectCount += 1;
            }
          }
        });
        return {
          country: country,
          small: smallProjectCount,
          medium: mediumProjectCount,
          large: largeProjectCount,
        };
      }),
    [FullProjectData, countries]
  );
  const filteredData = useMemo(() => {
    return data.filter((data) => {
      return data.small !== 0 || data.medium !== 0 || data.large !== 0;
    });
  }, [data]);

  return (
    <div>
      <h2 className="text-lg font-semibold">
        No of Projects per country by Project size
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
          <Bar dataKey="small" stackId="bar" fill="blue" key={"small"} />
          <Bar dataKey="medium" stackId="bar" fill="orange" key={"medium"} />
          <Bar dataKey="large" stackId="bar" fill="green" key={"large"} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});
