export class Payment {
	id?: number;
	date: string = '';
	sum = 0;
	add?: boolean;
	update?: boolean;
	remove?: boolean;
	createdAt = new Date();

	constructor(dto?: Payment) {
		if (!dto) {
			return;
		}

		Object.assign(this, dto);

		if (dto.createdAt) {
			this.createdAt = new Date(dto.createdAt);
		}
	}
}
