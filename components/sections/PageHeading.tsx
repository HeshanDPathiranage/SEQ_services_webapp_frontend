export function PageHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl bg-white px-6 py-10 shadow-sm sm:px-10">
      <p className="text-sm uppercase tracking-[0.3em] text-brand">SEQ Services</p>
      <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">{description}</p>
    </div>
  );
}
