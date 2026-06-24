import { skills, categoryLabels } from '../data/skills';
import type { Skill } from '../data/skills';

export default function About() {
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"><span className="gradient-text">关于我</span></h2>
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">我是一名充满热情的全栈开发者，拥有多年的 Web 开发经验。擅长使用 React、TypeScript 和 Node.js 构建现代化的 Web 应用。</p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">我相信代码是创造力的延伸，每一行代码都应该优雅、可维护且具有影响力。在业余时间，我喜欢探索新技术、参与开源项目，并不断精进自己的技能。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-[var(--color-bg-card)] rounded-2xl p-6 border border-white/5">
              <h3 className="text-lg font-semibold mb-4 gradient-text">{categoryLabels[category as Skill['category']]}</h3>
              <div className="space-y-3">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1"><span className="text-sm text-[var(--color-text-secondary)]">{skill.name}</span><span className="text-sm text-[var(--color-text-secondary)]">{skill.level}%</span></div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] transition-all duration-1000" style={{ width: skill.level + '%' }} /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}