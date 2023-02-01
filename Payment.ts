export class Payment {
	id?: number;
	time = new Date();
	sum = 0;
	add?: boolean;
	update?: boolean;
	remove?: boolean;

	constructor(dto?: Payment) {
		if (!dto) {
			return;
		}

		Object.assign(this, dto);

		this.time = new Date(dto.time);
	}
}
