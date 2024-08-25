"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsService_1 = __importDefault(require("../services/patientsService"));
const utils_1 = __importDefault(require("../utils"));
const patientsRouter = express_1.default.Router();
patientsRouter.get("/", (_req, res) => {
    res.send(patientsService_1.default.getNonSensitiveEntries());
});
patientsRouter.post("/", (req, res) => {
    try {
        const newPatientEntry = (0, utils_1.default)(req.body);
        const addedPatient = patientsService_1.default.addEntry(newPatientEntry);
        res.json(addedPatient);
    }
    catch (error) {
        let errorMessage = "Something went wrong.";
        if (error instanceof Error) {
            errorMessage += " Error: " + error.message;
        }
        res.status(400).send(errorMessage);
    }
});
exports.default = patientsRouter;
