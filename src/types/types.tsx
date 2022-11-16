export interface I_Address {
	street: string;
	city: string;
	zipcode: string;
}

export interface I_User {
	id: number;
	name: string;
	email: string;
	address: I_Address;
}

export interface I_Todo {
	id: number;
	title: string;
	completed: boolean;
}