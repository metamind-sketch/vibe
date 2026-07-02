/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Play, 
  Pause, 
  Music, 
  Sparkles, 
  Code2, 
  Terminal, 
  Coffee, 
  CheckCircle2, 
  RotateCcw, 
  Volume2, 
  Flame, 
  Sliders, 
  ArrowRight, 
  Compass, 
  Heart, 
  Feather,
  Smartphone,
  Laptop,
  Check,
  Disc,
  Info,
  Upload,
  Video,
  Rocket,
  Globe,
  Star,
  Zap,
  Target,
  Lightbulb,
  ChevronDown,
  Instagram,
  Facebook,
  X,
  Loader2,
  ShieldCheck,
  Clock,
  Percent,
  ChevronRight,
  CreditCard,
  Wallet as WalletIcon
} from 'lucide-react';

import dashboardProofImage from "./assets/images/dashboard_proof_cards_1782713554723.jpg";
import aiStudioIdeImage from "./assets/images/ai_studio_ide_1782714158581.jpg";
import githubRepoViewImage from "./assets/images/github_repo_view_1782714174915.jpg";
import vercelDeployStatusImage from "./assets/images/vercel_deploy_status_1782714187824.jpg";
import vibeCodingLearningImage from "./assets/images/vibe_coding_learning_1782971508316.jpg";
import vibeCodingPeekDevImage from "./assets/images/vibe_coding_peek_dev_1782971676165.jpg";
import vibeCodingLearnBoardImage from "./assets/images/vibe_coding_learn_board_1782973099446.jpg";

// Interfaces for Vibe Presets
interface VibePreset {
  id: string;
  name: string;
  tagline: string;
  icon: any; // Lucide icon
  color: string; // Tailwind text/bg colors
  badgeColor: string;
  glowClass: string;
  defaultPrompt: string;
  code: string;
  renderingId: string;
}

// Track details for the Lofi Player
interface Track {
  title: string;
  album: string;
  bpm: number;
}

export default function App() {
  // Sound Track list (simulated audio files)
  const TRACKS: Track[] = [
    { title: "Cozy Rainfall Coding", album: "Chilled Keys & Water drops", bpm: 58 },
    { title: "Midnight Espresso", album: "Jazzhop Sessions Vol. 4", bpm: 64 },
    { title: "Retro Grid Runner", album: "Neon Horizon Synthwave", bpm: 82 },
    { title: "Deep Space Focus", album: "Astral Ambient Oscillations", bpm: 45 },
  ];

  // Selected preset states
  const VIBES: VibePreset[] = [
    {
      id: "zen",
      name: "Ethereal Zen",
      tagline: "Soft, organic, pastel palettes with smooth breathing frequencies.",
      icon: Feather,
      color: "from-indigo-400 to-pink-300",
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
      glowClass: "glow-indigo",
      defaultPrompt: "build a breathing meditation circle for developer focus",
      renderingId: "zen-render",
      code: `// Ethereal Zen Breathe Guide
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ZenFocus() {
  const [inhale, setInhale] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-900/40 rounded-xl p-8 backdrop-blur-md">
      <motion.div
        animate={{ scale: inhale ? 1.4 : 0.8 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        onUpdate={(latest) => {
          if (latest.scale && latest.scale > 1.35) setInhale(false);
          if (latest.scale && latest.scale < 0.85) setInhale(true);
        }}
        className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 flex items-center justify-center border border-indigo-300/30 shadow-2xl shadow-indigo-500/20"
      >
        <div className="w-16 h-16 rounded-full bg-slate-950/75 border border-white/10 flex items-center justify-center">
          <span className="text-[10px] font-mono tracking-widest text-indigo-200">
            {inhale ? "INHALE" : "EXHALE"}
          </span>
        </div>
      </motion.div>
      <p className="mt-6 text-sm text-slate-400 font-sans tracking-tight text-center max-w-[200px]">
        Synch your breaths to release syntax tension.
      </p>
    </div>
  );
}`
    },
    {
      id: "cyber",
      name: "Cyber Hack",
      tagline: "High-speed matrix diagnostic terminals, deep neon green monitors.",
      icon: Terminal,
      color: "from-emerald-400 to-cyan-400",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      glowClass: "glow-emerald",
      defaultPrompt: "create a real-time system performance monitor dashboard",
      renderingId: "cyber-render",
      code: `// Cyber Hack Live Performance Monitor
import React, { useState, useEffect } from 'react';

export default function CyberMonitor() {
  const [metrics, setMetrics] = useState({ cpu: 42, ram: 61, net: 89 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * (75 - 30) + 30),
        ram: Math.floor(Math.random() * (85 - 55) + 55),
        net: Math.floor(Math.random() * (99 - 70) + 70),
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-slate-950 p-6 rounded-xl border border-emerald-500/20 font-mono text-[11px] text-emerald-400">
      <div className="flex justify-between border-b border-emerald-500/10 pb-2 mb-4">
        <span>[SYS_MONITOR_ACTIVE]</span>
        <span className="animate-pulse">● LIVE_FEED</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-1">
            <span>CPU_LOAD: {metrics.cpu}%</span>
            <span>[{ "=".repeat(Math.floor(metrics.cpu/10)) }{".".repeat(10-Math.floor(metrics.cpu/10))}]</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>RAM_USED: {metrics.ram}%</span>
            <span>[{ "=".repeat(Math.floor(metrics.ram/10)) }{".".repeat(10-Math.floor(metrics.ram/10))}]</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>NET_FLOW: {metrics.net}MB/S</span>
            <span className="text-cyan-400">STABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}`
    },
    {
      id: "cafe",
      name: "Cozy Cafe",
      tagline: "Warm amber environments, hot coffee steam, and simple focus timers.",
      icon: Coffee,
      color: "from-amber-400 to-orange-400",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      glowClass: "glow-amber",
      defaultPrompt: "build a custom vintage espresso machine brewing interface",
      renderingId: "cafe-render",
      code: `// Cozy Cafe Coffee Steam Visualizer
import React, { useState } from 'react';

export default function CozyBrew() {
  const [brewing, setBrewing] = useState(false);
  const [cups, setCups] = useState(3);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-orange-950/20 rounded-xl p-8 border border-amber-900/20">
      <div className="relative mb-6">
        {/* Animated Steam lines */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex space-x-2">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={\`w-1 h-8 bg-amber-200/40 rounded-full animate-bounce\` }
              style={{ animationDelay: \`\${i * 0.2}s\`, animationDuration: '1.5s' }}
            />
          ))}
        </div>
        {/* Coffee Mug */}
        <div className="w-20 h-16 bg-amber-900/80 rounded-b-2xl rounded-t-sm border-r-8 border-amber-800 relative shadow-md">
          <div className="absolute -right-8 top-3 w-6 h-8 border-4 border-amber-800 rounded-full" />
        </div>
      </div>
      <button 
        onClick={() => {
          setBrewing(true);
          setTimeout(() => { setBrewing(false); setCups(c => c + 1); }, 2500);
        }}
        disabled={brewing}
        className="px-4 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-600 disabled:bg-amber-900/40 text-xs font-mono text-amber-50 transition-colors"
      >
        {brewing ? "Brewing Cup..." : "Brew Coffee"}
      </button>
      <span className="mt-3 text-[10px] font-mono text-amber-300/60">Brewed today: {cups} cups</span>
    </div>
  );
}`
    },
    {
      id: "retro",
      name: "Retro Wave",
      tagline: "Sunset horizons, neon violet grids, and pulsing synth wave bars.",
      icon: Compass,
      color: "from-pink-400 to-fuchsia-400",
      badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/20",
      glowClass: "glow-pink",
      defaultPrompt: "make a synth wave style aesthetic grid sunset animation",
      renderingId: "retro-render",
      code: `// Retro Synth Wave Horizon Grid
import React, { useState } from 'react';

export default function RetroGrid() {
  const [intensity, setIntensity] = useState(60);

  return (
    <div className="relative h-full bg-slate-950 rounded-xl p-6 overflow-hidden flex flex-col justify-end border border-pink-500/20">
      {/* Retro Sunset */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-b from-pink-500 to-amber-500 opacity-80 blur-xs">
        {/* Striped Sunset Lines */}
        <div className="absolute bottom-4 w-full h-1 bg-slate-950 opacity-40" />
        <div className="absolute bottom-10 w-full h-2 bg-slate-950 opacity-50" />
        <div className="absolute bottom-16 w-full h-3 bg-slate-950 opacity-60" />
      </div>
      {/* Neon Grid */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_bottom,transparent_0%,rgba(236,72,153,0.15)_100%)] border-t border-pink-500/30">
        <div className="w-full h-full bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:16px_16px] [transform:perspective(50px)_rotateX(60deg)] origin-top" />
      </div>
      <div className="relative z-10 bg-slate-900/90 border border-white/5 p-3 rounded-lg flex items-center justify-between">
        <span className="text-[10px] font-mono text-pink-300">SYNTH_INTENSITY</span>
        <input 
          type="range" 
          value={intensity} 
          onChange={(e) => setIntensity(Number(e.target.value))} 
          className="w-24 accent-pink-500"
        />
      </div>
    </div>
  );
}`
    }
  ];

  // Core App states
  const [selectedVibe, setSelectedVibe] = useState<VibePreset>(VIBES[0]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(499);
  const [paymentEmail, setPaymentEmail] = useState("");
  const [paymentPhone, setPaymentPhone] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'details' | 'options' | 'success'>('details');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [qrTimer, setQrTimer] = useState(705); // 11:45 = 11*60 + 45 = 705s
  const [activePaymentTab, setActivePaymentTab] = useState<'upi' | 'cards' | 'netbanking' | 'wallet'>('upi');
  const [activeDirectApp, setActiveDirectApp] = useState<'gpay' | 'phonepe' | 'paytm' | 'cred' | 'bhim' | null>(null);

  // Top Banner Countdown Timer state (starts at 13:17)
  const [bannerTimer, setBannerTimer] = useState(13 * 60 + 17);

  // State for dynamic purchasing notifications by Tamil Nadu users
  const [currentPurchase, setCurrentPurchase] = useState<{
    name: string;
    city: string;
    item: string;
    price: string;
    time: string;
  } | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const TAMIL_PURCHASES = [
      { name: "Karthikeyan", city: "Chennai", item: "Vibe Coding Course + 3 Platforms bundle", price: "₹499", time: "just now" },
      { name: "Priyadharshini", city: "Madurai", item: "Google AI Studio Pro Tool", price: "₹499", time: "1 min ago" },
      { name: "Suresh Kumar", city: "Coimbatore", item: "GitHub Sync Platform", price: "₹499", time: "just now" },
      { name: "Anitha Selvam", city: "Trichy", item: "Vibe Coding Course + 3 Platforms bundle", price: "₹499", time: "3 mins ago" },
      { name: "Vigneshwaran", city: "Salem", item: "Vercel Deploy Automation", price: "₹499", time: "2 mins ago" },
      { name: "Abirami Devi", city: "Tirunelveli", item: "Vibe Coding Course + 3 Platforms bundle", price: "₹499", time: "just now" },
      { name: "Naveen Raj", city: "Erode", item: "Google AI Studio Pro Tool", price: "₹499", time: "4 mins ago" },
      { name: "Divya Bharathi", city: "Vellore", item: "Vibe Coding Course + 3 Platforms bundle", price: "₹499", time: "just now" },
      { name: "Balaji Prasanna", city: "Thanjavur", item: "GitHub Sync Platform", price: "₹499", time: "5 mins ago" },
      { name: "Kavin Kumar", city: "Tuticorin", item: "Vercel Deploy Automation", price: "₹499", time: "just now" },
      { name: "Senthamizhan", city: "Thiruvarur", item: "Vibe Coding Course + 3 Platforms bundle", price: "₹499", time: "1 min ago" },
      { name: "Ramya Pandian", city: "Nagercoil", item: "Google AI Studio Pro Tool", price: "₹499", time: "2 mins ago" }
    ];

    // Show initial notification after 5 seconds
    const initialTimer = setTimeout(() => {
      const randomItem = TAMIL_PURCHASES[Math.floor(Math.random() * TAMIL_PURCHASES.length)];
      setCurrentPurchase(randomItem);
      setShowNotification(true);
    }, 5000);

    const interval = setInterval(() => {
      setShowNotification(false);
      
      // Delay before showing next notification to let it transition out smoothly
      setTimeout(() => {
        const randomItem = TAMIL_PURCHASES[Math.floor(Math.random() * TAMIL_PURCHASES.length)];
        setCurrentPurchase(randomItem);
        setShowNotification(true);
      }, 1000);

    }, 14000); // Trigger a cycle every 14 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Auto-hide the notification after 6.5 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 6500);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerTimer((prev) => {
        if (prev <= 1) {
          return 13 * 60 + 17; // Loop back to 13:17 upon completion
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Countdown Timer for UPI QR payment
  useEffect(() => {
    let interval: any;
    if (showPaymentModal && paymentStep === 'options') {
      interval = setInterval(() => {
        setQrTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setQrTimer(705); // Reset to 11:45 when closed or on other steps
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showPaymentModal, paymentStep]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const [customPrompt, setCustomPrompt] = useState(selectedVibe.defaultPrompt);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compiledResult, setCompiledResult] = useState<VibePreset | null>(VIBES[0]);
  const [typedCode, setTypedCode] = useState(VIBES[0].code);
  const [isTyping, setIsTyping] = useState(false);

  // Audio Player states
  const [playing, setPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track>(TRACKS[0]);
  const [volume, setVolume] = useState(60);

  // Video Stream states
  const [videoUrl, setVideoUrl] = useState("https://assets.codepen.io/6093409/hub.mp4");
  const [customVideoUrl, setCustomVideoUrl] = useState("");

  // Interactive Simulation states
  const [activePlayerMode, setActivePlayerMode] = useState<'stream' | 'publish'>('publish');
  const [simulationStep, setSimulationStep] = useState<'idle' | 'import' | 'promo' | 'editor' | 'deploying' | 'published' | 'cta'>('idle');
  const [importProgress, setImportProgress] = useState(0);
  const [importTimer, setImportTimer] = useState(2); // estimated seconds remaining
  const [deployStep, setDeployStep] = useState<'domain' | 'app'>('domain');

  // Stepper state for Prompt to Live Website
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 6) + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const heroLearningSteps = [
    { id: 1, text: "✍️ Step 1 – Give Your Prompt", activeBg: "rgba(99, 102, 241, 0.15)", activeBorder: "rgba(99, 102, 241, 0.6)", activeShadow: "0 0 20px -5px rgba(99, 102, 241, 0.3)", dotClass: "bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.9)]", textColor: "text-indigo-300" },
    { id: 2, text: "🤖 Step 2 – AI Builds Your Website", activeBg: "rgba(168, 85, 247, 0.15)", activeBorder: "rgba(168, 85, 247, 0.6)", activeShadow: "0 0 20px -5px rgba(168, 85, 247, 0.3)", dotClass: "bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]", textColor: "text-purple-300" },
    { id: 3, text: "🎨 Step 3 – Customize Everything", activeBg: "rgba(236, 72, 153, 0.15)", activeBorder: "rgba(236, 72, 153, 0.6)", activeShadow: "0 0 20px -5px rgba(236, 72, 153, 0.3)", dotClass: "bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.9)]", textColor: "text-pink-300" },
    { id: 4, text: "📱 Step 4 – Make It Responsive", activeBg: "rgba(245, 158, 11, 0.15)", activeBorder: "rgba(245, 158, 11, 0.6)", activeShadow: "0 0 20px -5px rgba(245, 158, 11, 0.3)", dotClass: "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.9)]", textColor: "text-amber-300" },
    { id: 5, text: "🌐 Step 5 – Connect Your Domain", activeBg: "rgba(16, 185, 129, 0.15)", activeBorder: "rgba(16, 185, 129, 0.6)", activeShadow: "0 0 20px -5px rgba(16, 185, 129, 0.3)", dotClass: "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]", textColor: "text-emerald-300" },
    { id: 6, text: "🚀 Step 6 – Publish Your Website", activeBg: "rgba(244, 63, 94, 0.15)", activeBorder: "rgba(244, 63, 94, 0.6)", activeShadow: "0 0 20px -5px rgba(244, 63, 94, 0.3)", dotClass: "bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.9)]", textColor: "text-rose-300" }
  ];

  // Simulation Timer and Progress logic
  useEffect(() => {
    let interval: any = null;
    if (simulationStep === 'import') {
      setImportProgress(0);
      setImportTimer(2);
      interval = setInterval(() => {
        setImportProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setSimulationStep('promo');
            }, 600);
            return 100;
          }
          const next = prev + Math.floor(Math.random() * 12 + 6);
          const percent = Math.min(next, 100);
          if (percent > 85) {
            setImportTimer(0);
          } else if (percent > 45) {
            setImportTimer(1);
          }
          return percent;
        });
      }, 150);
    } else if (simulationStep === 'deploying') {
      setDeployStep('domain');
      const timer1 = setTimeout(() => {
        setDeployStep('app');
      }, 1800);
      const timer2 = setTimeout(() => {
        setSimulationStep('published');
      }, 4200);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else if (simulationStep === 'published') {
      const timer = setTimeout(() => {
        setSimulationStep('cta');
      }, 4500);
      return () => clearTimeout(timer);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [simulationStep]);

  // Calibration Checklist states
  const [checklist, setChecklist] = useState({
    lofi: true,
    beverage: false,
    theme: true,
    prompt: false,
    patience: true,
  });

  // Calculate atmosphere score
  const totalChecked = Object.values(checklist).filter(Boolean).length;
  const atmosphereScore = (totalChecked / Object.keys(checklist).length) * 100;

  // Code editor theme toggle just to look authentic
  const [editorTheme, setEditorTheme] = useState("monokai-lofi");

  // FAQ interactive accordion state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Retro interactive vibe rater state
  const [vibeInputs, setVibeInputs] = useState({
    energy: 40,
    beverageTemp: 85,
    promptLength: 12,
  });

  // Typewriter effect simulator for compiling code
  const triggerCompilation = (vibe: VibePreset) => {
    setIsCompiling(true);
    setCompiledResult(null);
    let codeString = vibe.code;
    setTypedCode("");
    
    setTimeout(() => {
      setIsCompiling(false);
      setCompiledResult(vibe);
      setIsTyping(true);
      
      // Fast simulation of typing
      let cursor = 0;
      const interval = setInterval(() => {
        if (cursor < codeString.length) {
          // Type chunks of 15 characters to make it look fast but dynamic
          cursor += 15;
          setTypedCode(codeString.substring(0, cursor));
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 15);
    }, 1400);
  };

  // Sync preset changes
  const selectPreset = (vibe: VibePreset) => {
    setSelectedVibe(vibe);
    setCustomPrompt(vibe.defaultPrompt);
    triggerCompilation(vibe);
  };

  // Custom prompt compilation
  const handleVibeCode = () => {
    triggerCompilation(selectedVibe);
  };

  // Toggle checklist
  const toggleChecklistItem = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Live component rendering switcher based on compiled state
  const renderInteractiveComponent = () => {
    if (isCompiling) {
      return (
        <div className="flex flex-col items-center justify-center h-full space-y-3">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-4 border-slate-800 rounded-full" />
            <div className="absolute inset-0 border-4 border-t-indigo-400 rounded-full animate-spin" />
          </div>
          <p className="text-xs font-mono text-slate-400 tracking-wider animate-pulse">COMPILING VIBE FREQUENCY...</p>
        </div>
      );
    }

    if (!compiledResult) return null;

    switch (compiledResult.id) {
      case "zen":
        return <ZenDemo />;
      case "cyber":
        return <CyberDemo />;
      case "cafe":
        return <CafeDemo />;
      case "retro":
        return <RetroDemo />;
      default:
        return <ZenDemo />;
    }
  };

  // Formula to calculate "Vibe Rating Category"
  const getVibeRating = () => {
    const score = vibeInputs.energy + (100 - Math.abs(vibeInputs.beverageTemp - 75)) + vibeInputs.promptLength * 2;
    if (score > 180) return { title: "Transcendent Creator 🧘‍♂️", desc: "You are one with the compiler. Code materializes instantly. Zero keystrokes remain." };
    if (score > 120) return { title: "Flow State Wizard ☕", desc: "Perfect environmental rhythm. Highly creative prompts resulting in pristine visuals." };
    return { title: "Ambient Lurker 🌌", desc: "Soaking in the background lo-fi. Excellent temperature coffee, waiting for the sparks of inspiration." };
  };

  return (
    <div id="vibe-coder-app" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden relative">
      
      {/* Top Promotional Banner */}
      <div className="w-full bg-gradient-to-r from-red-500/10 via-slate-950 to-pink-500/10 border-b border-red-500/15 py-2.5 px-4 text-center text-xs relative z-50 flex items-center justify-center gap-2.5 font-sans font-medium tracking-wide">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10 border border-red-500/25 text-red-400 font-mono font-bold tabular-nums text-[10px] sm:text-xs">
          <Clock className="w-3.5 h-3.5 text-red-400 animate-pulse" />
          {formatTimer(bannerTimer)}
        </span>
        <span className="text-slate-200 text-[11px] sm:text-xs font-semibold">
          🔥 Limited Time Offer: <span className="text-amber-400 font-bold">75% OFF</span> Ends Soon
        </span>
      </div>

      {/* Premium Access Unlocked Animated Single Line Bar (Kela thid div) */}
      <div className="flex justify-center px-4 relative z-50">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-[259px] h-[38px] mt-[39px] mb-[2px] bg-slate-900/75 border border-indigo-500/30 rounded-full backdrop-blur-md shadow-[0_0_35px_rgba(99,102,241,0.15)] flex items-center justify-center gap-1.5 overflow-hidden"
        >
          {/* Subtle light shimmer passing across the capsule */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full animate-[shimmer_4s_infinite]" />
          
          <div className="flex items-center justify-center gap-1 relative z-10 text-[9px] sm:text-[10px] uppercase font-bold text-slate-200 tracking-wider whitespace-nowrap">
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-xs select-none"
            >
              💎
            </motion.span>
            <motion.span
              animate={{ 
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{ 
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-indigo-400 font-display font-black tracking-[0.08em]"
            >
              PREMIUM ACCESS UNLOCKED
            </motion.span>
            <span className="flex h-1.5 w-1.5 relative ml-1 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Section */}
      <section id="hero-sec" className="py-20 md:py-28 relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div 
            className="lg:col-span-7 space-y-6"
            style={{
              paddingTop: '-6px',
              paddingBottom: '0px',
              paddingRight: '1px',
              marginTop: '-60px'
            }}
          >

            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-[1.2] text-center lg:text-left"
              style={{
                marginRight: '-1px',
                marginBottom: '27px',
                marginTop: '39px'
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300">
                Vibe Coding
              </span>
              <br />
              <span 
                className="text-white text-xl sm:text-2xl md:text-3xl font-bold inline-block mt-2"
                style={{
                  width: '292px',
                  wordSpacing: '0.08em'
                }}
              >
                From Idea to Website in Seconds – Tamil language
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-rose-300 text-lg sm:text-xl md:text-2xl font-bold inline-block mt-1">
                Simple No Coding Required
              </span>
            </h1>

            <p 
              className="text-xs text-slate-400/90 font-sans leading-relaxed text-center mx-auto"
              style={{
                width: '317px',
                lineHeight: '1.5'
              }}
            >
              Want to learn how to code? Discover vibe coding to build real websites using natural language prompts. Get hands-on, build skills, and deploy instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <motion.button
                onClick={() => {
                  setSelectedPrice(499);
                  setShowPaymentModal(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[196px] px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 text-white font-display font-bold text-base shadow-[0_0_25px_rgba(236,72,153,0.45)] flex items-center justify-center space-x-2.5 cursor-pointer border border-pink-400/30"
              >
                <span>Buy Now ₹499</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="flex flex-col space-y-4 pt-2 w-full lg:max-w-2xl">
                {/* Embedded YouTube Video Player */}
                <div className="w-full bg-slate-950/95 border border-slate-800/80 rounded-2xl overflow-hidden aspect-video relative group shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                  <iframe
                    src="https://www.youtube.com/embed/bWeDQcQ-tew"
                    title="Vibe Coding Masterclass"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
        </div>
      </div>

          {/* Interactive Learning Steps Player */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-pink-500/5"
            >
              {/* Subtle ambient glows */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Title & Badge */}
              <div className="relative z-10 mb-6 pb-5 border-b border-slate-800/80">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-2.5 flex items-center gap-2.5">
                  <span>What You'll Learn</span>
                  <span className="inline-block animate-bounce duration-1000 origin-bottom hover:scale-120 transition-transform cursor-default select-none filter drop-shadow-[0_2px_8px_rgba(244,63,94,0.3)]">
                    🧑‍💻
                  </span>
                </h2>
                <div className="inline-flex items-center text-sm font-medium text-emerald-300 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-emerald-500/40 px-3.5 py-1.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  🚀 From Prompt to Live Website
                </div>
              </div>

              {/* Steps List */}
              <div className="relative z-10 space-y-3">
                {heroLearningSteps.map((step) => {
                  const isActive = activeStep === step.id;

                  return (
                    <motion.div
                      key={step.id}
                      animate={{
                        scale: isActive ? 1.025 : 1,
                        backgroundColor: isActive 
                          ? step.activeBg 
                          : "rgba(15, 23, 42, 0.5)",
                        borderColor: isActive 
                          ? step.activeBorder 
                          : "rgba(51, 65, 85, 0.4)",
                        boxShadow: isActive
                          ? step.activeShadow
                          : "none"
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="relative rounded-xl p-3.5 border flex items-center justify-between overflow-hidden transition-colors"
                    >
                      <span className={`text-sm sm:text-base transition-colors duration-300 ${isActive ? `${step.textColor} font-semibold` : "text-slate-300 font-medium"}`}>
                        {step.text}
                      </span>

                      {/* Active Step Animation Beam */}
                      {isActive && (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.2, 0.9] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className={`flex h-2.5 w-2.5 rounded-full ${step.dotClass}`}
                        />
                      )}

                      {/* Vertical connector linking steps 1 through 6 */}
                      {step.id < 6 && (
                        <div className="absolute left-6 -bottom-3.5 w-0.5 h-3.5 bg-slate-700 z-20 pointer-events-none overflow-hidden">
                          <motion.div
                            animate={{ y: [-14, 14] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                            className="w-full h-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Professional Before vs After Comparative Board & CTA (Moved Below Grid) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-16 max-w-3xl mx-auto bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-pink-500/5"
        >
          {/* Subtle ambient glows inside the comparative section */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Title inside the comparative card */}
          <div className="text-center mb-6 relative z-10 pb-4 border-b border-slate-800/60">
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-extrabold text-white tracking-tight leading-snug">
              🚀 Transform Your Skills with Vibe Coding
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 text-[11px] sm:text-xs md:text-sm font-sans relative z-10">
            
            {/* Before Column */}
            <div className="bg-red-500/5 rounded-xl border border-red-500/10 p-3 sm:p-5 space-y-3">
              <div className="font-display font-bold text-red-400 flex items-center gap-1.5 pb-2 border-b border-red-500/10 text-xs sm:text-sm md:text-base">
                <span>Before</span>
                <span>❌</span>
              </div>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li className="flex items-center gap-1.5 leading-tight whitespace-nowrap truncate">
                  <span className="text-red-500 shrink-0 select-none text-[10px] sm:text-xs">❌</span>
                  <span className="truncate">No Coding</span>
                </li>
                <li className="flex items-center gap-1.5 leading-tight whitespace-nowrap truncate">
                  <span className="text-red-500 shrink-0 select-none text-[10px] sm:text-xs">❌</span>
                  <span className="truncate">Confused</span>
                </li>
                <li className="flex items-center gap-1.5 leading-tight whitespace-nowrap truncate">
                  <span className="text-red-500 shrink-0 select-none text-[10px] sm:text-xs">❌</span>
                  <span className="truncate">Only Watching</span>
                </li>
                <li className="flex items-center gap-1.5 leading-tight whitespace-nowrap truncate">
                  <span className="text-red-500 shrink-0 select-none text-[10px] sm:text-xs">❌</span>
                  <span className="truncate">No Portfolio</span>
                </li>
              </ul>
            </div>

            {/* After Column */}
            <div className="bg-emerald-500/5 rounded-xl border border-emerald-500/15 p-3 sm:p-5 space-y-3">
              <div className="font-display font-bold text-emerald-400 flex items-center gap-1.5 pb-2 border-b border-emerald-500/15 text-xs sm:text-sm md:text-base">
                <span>After</span>
                <span>✅</span>
              </div>
              <ul className="space-y-2 text-emerald-100 font-semibold">
                <li className="flex items-center gap-1.5 leading-tight whitespace-nowrap truncate">
                  <span className="text-emerald-400 shrink-0 select-none text-[10px] sm:text-xs">✅</span>
                  <span className="truncate">AI Website Creator</span>
                </li>
                <li className="flex items-center gap-1.5 leading-tight whitespace-nowrap truncate">
                  <span className="text-emerald-400 shrink-0 select-none text-[10px] sm:text-xs">✅</span>
                  <span className="truncate">Confident Builder</span>
                </li>
                <li className="flex items-center gap-1.5 leading-tight whitespace-nowrap truncate">
                  <span className="text-emerald-400 shrink-0 select-none text-[10px] sm:text-xs">✅</span>
                  <span className="truncate">Building Projects</span>
                </li>
                <li className="flex items-center gap-1.5 leading-tight whitespace-nowrap truncate">
                  <span className="text-emerald-400 shrink-0 select-none text-[10px] sm:text-xs">✅</span>
                  <span className="truncate">Real Portfolio</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-dashed border-slate-800/60 relative z-10" />

          {/* Call to Action & Student Social Proof Area */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-sm sm:text-base font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-rose-400 animate-pulse tracking-wide select-none">
              <span>🔥 Join 500+ Students</span>
            </div>

            <motion.button
              onClick={() => {
                setSelectedPrice(499);
                setShowPaymentModal(true);
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236,72,153,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 text-white font-display font-extrabold text-base sm:text-lg shadow-[0_4px_20px_rgba(236,72,153,0.3)] border border-pink-400/20 tracking-wide cursor-pointer transition-all duration-300"
            >
              Only ₹499
            </motion.button>
          </div>
        </motion.div>



        {/* 3-Step Workflow Pipeline Showroom */}
        <div className="mt-20 pt-10 border-t border-slate-900/60 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center text-center mb-8 px-1 gap-5">
            <div className="space-y-1.5 flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                3-Step Workflow
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                No complicated setup. No advanced skills.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "rgba(15, 23, 42, 0.6)"
              }}
              animate={{ 
                borderColor: [
                  "rgba(30, 41, 59, 0.8)", 
                  "rgba(168, 85, 247, 0.5)", 
                  "rgba(59, 130, 246, 0.5)", 
                  "rgba(0, 223, 137, 0.5)", 
                  "rgba(30, 41, 59, 0.8)"
                ],
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  "0 10px 20px -3px rgba(168, 85, 247, 0.2), 0 4px 6px -2px rgba(168, 85, 247, 0.08)",
                  "0 10px 20px -3px rgba(59, 130, 246, 0.2), 0 4px 6px -2px rgba(59, 130, 246, 0.08)",
                  "0 10px 20px -3px rgba(0, 223, 137, 0.2), 0 4px 6px -2px rgba(0, 223, 137, 0.08)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                ]
              }}
              transition={{
                borderColor: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 400, damping: 25 },
                y: { duration: 0.5 }
              }}
              className="flex items-center gap-1.5 bg-slate-900/40 border px-4 py-2 rounded-full text-[10px] sm:text-xs font-mono cursor-pointer transition-colors"
            >
              <span className="text-purple-400 font-semibold tracking-wide">Google AI Studio</span>
              <motion.span 
                animate={{ 
                  color: ["rgba(100, 116, 139, 1)", "rgba(168, 85, 247, 1)", "rgba(100, 116, 139, 1)"],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="font-light"
              >
                ➔
              </motion.span>
              <span className="text-blue-400 font-semibold tracking-wide">GitHub</span>
              <motion.span 
                animate={{ 
                  color: ["rgba(100, 116, 139, 1)", "rgba(59, 130, 246, 1)", "rgba(100, 116, 139, 1)"],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="font-light"
              >
                ➔
              </motion.span>
              <span className="text-[#00DF89] font-semibold tracking-wide">Vercel</span>
            </motion.div>

            {/* Google AI Studio, GitHub & Vercel Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-12 mx-auto text-left">
              {/* Google AI Studio Product Card (Screen Shot Model) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#0c0c0e] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group h-full">
                  {/* Decorative faint grid lines or accent glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div>
                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none">
                          <defs>
                            <linearGradient id="ai-studio-top-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#34A853" />
                              <stop offset="100%" stopColor="#4285F4" />
                            </linearGradient>
                            <linearGradient id="ai-studio-bottom-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#4285F4" />
                              <stop offset="60%" stopColor="#FBBC05" />
                              <stop offset="100%" stopColor="#EA4335" />
                            </linearGradient>
                          </defs>
                          <rect x="2" y="6" width="14" height="5" rx="2.5" fill="url(#ai-studio-top-grad)" />
                          <rect x="8" y="13" width="14" height="5" rx="2.5" fill="url(#ai-studio-bottom-grad)" />
                        </svg>
                        Google AI Studio
                      </h3>
                      <span className="text-xl sm:text-2xl font-sans font-black text-amber-500 tracking-tight">
                        ₹499
                      </span>
                    </div>

                    {/* Subtitle / Description */}
                    <p className="text-[11px] sm:text-[12px] text-slate-400 font-sans leading-relaxed mb-6">
                      The industry standard for developer experimentation. Build clean, modular prototypes with state-of-the-art Gemini models and zero setup cost.
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-3 mb-6">
                      {[
                        { icon: "⚡", text: "Fast AI models" },
                        { icon: "🧠", text: "Smart prompting" },
                        { icon: "🔌", text: "API ready" },
                        { icon: "🛠", text: "No coding needed" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <span className="text-amber-500 text-sm font-semibold shrink-0">✓</span>
                          <span className="text-xs sm:text-sm font-sans font-medium text-slate-200">
                            {item.icon} {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Horizontal Divider */}
                    <div className="h-[1px] bg-slate-800/60 my-5" />

                    {/* Footer Row */}
                    <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold tracking-wider text-slate-400 mb-6">
                      <span className="text-amber-500">4.9/5.0</span>
                      <span>LIFETIME ACCESS</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    onClick={() => {
                      setSelectedPrice(499);
                      setShowPaymentModal(true);
                    }}
                    className="w-full bg-amber-950/25 hover:bg-amber-950/45 border border-amber-500/30 text-amber-500 font-sans font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl tracking-wider transition-all duration-300 uppercase shadow-[0_4px_12px_rgba(245,158,11,0.05)] cursor-pointer text-center"
                  >
                    BUY NOW - ₹499
                  </button>
                </div>
              </motion.div>

              {/* GitHub Showcase Product Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="bg-[#0c0c0e] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group h-full">
                  {/* Decorative faint grid lines or accent glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div>
                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-white" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </h3>
                      <span className="text-xl sm:text-2xl font-sans font-black text-emerald-500 tracking-tight">
                        ₹499
                      </span>
                    </div>

                    {/* Subtitle / Description */}
                    <p className="text-[11px] sm:text-[12px] text-slate-400 font-sans leading-relaxed mb-6">
                      The world's leading developer platform. Host code, manage projects, perform robust version control, and collaborate with millions of developers seamlessly.
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-3 mb-6">
                      {[
                        { icon: "🧑‍💻", text: "Code Hosting" },
                        { icon: "🔁", text: "Version Control" },
                        { icon: "🤝", text: "Collaboration" },
                        { icon: "🤝", text: "Collaboration" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <span className="text-emerald-500 text-sm font-semibold shrink-0">✓</span>
                          <span className="text-xs sm:text-sm font-sans font-medium text-slate-200">
                            {item.icon} {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Horizontal Divider */}
                    <div className="h-[1px] bg-slate-800/60 my-5" />

                    {/* Footer Row */}
                    <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold tracking-wider text-slate-400 mb-6">
                      <span className="text-emerald-500">4.9/5.0</span>
                      <span>LIFETIME ACCESS</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    onClick={() => {
                      setSelectedPrice(499);
                      setShowPaymentModal(true);
                    }}
                    className="w-full bg-emerald-950/25 hover:bg-emerald-950/45 border border-emerald-500/30 text-emerald-500 font-sans font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl tracking-wider transition-all duration-300 uppercase shadow-[0_4px_12px_rgba(16,185,129,0.05)] cursor-pointer text-center"
                  >
                    BUY NOW - ₹499
                  </button>
                </div>
              </motion.div>

              {/* Vercel Showcase Product Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-[#0c0c0e] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group h-full">
                  {/* Decorative faint grid lines or accent glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div>
                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-white" fill="currentColor">
                          <path d="M24 22.525H0L12 1.475L24 22.525Z" />
                        </svg>
                        Vercel
                      </h3>
                      <span className="text-xl sm:text-2xl font-sans font-black text-indigo-500 tracking-tight">
                        ₹499
                      </span>
                    </div>

                    {/* Subtitle / Description */}
                    <p className="text-[11px] sm:text-[12px] text-slate-400 font-sans leading-relaxed mb-6">
                      The platform for frontend developers. Build, scale, and secure superfast websites with dynamic instant deployment, Global CDN, and native Git workflow integration.
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-3 mb-6">
                      {[
                        { icon: "⚡", text: "Instant Deploy" },
                        { icon: "🌍", text: "Global CDN" },
                        { icon: "🔗", text: "Git Integration" },
                        { icon: "🛠", text: "Serverless" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <span className="text-indigo-500 text-sm font-semibold shrink-0">✓</span>
                          <span className="text-xs sm:text-sm font-sans font-medium text-slate-200">
                            {item.icon} {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Horizontal Divider */}
                    <div className="h-[1px] bg-slate-800/60 my-5" />

                    {/* Footer Row */}
                    <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold tracking-wider text-slate-400 mb-6">
                      <span className="text-indigo-500">4.9/5.0</span>
                      <span>LIFETIME ACCESS</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    onClick={() => {
                      setSelectedPrice(499);
                      setShowPaymentModal(true);
                    }}
                    className="w-full bg-indigo-950/25 hover:bg-indigo-950/45 border border-indigo-500/30 text-indigo-500 font-sans font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl tracking-wider transition-all duration-300 uppercase shadow-[0_4px_12px_rgba(99,102,241,0.05)] cursor-pointer text-center"
                  >
                    BUY NOW - ₹499
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
          

        </div>



        {/* Why Choose This? Section */}
        <div id="why-choose-us" className="mt-24 pt-12 border-t border-slate-900/60 relative z-10 w-full max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3 px-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00DF89] uppercase bg-[#00DF89]/10 px-3 py-1 rounded-full">
              ⚡ Key Benefits
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Why Choose This?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
              Most courses only teach theory. <span className="text-[#00DF89] font-semibold">This teaches real building skill.</span>
            </p>
          </div>

          {/* Responsive grid for features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
            {[
              {
                icon: <Rocket className="w-5 h-5 text-purple-400" />,
                num: "1",
                title: "Step-by-Step System",
                desc: "Follow an expertly crafted, clear roadmap. No guessing the next steps.",
                theme: "hover:border-purple-500/40 hover:shadow-purple-950/10",
                iconBg: "bg-purple-500/10 border-purple-500/20"
              },
              {
                icon: <Target className="w-5 h-5 text-blue-400" />,
                num: "2",
                title: "Practical First Approach",
                desc: "Build real components immediately. Skip the dry, syntax-only slides.",
                theme: "hover:border-blue-500/40 hover:shadow-blue-950/10",
                iconBg: "bg-blue-500/10 border-blue-500/20"
              },
              {
                icon: <Zap className="w-5 h-5 text-[#00DF89]" />,
                num: "3",
                title: "Beginner Friendly",
                desc: "No advanced engineering pre-requisites. Learn step-by-step from scratch.",
                theme: "hover:border-[#00DF89]/40 hover:shadow-[#00DF89]/5",
                iconBg: "bg-[#00DF89]/10 border-[#00DF89]/20"
              },
              {
                icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
                num: "4",
                title: "Learn by Doing",
                desc: "Type prompts, see code generate, run compilations, and publish to live URL.",
                theme: "hover:border-amber-500/40 hover:shadow-amber-950/10",
                iconBg: "bg-amber-500/10 border-amber-500/20"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-slate-900/30 border border-slate-800/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-lg ${card.theme} flex flex-col justify-between h-full group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${card.iconBg}`}>
                      {card.icon}
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-white mb-2 group-hover:text-[#00DF89] transition-colors">
                    {card.num}. {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>




        {/* Frequently Asked Questions Section */}
        <div id="faq-section" className="mt-24 pt-12 border-t border-slate-900/60 relative z-10 w-full max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00DF89] uppercase bg-[#00DF89]/10 px-3 py-1 rounded-full">
              ❓ Got Questions?
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-sm sm:text-base text-slate-400 font-sans max-w-xl mx-auto">
              Find quick answers to common questions about our delivery, files, responsiveness, and revisions.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "How long will it take to complete my landing page?",
                a: "Most landing pages are delivered within 1–2 days, depending on the project requirements."
              },
              {
                q: "What do you need from me to get started?",
                a: "Please provide your business name, logo (if available), content, brand colors, images, and contact details."
              },
              {
                q: "Will my landing page work on mobile devices?",
                a: "Yes! Every landing page is **fully responsive** and optimized for mobile, tablet, and desktop."
              },
              {
                q: "Do you offer revisions?",
                a: "Yes. Revisions are included to ensure the final landing page meets your expectations."
              }
            ].map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/20 border border-slate-800/50 hover:border-slate-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00DF89] transition-colors flex items-start gap-3">
                      <span className="text-[#00DF89] font-mono text-xs sm:text-sm mt-0.5">
                        0{idx + 1}.
                      </span>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                        isOpen 
                          ? "bg-[#00DF89]/10 border-[#00DF89] text-[#00DF89]" 
                          : "bg-slate-950/40 border-slate-800 text-slate-400 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-slate-300 border-t border-slate-900/50 pt-4 leading-relaxed font-sans pl-11">
                          {faq.a.includes("**fully responsive**") ? (
                            <span>
                              Yes! Every landing page is <strong className="text-white font-semibold">fully responsive</strong> and optimized for mobile, tablet, and desktop.
                            </span>
                          ) : (
                            faq.a
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>


      </section>



      {/* Pragmatic Footnote Footer */}
      <footer id="footer-sec" className="bg-black py-12 border-t border-zinc-900 text-zinc-400 text-xs mt-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 mb-8">
            <a 
              href="https://www.instagram.com/metaminds_2026/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>

          {/* Divider line */}
          <div className="w-full border-t border-zinc-900/60 mb-6" />

          {/* Copyright & Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] text-zinc-400 font-sans text-center">
            <span>© 2026 . All rights reserved.</span>
            <span className="text-zinc-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Contact us</a>
            <span className="text-zinc-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <span className="text-zinc-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
          </div>

        </div>
      </footer>

      {/* Payment Modal overlay */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative ${
                paymentStep === 'options' 
                  ? 'max-w-[760px] p-0' 
                  : 'max-w-[440px] p-8'
              } w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 transition-all duration-300`}
            >
              {/* Close Button (only for details/success; option step has its own header back/close button) */}
              {paymentStep !== 'options' && (
                <button
                  type="button"
                  onClick={() => {
                    setShowPaymentModal(false);
                    setPaymentStep('details');
                    setPaymentSuccess(false);
                    setIsProcessingPayment(false);
                  }}
                  className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {paymentStep === 'details' && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!paymentEmail || !paymentPhone) return;
                    setIsProcessingPayment(true);
                    setTimeout(() => {
                      setIsProcessingPayment(false);
                      setPaymentStep('options');
                    }, 1200);
                  }}
                >
                  {/* Title & Underline */}
                  <div className="mb-6 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0c2340] tracking-tight">
                      Payment Details
                    </h3>
                    <div className="w-12 h-1 bg-[#2563eb] rounded-full mt-2" />
                  </div>

                  {/* Fields container */}
                  <div className="space-y-4 text-left">
                    {/* Amount Field */}
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-600 mb-1.5">
                        Amount <span className="text-red-500">*</span>
                      </label>
                      <div className="w-full px-4 py-3 rounded-lg border border-[#cce0ff] bg-[#f4f8ff] text-[#1e3a8a] font-bold text-base select-none flex items-center justify-between">
                        <span>₹ {selectedPrice}.00</span>
                        <span className="text-xs text-blue-500 font-mono font-medium tracking-wide">SECURE PAY</span>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-600 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={paymentEmail}
                        onChange={(e) => setPaymentEmail(e.target.value)}
                        placeholder="Enter your email address"
                        disabled={isProcessingPayment}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 placeholder-slate-400 font-sans transition-all text-sm"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-600 mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center rounded-lg border border-slate-200 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 overflow-hidden transition-all">
                        <div className="bg-slate-50 border-r border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600 shrink-0 select-none">
                          IN +91
                        </div>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          maxLength={10}
                          value={paymentPhone}
                          onChange={(e) => setPaymentPhone(e.target.value.replace(/\D/g, ''))}
                          placeholder="Mobile number"
                          disabled={isProcessingPayment}
                          className="w-full px-4 py-2.5 focus:outline-none text-slate-900 placeholder-slate-400 font-sans text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Gray Footer Strip with Logos and Pay button */}
                  <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-8 py-4 -mx-8 -mb-8 mt-8">
                    {/* Secure Logos Left */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-[9px] font-bold tracking-tight italic text-blue-800 bg-blue-100/50 px-1.5 py-0.5 rounded border border-blue-200">
                        UPI
                      </span>
                      <span className="text-[9px] font-bold italic text-blue-950 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                        VISA
                      </span>
                      <div className="flex -space-x-1 items-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                      </div>
                      <span className="text-[9px] font-extrabold italic text-[#0f4085] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100/60">
                        RuPay
                      </span>
                      <span className="text-[8px] font-bold text-slate-500 bg-slate-100 px-1 py-0.5 rounded border border-slate-200/80 scale-95 origin-left">
                        PCI
                      </span>
                    </div>

                    {/* Pay Button */}
                    <button
                      type="submit"
                      disabled={isProcessingPayment}
                      className="px-5 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] disabled:bg-blue-300 text-white font-sans font-semibold rounded-lg shadow-md transition-colors text-sm shrink-0 flex items-center justify-center space-x-2 cursor-pointer min-w-[120px]"
                    >
                      {isProcessingPayment ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                          <span>Paying...</span>
                        </>
                      ) : (
                        <span>Pay ₹ {selectedPrice}.00</span>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {paymentStep === 'options' && (
                <div className="flex flex-col text-left">
                  {/* Razorpay Top Header */}
                  <div className="bg-slate-50 border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between select-none">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentStep('details')}
                        className="p-1 hover:bg-slate-200/60 rounded text-slate-500 transition-colors cursor-pointer"
                        title="Go back to details"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </button>
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 tracking-tight font-sans">
                          Payment Options
                        </h3>
                        <p className="text-[10px] text-slate-500 font-sans">course.metaminds_2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400">Razorpay Secures</span>
                      <button
                        type="button"
                        onClick={() => {
                          setShowPaymentModal(false);
                          setPaymentStep('details');
                        }}
                        className="p-1 hover:bg-slate-200/60 rounded text-slate-500 transition-colors cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Razorpay Single-Column Body */}
                  <div className="min-h-[425px] bg-white">
                    {/* Right Panel Main View */}
                    <div className="p-6 flex flex-col justify-between">
                      {/* Top Offers Banner */}
                      <div className="mb-4">
                        <div className="bg-[#eff6ff] border border-blue-100 rounded-xl p-3 flex items-center justify-between text-xs text-[#1e40af] select-none shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#1d4ed8] shrink-0">
                              <Percent className="w-3 h-3" />
                            </div>
                            <span className="font-medium">Get upto 5% cashback on super.money UPI</span>
                          </div>
                          <button type="button" className="text-blue-700 hover:text-blue-900 font-bold hover:underline cursor-pointer">
                            View all
                          </button>
                        </div>
                      </div>

                      {/* Tab Content Rendering */}
                      <div className="flex-1 flex flex-col">
                        {activePaymentTab === 'upi' && (
                          <div className="flex-1 flex flex-col relative">
                            {activeDirectApp && (
                              <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-6 rounded-2xl">
                                <div className="relative mb-4">
                                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center animate-pulse">
                                    <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                                  </div>
                                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-[10px] font-bold">✓</span>
                                  </div>
                                </div>
                                <h4 className="text-sm font-bold text-slate-800 tracking-wider mb-2 font-sans">
                                  Opening {activeDirectApp === 'gpay' ? 'Google Pay' : activeDirectApp.charAt(0).toUpperCase() + activeDirectApp.slice(1)}...
                                </h4>
                                <p className="text-xs text-slate-500 max-w-xs mb-3 font-sans leading-relaxed">
                                  Direct mobile pay initiated! Please check your device to complete the secure payment.
                                </p>
                                <div className="px-3 py-1.5 bg-blue-50 rounded-lg text-[11px] font-mono font-medium text-blue-700 border border-blue-100">
                                  Amount: ₹{selectedPrice}.00
                                </div>
                              </div>
                            )}

                            {/* Title & Timer row */}
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-bold text-slate-700 tracking-wider uppercase font-mono">UPI QR</span>
                              <div className="bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 select-none shadow-sm">
                                <Clock className="w-3.5 h-3.5 text-slate-500 animate-pulse" />
                                <span>{formatTimer(qrTimer)}</span>
                              </div>
                            </div>

                            {/* Dynamic UPI QR Display Box */}
                            <div className="bg-[#f8faff] border border-blue-100/50 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-6 mt-1 shadow-sm">
                              {/* QR Code */}
                              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-md shrink-0 relative group">
                                <img 
                                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(`upi://pay?pa=9600123098@okaxis&pn=MetaMinds&am=${selectedPrice}&cu=INR`)}&color=0c2340&margin=8`} 
                                  alt="UPI QR Code" 
                                  className="w-[130px] h-[130px] block" 
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-100">
                                    <span className="text-[#2563eb] font-bold font-sans text-xs">M</span>
                                  </div>
                                </div>
                              </div>

                              {/* Scan Info & Controls */}
                              <div className="flex-1 text-center sm:text-left space-y-3">
                                <div>
                                  <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-2">
                                    Scan the QR or click direct payment apps
                                  </p>
                                  
                                  {/* UPI App Badges */}
                                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mb-3.5">
                                    <button
                                      type="button"
                                      disabled={isProcessingPayment}
                                      onClick={() => {
                                        setActiveDirectApp('phonepe');
                                        setIsProcessingPayment(true);
                                        setTimeout(() => {
                                          setIsProcessingPayment(false);
                                          setActiveDirectApp(null);
                                          setPaymentStep('success');
                                          setPaymentSuccess(true);
                                        }, 1200);
                                      }}
                                      className="text-[10px] font-bold px-2 py-1 rounded bg-[#5f259f] text-white hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center gap-1 select-none"
                                    >
                                      PhonePe
                                    </button>
 
                                    <button
                                      type="button"
                                      disabled={isProcessingPayment}
                                      onClick={() => {
                                        setActiveDirectApp('gpay');
                                        setIsProcessingPayment(true);
                                        setTimeout(() => {
                                          setIsProcessingPayment(false);
                                          setActiveDirectApp(null);
                                          setPaymentStep('success');
                                          setPaymentSuccess(true);
                                        }, 1200);
                                      }}
                                      className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-[#4285F4] text-white hover:bg-[#357ae8] active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-blue-400/20 ring-2 ring-blue-100"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping inline-block shrink-0" />
                                      GPay (Direct Pay)
                                    </button>
 
                                    <button
                                      type="button"
                                      disabled={isProcessingPayment}
                                      onClick={() => {
                                        setActiveDirectApp('paytm');
                                        setIsProcessingPayment(true);
                                        setTimeout(() => {
                                          setIsProcessingPayment(false);
                                          setActiveDirectApp(null);
                                          setPaymentStep('success');
                                          setPaymentSuccess(true);
                                        }, 1200);
                                      }}
                                      className="text-[10px] font-bold px-2 py-1 rounded bg-[#002E6E] text-white hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center gap-1 select-none"
                                    >
                                      Paytm
                                    </button>
 
                                    <button
                                      type="button"
                                      disabled={isProcessingPayment}
                                      onClick={() => {
                                        setActiveDirectApp('cred');
                                        setIsProcessingPayment(true);
                                        setTimeout(() => {
                                          setIsProcessingPayment(false);
                                          setActiveDirectApp(null);
                                          setPaymentStep('success');
                                          setPaymentSuccess(true);
                                        }, 1200);
                                      }}
                                      className="text-[10px] font-bold px-2 py-1 rounded bg-black text-white hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center gap-1 select-none"
                                    >
                                      CRED
                                    </button>
 
                                    <button
                                      type="button"
                                      disabled={isProcessingPayment}
                                      onClick={() => {
                                        setActiveDirectApp('bhim');
                                        setIsProcessingPayment(true);
                                        setTimeout(() => {
                                          setIsProcessingPayment(false);
                                          setActiveDirectApp(null);
                                          setPaymentStep('success');
                                          setPaymentSuccess(true);
                                        }, 1200);
                                      }}
                                      className="text-[10px] font-bold px-2 py-1 rounded bg-[#e87722] text-white hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center gap-1 select-none"
                                    >
                                      BHIM
                                    </button>
                                  </div>

                                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full select-none">
                                    ✓ 2 Offers Applied
                                  </span>
                                </div>

                                {/* Prominent Contact/UPI details */}
                                <div className="bg-white border border-slate-100 rounded-lg p-2.5 space-y-1 text-xs text-left">
                                  <div className="flex justify-between">
                                    <span className="text-slate-400">Mobile Number:</span>
                                    <strong className="text-slate-800 font-mono">9600123098</strong>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-slate-400">UPI ID:</span>
                                    <strong className="text-[#2563eb] font-mono">9600123098@okaxis</strong>
                                  </div>
                                </div>

                                {/* Verification Action buttons */}
                                <div className="pt-1 flex flex-col sm:flex-row items-center gap-2">
                                  <button
                                    type="button"
                                    disabled={isProcessingPayment}
                                    onClick={() => {
                                      setIsProcessingPayment(true);
                                      setTimeout(() => {
                                        setIsProcessingPayment(false);
                                        setPaymentStep('success');
                                        setPaymentSuccess(true);
                                      }, 1500);
                                    }}
                                    className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm shadow-emerald-600/10 cursor-pointer flex items-center justify-center gap-1.5"
                                  >
                                    {isProcessingPayment ? (
                                      <>
                                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                        <span>Verifying...</span>
                                      </>
                                    ) : (
                                      <>
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        <span>I have Paid (Verify)</span>
                                      </>
                                    )}
                                  </button>
                                  <span className="text-[10px] text-slate-400 flex items-center gap-1 font-medium">
                                    <Loader2 className="w-3 h-3 animate-spin text-slate-300" />
                                    Waiting for transfer...
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activePaymentTab === 'cards' && (
                          <div className="flex-1 flex flex-col justify-center">
                            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 font-mono">
                              Pay via Credit/Debit Card
                            </h4>
                            <div className="space-y-3 max-w-sm">
                              <input
                                type="text"
                                placeholder="Card Number"
                                disabled
                                value="•••• •••• •••• ••••"
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-400 text-sm focus:outline-none bg-slate-50"
                              />
                              <div className="grid grid-cols-2 gap-3">
                                <input
                                  type="text"
                                  placeholder="Expiry (MM/YY)"
                                  disabled
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-400 text-sm focus:outline-none bg-slate-50"
                                />
                                <input
                                  type="password"
                                  placeholder="CVV"
                                  disabled
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-400 text-sm focus:outline-none bg-slate-50"
                                />
                              </div>
                              <input
                                type="text"
                                placeholder="Cardholder Name"
                                disabled
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-400 text-sm focus:outline-none bg-slate-50"
                              />
                              
                              <button
                                type="button"
                                onClick={() => {
                                  setIsProcessingPayment(true);
                                  setTimeout(() => {
                                    setIsProcessingPayment(false);
                                    setPaymentStep('success');
                                    setPaymentSuccess(true);
                                  }, 1500);
                                }}
                                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold rounded-lg transition-colors shadow-md text-xs cursor-pointer"
                              >
                                Pay ₹ {selectedPrice}.00
                              </button>
                            </div>
                          </div>
                        )}

                        {activePaymentTab === 'netbanking' && (
                          <div className="flex-1 flex flex-col justify-center">
                            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 font-mono">
                              Select Popular Bank
                            </h4>
                            <div className="grid grid-cols-2 gap-2 max-w-sm mb-4">
                              {['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Bank', 'Yes Bank'].map((bank) => (
                                <button
                                  key={bank}
                                  type="button"
                                  onClick={() => {
                                    setIsProcessingPayment(true);
                                    setTimeout(() => {
                                      setIsProcessingPayment(false);
                                      setPaymentStep('success');
                                      setPaymentSuccess(true);
                                    }, 1500);
                                  }}
                                  className="p-2 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/20 text-slate-700 font-sans text-xs font-medium text-center transition-all cursor-pointer"
                                >
                                  {bank}
                                </button>
                              ))}
                            </div>
                            <input
                              type="text"
                              placeholder="Search other banks"
                              disabled
                              className="w-full max-w-sm px-3 py-2 border border-slate-200 rounded-lg text-slate-400 text-xs bg-slate-50"
                            />
                          </div>
                        )}

                        {activePaymentTab === 'wallet' && (
                          <div className="flex-1 flex flex-col justify-center">
                            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 font-mono">
                              Select popular Wallet
                            </h4>
                            <div className="space-y-2 max-w-sm">
                              {['Paytm Wallet', 'PhonePe Wallet', 'Amazon Pay Wallet', 'Mobikwik'].map((wallet) => (
                                <button
                                  key={wallet}
                                  type="button"
                                  onClick={() => {
                                    setIsProcessingPayment(true);
                                    setTimeout(() => {
                                      setIsProcessingPayment(false);
                                      setPaymentStep('success');
                                      setPaymentSuccess(true);
                                    }, 1500);
                                  }}
                                  className="w-full p-2.5 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/20 text-slate-700 text-left font-sans text-xs font-medium transition-all flex items-center justify-between cursor-pointer"
                                >
                                  <span>{wallet}</span>
                                  <ChevronRight className="w-4 h-4 text-slate-400" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Razorpay policy footer strip */}
                      <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-center select-none">
                        <p className="text-[10px] text-slate-400 font-sans text-center">
                          By proceeding, I agree to Razorpay's <span className="text-blue-500 font-medium hover:underline cursor-pointer">Privacy Notice</span> • <span className="text-blue-500 font-medium hover:underline cursor-pointer">Edit Preferences</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentStep === 'success' && (
                /* Success screen */
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-4 text-center text-slate-800"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border-2 border-emerald-500/20 shadow-inner">
                      <ShieldCheck className="w-10 h-10 text-emerald-500 animate-bounce" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0c2340] mb-2 font-sans text-center">
                    Payment Successful!
                  </h3>
                  <p className="text-sm text-slate-500 px-4 leading-relaxed mb-6 font-sans text-center">
                    Your payment of <strong className="text-slate-800">₹ {selectedPrice}.00</strong> was processed securely. You now have full lifetime access to the Vibe Coding Course!
                  </p>

                  <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-100 space-y-2 mb-6 text-xs font-mono text-slate-600 max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-400">EMAIL:</span>
                      <span className="font-semibold text-slate-800">{paymentEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">PHONE:</span>
                      <span className="font-semibold text-slate-800">+91 {paymentPhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">TRANSACTION ID:</span>
                      <span className="font-semibold text-indigo-600">TXN_VIBE_{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">STATUS:</span>
                      <span className="font-bold text-emerald-600">SUCCESS</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setShowPaymentModal(false);
                      setPaymentStep('details');
                      setPaymentSuccess(false);
                      setPaymentEmail("");
                      setPaymentPhone("");
                    }}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold rounded-lg transition-colors shadow-md shadow-emerald-600/10 cursor-pointer text-center block"
                  >
                    Start Learning Now
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Live Recent Purchase Toast */}
      <AnimatePresence>
        {showNotification && currentPurchase && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] max-w-[250px] w-full bg-slate-950/95 border border-slate-800/80 backdrop-blur-xl rounded-lg p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.6)] text-slate-100 flex gap-2 items-start pointer-events-auto border-l-2 border-l-emerald-500 select-none overflow-hidden"
          >
            {/* Live Indicator Pulse Background */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

            {/* User Avatar Circle */}
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-display font-black text-white text-[10px] shrink-0 shadow-md border border-indigo-400/20">
              {currentPurchase.name.charAt(0)}
            </div>

            {/* Details Content */}
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-slate-200 font-sans leading-tight">
                <span className="font-bold text-white">{currentPurchase.name}</span>{" "}
                <span className="text-slate-400 text-[10px]">from</span>{" "}
                <span className="font-semibold text-indigo-400">{currentPurchase.city}</span>
              </div>
              <p className="text-[10px] text-slate-300 mt-0.5 leading-snug">
                Bought <span className="text-emerald-400 font-medium">{currentPurchase.item}</span>
              </p>
            </div>

            {/* Dismiss Cross */}
            <button 
              onClick={() => setShowNotification(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors shrink-0 p-0.5 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// ---------------------------------------------------------
// Helper components for the Interactive Steps Simulator
// ---------------------------------------------------------

function MockPromptTyping() {
  const [text, setText] = useState("");
  const fullText = "Build a neon retro music synthesizer with audio loops...";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index = (index + 1) % (fullText.length + 5);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-mono text-xs text-pink-400 bg-black/50 border border-pink-500/20 px-3 py-2.5 rounded-lg flex items-center justify-between shadow-inner w-full min-h-[44px]">
      <span className="truncate">{text || " "}<span className="animate-pulse font-bold text-pink-300">|</span></span>
      <span className="text-[9px] text-slate-500 shrink-0 select-none">vibe</span>
    </div>
  );
}

function MockAIBuilding() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 4));
    }, 120);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-[10px] text-indigo-400 space-y-2 w-full shadow-inner min-h-[64px]">
      <div className="flex justify-between text-slate-400">
        <span>AI_BUILDER_DAEMON</span>
        <span className="font-semibold text-indigo-300">{progress}%</span>
      </div>
      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      <div className="text-[9px] text-slate-500 truncate">
        &gt; Compiling components/synth.tsx...
      </div>
    </div>
  );
}

function MockCustomize() {
  const [activeColor, setActiveColor] = useState("pink");
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColor((c) => {
        if (c === "pink") return "indigo";
        if (c === "indigo") return "emerald";
        return "pink";
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2.5 w-full shadow-inner min-h-[64px]">
      <div className="flex justify-between items-center">
        <span className="text-[9px] font-mono text-slate-500 uppercase">Interactive Accent Color</span>
        <div className="flex space-x-1.5">
          <span className={`w-2.5 h-2.5 rounded-full bg-pink-500 transition-all ${activeColor === "pink" ? "ring-2 ring-white scale-110" : "opacity-60"}`} />
          <span className={`w-2.5 h-2.5 rounded-full bg-indigo-500 transition-all ${activeColor === "indigo" ? "ring-2 ring-white scale-110" : "opacity-60"}`} />
          <span className={`w-2.5 h-2.5 rounded-full bg-emerald-500 transition-all ${activeColor === "emerald" ? "ring-2 ring-white scale-110" : "opacity-60"}`} />
        </div>
      </div>
      <div className={`py-1.5 rounded border text-center transition-all duration-500 text-[11px] font-medium truncate ${
        activeColor === "pink" ? "bg-pink-500/10 border-pink-500/25 text-pink-400" :
        activeColor === "indigo" ? "bg-indigo-500/10 border-indigo-500/25 text-indigo-400" :
        "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
      }`}>
        Vibe Synthesizer Premium Edition
      </div>
    </div>
  );
}

function MockResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsMobile((m) => !m);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center bg-slate-950 p-2 rounded-lg border border-slate-800 min-h-[64px] w-full shadow-inner">
      <div 
        className="h-10 bg-slate-900 border border-slate-700/80 rounded flex flex-col justify-between p-1.5 overflow-hidden shadow-inner transition-all duration-700 ease-in-out"
        style={{ width: isMobile ? '70px' : '150px' }}
      >
        <div className="flex items-center justify-between select-none">
          <span className="w-8 h-1 bg-indigo-500 rounded-full" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="h-3.5 bg-slate-800 rounded" />
          <div className="h-3.5 bg-slate-800 rounded" />
          <div className="h-3.5 bg-slate-800 rounded" />
        </div>
      </div>
    </div>
  );
}

function MockDomain() {
  const [status, setStatus] = useState("connecting");
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((s) => (s === "connecting" ? "secure" : "connecting"));
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-mono text-[10px] space-y-2 w-full shadow-inner min-h-[64px]">
      <div className="flex justify-between items-center">
        <span className="text-slate-500">CUSTOM DOMAIN</span>
        <span className={`px-1.5 py-0.2 rounded text-[8px] uppercase tracking-wide border transition-all ${
          status === "secure" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20 animate-pulse"
        }`}>
          {status}
        </span>
      </div>
      <div className="flex items-center space-x-1.5 text-slate-300 bg-black/40 px-2 py-1 rounded border border-white/5 truncate">
        <span className="text-indigo-400">🌐</span>
        <span className="truncate">synth-pro.yourdomain.com</span>
      </div>
    </div>
  );
}

function MockPublish() {
  return (
    <div className="bg-slate-950 p-2.5 rounded-lg border border-emerald-500/20 flex flex-col items-center justify-center text-center space-y-1 w-full shadow-inner min-h-[64px]">
      <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold text-xs font-display">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        <span>Website is Live!</span>
      </div>
      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest truncate max-w-full">
        HTTPS://SYNTH-PRO.YOURDOMAIN.COM
      </p>
    </div>
  );
}

// ---------------------------------------------------------
// Subcomponents for the Living Preview Demonstration Window
// ---------------------------------------------------------

function ZenDemo() {
  const [inhale, setInhale] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setInhale(prev => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="zen-render" className="flex flex-col items-center justify-center h-full w-full bg-slate-900/30 rounded-xl p-8 backdrop-blur-md border border-indigo-500/10 transition-all duration-300">
      <motion.div
        animate={{ scale: inhale ? 1.3 : 0.85 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500/20 via-pink-500/15 to-purple-500/20 flex items-center justify-center border border-indigo-300/25 shadow-2xl shadow-indigo-500/10"
      >
        <div className="w-16 h-16 rounded-full bg-slate-950 border border-white/5 flex items-center justify-center shadow-lg">
          <span className="text-[10px] font-mono tracking-widest text-indigo-200 animate-pulse">
            {inhale ? "INHALE" : "EXHALE"}
          </span>
        </div>
      </motion.div>
      <p className="mt-6 text-xs text-slate-400 font-sans tracking-tight text-center max-w-[220px] leading-relaxed">
        Let your breathing guide the pace of your coding flow.
      </p>
    </div>
  );
}

function CyberDemo() {
  const [metrics, setMetrics] = useState({ cpu: 42, ram: 61, net: 89 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * (75 - 30) + 30),
        ram: Math.floor(Math.random() * (85 - 55) + 55),
        net: Math.floor(Math.random() * (99 - 70) + 70),
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="cyber-render" className="w-full bg-slate-950 p-6 rounded-xl border border-emerald-500/25 font-mono text-[11px] text-emerald-400 transition-all duration-300">
      <div className="flex justify-between border-b border-emerald-500/15 pb-2 mb-4">
        <span>[SYS_MONITOR_ACTIVE]</span>
        <span className="animate-pulse text-emerald-300">● LIVE_FEED</span>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1 text-slate-400">
            <span>CPU_LOAD: <span className="text-emerald-300">{metrics.cpu}%</span></span>
            <span className="text-slate-600">[{ "=".repeat(Math.floor(metrics.cpu/10)) }{".".repeat(10-Math.floor(metrics.cpu/10))}]</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1 text-slate-400">
            <span>RAM_USED: <span className="text-emerald-300">{metrics.ram}%</span></span>
            <span className="text-slate-600">[{ "=".repeat(Math.floor(metrics.ram/10)) }{".".repeat(10-Math.floor(metrics.ram/10))}]</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1 text-slate-400">
            <span>NET_FLOW: <span className="text-cyan-400">{metrics.net} MB/S</span></span>
            <span className="text-cyan-500 font-bold">STABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CafeDemo() {
  const [brewing, setBrewing] = useState(false);
  const [cups, setCups] = useState(3);

  const handleBrew = () => {
    setBrewing(true);
    setTimeout(() => { 
      setBrewing(false); 
      setCups(c => c + 1); 
    }, 2500);
  };

  return (
    <div id="cafe-render" className="flex flex-col items-center justify-center h-full w-full bg-amber-950/5 rounded-xl p-8 border border-amber-500/10 transition-all duration-300">
      <div className="relative mb-6">
        {/* Animated Steam lines */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex space-x-2">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="w-1 h-8 bg-amber-200/40 rounded-full"
            />
          ))}
        </div>
        {/* Coffee Mug */}
        <div className="w-16 h-14 bg-amber-800/80 rounded-b-xl rounded-t-xs border-r-4 border-amber-700 relative shadow-md">
          <div className="absolute -right-5 top-2 w-5 h-7 border-4 border-amber-700 rounded-full" />
        </div>
      </div>
      <button 
        onClick={handleBrew}
        disabled={brewing}
        className="px-5 py-2 rounded-lg bg-amber-700/80 hover:bg-amber-600 text-amber-50 font-medium text-xs font-mono transition-colors border border-amber-600/35"
      >
        {brewing ? "Brewing Cup..." : "Brew Coffee"}
      </button>
      <span className="mt-3 text-[10px] font-mono text-amber-300/50">Brewed today: {cups} cups</span>
    </div>
  );
}

function RetroDemo() {
  const [intensity, setIntensity] = useState(60);

  return (
    <div id="retro-render" className="relative h-full w-full bg-slate-950 rounded-xl p-6 overflow-hidden flex flex-col justify-end border border-pink-500/10 transition-all duration-300 min-h-[220px]">
      {/* Retro Sunset */}
      <div 
        className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-b from-pink-500 to-amber-500 opacity-80 blur-[2px]"
        style={{ 
          width: `${80 + intensity * 0.4}px`, 
          height: `${80 + intensity * 0.4}px`,
          boxShadow: '0 0 40px rgba(236, 72, 153, 0.25)'
        }}
      >
        {/* Striped Sunset Lines */}
        <div className="absolute bottom-4 w-full h-1 bg-slate-950 opacity-40" />
        <div className="absolute bottom-10 w-full h-2 bg-slate-950 opacity-50" />
        <div className="absolute bottom-16 w-full h-3 bg-slate-950 opacity-60" />
      </div>
      {/* Neon Grid */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_bottom,transparent_0%,rgba(236,72,153,0.15)_100%)] border-t border-pink-500/20">
        <div className="w-full h-full bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:16px_16px] [transform:perspective(40px)_rotateX(60deg)] origin-top animate-[pulse_3s_infinite]" />
      </div>
      <div className="relative z-10 bg-slate-950/80 border border-white/5 p-3 rounded-lg flex items-center justify-between">
        <span className="text-[9px] font-mono text-pink-300">SYNTH_INTENSITY</span>
        <input 
          type="range" 
          value={intensity} 
          min="10"
          max="100"
          onChange={(e) => setIntensity(Number(e.target.value))} 
          className="w-20 accent-pink-500 cursor-pointer"
        />
      </div>
    </div>
  );
}
