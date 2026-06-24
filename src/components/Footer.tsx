export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-secondary)]">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="text-sm text-[var(--color-text-secondary)]">Built with React + TypeScript + Tailwind CSS</p>
      </div>
    </footer>
  );
}