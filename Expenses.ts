export class Expenses {
	date = new Date();
	sum = 0;

	constructor(dto?: Expenses) {
		if (dto) {
			this.date = new Date(dto.date);
			this.sum = dto.sum;
		}
	}
}