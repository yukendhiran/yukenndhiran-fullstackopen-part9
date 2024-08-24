export function calculateBMI(weight: number, height: number): string {
  const heightMeter = height / 100;
  const bmi = weight / (heightMeter * heightMeter);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal (healthy weight)";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

interface BMIValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: string[]): BMIValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

try {
  if (require.main === module) {
    const { value1, value2 } = parseArguments(process.argv);
    const BMI = calculateBMI(value1, value2);
    console.log(BMI);
  }
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
