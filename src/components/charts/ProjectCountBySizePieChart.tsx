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
import { memo, useMemo } from "react";
import { projectTableRowProps } from "../../lib/types";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

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
export default memo(function ProjectCountBySizePieChart() {
  const FullProjectData = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const smallProjectCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) => project.projectSize === "small"
      ),
    [FullProjectData]
  );
  const mediumProjectCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) => project.projectSize === "medium"
      ),
    [FullProjectData]
  );
  const largeProjectCount = useMemo(
    () =>
      FullProjectData.filter(
        (project: projectTableRowProps) => project.projectSize === "large"
      ),
    [FullProjectData]
  );

  const data = [
    { name: "Small", value: smallProjectCount.length },
    { name: "Medium", value: mediumProjectCount.length },
    { name: "Large", value: largeProjectCount.length },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold">No of Project by Size</h2>
      <ResponsiveContainer
        width={500}
        height={500}
        className="shadow-md p-3 border-2 border-black"
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
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
