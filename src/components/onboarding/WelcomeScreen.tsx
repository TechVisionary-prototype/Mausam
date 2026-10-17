import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { InteractiveWorldMap } from '../world/InteractiveWorldMap';
import { CityWeather } from '../../types/weather';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onBack?: () => void;
  onSelectCity?: (city: CityWeather) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onGetStarted,
  onBack,
  onSelectCity,
}) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail) return;
    setLoginSuccess(true);
    setTimeout(() => {
      setShowLoginModal(false);
      setLoginSuccess(false);
      onGetStarted();
    }, 1200);
  };

  return (
    <div className="relative w-full h-full min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#5140B5] text-[#171622]">
      {/* Top Controls Bar */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
        {/* Minimal Back Button in Upper-Left Corner */}
        <button
          onClick={onBack || onGetStarted}
          aria-label="Navigate back"
          className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-200 active:scale-95 shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Brand / Logo Indicator */}
        <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
          <Sparkles className="w-4 h-4 text-[#FFCE20]" />
          <span className="text-xs font-bold text-white tracking-wider uppercase">Mausam Globe</span>
        </div>
      </div>

      {/* Large Purple World Map with Glowing Weather Markers */}
      <div className="w-full flex-1 relative min-h-[380px]">
        <InteractiveWorldMap
          onSelectCity={(city) => {
            if (onSelectCity) onSelectCity(city);
          }}
          className="w-full h-full"
        />
      </div>

      {/* Floating White Bottom Card with Rounded Corners */}
      <div className="relative z-20 px-4 pb-6 pt-2 max-w-lg mx-auto w-full">
        <div className="bg-white rounded-[34px] p-7 md:p-8 shadow-floating border border-slate-100 flex flex-col text-center transition-all duration-300">
          {/* Subtle Top Pull Indicator */}
          <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-5" />

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#171622] leading-tight tracking-tight mb-3">
            Explore global map of wind, weather, and ocean conditions
          </h1>

          {/* Short Descriptive Text */}
          <p className="text-sm md:text-base text-[#89869A] leading-relaxed mb-6 font-normal max-w-sm mx-auto">
            Experience real-time atmospheric systems, storm corridors, wind velocity, and radar precipitation across every continent.
          </p>

          {/* Prominent Purple "Get Started" Button */}
          <button
            onClick={onGetStarted}
            className="w-full py-4 px-6 bg-[#6250C7] hover:bg-[#5140B5] active:scale-[0.98] text-white font-semibold text-base rounded-2xl shadow-purple transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Small "Already have an account? Log in" Link */}
          <div className="mt-4 pt-1">
            <button
              onClick={() => setShowLoginModal(true)}
              className="text-xs font-medium text-[#89869A] hover:text-[#6250C7] transition-colors duration-150 underline-offset-4 hover:underline"
            >
              Already have an account? <span className="text-[#6250C7] font-semibold">Log in</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl border border-slate-100 relative">
            <h3 className="text-xl font-bold text-[#171622] mb-1">Welcome back</h3>
            <p className="text-xs text-[#89869A] mb-5">Sign in to sync your saved global cities</p>

            {loginSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-2 animate-bounce" />
                <p className="text-sm font-semibold text-slate-800">Signed in successfully!</p>
                <p className="text-xs text-slate-500">Loading your personalized dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="arian@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#6250C7] text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Password</label>
                  <input
                    type="password"
                    required
                    defaultValue="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#6250C7] text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#6250C7] hover:bg-[#5140B5] text-white font-semibold text-sm rounded-xl shadow-purple transition-all"
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="w-full py-2.5 text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
