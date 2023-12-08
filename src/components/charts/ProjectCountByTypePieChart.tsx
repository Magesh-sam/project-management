import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { RootState } from "../../redux/store";
import { useMemo, memo } from "react";
import { projectTableRowProps } from "../../lib/types";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#ff0000",
  "#84437F",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default memo(function ProjectCountByTypePieChart() {
  const FullProjectData = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const webDevelopmentCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) =>
          project.projectType === "web development"
      ),
    [FullProjectData]
  );
  const mobileAppDevelopmentCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) =>
          project.projectType === "mobile app development"
      ),
    [FullProjectData]
  );
  const artificialIntelligenceCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) =>
          project.projectType === "artificial intelligence"
      ),
    [FullProjectData]
  );
  const cyberSecurityCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) =>
          project.projectType === "cyber security"
      ),
    [FullProjectData]
  );
  const blockchainCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) => project.projectType === "block chain"
      ),
    [FullProjectData]
  );
  const cloudComputingCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) =>
          project.projectType === "cloud computing"
      ),
    [FullProjectData]
  );

  const data = [
    { name: "Web Development", value: webDevelopmentCount.length },
    { name: "Mobile App Development", value: mobileAppDevelopmentCount.length },
    {
      name: "Artificial Intelligence",
      value: artificialIntelligenceCount.length,
    },
    { name: "Cyber Security", value: cyberSecurityCount.length },
    { name: "Blockchain", value: blockchainCount.length },
    { name: "Cloud Computing", value: cloudComputingCount.length },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold">No of Project by Tech</h2>
      <ResponsiveContainer
        width={500}
        height={500}
        className="shadow-md p-3 border-2 border-black"
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            // cx={200}
            // cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            // outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
});
