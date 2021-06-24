export class Day {
	date = new Date();
	expenses = 0;
	residual = 0;
	planned = 0;
	balance = {
		daily: 0,
		total: 0
	};

	constructor(dto?: Day) {
		if (dto) {
			Object.assign(this, dto);

			this.date = new Date(dto.date);
		}
	}
}