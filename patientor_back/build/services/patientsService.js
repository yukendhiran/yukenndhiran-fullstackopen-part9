"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../data/patients"));
const uuid_1 = require("uuid");
const getEntries = () => {
    return patients_1.default;
};
const getNonSensitiveEntries = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const addEntry = (entry) => {
    if (!entry) {
        throw new Error("Entry is undefined or null");
    }
    const id = (0, uuid_1.v1)();
    const newEntry = Object.assign({ id: id }, entry);
    patients_1.default.push(newEntry);
    return newEntry;
};
exports.default = {
    getEntries,
    addEntry,
    getNonSensitiveEntries,
};
