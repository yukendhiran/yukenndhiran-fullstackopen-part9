import express from "express";
const app = express();
import { calculateBMI } from "./calculateBMI";
import { calculateExercises } from "./exerciseCalculator";

app.use(express.json());

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  if (isNaN(height) || isNaN(weight)) {
    res.send({ error: "malformatted parameters" });
  } else {
    res.send({
      weight: weight,
      height: height,
      bmi: calculateBMI(weight, height),
    });
  }
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { exerciseHours, target } = req.body;
  if (!exerciseHours || !target) {
    res.send({ error: "parameters missing" });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  } else if (isNaN(target) || exerciseHours.some(isNaN)) {
    res.send({ error: "malformatted parameters" });
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.send(calculateExercises(exerciseHours, target));
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
