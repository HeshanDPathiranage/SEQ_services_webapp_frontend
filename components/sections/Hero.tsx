import Link from 'next/link';

export function Hero() {
  return (
    <section className="rounded-3xl bg-white px-6 py-12 shadow-sm sm:px-10 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brand">SEQ Services</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Commercial cleaning and facility management across South East Queensland.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
          Dependable cleaning and maintenance for construction sites, property managers and commercial businesses. Responsive teams, compliant systems, and practical service delivery.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900">
            Enquire now
          </Link>
          <Link href="/services/facility-management" className="text-sm font-semibold text-brand hover:text-slate-900">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
