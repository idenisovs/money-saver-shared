import { DateTime } from 'luxon';

import { Days } from '../constants';

export function daysDiff(dateA: string, dateB: string): number {
	const a = DateTime.fromISO(dateA);
	const b = DateTime.fromISO(dateB);
	return b.diff(a, 'days').days;
}

export function getDateStr(date = new Date()): string {
	const result: string[] = [];

	result.push(date.getFullYear().toString());

	const mm = (date.getMonth() + 1);

	if (mm < 10) {
		result.push(`0${mm}`);
	} else {
		result.push(mm.toString());
	}

	const dd = date.getDate();

	if (dd < 10) {
		result.push(`0${dd}`);
	} else {
		result.push(dd.toString());
	}

	return result.join('-');
}

export function startOfDay(from: Date, timezone: string): Date {
	const offset = getTimezoneOffset(from, timezone);
	const localDate = new Date(from.getTime() + offset);
	const localTime = localDate.setHours(0, 0, 0, 0);
	localDate.setTime(localTime - offset);
	return localDate;
}

export function endOfDay(from: Date, timezone: string): Date {
	const offset = getTimezoneOffset(from, timezone);
	const localDate = new Date(from.getTime() + offset);
	const localTime = localDate.setHours(23, 59, 59, 999);
	localDate.setTime(localTime - offset);
	return localDate;
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();

  return day === Days.SATURDAY || day === Days.SUNDAY;
}

export function getTimezoneOffset(date: Date, timeZone: string): number {
	const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
	const localizedDate = new Date(date.toLocaleString('en-US', { timeZone }));
	return localizedDate.getTime() - utcDate.getTime();
}