"use server";
import { prisma } from "@/database";
import { revalidatePath } from "next/cache";
import { AddJobInterface } from "./models";

export const addJob = async (data: FormData) => {
    // const res = await prisma.jobs.create({ data: {
    //     country,
    //     name,
    //     wage,
    //     description: description ?? null,
    // }});

    // revalidatePath('/home');
    // return res;
}

export const getJobs = () => {
	return prisma.jobs.findMany();
}

export const deleteJob = async (id: number) => {
    const res = await prisma.jobs.delete({ where: { id }})

    revalidatePath('/home');
    return res;
}