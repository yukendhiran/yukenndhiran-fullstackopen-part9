import patients from "../data/patients-full";
import {
  PatientsEntry,
  NonSensitivePatientsEntry,
  EntryWithoutId,
  Entry,
  NewPatientEntry,
} from "../types/types";
import { v1 as uuid } from "uuid";
const getEntries = (): Array<PatientsEntry> => {
  return patients;
};

const findById = (id: string): PatientsEntry | undefined => {
  const entry = patients.find((p) => p.id === id);
  return entry;
};

const addPatientEntry = (entry: NewPatientEntry): PatientsEntry => {
  const newId: string = uuid();
  const newPatientEntry = {
    id: newId,
    ...entry,
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

const getNonSensitiveEntries = (): NonSensitivePatientsEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addEntry = (patientId: string, entry: EntryWithoutId): Entry => {
  const newId: string = uuid();
  const newEntry = {
    id: newId,
    ...entry,
  };
  const idx: number = patients.findIndex((patient) => patientId === patient.id);
  if (idx === -1) {
    throw Error("Patient not found");
  } else {
    patients[idx].entries.push(newEntry);
    return newEntry;
  }
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries,
  findById,
  addPatientEntry,
};
