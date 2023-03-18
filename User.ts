export interface User {
	id: number;
	login: string;
	email: string;
	timezone: number;
	language: string;
	password?: string;
}
