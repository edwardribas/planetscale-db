import { Decimal } from "@prisma/client/runtime";

export interface JobWrapperProps {
	id: number;
	name: string;
	country: string;
	wage: Decimal;
	description: string | null;
	createdAt: Date;
}