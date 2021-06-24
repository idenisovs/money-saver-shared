export class Payment {
	id?: number;
	time = new Date();
	sum = 0;
	add?: boolean;
	update?: boolean;
	remove?: boolean;

	constructor(dto?: Payment) {
		if (dto) {
			Object.assign(this, dto);
		}
	}
}