import { Interval } from './Interval';
import { DailyExpensesOverview } from './DailyExpensesOverview';
import { Totals } from './Totals';

export class Summary {
	interval = new Interval();
	dailyExpenses: DailyExpensesOverview[] = [];
	totals = new Totals();

	constructor(dto?: Summary) {
		if (!dto) {
			return;
		}

		this.interval = new Interval(dto.interval);
		this.dailyExpenses = dto.dailyExpenses.map<DailyExpensesOverview>(d => new DailyExpensesOverview(d));
		this.totals = dto.totals;
	}
}
