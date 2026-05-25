import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Coins, Shield, Swords, Wand, Star, Zap, Target } from 'lucide-react';
import { getHeroById, getHeroPortraitUrl, attributeColors, attributeLabels } from '../data/heroes';
import { getHeroItemBuild, getItemIconUrl } from '../data/items';
import { getHeroSkillBuild } from '../data/skills';
import type { Item, Skill } from '../types';

const attributeIcons: Record<string, typeof Shield> = {
  strength: Shield,
  agility: Swords,
  intelligence: Wand,
  universal: Star,
};

// Item icon with fallback
function ItemIcon({ item }: { item: Item }) {
  return (
    <div className="relative group/item">
      <div className="w-12 h-9 sm:w-14 sm:h-10 bg-dota-card border border-dota-border rounded overflow-hidden flex items-center justify-center">
        <img
          src={getItemIconUrl(item.nameEn)}
          alt={item.name}
          className="w-full h-full object-contain p-0.5"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 p-2 bg-slate-800 border border-dota-border rounded-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-20 pointer-events-none">
        <p className="text-xs font-medium text-dota-gold mb-0.5">{item.name}</p>
        <p className="text-xs text-slate-400 mb-1">{item.description}</p>
        <p className="text-xs text-slate-500 flex items-center gap-1">
          <Coins className="w-3 h-3" /> {item.cost}
        </p>
      </div>
    </div>
  );
}

function SkillIcon({ skill, order }: { skill: Skill; order?: number }) {
  return (
    <div className="relative group/skill">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-dota-card border border-dota-border rounded overflow-hidden flex items-center justify-center">
        <img
          src={`https://cdn.stratz.com/images/dota2/skills/${skill.id}.png`}
          alt={skill.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `<span class="text-xs text-slate-600">${skill.name[0]}</span>`;
          }}
        />
      </div>
      {order && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-dota-gold text-black text-xs font-bold rounded-full flex items-center justify-center">
          {order}
        </span>
      )}
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-36 p-2 bg-slate-800 border border-dota-border rounded-lg opacity-0 invisible group-hover/skill:opacity-100 group-hover/skill:visible transition-all duration-200 z-20 pointer-events-none">
        <p className="text-xs font-medium text-dota-gold">{skill.name}</p>
        <p className="text-xs text-slate-400">{skill.description}</p>
      </div>
    </div>
  );
}

export default function HeroDetailPage() {
  const { id } = useParams<{ id: string }>();
  const hero = getHeroById(Number(id));
  const itemBuild = getHeroItemBuild(Number(id));
  const skillBuild = getHeroSkillBuild(Number(id));

  if (!hero) {
    return (
      <div className="min-h-screen bg-dota-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 text-lg mb-4">英雄未找到</p>
          <Link to="/" className="text-dota-gold hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  const AttrIcon = attributeIcons[hero.attribute];
  const attrColor = attributeColors[hero.attribute];

  const buildStages = itemBuild ? [
    { label: '前期装备', time: '0-15分钟', items: itemBuild.earlyGame },
    { label: '中期装备', time: '15-30分钟', items: itemBuild.midGame },
    { label: '后期装备', time: '30分钟+', items: itemBuild.lateGame },
  ] : [];

  return (
    <div className="min-h-screen bg-dota-bg">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-dota-bg/95 backdrop-blur-md border-b border-dota-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-dota-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回英雄列表</span>
          </Link>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 animate-fade-in">
          {/* Portrait */}
          <div className="w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 rounded-lg overflow-hidden border border-dota-border flex-shrink-0 mx-auto md:mx-0">
            <img
              src={getHeroPortraitUrl(hero.nameEn)}
              alt={hero.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://cdn.stratz.com/images/dota2/heroes/${hero.nameEn.replace(/_/g, '')}_vert.png`;
              }}
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-dota-gold mb-4 tracking-wider">
              {hero.name}
            </h1>
            <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest">{hero.nameEn.replace(/_/g, ' ')}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{ backgroundColor: attrColor + '20', color: attrColor, border: `1px solid ${attrColor}40` }}
              >
                <AttrIcon className="w-4 h-4" />
                {attributeLabels[hero.attribute]}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-800/50 border border-dota-border text-slate-300">
                <Target className="w-4 h-4" />
                {hero.attackType === 'melee' ? '近战' : '远程'}
              </div>
              {hero.roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-dota-gold/10 text-dota-gold border border-dota-gold/20"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Item Build Section */}
        <section className="mb-12 animate-slide-up">
          <h2 className="font-display text-2xl font-bold text-dota-gold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            推荐出装
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {buildStages.map((stage) => (
              <div
                key={stage.label}
                className="bg-dota-card border border-dota-border rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-dota-gold" />
                  <h3 className="font-display text-base font-bold text-slate-200">{stage.label}</h3>
                  <span className="text-xs text-slate-500 ml-auto">{stage.time}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {stage.items.map((item, idx) => (
                    <ItemIcon key={idx} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skill Build Section */}
        {skillBuild && (
          <section className="mb-12 animate-slide-up">
            <h2 className="font-display text-2xl font-bold text-dota-gold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6" />
              技能加点推荐
            </h2>

            <div className="bg-dota-card border border-dota-border rounded-xl p-4 sm:p-6">
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 justify-center sm:justify-start">
                {skillBuild.skills.map((skill, idx) => (
                  <SkillIcon key={skill.id} skill={skill} />
                ))}
              </div>

              <div className="border-t border-dota-border pt-4">
                <p className="text-xs text-slate-500 mb-3">推荐加点顺序</p>
                <div className="flex flex-wrap gap-2">
                  {skillBuild.skillOrder.map((level, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded border border-dota-border bg-dota-bg flex items-center justify-center text-xs text-slate-300 font-medium"
                    >
                      {level === 4 ? 'R' : level === 1 ? 'Q' : level === 2 ? 'W' : 'E'}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-dota-border py-6 text-center text-slate-600 text-xs">
        Charles Works · 数据仅供参考 · 实际游戏请根据局势灵活调整
      </footer>
    </div>
  );
}