import { useRef } from "react";

export default function Index() {
  const team = useRef(null);
  const temporal = useRef(null);
  const weather = useRef(null);
  const road = useRef(null);
  const france = useRef(null);
  const top = useRef(null);

  const handleClick = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-800">
      <nav
        className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 sticky top-0 z-50"
        style={{ padding: "20px" }}
      >
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  onClick={() => handleClick(top)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Back To Top
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick(team)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Meet The Team
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick(temporal)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Temporal View
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick(weather)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Weather View
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick(road)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Road Type View
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick(france)}
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  France View
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1
        ref={top}
        className="flex flex-wrap justify-center text-6xl text-slate-100"
        style={{ paddingTop: "25px" }}
      >
        Traffic Accidents
      </h1>
      <div className="container flex flex-wrap justify-center items-center mx-auto position: relative">
        <iframe
          src="https://public.tableau.com/views/TemporalViewofAccidents/TemporalView?:showVizHome=no:embed=true"
          width="1400"
          height="875"
          ref={temporal}
          style={{ paddingTop: "25px" }}
        ></iframe>

        <iframe
          src="https://public.tableau.com/views/TrafficAccidentsWeather/Dashboard1?:showVizHome=no:embed=true"
          width="1400"
          height="875"
          ref={weather}
        ></iframe>

        <iframe
          src="https://public.tableau.com/views/W209FinalProject-AllData/Dashboard1?:showVizHome=no:embed=true"
          width="1400"
          height="875"
          ref={road}
        ></iframe>

        <iframe
          src="https://public.tableau.com/views/France_sex_dashboard/Dashboard1?:showVizHome=no:embed=true"
          width="1000"
          height="875"
          ref={france}
          style={{
            paddingTop: "25px",
            alignItems: "center",
          }}
        ></iframe>
      </div>
    </div>
  );
}
