import type { Skill, HeroSkillBuild } from '../types';
import { heroes } from './heroes';

// 通用技能数据生成
const skillNames = ['Q 技能', 'W 技能', 'E 技能', 'R 大招'];

function generateSkillsForHero(heroId: number): HeroSkillBuild {
  const hero = heroes.find(h => h.id === heroId);
  const skills: Skill[] = [
    { id: heroId * 10 + 1, name: `${hero?.name || '英雄'}第一技能`, description: '主力输出/控制技能' },
    { id: heroId * 10 + 2, name: `${hero?.name || '英雄'}第二技能`, description: '辅助/功能技能' },
    { id: heroId * 10 + 3, name: `${hero?.name || '英雄'}第三技能`, description: '被动/光环技能' },
    { id: heroId * 10 + 4, name: `${hero?.name || '英雄'}终极技能`, description: '终极技能' },
  ];

  // 推荐加点顺序：主Q副W，有大点大
  const skillOrder = [1, 2, 1, 3, 1, 4, 1, 2, 2, 4, 2, 3, 3, 3, 4];

  return { heroId, skills, skillOrder };
}

export const heroSkillBuilds: HeroSkillBuild[] = heroes.map(h => generateSkillsForHero(h.id));

export function getHeroSkillBuild(heroId: number): HeroSkillBuild | undefined {
  return heroSkillBuilds.find(b => b.heroId === heroId);
}

export function getSkillIconUrl(skillId: number): string {
  return `https://cdn.stratz.com/images/dota2/skills/ability_${skillId}.png`;
}