"use server";
import { prisma } from "@/utils/prisma";

export const deleteTask = async (idTask: string) => {
  try {
    if (!idTask) return;

    const deletedTask = await prisma.tasks.delete({
      where: {
        id: idTask,
      },
    });

    if (!deleteTask) return;

    return deleteTask;
  } catch (error) {
    throw error;
  }
};
