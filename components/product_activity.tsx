import AppLineChart from "./charts/app_line_chart";
import AppPieChart from "./charts/app_pie_chart";

export default function ProductActivity() {
  return (
    <section className="w-full min-h-60 grid grid-cols-1 xl:grid-cols-2 gap-4">
      {/* line chart */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppLineChart />
      </div>

      {/* pie chart */}
      <div className="w-full">
        <AppPieChart />
      </div>
    </section>
  );
}