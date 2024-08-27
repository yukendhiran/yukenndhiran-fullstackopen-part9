import DiagnosisData from "../data/diagnoses";

import { Diagnose } from "../types/types";

const getEntries = (): Array<Diagnose> => {
  return DiagnosisData;
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary,
};
