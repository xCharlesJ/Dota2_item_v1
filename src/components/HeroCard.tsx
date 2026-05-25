import { Link } from 'react-router-dom';
import { Swords, Shield, Wand, Star } from 'lucide-react';
import type { Hero } from '../types';
import { getHeroPortraitUrl } from '../data/heroes';

const attributeIcons: Record<Hero['attribute'], typeof Swords> = {
  strength: Shield,
  agility: Swords,
  intelligence: Wand,
  universal: Star,
};

const attributeTextColors: Record<Hero['attribute'], string> = {
  strength: 'text-red-400',
  agility: 'text-green-400',
  intelligence: 'text-blue-400',
  universal: 'text-purple-400',
};

interface HeroCardProps {
  hero: Hero;
}

export default function HeroCard({ hero }: HeroCardProps) {
  const Icon = attributeIcons[hero.attribute];
  const textColor = attributeTextColors[hero.attribute];

  return (
    <Link
      to={`/hero/${hero.id}`}
      className="group block animate-fade-in"
    >
      <div className="relative bg-dota-card border border-dota-border rounded-lg overflow-hidden transition-all duration-300 group-hover:border-dota-gold/50 group-hover:shadow-[0_0_20px_rgba(200,155,60,0.2)] group-hover:-translate-y-1">
        {/* Hero Portrait */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={getHeroPortraitUrl(hero.nameEn)}
            alt={hero.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://cdn.stratz.com/images/dota2/heroes/${hero.nameEn.replace(/_/g, '')}_vert.png`;
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dota-card via-transparent to-transparent opacity-60" />
        </div>

        {/* Hero Info */}
        <div className="p-2.5 relative">
          <div className="flex items-center gap-1.5 mb-1">
            <Icon className={`w-3.5 h-3.5 ${textColor}`} />
            <span className="text-xs text-slate-500">
              {hero.attackType === 'melee' ? '近战' : '远程'}
            </span>
          </div>
          <h3 className="font-body text-sm font-medium text-slate-200 truncate">
            {hero.name}
          </h3>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-colors duration-300 group-hover:border-dota-gold/20 pointer-events-none" />
      </div>
    </Link>
  );
}