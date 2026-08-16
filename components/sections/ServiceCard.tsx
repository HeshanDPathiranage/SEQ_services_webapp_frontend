import Link from 'next/link';
import type { Service } from '../../lib/constants';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-4 text-slate-600">{service.description}</p>
      <Link href={`/services/${service.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand hover:text-slate-900">
        Learn more →
      </Link>
    </article>
  );
}
