export interface AddJobInterface {
    name: string;
    country: string;
    wage: number;
    description: string | null;
}

export interface UpdateJobInterface {
    id: number;
    data: AddJobInterface;
}