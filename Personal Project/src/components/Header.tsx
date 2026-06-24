export default function Header() {
  const navLinks = [
    { label: '首页', href: '#hero' },
    { label: '关于', href: '#about' },
    { label: '项目', href: '#projects' },
    { label: '联系', href: '#contact' },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold gradient-text">Portfolio</a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}><a href={link.href} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 text-sm">{link.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}