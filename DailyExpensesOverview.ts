import { getDateStr } from './utils';

export class DailyExpensesOverview {
	date: string = '';

	expenses = 0;

	residual = {
		planned: 0,
		real: 0,
	};

	balance = {
		daily: 0,
		total: 0,
	};

	constructor(dto?: Partial<DailyExpensesOverview>) {
		if (!dto) {
			return;
		}

		Object.assign(this, dto);
	}
}
