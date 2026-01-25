export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      <h1 className="text-4xl font-bold text-[#1b0d0e] dark:text-white capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
    </div>
  );
}
