export interface User {
	id: number;
	login: string;
	email: string;
	timezone: string;
	language: string;
	password?: string;
}
