export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button
        className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl transition text-sm"
        {...props}
      >
        {children}
      </button>
    );
  }
  