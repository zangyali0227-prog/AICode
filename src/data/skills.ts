/** 技能数据类型 */
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number;
}

/** 技能列表 */
export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 88 },
  { name: 'Vue.js', category: 'frontend', level: 80 },
  { name: 'Next.js', category: 'frontend', level: 82 },
  { name: 'Tailwind CSS', category: 'frontend', level: 90 },
  { name: 'HTML/CSS', category: 'frontend', level: 95 },
  { name: 'Node.js', category: 'backend', level: 85 },
  { name: 'Python', category: 'backend', level: 78 },
  { name: 'PostgreSQL', category: 'backend', level: 80 },
  { name: 'MongoDB', category: 'backend', level: 75 },
  { name: 'GraphQL', category: 'backend', level: 70 },
  { name: 'Git', category: 'tools', level: 88 },
  { name: 'Docker', category: 'tools', level: 75 },
  { name: 'AWS', category: 'tools', level: 65 },
  { name: 'CI/CD', category: 'tools', level: 72 },
  { name: 'Figma', category: 'tools', level: 68 },
];

/** 技能分类中文名 */
export const categoryLabels: Record<Skill['category'], string> = {
  frontend: '前端开发',
  backend: '后端开发',
  tools: '开发工具',
  other: '其他',
};