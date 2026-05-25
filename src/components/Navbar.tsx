import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sword } from 'lucide-react';
import type { Hero } from '../types';
import { attributeColors, attributeLabels } from '../data/heroes';

interface NavbarProps {
  onSearch: (query: string) => void;
  activeAttribute: Hero['attribute'] | 'all';
  onAttributeChange: (attr: Hero['attribute'] | 'all') => void;
}

const attributes: Array<{ key: Hero['attribute'] | 'all'; label: string; color: string }> = [
  { key: 'all', label: '全部', color: '#c89b3c' },
  { key: 'strength', label: '力量', color: '#e43b3b' },
  { key: 'agility', label: '敏捷', color: '#4caf50' },
  { key: 'intelligence', label: '智力', color: '#3b8ce4' },
  { key: 'universal', label: '全才', color: '#9b59b6' },
];

export default function Navbar({ onSearch, activeAttribute, onAttributeChange }: NavbarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <nav className="sticky top-0 z-50 bg-dota-bg/95 backdrop-blur-md border-b border-dota-border">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-dota-gold hover:text-dota-gold/80 transition-colors">
            <Sword className="w-8 h-8" />
            <span className="font-display text-xl font-bold tracking-wider hidden sm:block">
              Dota2Tips
            </span>
          </Link>

          {/* Search */}
          <div className="relative flex-1 max-w-md mx-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="搜索英雄..."
              className="w-full pl-10 pr-4 py-2 bg-dota-card border border-dota-border rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-dota-gold/50 transition-colors"
            />
          </div>

          {/* Attribute Filters */}
          <div className="flex items-center gap-1 sm:gap-2">
            {attributes.map((attr) => (
              <button
                key={attr.key}
                onClick={() => onAttributeChange(attr.key)}
                className="px-2 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeAttribute === attr.key ? attr.color + '20' : 'transparent',
                  color: activeAttribute === attr.key ? attr.color : '#94a3b8',
                  border: `1px solid ${activeAttribute === attr.key ? attr.color + '40' : 'transparent'}`,
                }}
              >
                {attr.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}