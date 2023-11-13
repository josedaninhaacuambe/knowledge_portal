import ReactApexChart from "react-apexcharts";
import Spinner from "../Spinner";

const Charts = ({
  isLoading,
  statistic,
  categories,
  series,
  title,
  children,
}) => {
  return (
    <div className="text-typography transition-shadow duration-300 overflow-hidden h-full">
      <div className="m-0 box-border p-3">
        <div className="flex flex-row items-center gap-x-2 m-0 mb-1">
          {children}
          <span className="text-typography text-sm font-inter font-semibold">
            {title}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-28 p-3">
        <h3 className="text-typography m-0 text-2xl font-semibold font-inter">
          {isLoading ? <Spinner /> : ""}
          <span>{statistic ? statistic : "-"}</span>
        </h3>
        {!isLoading && (
          <div className="">
            <ReactApexChart
              type="area"
              series={[
                {
                  name: title,
                  data: series,
                },
              ]}
              options={{
                chart: {
                  type: "area",
                },
                colors: ["#2F80ED", "#48BB78", "#F56565"],
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: "straight",
                  width: 2,
                },
                xaxis: {
                  labels: {
                    show: false,
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                  categories: categories,
                },
                yaxis: {
                  labels: {
                    show: false,
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                grid: {
                  show: false,
                },
              }}
              width={140}
              height={110}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Charts;
