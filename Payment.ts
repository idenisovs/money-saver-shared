export class Payment {
	id?: number;

	date: string = '';

	sum = 0;

	add?: boolean;

	update?: boolean;

	remove?: boolean;

	constructor(dto?: Payment) {
		if (!dto) {
			return;
		}

		Object.assign(this, dto);
	}
}
