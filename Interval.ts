import { daysDiff } from './utils';

export class Interval {
	id?: number;

	start = new Date();

	end = new Date();

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

		if (dto.start) {
			this.start = new Date(dto.start);
		}

		if (dto.end) {
			this.end = new Date(dto.end);
		}
	}
}
