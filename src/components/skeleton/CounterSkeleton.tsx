import { Skeleton } from "@mui/material";

function CounterSkeleton() {
  return (
    <div className="flex flex-wrap justify-evenly mt-5 gap-2 min-h-[120px]">
      <Skeleton className="w-[180px] h-[120px]" />
      <Skeleton className="w-[180px] h-[120px]" />
      <Skeleton className="w-[180px] h-[120px]" />
      <Skeleton className="w-[180px] h-[120px]" />
    </div>
  );
}

export default CounterSkeleton;
