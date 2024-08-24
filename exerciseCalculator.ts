interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export function calculateExercises(
  exerciseHours: number[],
  target: number
): ExerciseResult {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter((hours) => hours > 0).length;
  const average =
    exerciseHours.reduce((sum, hours) => sum + hours, 0) / periodLength;

  let rating: number;
  let ratingDescription: string;

  if (average >= target) {
    rating = 3;
    ratingDescription = "great job!";
  } else if (average >= target * 0.8) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "you could do better";
  }

  return {
    periodLength,
    trainingDays,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average,
  };
}

if (require.main === module) {
  if (process.argv.length !== 4) {
    console.error(
      "Usage: ts-node exerciseCalculator.ts <exerciseHours> <target>"
    );
    process.exit(1);
  }

  const exerciseHours = process.argv[2].split(",").map(Number);
  const target = Number(process.argv[3]);

  if (exerciseHours.some(isNaN) || isNaN(target)) {
    console.error("Invalid input: exercise hours and target must be numbers");
    process.exit(1);
  }

  const result = calculateExercises(exerciseHours, target);
  console.log(result);
}
