import DiagnosisData from "../data/diagnoses";

import { DiagnosisEntry } from "../types/types";

const getEntries = (): Array<DiagnosisEntry> => {
  return DiagnosisData;
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary,
};
