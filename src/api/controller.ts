"use server";

import { prisma } from "@/api/database";
import { revalidatePath } from "next/cache";
import { AddJobInterface, UpdateJobInterface } from "./models";

// create
export const addJob = async (data: AddJobInterface) => {
    const res = await prisma.jobs.create({ data });
    revalidatePath('/home');
    return res;
}

// read
export const getJobs = () => {
	return prisma.jobs.findMany();
}

// update
export const updateJob = async (updateData: UpdateJobInterface) => {
    const { id, data } = updateData;
    const res = await prisma.jobs.update({ where: { id }, data });
    return res;
}

// delete
export const deleteJob = async (id: number) => {
    const res = await prisma.jobs.delete({ where: { id }})
    revalidatePath('/home');
    return res;
}