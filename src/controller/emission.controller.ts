import Express from "express";
import { filterEmission } from "../services/emission.service";
export async function emissionController(
  req: Express.Request,
  res: Express.Response
) {
  try {
    const startDateStr = req.query.startDate as string;
    const endDateStr = req.query.endDate as string;
    let averageValueStr = req.query.average as string;
    averageValueStr = averageValueStr ?? null;

    if (!startDateStr || !endDateStr) {
      return res
        .status(400)
        .json({ error: "Both startDate and endDate are required" });
    }

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const averageValue = averageValueStr ? parseFloat(averageValueStr) : null;
    const result = await filterEmission(startDate, endDate, averageValue);

    res.json(result);
  } catch (error) {
    console.log("Error", error);
    return res.sendStatus(500);
  }
}
