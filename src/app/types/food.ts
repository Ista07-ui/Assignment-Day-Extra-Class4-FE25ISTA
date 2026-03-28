export type FoodType = "upf" | "fresh";

export interface Food {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string;
  type: FoodType;
  price?: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
