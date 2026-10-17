import React from 'react';
import { Home, Search, Globe, Compass, BarChart2 } from 'lucide-react';

export type TabType = 'home' | 'search' | 'globe' | 'details' | 'welcome';

interface BottomNavBarProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
  className?: string;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onChangeTab,
  className = '',
}) => {
  const tabs = [
    { id: 'home' as TabType, label: 'Home', icon: Home },
    { id: 'search' as TabType, label: 'Search', icon: Search },
    { id: 'globe' as TabType, label: 'Globe', icon: Globe },
    { id: 'details' as TabType, label: 'Details', icon: BarChart2 },
    { id: 'welcome' as TabType, label: 'Intro', icon: Compass },
  ];

  return (
    <nav className={`w-full bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-4 py-2.5 flex items-center justify-around shadow-lg ${className}`}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 ${
              isActive
                ? 'text-[#6250C7] font-bold'
                : 'text-[#89869A] hover:text-[#171622] font-medium'
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-purple-50 scale-110' : ''}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
