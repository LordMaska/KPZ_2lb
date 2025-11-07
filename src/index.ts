import * as dotenv from 'dotenv';
dotenv.config();

/** Ті самі утиліти, але вже з базовою типізацією */

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}

/** СКЛАДНИЙ ТИП */

export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? Number(process.env.APP_PRECISION ?? 2);

  return value.toFixed(precision);
}
