import { Interval } from './Interval';
import { Day } from './Day';
import { Totals } from './Totals';

export class Summary {
	interval = new Interval();
	days: Day[] = [];
	totals = new Totals();

	constructor(dto?: Summary) {
		if (dto) {
			this.interval = new Interval(dto.interval);
			this.days = dto.days.map<Day>(d => new Day(d));
			this.totals = dto.totals;
		}
	}
}
