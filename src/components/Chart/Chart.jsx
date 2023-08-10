import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { useMatchMedia } from "helpers/mediaQuery";
import { tabletChart } from "./chartConfig";
import { StyledChartWrap } from "./StyledChart";

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

const Chart = (props) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const deviseSize = isTablet || isDesktop;

  return (
    <StyledChartWrap id="chart">
      {/* {isMobile && mobileChart} */}
      {deviseSize && tabletChart()}
    </StyledChartWrap>
  );
};

Chart.propTypes = {};

export default Chart;
