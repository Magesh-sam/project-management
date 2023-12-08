import { Suspense, lazy } from "react";
import { Skeleton } from "../skeleton/Skeleton";

const CountryBySizeBarChart = lazy(
  () => import("../charts/CountryBySizeBarChart")
);

const CountryByStatusBarChart = lazy(
  () => import("../charts/CountryByStatusBarChart")
);
const CountByTechBarChart = lazy(() => import("../charts/CountByTechBarChart"));

const ProjectCountByStatusPieChart = lazy(
  () => import("../charts/ProjectCountByStatusPieChart")
);
const ProjectCountBySizePieChart = lazy(
  () => import("../charts/ProjectCountBySizePieChart")
);
const ProjectCountByTypePieChart = lazy(
  () => import("../charts/ProjectCountByTypePieChart")
);

function Charts() {
  return (
    <main className="flex flex-col gap-5 w-screen min-h-screen   ">
      <h1 className="text-3xl my-3 text-center ">Project Insights</h1>
      <section className="flex justify-around gap-12 flex-wrap mb-5">
        <Suspense
          fallback={<Skeleton className="min-w-[500px] min-h-[500px]" />}
        >
          <CountryByStatusBarChart />
        </Suspense>

        <Suspense
          fallback={<Skeleton className="min-w-[500px] min-h-[500px]" />}
        >
          <ProjectCountByStatusPieChart />
        </Suspense>
      </section>
      <section className="flex justify-around gap-12 flex-wrap mb-5">
        <Suspense
          fallback={<Skeleton className="min-w-[500px] min-h-[500px]" />}
        >
          <CountryBySizeBarChart />
        </Suspense>

        <Suspense
          fallback={<Skeleton className="min-w-[500px] min-h-[500px]" />}
        >
          <ProjectCountBySizePieChart />
        </Suspense>
      </section>
      <section className="flex justify-around gap-12 flex-wrap mb-5">
        <Suspense
          fallback={<Skeleton className="min-w-[500px] min-h-[500px]" />}
        >
          <CountByTechBarChart />
        </Suspense>

        <Suspense
          fallback={<Skeleton className="min-w-[500px] min-h-[500px]" />}
        >
          <ProjectCountByTypePieChart />
        </Suspense>
      </section>
    </main>
  );
}

export default Charts;
