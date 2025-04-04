import { toNumber } from '../util/toNumber.ts';
import { toString } from '../util/toString.ts';

/**
 * Adds two numbers while safely handling `NaN` values.
 *
 * This function takes two numbers and returns their sum. If either of the numbers is `NaN`,
 * the function returns `NaN`.
 *
 * @param {number} value - The first number to add.
 * @param {number} other - The second number to add.
 * @returns {number} The sum of the two numbers, or `NaN` if any input is `NaN`.
 *
 * @example
 * const result1 = add(2, 3);    // result1 will be 5
 * const result2 = add(5, NaN);  // result2 will be NaN
 * const result3 = add(NaN, 10); // result3 will be NaN
 */
export function add(value: number, other: number): number {
  if (value === undefined && other === undefined) {
    return 0;
  }
  if (value === undefined || other === undefined) {
    return value ?? other;
  }
  if (typeof value === 'string' || typeof other === 'string') {
    value = toString(value) as any;
    other = toString(other) as any;
  } else {
    value = toNumber(value);
    other = toNumber(other);
  }
  return value + other;
}
