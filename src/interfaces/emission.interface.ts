export interface EmissionData {
  time: {
    interval_start: string;
    max: string;
    min: string;
  };
  value: {
    average: number;
    count: number;
    max: number;
    min: number;
    "standard deviation": number;
  };
}
