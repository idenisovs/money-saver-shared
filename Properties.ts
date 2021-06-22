import { Password } from './Password';
import { Timezone } from './Timezone';

export interface Properties {
	email: string;
	password: Password;
	timezone: Timezone;
	language: string;
}