export const Card = ({ statistic, title, children }) => {
  return (
    <div className="relative mt-10">
      {children}
      <div className="bg-white w-full h-56 shadow-md border-2 p-5 rounded-xl">
        <div className="flex flex-col items-end justify-end">
          <span className="text-[1.5rem] text-gray-400">{title}</span>
          <span className="text-[2rem] text-black font-bold">
            {statistic ? statistic : "0"}
          </span>
        </div>
        <hr className="mt-16 mb-5" />
        <div>
          <span className="flex gap-1">
            <strong className="text-green-800">+55%</strong>
            Nesse semana
          </span>
        </div>
      </div>
    </div>
  );
};
