import { getDateStr } from './utils';

export class DailyExpensesOverview {
	date = new Date();
	expenses = 0;

	residual = {
		planned: 0,
		real: 0
	};

	balance = {
		daily: 0,
		total: 0
	};

	constructor(dto?: DailyExpensesOverview) {
		if (dto) {
			Object.assign(this, dto);

			this.date = new Date(dto.date);
		}
	}

  public getShortDate() {
    return getDateStr(this.date);
  }
}
