interface TopbarProps {
  title: string;
  subtitle: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <div className="bg-white border-b border-app-border px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Breadcrumb/Título lateral izquierdo */}
        <div className="flex-shrink-0">
          <h1 className="text-[22px] font-semibold text-gray-900">{title}</h1>
          <p className="text-[12.5px] text-slate-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
