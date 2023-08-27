import { calculateMeanAverage } from "../utils/helperFunction";

const data = require("../../data/emissions.statistics.carbonmonoxide.json");

export async function filterEmission(
  startDate: Date,
  endDate: Date,
  averageValue?: number | null
) {
  try {
    const filteredData = data.filter((item: any) => {
      const intervalStart = new Date(item.time.interval_start);

      if (averageValue) {
        return (
          intervalStart >= startDate &&
          intervalStart <= endDate &&
          item.value.average >= averageValue
        );
      } else {
        return intervalStart >= startDate && intervalStart <= endDate;
      }
    });
    const meanAverage = await calculateMeanAverage(filteredData);
    return { filteredData, meanAverage };
  } catch (error) {
    throw error;
  }
}
