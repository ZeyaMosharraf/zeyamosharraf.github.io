export interface Skill {
  name: string;
  percentage: number;
}

export const programmingSkills: Skill[] = [
  {
    name: "Python (Pandas, NumPy, Scikit-learn)",
    percentage: 90
  },
  {
    name: "SQL",
    percentage: 85
  },
  {
    name: "R",
    percentage: 75
  },
  {
    name: "Excel (Advanced)",
    percentage: 95
  }
];

export const visualizationSkills: Skill[] = [
  {
    name: "Tableau",
    percentage: 85
  },
  {
    name: "Power BI",
    percentage: 90
  },
  {
    name: "Matplotlib/Seaborn",
    percentage: 80
  },
  {
    name: "Google Data Studio",
    percentage: 75
  }
];

export const additionalSkills: string[] = [
  "Statistical Analysis",
  "Machine Learning",
  "Data Cleaning",
  "ETL Processes",
  "Database Management",
  "Data Modeling",
  "A/B Testing",
  "Regression Analysis",
  "Git/Version Control"
];
