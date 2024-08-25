import patientsData from "../data/patients";
import {
  PatientsEntry,
  NonSensitivePatientsEntry,
  NewPatientsEntry,
} from "../types/types";
import { v1 as uuid } from "uuid";
const getEntries = (): Array<PatientsEntry> => {
  return patientsData;
};

const getNonSensitiveEntries = (): NonSensitivePatientsEntry[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addEntry = (entry: NewPatientsEntry): PatientsEntry => {
  if (!entry) {
    throw new Error("Entry is undefined or null");
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const id: string = uuid() as string;

  const newEntry = {
    id: id,
    ...entry,
  };

  patientsData.push(newEntry);
  return newEntry;
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries,
};
