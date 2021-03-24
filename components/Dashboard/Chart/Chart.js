import dynamic from "next/dynamic";

const SUBMODULES = ["Bar", "Pie", 'Line'];

const Chart = {};

for (let submodule of SUBMODULES) {
  Chart[submodule] = dynamic(() => import(`./${submodule}/${submodule}`), {
    ssr: false,
  });
}

export default Chart;
