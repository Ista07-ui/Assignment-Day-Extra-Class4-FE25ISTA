"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FoodTypeInput = "upf" | "fresh";

function parseFoodType(value: FormDataEntryValue | null): FoodTypeInput {
  if (value === "upf" || value === "fresh") {
    return value;
  }
  throw new Error("Invalid food type");
}

export async function getFoods() {
  const foods = await prisma.food.findMany({
    where: {
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return foods;
}

export async function getFoodById(id: string) {
  const food = await prisma.food.findUnique({
    where: { id },
  });
  return food;
}

export async function createFood(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const ingredients = formData.get("ingredients") as string;
  const type = parseFoodType(formData.get("type"));
  const price = formData.get("price")
    ? Number.parseFloat(formData.get("price") as string)
    : null;

  if (!name || !description || !imageUrl || !ingredients || !type) {
    throw new Error("All fields are required");
  }

  await prisma.food.create({
    data: {
      name,
      description,
      imageUrl,
      ingredients,
      type,
      price,
    },
  });

  revalidatePath("/foods");
  redirect("/foods");
}

export async function updateFood(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const ingredients = formData.get("ingredients") as string;
  const type = parseFoodType(formData.get("type"));
  const price = formData.get("price")
    ? Number.parseFloat(formData.get("price") as string)
    : null;

  await prisma.food.update({
    where: { id },
    data: {
      name,
      description,
      imageUrl,
      ingredients,
      type,
      price,
    },
  });

  revalidatePath(`/foods/${id}`);
}

export async function deleteFood(id: string) {
  // Soft delete
  await prisma.food.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });

  revalidatePath("/foods");
  redirect("/foods");
}
