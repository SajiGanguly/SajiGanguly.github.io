import React from "react";

export const MONTHS_MAP: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

export interface FormattedTenure {
  short: string; // e.g. "1m", "5m", "1y 3m", "2y"
  medium: string; // e.g. "1 mo", "5 mos", "1 yr 3 mos", "2 yrs"
  full: string; // e.g. "1 month", "5 months", "1 year 3 months", "2 years"
  years: number;
  months: number; // remaining months (0-11)
  totalMonths: number;
}

export interface ExperienceItemInput {
  role: string;
  company: string;
  location: string;
  /**
   * Optional! If omitted, automatically generated from startDate or the current update time (new Date()).
   */
  duration?: string;
  /**
   * Optional start date (e.g. "Jul 2026" or Date). If omitted for a current role,
   * automatically set to the current month & year at the time of the update.
   */
  startDate?: string | Date;
  /**
   * Optional end date (e.g. "May 2025" or "Present"). If omitted for a current role, defaults to "Present".
   */
  endDate?: string | Date;
  status: "Completed" | "Current" | string;
  /**
   * Optional! If omitted, automatically calculated from the dates and current time.
   */
  tenureMonths?: number;
  /**
   * Optional! If omitted, automatically calculated from role status and tenure.
   */
  progress?: number;
  skills: string[];
  description: React.ReactNode;
  updatedAt?: string | Date;
}

export interface ResolvedExperienceItem extends ExperienceItemInput {
  duration: string;
  tenureMonths: number;
  progress: number;
  formattedTenure: FormattedTenure;
}

/**
 * Parses a date string part (e.g. "Jul 2026", "2024", "Present", "07/2026")
 */
export function parseDatePart(
  part?: string | Date,
  isEnd: boolean = false,
  refDate: Date = new Date()
): { year: number; month: number; isPresent: boolean } | null {
  if (part instanceof Date) {
    return {
      year: part.getFullYear(),
      month: part.getMonth(),
      isPresent: false,
    };
  }

  const trimmed = (part || "").trim().toLowerCase();
  if (!trimmed || /^(present|current|now|ongoing)$/i.test(trimmed)) {
    return {
      year: refDate.getFullYear(),
      month: refDate.getMonth(),
      isPresent: true,
    };
  }

  // Handle MM/YYYY or M/YYYY
  const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{4})$/);
  if (slashMatch) {
    const month = Math.max(0, Math.min(11, parseInt(slashMatch[1], 10) - 1));
    const year = parseInt(slashMatch[2], 10);
    return { year, month, isPresent: false };
  }

  // Handle "Month YYYY" or just "YYYY"
  const match = trimmed.match(/(?:([a-z]+)\s+)?(\d{4})/);
  if (match) {
    const monthStr = match[1];
    const year = parseInt(match[2], 10);
    const month =
      monthStr && MONTHS_MAP[monthStr] !== undefined
        ? MONTHS_MAP[monthStr]
        : isEnd
        ? 11
        : 0;
    return { year, month, isPresent: false };
  }

  return null;
}

/**
 * Dynamically calculates the tenure in months from a duration string or start/end dates.
 */
export function calculateTenureMonths(
  duration?: string,
  startDate?: string | Date,
  endDate?: string | Date,
  refDate: Date = new Date()
): number {
  if (startDate) {
    const start = parseDatePart(startDate, false, refDate);
    const end = parseDatePart(endDate || "present", true, refDate);
    if (start && end) {
      const diff = (end.year - start.year) * 12 + (end.month - start.month) + 1;
      return Math.max(1, diff);
    }
  }

  if (!duration) {
    // If neither duration nor startDate is given, it starts from the current update time -> 1 month
    return 1;
  }

  const parts = duration.split(/\s*[-–—]\s*|\s+to\s+/i);
  const startPart = parts[0];
  const endPart = parts.length > 1 ? parts[1] : "present";

  const start = parseDatePart(startPart, false, refDate);
  const end = parseDatePart(endPart, true, refDate);

  if (!start || !end) return 1;

  const diff = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  return Math.max(1, diff);
}

/**
 * Formats months into readable year and month strings
 */
export function formatTenure(totalMonths: number): FormattedTenure {
  const safeMonths = Math.max(1, Math.round(totalMonths));
  const years = Math.floor(safeMonths / 12);
  const remainingMonths = safeMonths % 12;

  let short = "";
  let medium = "";
  let full = "";

  if (years === 0) {
    short = `${safeMonths}m`;
    medium = safeMonths === 1 ? "1 mo" : `${safeMonths} mos`;
    full = `${safeMonths} month${safeMonths === 1 ? "" : "s"}`;
  } else if (remainingMonths === 0) {
    short = `${years}y`;
    medium = `${years} yr${years > 1 ? "s" : ""}`;
    full = `${years} year${years > 1 ? "s" : ""}`;
  } else {
    short = `${years}y ${remainingMonths}m`;
    const moText = remainingMonths === 1 ? "1 mo" : `${remainingMonths} mos`;
    medium = `${years} yr ${moText}`;
    full = `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${
      remainingMonths === 1 ? "" : "s"
    }`;
  }

  return {
    short,
    medium,
    full,
    years,
    months: remainingMonths,
    totalMonths: safeMonths,
  };
}

/**
 * Calculates the progress ring percentage (0 - 100)
 */
export function calculateProgress(
  status: string,
  totalMonths: number,
  explicitProgress?: number
): number {
  if (typeof explicitProgress === "number") {
    return Math.min(100, Math.max(0, explicitProgress));
  }
  const isCurrent = /current|present|in progress/i.test(status);
  if (!isCurrent) {
    return 100;
  }
  // For current role: progress throughout the active annual cycle
  const cycleMonth = ((totalMonths - 1) % 12) + 1;
  return Math.min(100, Math.round((cycleMonth / 12) * 100));
}

/**
 * Resolves an experience item with dynamic date, tenure, formatted display, and progress.
 * If duration / dates are omitted, they are automatically generated from the current time.
 */
export function resolveExperienceItem(
  item: ExperienceItemInput,
  refDate: Date = new Date()
): ResolvedExperienceItem {
  const now = refDate;
  const currentMonthName = now.toLocaleString("en-US", { month: "short" });
  const currentYear = now.getFullYear();
  const isCurrent =
    /current|present/i.test(item.status) ||
    /present|current/i.test(item.duration || "") ||
    /present|current/i.test(
      typeof item.endDate === "string" ? item.endDate : ""
    );

  // Dynamically resolve duration if not provided
  let duration = item.duration;
  if (!duration) {
    if (item.startDate) {
      const startStr =
        typeof item.startDate === "string"
          ? item.startDate
          : item.startDate.toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            });
      const endStr = item.endDate
        ? typeof item.endDate === "string"
          ? item.endDate
          : item.endDate.toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })
        : isCurrent
        ? "Present"
        : `${currentMonthName} ${currentYear}`;
      duration = `${startStr} - ${endStr}`;
    } else {
      // Date and month come automatically from the time you update the experiences!
      duration = isCurrent
        ? `${currentMonthName} ${currentYear} - Present`
        : `${currentMonthName} ${currentYear}`;
    }
  }

  // Calculate tenure
  const tenureMonths =
    item.tenureMonths && !isCurrent
      ? item.tenureMonths
      : calculateTenureMonths(
          duration,
          item.startDate,
          item.endDate,
          refDate
        );

  const progress = calculateProgress(item.status, tenureMonths, item.progress);
  const formattedTenure = formatTenure(tenureMonths);

  return {
    ...item,
    duration,
    tenureMonths,
    progress,
    formattedTenure,
  };
}

/**
 * Calculates aggregate experience metrics across all items
 */
export function calculateTotalExperience(
  items: ExperienceItemInput[],
  refDate: Date = new Date()
): {
  totalMonths: number;
  formatted: FormattedTenure;
  yearsPlus: string;
} {
  const totalMonths = items.reduce((acc, item) => {
    const isCurrent =
      /current|present/i.test(item.status) ||
      /present|current/i.test(item.duration || "") ||
      /present|current/i.test(
        typeof item.endDate === "string" ? item.endDate : ""
      );

    const months =
      item.tenureMonths && !isCurrent
        ? item.tenureMonths
        : calculateTenureMonths(
            item.duration,
            item.startDate,
            item.endDate,
            refDate
          );
    return acc + months;
  }, 0);

  const formatted = formatTenure(totalMonths);
  const years = Math.floor(totalMonths / 12);
  const yearsPlus = years > 0 ? `${years}+ years` : `${totalMonths} months`;

  return {
    totalMonths,
    formatted,
    yearsPlus,
  };
}
