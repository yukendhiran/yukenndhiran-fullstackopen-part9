interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDescription {
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background";
}

interface CoursePartSpecial extends CoursePartDescription {
  requirements: string[];
  kind: "special";
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartDescription
  | CoursePartSpecial;

const Content = (props: { courseParts: CoursePart[] }) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
  return (
    <div>
      {props.courseParts.map((part) => {
        if ("kind" in part) {
          switch (part.kind) {
            case "basic":
              return (
                <p>
                  {part.name} {part.exerciseCount} {part.description}
                </p>
              );
            case "group":
              return (
                <p>
                  {part.name} {part.exerciseCount} {part.groupProjectCount}
                </p>
              );
            case "background":
              return (
                <p>
                  {part.name} {part.exerciseCount} {part.description}{" "}
                  {part.backgroundMaterial}
                </p>
              );
            case "special":
              return (
                <p>
                  {part.name} {part.exerciseCount} {part.description}{" "}
                  {part.requirements}
                </p>
              );
            default:
              return assertNever(part);
          }
        }
      })}
    </div>
  );
};

export default Content;
