import { Interval } from './Interval';
import { Day } from './Day';
import { Totals } from './Totals';

export class Summary extends Interval {
	days: Day[] = [];
	totals = new Totals();

	constructor(dto?: Summary) {
		super(dto);

		if (dto) {
			this.days = dto.days.map<Day>(d => new Day(d));
			this.totals = dto.totals;
		}
	}

	static fromInterval(interval: Interval): Summary {
		const summary = new Summary();

		summary.start = interval.start;
		summary.end = interval.end;
		summary.sum = interval.sum;
		summary.latest = interval.latest;

		return summary;
	}
}
