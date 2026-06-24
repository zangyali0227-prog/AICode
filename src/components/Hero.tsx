import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      el.classList.add('opacity-0');
      requestAnimationFrame(() => {
        el.classList.remove('opacity-0');
        el.classList.add('opacity-100');
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden transition-opacity duration-1000">
      <div aria-hidden="true" className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, var(--color-accent-start) 0%, transparent 70%)'}} />
      <div aria-hidden="true" className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, var(--color-accent-end) 0%, transparent 70%)'}} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-10 inline-block animate-fade-in">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full p-[3px] mx-auto shadow-lg" style={{background: 'linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))', boxShadow: '0 0 60px -10px rgba(99, 102, 241, 0.4)'}}>
            <div className="w-full h-full rounded-full bg-[var(--color-bg-primary)] flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text">Z</div>
          </div>
        </div>
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
          <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" /></span>
          <span className="text-sm text-[var(--color-text-secondary)]">开放合作</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
          <span className="block">Hi, 我是</span>
          <span className="gradient-text block mt-2">全栈开发者</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10 leading-relaxed">热爱构建优雅、高性能的 Web 应用。<br className="hidden sm:block" />专注于 React 生态，追求极致的用户体验和代码质量。</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{background: 'linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))', boxShadow: '0 4px 24px -4px rgba(99, 102, 241, 0.4)'}}>查看项目 <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/15 text-[var(--color-text-primary)] font-medium transition-all duration-300 hover:bg-white/[0.06] hover:border-white/30">联系我</a>
        </div>
        <div className="mt-20 animate-bounce"><svg className="w-5 h-5 mx-auto text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>
      </div>
    </section>
  );
}