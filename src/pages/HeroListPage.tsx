import { useState, useMemo } from 'react';
import type { Hero } from '../types';
import { heroes } from '../data/heroes';
import Navbar from '../components/Navbar';
import AttributeSection from '../components/AttributeSection';

export default function HeroListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAttribute, setActiveAttribute] = useState<Hero['attribute'] | 'all'>('all');

  const filteredHeroes = useMemo(() => {
    let result = heroes;

    // Filter by attribute
    if (activeAttribute !== 'all') {
      result = result.filter(h => h.attribute === activeAttribute);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        h => h.name.toLowerCase().includes(q) || h.nameEn.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeAttribute, searchQuery]);

  // Group by attribute
  const attributeOrder: Hero['attribute'][] = ['strength', 'agility', 'intelligence', 'universal'];

  const groupedHeroes = useMemo(() => {
    if (activeAttribute !== 'all') {
      const attr = activeAttribute;
      return [{ attribute: attr, heroes: filteredHeroes }];
    }
    return attributeOrder.map(attr => ({
      attribute: attr,
      heroes: filteredHeroes.filter(h => h.attribute === attr),
    }));
  }, [filteredHeroes, activeAttribute]);

  return (
    <div className="min-h-screen bg-dota-bg">
      <Navbar
        onSearch={setSearchQuery}
        activeAttribute={activeAttribute}
        onAttributeChange={setActiveAttribute}
      />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-dota-gold mb-3 tracking-wider">
            选择你的英雄
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            浏览 {heroes.length} 位英雄，查看推荐出装方案
          </p>
        </div>

        {/* Hero Sections */}
        {groupedHeroes.map(({ attribute, heroes: groupHeroes }) => (
          <AttributeSection
            key={attribute}
            attribute={attribute}
            heroes={groupHeroes}
          />
        ))}

        {/* Empty State */}
        {filteredHeroes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">没有找到匹配的英雄</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveAttribute('all'); }}
              className="mt-4 px-4 py-2 text-sm text-dota-gold border border-dota-gold/30 rounded-lg hover:bg-dota-gold/10 transition-colors"
            >
              清除筛选
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-dota-border py-6 text-center text-slate-600 text-xs">
        DOTA2 出装助手 · 数据仅供参考 · 实际游戏请根据局势灵活调整
      </footer>
    </div>
  );
}