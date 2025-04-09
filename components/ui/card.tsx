export function Card({ children, ...props }: { children: React.ReactNode }) {
    return <div className="rounded-xl shadow-md p-4 bg-white dark:bg-gray-800" {...props}>{children}</div>;
  }
  
  export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="mt-2">{children}</div>;
  }
  