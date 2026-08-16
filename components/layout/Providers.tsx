import { Header } from './Header';
import { Footer } from './Footer';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-soft text-slate-900">
      <div>{children}</div>
    </div>
  );
}
