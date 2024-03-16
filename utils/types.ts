export type ProjectTypesType = "solo" | "team" | "all";

export type ProjectType = {
  name: string;
  description: string;
  type: Omit<ProjectTypesType, "all">;
  image: string;
  link: string;
};

export type SvgProps = {
  className?: string;
};
