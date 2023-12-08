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
        let webDevelopmentCount = 0;
        let mobileAppDevelopmentCount = 0;
        let cloudComputingCount = 0;
        let cyberSecurityCount = 0;
        let blockChainCount = 0;
        let artificialIntelligenceCount = 0;
        FullProjectData.forEach((project: projectTableRowProps) => {
          if (project.projectLocation.country === country) {
            if (project.projectType === "web development") {
              webDevelopmentCount += 1;
            } else if (project.projectType === "mobile app development") {
              mobileAppDevelopmentCount += 1;
            } else if (project.projectType === "cloud computing") {
              cloudComputingCount += 1;
            } else if (project.projectType === "cyber security") {
              cyberSecurityCount += 1;
            } else if (project.projectType === "block chain") {
              blockChainCount += 1;
            } else if (project.projectType === "artificial intelligence") {
              artificialIntelligenceCount += 1;
            }
          }
        });
        return {
          country: country,
          webDevelopment: webDevelopmentCount,
          mobileAppDevelopment: mobileAppDevelopmentCount,
          cloudComputing: cloudComputingCount,
          cyberSecurity: cyberSecurityCount,
          blockChain: blockChainCount,
          artificialIntelligence: artificialIntelligenceCount,
        };
      }),
    [FullProjectData, countries]
  );
  const filteredData = useMemo(() => {
    return data.filter((data) => {
      return (
        data.webDevelopment !== 0 ||
        data.mobileAppDevelopment !== 0 ||
        data.cloudComputing !== 0 ||
        data.cyberSecurity !== 0 ||
        data.blockChain !== 0 ||
        data.artificialIntelligence !== 0
      );
    });
  }, [data]);

  return (
    <div>
      <h2 className="text-lg font-semibold">
        No of Projects per country by Project Type
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
          <Bar
            dataKey="webDevelopment"
            stackId="bar"
            fill="blue"
            key={"webDevelopment"}
          />
          <Bar
            dataKey="mobileAppDevelopment"
            stackId="bar"
            fill="orange"
            key={"mobileAppDevelopment"}
          />
          <Bar
            dataKey="cloudComputing"
            stackId="bar"
            fill="green"
            key={"cloudComputing"}
          />
          <Bar
            dataKey="cyberSecurity"
            stackId="bar"
            fill="purple"
            key={"cyberSecurity"}
          />
          <Bar
            dataKey="blockChain"
            stackId="bar"
            fill="red"
            key={"blockChain"}
          />
          <Bar
            dataKey="artificialIntelligence"
            stackId="bar"
            key={"artificialIntelligence"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});
