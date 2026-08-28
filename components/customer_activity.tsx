import VerticalBarChart from "./charts/vertical_bar_chart";
import HorizontalBarChart from "./charts/horizontal_bar_chart";

export default function CustomerActivity() {
  return (
    <section className="w-full min-h-60 mt-4 flex flex-col xl:flex-row gap-4">
      {/* vertical bar chart */}
      <div className="flex-3">
        <VerticalBarChart />
      </div>

      {/* progress */}
      <div className="flex-2">
        <HorizontalBarChart />
      </div>
    </section>
  );
}