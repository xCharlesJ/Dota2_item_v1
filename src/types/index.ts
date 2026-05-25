export interface Hero {
  id: number;
  name: string;
  nameEn: string;
  attribute: 'strength' | 'agility' | 'intelligence' | 'universal';
  attackType: 'melee' | 'range';
  roles: string[];
}

export interface Item {
  id: number;
  name: string;
  nameEn: string;
  cost: number;
  description: string;
}

export interface HeroItemBuild {
  heroId: number;
  earlyGame: Item[];
  midGame: Item[];
  lateGame: Item[];
}

export interface Skill {
  id: number;
  name: string;
  description: string;
}

export interface HeroSkillBuild {
  heroId: number;
  skills: Skill[];
  skillOrder: number[];
}