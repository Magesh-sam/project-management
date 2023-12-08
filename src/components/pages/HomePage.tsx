import { Suspense, lazy } from "react";

import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import CounterSkeleton from "../skeleton/CounterSkeleton";
const ProjectTable = lazy(() => import("../projectDataTable/ProjectTable"));
const CounterElementWrapper = lazy(
  () => import("../countElement/CountElementWrapper")
);

function HomePage() {
  return (
    <main className="max-w-full min-h-screen mb-8">
      <h1 className="text-3xl text-center my-3">Project Management</h1>
      <div className="bg-[#466596] text-white font-semibold px-3 py-2 flex gap-2 my-3 justify-center ">
        <p>
          This is best viewed in a desktop . Minimum width of 1024px | Optimized
          for desktop
        </p>
      </div>

      <Suspense fallback={<CounterSkeleton />}>
        <CounterElementWrapper />
      </Suspense>
      <Link
        to="/charts"
        className="my-5 block underline underline-offset-4 border-2 p-1 pl-3 hover:no-underline border-transparent  hover:border-black max-w-[250px] hover:bg-blue-500 hover:text-white "
      >
        View More Graphical Insights
      </Link>
      <Suspense
        fallback={
          <Skeleton className="max-w-[80vw] min-h-[80vh] min-w-[320px]" />
        }
      >
        <ProjectTable />
      </Suspense>
    </main>
  );
}

export default HomePage;
