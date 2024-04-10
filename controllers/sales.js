import OverallStat from "../models/OverallStat";

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    res.json(overallStats[0]);
  } catch (error) {
    res.json(error);
  }
};
