"use server";
import { prisma } from "@/utils/prisma";

export const NewTask = async (task: string) => {
  try {
    if (!task) return;

    const newTask = await prisma.tasks.create({
      data: {
        task: task,
        done: false,
      },
    });

    if (!newTask) return;

    return newTask;
  } catch (error) {
    throw error;
  }
};
