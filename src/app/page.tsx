import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h1 className="font-heading text-40 tracking-tight">
          React + Vite + TS + Tailwind v3
        </h1>
        <p className="mt-3 text-slate-600">
          Fonts: <span className="font-dm">DM Serif Display</span>,{' '}
          <span className="font-mont">Montserrat Alternates</span>,{' '}
          <span className="font-urban">Urbanist</span>,{' '}
          <span className="font-body">Plus Jakarta Sans</span>.
        </p>

        <button className="mt-6 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-slate-50">
          <i className="font-fa not-italic"></i>
          Nút ví dụ
        </button>
      </div>
    </main>
  );
}
