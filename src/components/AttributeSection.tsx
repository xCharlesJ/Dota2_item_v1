import { Shield, Swords, Wand, Star } from 'lucide-react';
import type { Hero } from '../types';
import { attributeLabels, attributeColors } from '../data/heroes';
import HeroCard from './HeroCard';

const attributeIcons: Record<Hero['attribute'], typeof Shield> = {
  strength: Shield,
  agility: Swords,
  intelligence: Wand,
  universal: Star,
};

interface AttributeSectionProps {
  attribute: Hero['attribute'];
  heroes: Hero[];
}

export default function AttributeSection({ attribute, heroes }: AttributeSectionProps) {
  if (heroes.length === 0) return null;

  const Icon = attributeIcons[attribute];
  const color = attributeColors[attribute];
  const label = attributeLabels[attribute];

  return (
    <section className="mb-12 animate-slide-up">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 px-1">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: color + '20' }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div>
          <h2
            className="font-display text-xl font-bold tracking-wider"
            style={{ color }}
          >
            {label}
          </h2>
          <p className="text-xs text-slate-500">{heroes.length} 位英雄</p>
        </div>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: color + '30' }} />
      </div>

      {/* Hero Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  );
}