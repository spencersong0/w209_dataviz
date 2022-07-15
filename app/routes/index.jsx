export default function Index() {
  return (
    <div
      className="flex flex-col items-center max-w-fit"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <h1> Temporal View</h1>
      <iframe
        src="https://public.tableau.com/views/TemporalViewofAccidents/TemporalView?:showVizHome=no:embed=true"
        width="1400"
        height="875"
      ></iframe>

      <h1>Weather View</h1>
      <iframe
        src="https://public.tableau.com/views/TrafficAccidentsWeather/Dashboard1?:showVizHome=no:embed=true"
        width="1400"
        height="875"
      ></iframe>

      <h1>Road Type View</h1>
      <iframe
        src="https://public.tableau.com/views/W209FinalProject-AllData/Dashboard1?:showVizHome=no:embed=true"
        width="1400"
        height="875"
      ></iframe>

      <h1>France Dashboard</h1>
      <iframe
        src="https://public.tableau.com/views/France_sex_dashboard/Dashboard1?:showVizHome=no:embed=true"
        width="1400"
        height="875"
      ></iframe>
    </div>
  );
}
