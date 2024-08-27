interface TotalExercise {
  totalExercises: number;
}

const TotalExercise = (props: TotalExercise) => {
  return <p>Number of exercises {props.totalExercises}</p>;
};

export default TotalExercise;
