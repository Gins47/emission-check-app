import { EmissionData } from "../interfaces/emission.interface";

export function transformObject(input: any): any {
  if (typeof input === "object" && input !== null) {
    const result: any = {};
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        if (typeof input[key] === "number") {
          result[key] = input[key] + 1;
        } else if (typeof input[key] === "string") {
          result[key] = input[key] + " AE";
        } else if (Array.isArray(input[key])) {
          result[key] = input[key].map((item: any) => {
            if (typeof item === "number") {
              return item + 1;
            }
            return item;
          });
        } else if (typeof input[key] === "object") {
          result[key] = transformObject(input[key]);
        }
      }
    }

    return result;
  } else {
    return input;
  }
}

/**
 * This function is for calculating the mean average
 * @param data
 * @returns
 */
export function calculateMeanAverage(data: EmissionData[]) {
  if (data.length === 0) {
    return 0;
  }

  const sum = data.reduce((total, item) => total + item.value.average, 0);
  return sum / data.length;
}
