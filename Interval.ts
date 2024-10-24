import { getDateStr, daysDiff } from './utils';

export class Interval {
	id?: number;
	start = getDateStr();
	end = getDateStr();
	sum = 0;
	latest? = false;

	get length(): number {
		return daysDiff(this.start, this.end);
	}

	constructor(dto?: Partial<Interval>) {
		if (!dto) {
			return;
		}

		Object.assign(this, dto);
	}
}
