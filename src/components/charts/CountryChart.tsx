import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { geoDataMap } from "../../lib/geoData";
import { projectTableRowProps } from "../../lib/types";

function CountryChart() {
  const FullProjectData = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const countries = [];

  for (const [country] of geoDataMap.entries()) {
    countries.push(country);
  }

  const data = [
    ["Country", "New", "Ongoing", "Completed"],
    ...countries.map((country) => {
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
      return [country, numNew, numOngoing, numCompleted];
    }),
  ];
  const options = {
    chart: {
      title: "Projects by Country",
      subtitle: "No of Projects New, Ongoing and Completed",
    },
    hAxis: {
      title: "Country",
    },
    vAxis: {
      title: "Number of Projects",
    },
    bars: "horizontal",
  };
  return (
    <Chart
      chartType="Bar"
      data={data}
      height={"1920px"}
      width={"650px"}
      options={options}
      className="overflow-auto"
    />
  );
}

export default CountryChart;
