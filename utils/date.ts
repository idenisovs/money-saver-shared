const SEC = 1000;
const MIN = SEC * 60;
const H = MIN * 60;
const D = H * 24;

export function isSameDay(date1: Date, date2: Date): boolean {
	return date1.getFullYear() === date2.getFullYear()
		&& date1.getMonth() === date2.getMonth()
		&& date1.getDate() === date2.getDate();
}

export function daysDiff(dateA: Date, dateB: Date, hoursDifferenceMatter = true): number {
	let date1: Date; let
		date2: Date;

	if (dateA.getTime() > dateB.getTime()) {
		date1 = new Date(dateB);
		date2 = new Date(dateA);
	} else {
		date1 = new Date(dateA);
		date2 = new Date(dateB);
	}

	if (!hoursDifferenceMatter) {
		date1.setHours(0, 0, 0);
		date2.setHours(23, 59, 59);
	}

	const dT = date2.getTime() - date1.getTime();

	const daysDiff = dT / D;

	return Math.floor(daysDiff);
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
