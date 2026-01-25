import { getFoodById } from "../../_actions/foods";
import EditForm from "./_components/edit-form";
import { notFound } from "next/navigation";

export default async function FoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const food = await getFoodById(id);

  if (!food) return notFound();

  return (
    <div className="min-h-screen bg-[#f8f8f5] dark:bg-[#221e10] p-6 md:p-12 font-display">
      <EditForm food={food} />
    </div>
  );
}
