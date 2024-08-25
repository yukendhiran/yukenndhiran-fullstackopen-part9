"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (exports.Gender = Gender = {}));
const parseString = (str) => {
    if (!str || !isString(str)) {
        throw new Error("Incorrect or missing");
    }
    return str;
};
const isString = (text) => {
    return typeof text === "string" || text instanceof String;
};
const isGender = (param) => {
    return Object.values(Gender)
        .map((v) => v.toString())
        .includes(param);
};
const parseGender = (gender) => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error("Incorrect : " + gender);
    }
    return gender;
};
const toNewPatientsEntry = (object) => {
    if (!object || typeof object !== "object") {
        throw new Error("Incorrect or missing data");
    }
    if ("name" in object &&
        "dateOfBirth" in object &&
        "ssn" in object &&
        "gender" in object &&
        "occupation" in object) {
        const newEntry = {
            name: parseString(object.name),
            dateOfBirth: parseString(object.dateOfBirth),
            ssn: parseString(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation),
        };
        return newEntry;
    }
    throw new Error("Incorrect data: some fields are missing");
};
exports.default = toNewPatientsEntry;
