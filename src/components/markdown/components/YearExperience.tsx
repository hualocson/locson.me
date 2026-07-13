import React from "react";

const START_DATE = new Date(2023, 0, 1);

const getExperience = (): { years: number; hasPartialYear: boolean } => {
  const now = new Date();
  let years = now.getFullYear() - START_DATE.getFullYear();
  const monthDiff = now.getMonth() - START_DATE.getMonth();
  const dayDiff = now.getDate() - START_DATE.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years -= 1;
  }

  const fullYears = Math.max(years, 0);
  const anniversary = new Date(START_DATE);
  anniversary.setFullYear(START_DATE.getFullYear() + fullYears);

  return {
    years: fullYears,
    hasPartialYear: now.getTime() > anniversary.getTime(),
  };
};

const formatExperienceYears = (
  years: number,
  hasPartialYear: boolean
): string => {
  if (hasPartialYear) {
    return `${years}+`;
  }

  return String(years);
};

const YearExperience: React.FC = () => {
  const { years, hasPartialYear } = getExperience();

  return <span>{formatExperienceYears(years, hasPartialYear)}</span>;
};

export default YearExperience;
