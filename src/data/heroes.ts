import type { Hero } from '../types';

export const heroes: Hero[] = [
  // ===== 力量英雄 Strength =====
  { id: 1, name: '亚巴顿', nameEn: 'abaddon', attribute: 'universal', attackType: 'melee', roles: ['辅助', '耐久'] },
  { id: 2, name: '炼金术士', nameEn: 'alchemist', attribute: 'strength', attackType: 'melee', roles: ['核心', '耐久'] },
  { id: 3, name: '斧王', nameEn: 'axe', attribute: 'strength', attackType: 'melee', roles: ['先手', '耐久'] },
  { id: 4, name: '兽王', nameEn: 'beastmaster', attribute: 'universal', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 5, name: '酒仙', nameEn: 'brewmaster', attribute: 'universal', attackType: 'melee', roles: ['先手', '耐久'] },
  { id: 6, name: '钢背兽', nameEn: 'bristleback', attribute: 'strength', attackType: 'melee', roles: ['核心', '耐久'] },
  { id: 7, name: '半人马战行者', nameEn: 'centaur', attribute: 'strength', attackType: 'melee', roles: ['先手', '耐久'] },
  { id: 8, name: '混沌骑士', nameEn: 'chaos_knight', attribute: 'strength', attackType: 'melee', roles: ['核心', '控制'] },
  { id: 9, name: '发条技师', nameEn: 'rattletrap', attribute: 'universal', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 10, name: '破晓辰星', nameEn: 'dawnbreaker', attribute: 'strength', attackType: 'melee', roles: ['核心', '辅助'] },
  { id: 11, name: '末日使者', nameEn: 'doom_bringer', attribute: 'strength', attackType: 'melee', roles: ['核心', '控制'] },
  { id: 12, name: '龙骑士', nameEn: 'dragon_knight', attribute: 'strength', attackType: 'melee', roles: ['核心', '耐久'] },
  { id: 13, name: '大地之灵', nameEn: 'earth_spirit', attribute: 'strength', attackType: 'melee', roles: ['辅助', '先手'] },
  { id: 14, name: '撼地者', nameEn: 'earthshaker', attribute: 'strength', attackType: 'melee', roles: ['辅助', '先手'] },
  { id: 15, name: '上古巨神', nameEn: 'elder_titan', attribute: 'strength', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 16, name: '哈斯卡', nameEn: 'huskar', attribute: 'strength', attackType: 'range', roles: ['核心', '耐久'] },
  { id: 17, name: '艾欧', nameEn: 'wisp', attribute: 'universal', attackType: 'range', roles: ['辅助', '逃生'] },
  { id: 18, name: '昆卡', nameEn: 'kunkka', attribute: 'strength', attackType: 'melee', roles: ['核心', '控制'] },
  { id: 19, name: '军团指挥官', nameEn: 'legion_commander', attribute: 'strength', attackType: 'melee', roles: ['核心', '先手'] },
  { id: 20, name: '噬魂鬼', nameEn: 'life_stealer', attribute: 'strength', attackType: 'melee', roles: ['核心', '耐久'] },
  { id: 21, name: '狼人', nameEn: 'lycan', attribute: 'universal', attackType: 'melee', roles: ['核心', '推进'] },
  { id: 22, name: '马格纳斯', nameEn: 'magnataur', attribute: 'universal', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 23, name: '玛西', nameEn: 'marci', attribute: 'universal', attackType: 'melee', roles: ['辅助', '先手'] },
  { id: 24, name: '玛尔斯', nameEn: 'mars', attribute: 'strength', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 25, name: '暗夜魔王', nameEn: 'night_stalker', attribute: 'strength', attackType: 'melee', roles: ['核心', '先手'] },
  { id: 26, name: '全能骑士', nameEn: 'omniknight', attribute: 'strength', attackType: 'melee', roles: ['辅助', '耐久'] },
  { id: 27, name: '凤凰', nameEn: 'phoenix', attribute: 'universal', attackType: 'range', roles: ['辅助', '先手'] },
  { id: 28, name: '原始兽', nameEn: 'primal_beast', attribute: 'strength', attackType: 'melee', roles: ['先手', '耐久'] },
  { id: 29, name: '帕吉', nameEn: 'pudge', attribute: 'strength', attackType: 'melee', roles: ['控制', '耐久'] },
  { id: 30, name: '沙王', nameEn: 'sand_king', attribute: 'universal', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 31, name: '斯拉达', nameEn: 'slardar', attribute: 'strength', attackType: 'melee', roles: ['核心', '先手'] },
  { id: 32, name: '电炎绝手', nameEn: 'snapfire', attribute: 'universal', attackType: 'range', roles: ['辅助', '爆发'] },
  { id: 33, name: '裂魂人', nameEn: 'spirit_breaker', attribute: 'strength', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 34, name: '斯温', nameEn: 'sven', attribute: 'strength', attackType: 'melee', roles: ['核心', '控制'] },
  { id: 35, name: '潮汐猎人', nameEn: 'tidehunter', attribute: 'strength', attackType: 'melee', roles: ['先手', '耐久'] },
  { id: 36, name: '伐木机', nameEn: 'shredder', attribute: 'universal', attackType: 'melee', roles: ['耐久', '爆发'] },
  { id: 37, name: '小小', nameEn: 'tiny', attribute: 'universal', attackType: 'melee', roles: ['核心', '先手'] },
  { id: 38, name: '树精卫士', nameEn: 'treant', attribute: 'strength', attackType: 'melee', roles: ['辅助', '控制'] },
  { id: 39, name: '巨牙海民', nameEn: 'tusk', attribute: 'strength', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 40, name: '孽主', nameEn: 'abyssal_underlord', attribute: 'strength', attackType: 'melee', roles: ['耐久', '控制'] },
  { id: 41, name: '不朽尸王', nameEn: 'undying', attribute: 'strength', attackType: 'melee', roles: ['辅助', '耐久'] },
  { id: 42, name: '冥魂大帝', nameEn: 'skeleton_king', attribute: 'strength', attackType: 'melee', roles: ['核心', '耐久'] },
  { id: 43, name: '食人魔魔法师', nameEn: 'ogre_magi', attribute: 'universal', attackType: 'melee', roles: ['辅助', '耐久'] },

  // ===== 敏捷英雄 Agility =====
  { id: 44, name: '敌法师', nameEn: 'antimage', attribute: 'agility', attackType: 'melee', roles: ['核心', '逃生'] },
  { id: 45, name: '天穹守望者', nameEn: 'arc_warden', attribute: 'agility', attackType: 'range', roles: ['核心', '逃生'] },
  { id: 46, name: '血魔', nameEn: 'bloodseeker', attribute: 'agility', attackType: 'melee', roles: ['核心', '控制'] },
  { id: 47, name: '赏金猎人', nameEn: 'bounty_hunter', attribute: 'agility', attackType: 'melee', roles: ['辅助', '爆发'] },
  { id: 48, name: '育母蜘蛛', nameEn: 'broodmother', attribute: 'universal', attackType: 'melee', roles: ['核心', '推进'] },
  { id: 49, name: '克林克兹', nameEn: 'clinkz', attribute: 'agility', attackType: 'range', roles: ['核心', '逃生'] },
  { id: 50, name: '卓尔游侠', nameEn: 'drow_ranger', attribute: 'agility', attackType: 'range', roles: ['核心', '控制'] },
  { id: 51, name: '灰烬之灵', nameEn: 'ember_spirit', attribute: 'agility', attackType: 'melee', roles: ['核心', '逃生'] },
  { id: 52, name: '虚空假面', nameEn: 'faceless_void', attribute: 'agility', attackType: 'melee', roles: ['核心', '先手'] },
  { id: 53, name: '矮人直升机', nameEn: 'gyrocopter', attribute: 'agility', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 54, name: '森海飞霞', nameEn: 'hoodwink', attribute: 'agility', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 55, name: '主宰', nameEn: 'juggernaut', attribute: 'agility', attackType: 'melee', roles: ['核心', '逃生'] },
  { id: 56, name: '德鲁伊', nameEn: 'lone_druid', attribute: 'universal', attackType: 'range', roles: ['核心', '推进'] },
  { id: 57, name: '露娜', nameEn: 'luna', attribute: 'agility', attackType: 'range', roles: ['核心', '推进'] },
  { id: 58, name: '美杜莎', nameEn: 'medusa', attribute: 'agility', attackType: 'range', roles: ['核心', '耐久'] },
  { id: 59, name: '米波', nameEn: 'meepo', attribute: 'agility', attackType: 'melee', roles: ['核心', '爆发'] },
  { id: 60, name: '米拉娜', nameEn: 'mirana', attribute: 'universal', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 61, name: '齐天大圣', nameEn: 'monkey_king', attribute: 'agility', attackType: 'melee', roles: ['核心', '控制'] },
  { id: 62, name: '变体精灵', nameEn: 'morphling', attribute: 'agility', attackType: 'range', roles: ['核心', '逃生'] },
  { id: 63, name: '娜迦海妖', nameEn: 'naga_siren', attribute: 'agility', attackType: 'melee', roles: ['核心', '控制'] },
  { id: 64, name: '司夜刺客', nameEn: 'nyx_assassin', attribute: 'universal', attackType: 'melee', roles: ['辅助', '控制'] },
  { id: 65, name: '石鳞剑士', nameEn: 'pangolier', attribute: 'universal', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 66, name: '幻影刺客', nameEn: 'phantom_assassin', attribute: 'agility', attackType: 'melee', roles: ['核心', '逃生'] },
  { id: 67, name: '幻影长矛手', nameEn: 'phantom_lancer', attribute: 'agility', attackType: 'melee', roles: ['核心', '逃生'] },
  { id: 68, name: '剃刀', nameEn: 'razor', attribute: 'agility', attackType: 'range', roles: ['核心', '耐久'] },
  { id: 69, name: '力丸', nameEn: 'riki', attribute: 'agility', attackType: 'melee', roles: ['核心', '逃生'] },
  { id: 70, name: '影魔', nameEn: 'nevermore', attribute: 'agility', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 71, name: '斯拉克', nameEn: 'slark', attribute: 'agility', attackType: 'melee', roles: ['核心', '逃生'] },
  { id: 72, name: '狙击手', nameEn: 'sniper', attribute: 'agility', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 73, name: '幽鬼', nameEn: 'spectre', attribute: 'agility', attackType: 'melee', roles: ['核心', '耐久'] },
  { id: 74, name: '圣堂刺客', nameEn: 'templar_assassin', attribute: 'agility', attackType: 'range', roles: ['核心', '逃生'] },
  { id: 75, name: '恐怖利刃', nameEn: 'terrorblade', attribute: 'agility', attackType: 'melee', roles: ['核心', '推进'] },
  { id: 76, name: '巨魔战将', nameEn: 'troll_warlord', attribute: 'agility', attackType: 'melee', roles: ['核心', '控制'] },
  { id: 77, name: '熊战士', nameEn: 'ursa', attribute: 'agility', attackType: 'melee', roles: ['核心', '耐久'] },
  { id: 78, name: '复仇之魂', nameEn: 'vengefulspirit', attribute: 'universal', attackType: 'range', roles: ['辅助', '先手'] },
  { id: 79, name: '剧毒术士', nameEn: 'venomancer', attribute: 'universal', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 80, name: '冥界亚龙', nameEn: 'viper', attribute: 'agility', attackType: 'range', roles: ['核心', '耐久'] },
  { id: 81, name: '编织者', nameEn: 'weaver', attribute: 'agility', attackType: 'range', roles: ['核心', '逃生'] },

  // ===== 智力英雄 Intelligence =====
  { id: 82, name: '远古冰魄', nameEn: 'ancient_apparition', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 83, name: '祸乱之源', nameEn: 'bane', attribute: 'universal', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 84, name: '蝙蝠骑士', nameEn: 'batrider', attribute: 'universal', attackType: 'range', roles: ['先手', '控制'] },
  { id: 85, name: '陈', nameEn: 'chen', attribute: 'universal', attackType: 'range', roles: ['辅助', '推进'] },
  { id: 86, name: '水晶室女', nameEn: 'crystal_maiden', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 87, name: '黑暗贤者', nameEn: 'dark_seer', attribute: 'universal', attackType: 'melee', roles: ['先手', '控制'] },
  { id: 88, name: '邪影芳灵', nameEn: 'dark_willow', attribute: 'universal', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 89, name: '戴泽', nameEn: 'dazzle', attribute: 'universal', attackType: 'range', roles: ['辅助', '耐久'] },
  { id: 90, name: '死亡先知', nameEn: 'death_prophet', attribute: 'intelligence', attackType: 'range', roles: ['核心', '推进'] },
  { id: 91, name: '干扰者', nameEn: 'disruptor', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 92, name: '魅惑魔女', nameEn: 'enchantress', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '推进'] },
  { id: 93, name: '谜团', nameEn: 'enigma', attribute: 'universal', attackType: 'range', roles: ['先手', '控制'] },
  { id: 94, name: '天涯墨客', nameEn: 'grimstroke', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 95, name: '祈求者', nameEn: 'invoker', attribute: 'universal', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 96, name: '杰奇洛', nameEn: 'jakiro', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 97, name: '光之守卫', nameEn: 'keeper_of_the_light', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '爆发'] },
  { id: 98, name: '拉席克', nameEn: 'leshrac', attribute: 'intelligence', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 99, name: '巫妖', nameEn: 'lich', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '爆发'] },
  { id: 100, name: '莉娜', nameEn: 'lina', attribute: 'intelligence', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 101, name: '莱恩', nameEn: 'lion', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 102, name: '先知', nameEn: 'furion', attribute: 'universal', attackType: 'range', roles: ['核心', '推进'] },
  { id: 103, name: '瘟疫法师', nameEn: 'necrolyte', attribute: 'intelligence', attackType: 'range', roles: ['核心', '耐久'] },
  { id: 104, name: '神谕者', nameEn: 'oracle', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '逃生'] },
  { id: 105, name: '殁境神蚀者', nameEn: 'obsidian_destroyer', attribute: 'intelligence', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 106, name: '帕克', nameEn: 'puck', attribute: 'intelligence', attackType: 'range', roles: ['先手', '逃生'] },
  { id: 107, name: '帕格纳', nameEn: 'pugna', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '推进'] },
  { id: 108, name: '痛苦女王', nameEn: 'queenofpain', attribute: 'intelligence', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 109, name: '拉比克', nameEn: 'rubick', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 110, name: '暗影恶魔', nameEn: 'shadow_demon', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 111, name: '暗影萨满', nameEn: 'shadow_shaman', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '推进'] },
  { id: 112, name: '沉默术士', nameEn: 'silencer', attribute: 'intelligence', attackType: 'range', roles: ['核心', '控制'] },
  { id: 113, name: '天怒法师', nameEn: 'skywrath_mage', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '爆发'] },
  { id: 114, name: '风暴之灵', nameEn: 'storm_spirit', attribute: 'intelligence', attackType: 'range', roles: ['核心', '逃生'] },
  { id: 115, name: '工程师', nameEn: 'techies', attribute: 'universal', attackType: 'range', roles: ['辅助', '爆发'] },
  { id: 116, name: '修补匠', nameEn: 'tinker', attribute: 'intelligence', attackType: 'range', roles: ['核心', '爆发'] },
  { id: 117, name: '术士', nameEn: 'warlock', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 118, name: '寒冬飞龙', nameEn: 'winter_wyvern', attribute: 'universal', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 119, name: '巫医', nameEn: 'witch_doctor', attribute: 'intelligence', attackType: 'range', roles: ['辅助', '控制'] },
  { id: 120, name: '宙斯', nameEn: 'zuus', attribute: 'intelligence', attackType: 'range', roles: ['核心', '爆发'] },

  // ===== 补充英雄 =====
  { id: 121, name: '虚无之灵', nameEn: 'void_spirit', attribute: 'universal', attackType: 'melee', roles: ['核心', '逃生'] },
  { id: 122, name: '风行者', nameEn: 'windrunner', attribute: 'universal', attackType: 'range', roles: ['核心', '控制'] },
  { id: 123, name: '琼英碧灵', nameEn: 'muerta', attribute: 'intelligence', attackType: 'range', roles: ['核心', '控制'] },
];

// Helper to get hero portrait URL
export function getHeroPortraitUrl(nameEn: string): string {
  return `https://cdn.stratz.com/images/dota2/heroes/${nameEn}_vert.png`;
}

// Helper to get hero by ID
export function getHeroById(id: number): Hero | undefined {
  return heroes.find(h => h.id === id);
}

// Group heroes by attribute
export function getHeroesByAttribute(attribute: Hero['attribute']): Hero[] {
  return heroes.filter(h => h.attribute === attribute);
}

export const attributeLabels: Record<Hero['attribute'], string> = {
  strength: '力量',
  agility: '敏捷',
  intelligence: '智力',
  universal: '全才',
};

export const attributeColors: Record<Hero['attribute'], string> = {
  strength: '#e43b3b',
  agility: '#4caf50',
  intelligence: '#3b8ce4',
  universal: '#9b59b6',
};