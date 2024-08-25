export interface PatientsEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export interface DiagnosisEntry {
  code: string;
  name: string;
  latin?: string;
}

export type NonSensitivePatientsEntry = Omit<PatientsEntry, "ssn">;

export type NewPatientsEntry = Omit<PatientsEntry, "id">;
