import express from "express";
import patientsService from "../services/patientsService";
import { NonSensitivePatientsEntry, PatientsEntry } from "../types/types";
import { toNewPatientEntry, toNewEntry } from "../utils";

const patientsRouter = express.Router();

patientsRouter.get("/", (_req, res) => {
  const data: NonSensitivePatientsEntry[] =
    patientsService.getNonSensitiveEntries();
  res.json(data);
});

patientsRouter.get("/:id", (req, res) => {
  const data: PatientsEntry = patientsService.findById(
    req.params.id
  ) as PatientsEntry;
  return data ? res.json(data) : res.json({ error: "Patient not found" });
});

patientsRouter.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedPatient = patientsService.addPatientEntry(newPatientEntry);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

patientsRouter.post("/:id/entries", (req, res) => {
  try {
    const newEntry = toNewEntry(req.body);
    const addedEntry = patientsService.addEntry(req.params.id, newEntry);

    return res.json(addedEntry);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    } else {
      return res.status(400).json({ error: "Unknown error occurred" });
    }
  }
});

export default patientsRouter;
