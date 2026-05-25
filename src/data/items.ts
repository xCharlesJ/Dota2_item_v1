import type { Item, HeroItemBuild, Hero } from '../types';
import { heroes } from './heroes';

// ===== 装备列表 =====
const itemPool: Record<string, Item> = {
  // 基础装备
  tango: { id: 1, name: '树之祭祀', nameEn: 'tango', cost: 90, description: '消耗品，使用后吃树回血' },
  flask: { id: 2, name: '治疗药膏', nameEn: 'flask', cost: 110, description: '持续恢复生命值' },
  clarity: { id: 3, name: '净化药水', nameEn: 'clarity', cost: 50, description: '持续恢复魔法值' },
  mango: { id: 4, name: '魔法芒果', nameEn: 'enchanted_mango', cost: 65, description: '立即恢复魔法值' },
  branch: { id: 5, name: '铁树枝干', nameEn: 'iron_branch', cost: 50, description: '+1全属性' },
  circlet: { id: 6, name: '圆环', nameEn: 'circlet', cost: 155, description: '+2全属性' },
  slippers: { id: 7, name: '敏捷便鞋', nameEn: 'slippers', cost: 140, description: '+3敏捷' },
  mantle: { id: 8, name: '智力斗篷', nameEn: 'mantle', cost: 140, description: '+3智力' },
  gauntlets: { id: 9, name: '力量手套', nameEn: 'gauntlets', cost: 140, description: '+3力量' },
  faerie_fire: { id: 10, name: '仙灵之火', nameEn: 'faerie_fire', cost: 70, description: '+2攻击力，使用后恢复生命' },
  blood_granade: { id: 11, name: '血榴弹', nameEn: 'blood_granade', cost: 65, description: '投掷造成伤害和减速' },
  
  // 中期小件
  magic_wand: { id: 12, name: '魔杖', nameEn: 'magic_wand', cost: 450, description: '充能恢复生命和魔法' },
  boots: { id: 13, name: '速度之靴', nameEn: 'boots', cost: 500, description: '+45移动速度' },
  power_treads: { id: 14, name: '动力鞋', nameEn: 'power_treads', cost: 1400, description: '+45移速，+10指定属性' },
  phase_boots: { id: 15, name: '相位鞋', nameEn: 'phase_boots', cost: 1500, description: '+45移速，+18攻击力，相位移动' },
  arcane_boots: { id: 16, name: '秘法鞋', nameEn: 'arcane_boots', cost: 1300, description: '+45移速，回复周围魔法' },
  tranquil_boots: { id: 17, name: '静谧之鞋', nameEn: 'tranquil_boots', cost: 925, description: '+65移速，+14生命恢复' },
  bracer: { id: 18, name: '护腕', nameEn: 'bracer', cost: 505, description: '+4力量，+2敏捷，+2智力' },
  wraith_band: { id: 19, name: '怨灵系带', nameEn: 'wraith_band', cost: 505, description: '+4敏捷，+2力量，+2智力' },
  null_talisman: { id: 20, name: '空灵挂件', nameEn: 'null_talisman', cost: 505, description: '+4智力，+2力量，+2敏捷' },
  soul_ring: { id: 21, name: '灵魂之戒', nameEn: 'soul_ring', cost: 805, description: '牺牲生命换取魔法' },
  bottle: { id: 22, name: '魔瓶', nameEn: 'bottle', cost: 675, description: '储存神符，恢复生命和魔法' },
  urn: { id: 23, name: '影之灵龛', nameEn: 'urn_of_shadows', cost: 880, description: '充能后回复或伤害' },
  spirit_vessel: { id: 24, name: '魂之灵瓮', nameEn: 'spirit_vessel', cost: 2940, description: '强力充能回复/伤害' },
  blink: { id: 25, name: '闪烁匕首', nameEn: 'blink', cost: 2250, description: '瞬间传送至目标地点' },
  force_staff: { id: 26, name: '原力法杖', nameEn: 'force_staff', cost: 2200, description: '推动单位前进' },
  glimmer: { id: 27, name: '微光披风', nameEn: 'glimmer_cape', cost: 2150, description: '隐身并给予魔法抗性' },
  ghost: { id: 28, name: '幽魂权杖', nameEn: 'ghost', cost: 1500, description: '进入虚无状态' },
  aether_lens: { id: 29, name: '以太透镜', nameEn: 'aether_lens', cost: 2275, description: '+225施法距离' },
  euls: { id: 30, name: '风之杖', nameEn: 'cyclone', cost: 2725, description: '将目标吹到空中' },
  
  // 核心装备
  black_king_bar: { id: 31, name: '黑皇杖', nameEn: 'black_king_bar', cost: 4050, description: '技能免疫' },
  manta: { id: 32, name: '幻影斧', nameEn: 'manta', cost: 4550, description: '创造2个幻象' },
  battlefury: { id: 33, name: '狂战斧', nameEn: 'bfury', cost: 4100, description: '近战溅射伤害' },
  radiance: { id: 34, name: '辉耀', nameEn: 'radiance', cost: 4700, description: '范围灼烧伤害' },
  butterfly: { id: 35, name: '蝴蝶', nameEn: 'butterfly', cost: 5275, description: '+35敏捷，+35%闪避' },
  daedalus: { id: 36, name: '代达罗斯之殇', nameEn: 'daedalus', cost: 5100, description: '+88攻击力，暴击' },
  monkey_king_bar: { id: 37, name: '金箍棒', nameEn: 'monkey_king_bar', cost: 4700, description: '+40攻击力，克敌机先' },
  abyssal_blade: { id: 38, name: '深渊之刃', nameEn: 'abyssal_blade', cost: 6250, description: '被动晕眩+主动晕眩' },
  divine_rapier: { id: 39, name: '圣剑', nameEn: 'rapier', cost: 5600, description: '+350攻击力，死亡掉落' },
  satanic: { id: 40, name: '撒旦之邪力', nameEn: 'satanic', cost: 5050, description: '+25力量，强力吸血' },
  heart: { id: 41, name: '恐鳌之心', nameEn: 'heart', cost: 5200, description: '+40力量，+1.6%最大生命恢复' },
  skadi: { id: 42, name: '斯嘉蒂之眼', nameEn: 'skadi', cost: 5300, description: '+22全属性，减速攻击' },
  assault: { id: 43, name: '强袭胸甲', nameEn: 'assault', cost: 5125, description: '+30攻速，+15护甲光环' },
  shivas: { id: 44, name: '希瓦的守护', nameEn: 'shivas_guard', cost: 4850, description: '+30智力，+15护甲，寒冰光环' },
  sheepstick: { id: 45, name: '邪恶镰刀', nameEn: 'sheepstick', cost: 5675, description: '将目标变成小动物' },
  refresher: { id: 46, name: '刷新球', nameEn: 'refresher', cost: 5000, description: '刷新所有技能冷却' },
  linkens: { id: 47, name: '林肯法球', nameEn: 'sphere', cost: 4800, description: '阻挡一次指向性法术' },
  bloodstone: { id: 48, name: '血精石', nameEn: 'bloodstone', cost: 4600, description: '+550生命，+550魔法' },
  lotus_orb: { id: 49, name: '清莲宝珠', nameEn: 'lotus_orb', cost: 3850, description: '反弹指向性法术' },
  pipe: { id: 50, name: '洞察烟斗', nameEn: 'pipe', cost: 3525, description: '魔法抗性光环和护盾' },
  crimson: { id: 51, name: '赤红甲', nameEn: 'crimson_guard', cost: 3600, description: '物理伤害格挡光环' },
  vladmir: { id: 52, name: '弗拉迪米尔的祭品', nameEn: 'vladmir', cost: 2450, description: '+18%吸血光环，+4护甲' },
  mekansm: { id: 53, name: '梅肯斯姆', nameEn: 'mekansm', cost: 1775, description: '回复周围友军生命' },
  guardian_greaves: { id: 54, name: '卫士胫甲', nameEn: 'guardian_greaves', cost: 4950, description: '强力团队恢复' },
  solar_crest: { id: 55, name: '炎阳纹章', nameEn: 'solar_crest', cost: 2625, description: '+/-6护甲，+/-50攻速' },
  drum: { id: 56, name: '韧鼓', nameEn: 'ancient_janggo', cost: 1650, description: '+6全属性，主动加速' },
  helm_of_dominator: { id: 57, name: '支配头盔', nameEn: 'helm_of_the_dominator', cost: 2475, description: '支配野怪' },
  veil: { id: 58, name: '纷争面纱', nameEn: 'veil_of_discord', cost: 1525, description: '法术伤害加深' },
  orchid: { id: 59, name: '紫怨', nameEn: 'orchid', cost: 3475, description: '+40攻速，+30攻击，沉默' },
  bloodthorn: { id: 60, name: '血棘', nameEn: 'bloodthorn', cost: 6575, description: '强化沉默，+60伤害' },
  mjollnir: { id: 61, name: '雷神之锤', nameEn: 'mjollnir', cost: 5500, description: '+70攻速，连锁闪电' },
  mkb: { id: 62, name: '金箍棒', nameEn: 'monkey_king_bar', cost: 4700, description: '克敌机先，+40攻击力' },
  aghanim: { id: 63, name: '阿哈利姆神杖', nameEn: 'ultimate_scepter', cost: 4200, description: '升级终极技能' },
  aghanim_shard: { id: 64, name: '阿哈利姆魔晶', nameEn: 'aghanims_shard', cost: 1400, description: '升级一个技能' },
  octarine: { id: 65, name: '玲珑心', nameEn: 'octarine_core', cost: 4600, description: '+25%冷却缩减' },
  hurricane_pike: { id: 66, name: '飓风长戟', nameEn: 'hurricane_pike', cost: 4450, description: '+20敏捷，远程推离' },
  dragon_lance: { id: 67, name: '魔龙枪', nameEn: 'dragon_lance', cost: 1900, description: '+12敏捷，+12力量，+150射程' },
  echo_sabre: { id: 68, name: '回音战刃', nameEn: 'echo_sabre', cost: 2500, description: '双重攻击，减速' },
  harpoon: { id: 69, name: '鱼叉', nameEn: 'harpoon', cost: 4400, description: '拉向目标' },
  diffusal: { id: 70, name: '散失', nameEn: 'diffusal_blade', cost: 2500, description: '燃烧魔法' },
  desolator: { id: 71, name: '黯灭', nameEn: 'desolator', cost: 3500, description: '+50攻击力，-6护甲' },
  mask_of_madness: { id: 72, name: '疯狂面具', nameEn: 'mask_of_madness', cost: 1900, description: '+110攻速，30%吸血' },
  armlet: { id: 73, name: '莫尔迪基安的臂章', nameEn: 'armlet', cost: 2500, description: '+25力量，主动切换' },
  blade_mail: { id: 74, name: '刃甲', nameEn: 'blade_mail', cost: 2100, description: '反弹伤害' },
  heavens_halberd: { id: 75, name: '天堂之戟', nameEn: 'heavens_halberd', cost: 3550, description: '+20力量，缴械' },
  ethereal_blade: { id: 76, name: '虚灵之刃', nameEn: 'ethereal_blade', cost: 4650, description: '虚无化目标' },
  dagon5: { id: 77, name: '达贡之神力', nameEn: 'dagon', cost: 3950, description: '能量冲击' },
  kaya_sange: { id: 78, name: '散慧对剑', nameEn: 'kaya_and_sange', cost: 4100, description: '+16力量，+16智力' },
  sange_yasha: { id: 79, name: '散夜对剑', nameEn: 'sange_and_yasha', cost: 4100, description: '+16力量，+16敏捷' },
  yasha_kaya: { id: 80, name: '慧夜对剑', nameEn: 'yasha_and_kaya', cost: 4100, description: '+16敏捷，+16智力' },
  mage_slayer: { id: 81, name: '法师克星', nameEn: 'mage_slayer', cost: 2825, description: '+20%魔法抗性' },
  falcon_blade: { id: 82, name: '猎鹰战刃', nameEn: 'falcon_blade', cost: 1125, description: '+12攻击，+150生命，+1.8魔法恢复' },
  wind_waker: { id: 83, name: '风之杖', nameEn: 'wind_waker', cost: 6825, description: '可将自身吹起并移动' },
  overwhelming_blink: { id: 84, name: '压制之刃', nameEn: 'overwhelming_blink', cost: 6800, description: '闪烁造成伤害和减速' },
  swift_blink: { id: 85, name: '迅捷闪烁', nameEn: 'swift_blink', cost: 6800, description: '闪烁+40%移速和+50攻速' },
  arcane_blink: { id: 86, name: '秘法闪烁', nameEn: 'arcane_blink', cost: 6800, description: '闪烁-50%冷却和施法点' },
  quelling_blade: { id: 87, name: '压制之刃', nameEn: 'quelling_blade', cost: 100, description: '近战+8攻击，远程+4攻击对非英雄单位' },
};

// 按角色为英雄生成出装推荐
function generateBuildForHero(hero: Hero): HeroItemBuild {
  const isCore = hero.roles.includes('核心');
  const isSupport = hero.roles.includes('辅助');
  const attr = hero.attribute;
  
  // 核心力量英雄出装
  if (isCore && attr === 'strength') {
    return {
      heroId: hero.id,
      earlyGame: [
        itemPool.gauntlets, itemPool.tango, itemPool.branch, itemPool.quelling_blade,
        itemPool.magic_wand, itemPool.bracer,
      ],
      midGame: [
        itemPool.phase_boots, itemPool.blink, itemPool.blade_mail,
        itemPool.echo_sabre, itemPool.black_king_bar, itemPool.harpoon,
      ],
      lateGame: [
        itemPool.heart, itemPool.assault, itemPool.abyssal_blade,
        itemPool.overwhelming_blink, itemPool.satanic, itemPool.aghanim,
      ],
    };
  }
  
  // 核心敏捷英雄出装
  if (isCore && attr === 'agility') {
    return {
      heroId: hero.id,
      earlyGame: [
        itemPool.slippers, itemPool.tango, itemPool.branch, itemPool.wraith_band,
        itemPool.magic_wand, itemPool.wraith_band,
      ],
      midGame: [
        itemPool.power_treads, itemPool.manta, itemPool.dragon_lance,
        itemPool.black_king_bar, itemPool.sange_yasha, itemPool.hurricane_pike,
      ],
      lateGame: [
        itemPool.butterfly, itemPool.skadi, itemPool.daedalus,
        itemPool.swift_blink, itemPool.satanic, itemPool.monkey_king_bar,
      ],
    };
  }
  
  // 核心智力英雄出装
  if (isCore && attr === 'intelligence') {
    return {
      heroId: hero.id,
      earlyGame: [
        itemPool.mantle, itemPool.tango, itemPool.branch, itemPool.null_talisman,
        itemPool.bottle, itemPool.null_talisman,
      ],
      midGame: [
        itemPool.arcane_boots, itemPool.veil, itemPool.kaya_sange,
        itemPool.black_king_bar, itemPool.orchid, itemPool.bloodthorn,
      ],
      lateGame: [
        itemPool.sheepstick, itemPool.shivas, itemPool.octarine,
        itemPool.arcane_blink, itemPool.refresher, itemPool.aghanim,
      ],
    };
  }
  
  // 核心全才英雄出装
  if (isCore && attr === 'universal') {
    return {
      heroId: hero.id,
      earlyGame: [
        itemPool.circlet, itemPool.tango, itemPool.branch, itemPool.bracer,
        itemPool.magic_wand, itemPool.falcon_blade,
      ],
      midGame: [
        itemPool.power_treads, itemPool.blink, itemPool.manta,
        itemPool.black_king_bar, itemPool.harpoon, itemPool.skadi,
      ],
      lateGame: [
        itemPool.heart, itemPool.butterfly, itemPool.sheepstick,
        itemPool.swift_blink, itemPool.aghanim, itemPool.daedalus,
      ],
    };
  }
  
  // 辅助出装
  if (isSupport) {
    return {
      heroId: hero.id,
      earlyGame: [
        itemPool.tango, itemPool.flask, itemPool.branch, itemPool.blood_granade,
        itemPool.magic_wand, itemPool.boots,
      ],
      midGame: [
        itemPool.arcane_boots, itemPool.glimmer, itemPool.force_staff,
        itemPool.urn, itemPool.spirit_vessel, itemPool.aether_lens,
      ],
      lateGame: [
        itemPool.guardian_greaves, itemPool.solar_crest, itemPool.lotus_orb,
        itemPool.aghanim_shard, itemPool.sheepstick, itemPool.refresher,
      ],
    };
  }
  
  // 默认
  return {
    heroId: hero.id,
    earlyGame: [itemPool.tango, itemPool.branch, itemPool.circlet, itemPool.magic_wand, itemPool.boots, itemPool.falcon_blade],
    midGame: [itemPool.power_treads, itemPool.blink, itemPool.black_king_bar, itemPool.manta, itemPool.sange_yasha, itemPool.echo_sabre],
    lateGame: [itemPool.heart, itemPool.butterfly, itemPool.skadi, itemPool.swift_blink, itemPool.satanic, itemPool.aghanim],
  };
}

// 生成所有英雄的出装
export const heroItemBuilds: HeroItemBuild[] = heroes.map(generateBuildForHero);

// 获取英雄出装
export function getHeroItemBuild(heroId: number): HeroItemBuild | undefined {
  return heroItemBuilds.find(b => b.heroId === heroId);
}

// 装备图标 URL
export function getItemIconUrl(nameEn: string): string {
  return `https://cdn.stratz.com/images/dota2/items/${nameEn}.png`;
}