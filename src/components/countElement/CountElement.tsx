interface CounterElementProps {
  count: number;
  title: string;
  bgColor?: string;
  textColor?: string;
}

function CountElement({
  count,
  title,
  bgColor,
  textColor,
}: CounterElementProps) {
  return (
    <div
      className={`flex flex-col gap-2 w-[180px] p-3 border-black border ${bgColor} ${textColor}`}
    >
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
}

export default CountElement;
