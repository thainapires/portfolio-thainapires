'use client';

interface PageContainerProps {
    title: string;     
    subtitle: string;   
    children: React.ReactNode; 
}

export function PageContainer({ title, subtitle, children }: PageContainerProps) {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mt-20 w-full max-w-6xl mb-12">
        <h1 className="text-5xl lg:text-7xl font-medium text-center md:text-start pb-3 text-zinc-100">
          {title}
        </h1>
        <div className="text-gray-500 text-xl">{subtitle}</div>
      </div>
      <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
      <div className="w-full max-w-6xl mt-12">
        {children}
      </div>
    </main>
  );
}