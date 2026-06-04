'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  CheckCircle, 
  X,
  XCircle,
  ArrowRight, 
  ChevronDown, 
  Instagram, 
  ShieldCheck, 
  Award, 
  Clock, 
  Bookmark, 
  Activity, 
  AlertTriangle, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Interfaces for custom values
interface ProjectSettings {
  nomeSala: string;
  avatarUrl: string;
  winRate: string;
  totalMembros: string;
  mesesAtivo: string;
  opsHistorico: string;
  linkTelegram: string;
  linkHistorico: string;
  instagram: string;
  metodoGestao: string;
  modeloAcesso: string;
}

export default function Home() {
  // Live customization state
  const [settings, setSettings] = useState<ProjectSettings>({
    nomeSala: 'TRADER MÍSTICO',
    avatarUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=300&auto=format&fit=crop',
    winRate: '78%',
    totalMembros: '1.5K',
    mesesAtivo: '18',
    opsHistorico: '2.400+',
    linkTelegram: 'https://t.me/+yWw9Il5GTVdlMjkx',
    linkHistorico: 'https://t.me/+yWw9Il5GTVdlMjkx',
    instagram: 'https://instagram.com/seu_instagram',
    metodoGestao: 'Fixo e Martingale Controlado',
    modeloAcesso: 'Acesso VIP Vitalício'
  });


  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'received' | 'notIs'>('received');
  
  // Terminal Logs State representing premium M5 confluences
  const [terminalLogs, setTerminalLogs] = useState<Array<{
    time: string;
    asset: string;
    action: 'CALL' | 'PUT';
    timeframe: string;
    confidence: string;
    status: string;
  }>>([]);

  // Setup initial signals based on actual client mount time
  useEffect(() => {
    const baseTime = new Date();
    const subtractSeconds = (date: Date, seconds: number) => {
      const newDate = new Date(date);
      newDate.setSeconds(newDate.getSeconds() - seconds);
      return newDate.toLocaleTimeString('pt-BR', { hour12: false });
    };

    const timer = setTimeout(() => {
      setTerminalLogs([
        {
          time: subtractSeconds(baseTime, 0),
          asset: 'EUR/USD',
          action: 'CALL',
          timeframe: 'M5',
          confidence: '94.2%',
          status: 'CONFLUÍDE ✅'
        },
        {
          time: subtractSeconds(baseTime, 14),
          asset: 'GBP/USD',
          action: 'PUT',
          timeframe: 'M5',
          confidence: '89.1%',
          status: 'AGUARDANDO'
        },
        {
          time: subtractSeconds(baseTime, 35),
          asset: 'USD/JPY (OTC)',
          action: 'PUT',
          timeframe: 'M5',
          confidence: '95.7%',
          status: 'SUCESSO ✅'
        },
        {
          time: subtractSeconds(baseTime, 58),
          asset: 'EUR/GBP',
          action: 'CALL',
          timeframe: 'M5',
          confidence: '91.8%',
          status: 'SUCESSO ✅'
        }
      ]);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Feed terminal logs dynamically with high quality real-time 5m signals
  useEffect(() => {
    const assets = ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'EUR/GBP', 'USD/CAD (OTC)', 'GBP/JPY (OTC)'];
    const actions: Array<'CALL' | 'PUT'> = ['CALL', 'PUT'];
    const statuses = ['CONFLUÍDE ✅', 'AGUARDANDO', 'CONFIRMANDO', 'SUCESSO ✅'];

    const interval = setInterval(() => {
      const randomAsset = assets[Math.floor(Math.random() * assets.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const confidence = (Math.random() * 15 + 81).toFixed(1) + '%';
      const exactTime = new Date().toLocaleTimeString('pt-BR', { hour12: false });

      const newLog = {
        time: exactTime,
        asset: randomAsset,
        action: randomAction,
        timeframe: 'M5',
        confidence: confidence,
        status: randomStatus
      };

      setTerminalLogs(prev => [newLog, ...prev.slice(0, 3)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // For the animated metrics count
  const metricsData = [
    { target: 78, suffix: '%', label: 'Aproveitamento Mensal', sub: 'Histórico auditado' },
    { target: 2400, suffix: '+', label: 'Operações Analisadas', sub: 'Registradas em planilha' },
    { target: 1500, suffix: '', label: 'Membros Ativos', sub: 'Discussão aberta 24/7' },
    { target: 18, suffix: ' m', label: 'Meses de Consistência', sub: 'Operando no mesmo padrão' },
  ];

  // Self-contained Animated Counter component
  function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      let observer: IntersectionObserver;
      let startTimestamp: number | null = null;
      const duration = 1500; // ms

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      if (elementRef.current) {
        observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            window.requestAnimationFrame(step);
            observer.disconnect();
          }
        }, { threshold: 0.1 });
        observer.observe(elementRef.current);
      }

      return () => {
        if (observer) observer.disconnect();
      };
    }, [target]);

    return (
      <div ref={elementRef} className="font-display text-4xl sm:text-5xl font-extrabold text-brand-green tracking-tight">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
    );
  }

  // FAQ Data (incorporating customization)
  const faqs = [
    {
      q: `A sala é gratuita ou tem versão paga?`,
      a: `A nossa sala principal é focada no ${settings.modeloAcesso}. Nosso objetivo é entregar valor real antes de qualquer cobrança, permitindo que você acompanhe o método de forma transparente no Telegram.`
    },
    {
      q: 'Qual a frequência de sinais por dia?',
      a: 'Enviamos de 5 a 12 sinais altamente filtrados por dia. Não operamos por volume, mas sim por confluência técnica de alta probabilidade.'
    },
    {
      q: 'Preciso ter algum tipo de experiência para operar?',
      a: 'Não! Fornecemos um passo a passo em texto e vídeo explicando como configurar suas ordens na corretora da sua escolha de forma muito simples.'
    },
    {
      q: 'Qual é o tamanho de banca recomendado?',
      a: 'Recomendamos começar com um valor que não comprometa seu orçamento. A partir de R$ 60 ou R$ 100 já é perfeitamente operável utilizando nossa gestão recomendada.'
    },
    {
      q: 'Vocês indicam ou obrigam o cadastro em corretoras?',
      a: 'Absolutamente NÃO. Você é livre para operar em qualquer corretora (Pocket Option, Quotex, IQ Option, etc.). O sinal funciona de maneira universal.'
    },
    {
      q: 'Como funciona o gerenciamento de banca?',
      a: `Trabalhamos estritamente com ${settings.metodoGestao}. Nunca colocamos em risco mais de 2% a 5% da banca por operação.`
    }
  ];

  return (
    <div className="relative min-h-screen bg-dark-900 pb-16 overflow-hidden">
      
      {/* Background Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-b from-[#0E1A30]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[30%] -right-20 w-[400px] h-[400px] bg-brand-green/2 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] -left-20 w-[400px] h-[400px] bg-brand-gold/2 rounded-full blur-3xl pointer-events-none -z-10" />



      {/* --- SEÇÃO 1: HERO (Above the fold) --- */}
      <section className="min-h-[92vh] sm:min-h-screen flex flex-col justify-between py-12 px-4 max-w-4xl mx-auto relative">
        <div />

        <div className="my-auto text-center flex flex-col items-center">
          {/* Circular image avatar with pulsing border effects */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6">
            <div className="absolute inset-0 rounded-full bg-brand-green/20 animate-ping" />
            <div className="absolute inset-x-0 bottom-0 h-full rounded-full border border-brand-green animate-pulse" />
            <img 
              src={settings.avatarUrl} 
              alt="Avatar da sala de sinais" 
              className="w-full h-full object-cover rounded-full border-2 border-brand-green relative z-10 shadow-lg shadow-brand-green/25"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Title / Name */}
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase drop-shadow-sm">
              {settings.nomeSala}
            </h1>

            {/* Tagline limit in 1 line */}
            <p className="text-gray-300 text-sm sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
              &ldquo;Sinais com método. Resultado com consistência.&rdquo;
            </p>
          </motion.div>

          {/* 3 Quick Badges inline */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mt-8 max-w-lg"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold leading-none bg-brand-green/10 text-brand-green border border-brand-green/20 uppercase tracking-wider font-mono">
              <TrendingUp className="w-3.5 h-3.5" /> Win Rate {settings.winRate}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold leading-none bg-brand-gold/10 text-brand-gold border border-brand-gold/20 uppercase tracking-wider font-mono">
              <Users className="w-3.5 h-3.5" /> +{settings.totalMembros} membros
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold leading-none bg-white/5 text-gray-300 border border-white/10 uppercase tracking-wider font-mono">
              <Calendar className="w-3.5 h-3.5" /> Desde 2023
            </span>
          </motion.div>

          {/* Visual Terminal Log Display to set fintech atmosphere */}
          <div className="w-full max-w-lg mt-10 p-4 rounded-xl bg-dark-pure/75 border border-dark-600 shadow-2xl font-mono text-xs text-left text-gray-400 space-y-3.5 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
            
            {/* Header with Live Indicator */}
            <div className="flex items-center justify-between border-b border-dark-600/50 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green animate-pulse" />
                <span className="text-gray-200 font-bold tracking-wider text-[11px] uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-green shrink-0 animate-pulse" /> Terminal Monitor OB v1.0
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-green/10 text-brand-green font-bold border border-brand-green/20">M5 ATIVO</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-gray-500 uppercase tracking-wider font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                DADOS EM TEMPO DE 5M
              </div>
            </div>

            {/* Signal List Rows */}
            <div className="space-y-2 max-h-[170px] overflow-hidden select-none">
              {terminalLogs.map((log, index) => {
                const isCall = log.action === 'CALL';
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded border transition-all duration-300 ${
                      index === 0 
                        ? 'bg-brand-green/5 border-brand-green/25 shadow-[inset_0_0_10px_rgba(0,230,118,0.06)]' 
                        : 'bg-white/2 border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    {/* Time, Asset, and Action direction */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] text-gray-500 font-medium font-mono">[{log.time}]</span>
                      <span className="font-bold text-white tracking-wide text-xs sm:text-sm">{log.asset}</span>
                      
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                        isCall 
                          ? 'bg-green-500/15 text-brand-green border border-green-500/10' 
                          : 'bg-brand-red/15 text-brand-red border border-brand-red/10'
                      }`}>
                        {isCall ? '🟢 CALL' : '🔴 PUT'}
                      </span>
                    </div>

                    {/* Metadata column (Confidence Rate, M5, status code) */}
                    <div className="flex items-center gap-3.5 justify-between sm:justify-end text-[10px]">
                      <div className="flex items-center gap-1 text-gray-400">
                        <span className="text-gray-500">CONF:</span>
                        <span className="font-bold text-brand-gold">{log.confidence}</span>
                      </div>
                      
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-gray-400 font-semibold border border-white/5 uppercase">
                        {log.timeframe} (5m)
                      </span>
                      
                      <span className={`font-bold uppercase tracking-wider text-[10px] ${
                        log.status.includes('WIN') || log.status.includes('SUCESSO')
                          ? 'text-brand-green'
                          : 'text-gray-300'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Real-time Depth Info Footer */}
            <div className="flex justify-between items-center text-[9px] text-gray-500 border-t border-dark-600/30 pt-2.5 font-sans">
              <span>SCANNER CONFLUENCE DEPTH: 128 NODES</span>
              <span className="animate-pulse">LATÊNCIA DA SLA: 14ms (CONEXÃO ESTÁVEL)</span>
            </div>
          </div>

          {/* Hero Main Telegram Button call-to-action */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-md mt-8 px-2"
          >
            <a 
              href={settings.linkTelegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="animate-pulse-glow inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-lg bg-gradient-to-r from-brand-green to-[#00BFA5] text-black font-display text-base sm:text-lg font-bold uppercase tracking-wider transition-all hover:brightness-110 active:scale-95 text-center cursor-pointer shadow-lg shadow-brand-green/20"
            >
              🚀 ENTRAR NO GRUPO TELEGRAM
            </a>
            <p className="text-[10px] text-gray-500 mt-3.5 uppercase tracking-widest font-mono flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Canal verificado · Acesso livre
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator directed by PRD */}
        <div className="text-center font-mono text-[10px] tracking-widest text-gray-500 uppercase mt-4 animate-bounce">
          Role para conhecer a metodologia ↓
        </div>
      </section>

      {/* --- SEÇÃO 2: BARRA DE CREDENCIAIS (Social Proof Bar) --- */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metricsData.map((metric, idx) => (
            <div key={idx} className="glass-card p-5 rounded-xl text-center flex flex-col justify-between border border-dark-600 transition-all hover:border-brand-green/30 duration-300 group">
              <div className="space-y-1">
                <Counter target={idx === 0 ? parseInt(settings.winRate) : idx === 1 ? 2400 : idx === 2 ? parseInt(settings.totalMembros) * 1000 : parseInt(settings.mesesAtivo)} suffix={metric.suffix} />
                <div className="text-xs font-bold text-gray-200 uppercase tracking-wider font-display group-hover:text-white transition-colors">
                  {idx === 0 ? `Win Rate¹` : metric.label}
                </div>
              </div>
              <div className="text-[10px] text-gray-500 mt-2 italic">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEÇÃO 3: O QUE É A SALA (Qualização de Leads) --- */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Como Funciona Nosso Ecossistema
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
            Acreditamos na verdade técnica. Descubra exatamente o que entregamos e o que nos recusamos a fazer.
          </p>
          
          <div className="flex justify-center mt-6 md:hidden">
            <div className="inline-flex rounded-lg bg-dark-800 p-1 border border-dark-600">
              <button 
                onClick={() => setActiveTab('received')}
                className={`py-2 px-4 text-xs font-bold rounded-md transition-all ${activeTab === 'received' ? 'bg-brand-green text-black' : 'text-gray-400'}`}
              >
                O que você recebe
              </button>
              <button 
                onClick={() => setActiveTab('notIs')}
                className={`py-2 px-4 text-xs font-bold rounded-md transition-all ${activeTab === 'notIs' ? 'bg-dark-600 text-white' : 'text-gray-400'}`}
              >
                O que NÃO somos
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bloco A — O que você vai receber */}
          <div className={`glass-card p-6 sm:p-8 rounded-xl border border-brand-green/10 transition-all duration-300 ${activeTab === 'received' ? 'block' : 'hidden md:block'}`}>
            <h3 className="text-base sm:text-lg font-bold text-brand-green flex items-center gap-2.5 font-display mb-6 uppercase">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green-bg text-brand-green text-xs font-black">✓</span> 
              O que você vai receber na sala
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold">Sinais Completos</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Definição robusta de Ativo, Horário exato, Direção (CALL/PUT) e tempo de validade.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold">Análise Técnica Diária</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Relatório resumido de sentimento de mercado focado na abertura de Londres e NY.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold">Gestão Científica de Banca</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Uma planilha matemática de alocação de risco para conservação dos fundos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold">Suporte Ativo de Operadores</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Discussões de tática de mercado liderada por moderadores seniores no chat oficial.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Bloco B — O que a sala NÃO é */}
          <div className={`glass-card p-6 sm:p-8 rounded-xl border border-white/5 transition-all duration-300 ${activeTab === 'notIs' ? 'block' : 'hidden md:block'}`}>
            <h3 className="text-base sm:text-lg font-bold text-gray-400 flex items-center gap-2.5 font-display mb-6 uppercase">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red-bg text-brand-red text-xs font-black">✕</span> 
              O que a sala NÃO é (Verdade estrita)
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-200 font-bold">Facilidade de Ganho Rápido</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Nós rejeitamos posts de ostentação. Trading exige foco de longo prazo.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-200 font-bold">Robôs Automáticos de Alta Frequência</h4>
                  <p className="text-gray-500 text-xs mt-0.5">As análises são desenhadas com base em fundamentos humanos, livre de bugs sintáticos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-200 font-bold">Indicação de Corretoras Obscuras</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Sem links de afiliados forçados ou exigências de depósitos absurdos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-200 font-bold">Promessas de Zero Risco</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Perdas fazem parte do trading profissional. Operamos blindados com matemática.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 4: COMO FUNCIONA (3 Passos) --- */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Metodologia em Três Etapas
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Do clique inicial no Telegram até seu gerenciamento diário consistente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          
          {/* Step 1 */}
          <div className="glass-card p-6 sm:p-7 rounded-xl relative overflow-hidden flex flex-col justify-between border border-dark-600 hover:border-brand-green/20 transition-colors duration-300">
            <span className="absolute -top-4 -right-2 font-display text-6xl sm:text-7xl font-extrabold text-brand-green/5 tracking-tighter select-none">
              01
            </span>
            <div className="space-y-3 z-10">
              <span className="inline-flex px-2.5 py-1 text-[10px] font-bold bg-[#00E676]/10 text-brand-green rounded font-mono uppercase">PASSO 01</span>
              <h3 className="text-base font-bold text-white font-display">Conexão Digital</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Clique no botão de acesso do Telegram abaixo para ser admitido imediatamente no canal de sinais primário.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-6 sm:p-7 rounded-xl relative overflow-hidden flex flex-col justify-between border border-dark-600 hover:border-brand-green/20 transition-colors duration-300">
            <span className="absolute -top-4 -right-2 font-display text-6xl sm:text-7xl font-extrabold text-brand-green/5 tracking-tighter select-none">
              02
            </span>
            <div className="space-y-3 z-10">
              <span className="inline-flex px-2.5 py-1 text-[10px] font-bold bg-brand-gold/10 text-brand-gold rounded font-mono uppercase">PASSO 02</span>
              <h3 className="text-base font-bold text-white font-display">Alerta Crítico</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Habilite imediatamente as notificações prioritárias do canal de Telegram para agir antes da expiração dos sinais.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-6 sm:p-7 rounded-xl relative overflow-hidden flex flex-col justify-between border border-dark-600 hover:border-brand-green/20 transition-colors duration-300">
            <span className="absolute -top-4 -right-2 font-display text-6xl sm:text-7xl font-extrabold text-brand-green/5 tracking-tighter select-none">
              03
            </span>
            <div className="space-y-3 z-10">
              <span className="inline-flex px-2.5 py-1 text-[10px] font-bold bg-white/5 text-gray-300 rounded font-mono uppercase">PASSO 03</span>
              <h3 className="text-base font-bold text-white font-display">Rigor Técnico</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Configure as taxas na sua plataforma preferida e siga estritamente o modelo de banca proposto para o longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 5: RESULTADOS RECENTES (Track Record) --- */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="glass-card rounded-xl p-5 sm:p-7 border border-dark-600 relative">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dark-600 pb-5 mb-5 gap-3">
            <div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2.5">
                <span className="inline-block relative">
                  <span className="absolute inset-0 bg-brand-green rounded-full animate-ping" />
                  <span className="block w-2.5 h-2.5 rounded-full bg-brand-green" />
                </span>
                Últimos Sinais Enviados (Auditado)
              </h3>
              <p className="text-xs text-gray-400 mt-1">Registrado direto do nosso canal oficial</p>
            </div>
            
            <div className="bg-brand-green/10 text-brand-green text-xs px-3.5 py-1.5 rounded-lg border border-brand-green/20 font-mono font-bold flex items-center gap-1.5">
              Últimas 20 ops: 16 ✅ WIN · 4 ❌ LOSS · {settings.winRate} Aproveitamento
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="text-gray-500 uppercase tracking-widest border-b border-dark-600 font-mono text-[10px]">
                  <th className="py-3 px-3">Horário / Data</th>
                  <th className="py-3 px-3">Ativo</th>
                  <th className="py-3 px-3 text-center">Ação</th>
                  <th className="py-3 px-3">Tempo</th>
                  <th className="py-3 px-3">Gestão de Banca</th>
                  <th className="py-3 px-3 text-right">Resultado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-200 font-mono">
                <tr className="hover:bg-white/1 transition-all">
                  <td className="py-4 px-3 text-gray-400">Hoje 10:45</td>
                  <td className="py-4 px-3 font-bold text-white">EUR/USD</td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/15 text-brand-green font-sans">🟢 CALL</span>
                  </td>
                  <td className="py-4 px-3">5 Min (M5)</td>
                  <td className="py-4 px-3 text-gray-400">Fixo</td>
                  <td className="py-4 px-3 text-right font-bold text-brand-green">
                    <span className="inline-flex items-center gap-1">✅ WIN (STRIKE)</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/1 transition-all">
                  <td className="py-4 px-3 text-gray-400">Hoje 09:12</td>
                  <td className="py-4 px-3 font-bold text-white">GBP/JPY (OTC)</td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-red/15 text-brand-red font-sans">🔴 PUT</span>
                  </td>
                  <td className="py-4 px-3">1 Min (M1)</td>
                  <td className="py-4 px-3 text-gray-400">Gale 1</td>
                  <td className="py-4 px-3 text-right font-bold text-brand-green">
                    <span className="inline-flex items-center gap-1">✅ WIN G1</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/1 transition-all">
                  <td className="py-4 px-3 text-gray-400">Ontem 15:30</td>
                  <td className="py-4 px-3 font-bold text-white">USD/JPY</td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-red/15 text-brand-red font-sans">🔴 PUT</span>
                  </td>
                  <td className="py-4 px-3">5 Min (M5)</td>
                  <td className="py-4 px-3 text-gray-400">Fixo</td>
                  <td className="py-4 px-3 text-right font-bold text-brand-red">
                    <span className="inline-flex items-center gap-1">❌ LOSS</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/1 transition-all">
                  <td className="py-4 px-3 text-gray-400">Ontem 14:15</td>
                  <td className="py-4 px-3 font-bold text-white">EUR/GBP</td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/15 text-brand-green font-sans">🟢 CALL</span>
                  </td>
                  <td className="py-4 px-3">2 Min (M2)</td>
                  <td className="py-4 px-3 text-gray-400">Fixo</td>
                  <td className="py-4 px-3 text-right font-bold text-brand-green">
                    <span className="inline-flex items-center gap-1">✅ WIN DIRECT</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/1 transition-all">
                  <td className="py-4 px-3 text-gray-400">Ontem 11:02</td>
                  <td className="py-4 px-3 font-bold text-white">AUD/CAD</td>
                  <td className="py-4 px-3 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/15 text-brand-green font-sans">🟢 CALL</span>
                  </td>
                  <td className="py-4 px-3">5 Min (M5)</td>
                  <td className="py-4 px-3 text-gray-400">Gale 1</td>
                  <td className="py-4 px-3 text-right font-bold text-brand-green">
                    <span className="inline-flex items-center gap-1">✅ WIN G1</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 pt-4 border-t border-dark-600 flex flex-col sm:flex-row justify-between items-center gap-3.5">
            <span className="text-[11px] text-gray-500 font-medium">
              Nota: Todos os sinais são submetidos a conferência independente nos canais auditados.
            </span>
            <a 
              href={settings.linkHistorico} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-brand-green hover:text-brand-green-hover font-bold font-mono inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              Consultar Histórico Completo <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 6: METODOLOGIA DE SINAIS (Cards 2x2) --- */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Nossa Metodologia Rigorosa
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
            Não jogamos na sorte. Cada entrada passa por um filtro estrutural confluente de alta precisão cambial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="glass-card p-6 rounded-xl hover:border-brand-green/25 transition-all duration-300 group">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green mb-4 border border-brand-green/10 group-hover:bg-brand-green group-hover:text-black transition-all">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-white mb-2">Análise de Fluxo (Price Action)</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Deciframos as zonas cruciais de suporte/resistência técnica e mapeamos onde as grandes instituições costumam defender o preço cambial.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6 rounded-xl hover:border-brand-green/25 transition-all duration-300 group">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green mb-4 border border-brand-green/10 group-hover:bg-brand-green group-hover:text-black transition-all">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-white mb-2">Tratamento de Risco Científico</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Trabalhamos estritamente com {settings.metodoGestao}, visando preservação máxima de capital durante oscilações normais de mercado.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6 rounded-xl hover:border-brand-green/25 transition-all duration-300 group">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green mb-4 border border-brand-green/10 group-hover:bg-brand-green group-hover:text-black transition-all">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-white mb-2">Janelas Estritas de Liquidez</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Filtramos as negociações para acontecerem apenas nas maiores janelas cambiais mundiais (Londres e Nova York), garantindo estabilidade e menor spread.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-6 rounded-xl hover:border-brand-green/25 transition-all duration-300 group">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green mb-4 border border-brand-green/10 group-hover:bg-brand-green group-hover:text-black transition-all">
              <Bookmark className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-white mb-2">Ativos Selecionados a Dedo</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Ignoramos pares com comportamento imprevisível ou alta instabilidade cambial. Focamos apenas naqueles que respeitam fielmente os padrões de probabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 7: DEPOIMENTOS DE MEMBROS --- */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Resultados Coletivos de Membros
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Membros reais que operam seguindo à risca as nossas diretrizes.
          </p>
        </div>

        {/* Depoimentos em Grid Responsiva - um embaixo do outro no mobile, grid em telas maiores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="glass-card p-6 rounded-xl flex flex-col justify-between border border-dark-600 relative hover:border-brand-green/20 transition-all duration-300">
            <p className="text-sm italic text-gray-200 leading-relaxed mb-6 font-medium">
              &ldquo;Primeiro mês acompanhando os sinais da sala privada: finalmente recuperei tudo o que havia perdido operando sozinho. Recomendo muito!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-extrabold text-sm border border-brand-green/20">
                MA
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider font-display">Marco Aurélio S.</div>
                <div className="text-[10px] text-gray-400">Membro há 4 meses</div>
              </div>
              <div className="ml-auto text-brand-gold text-xs">★★★★★</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card p-6 rounded-xl flex flex-col justify-between border border-dark-600 relative hover:border-brand-green/20 transition-all duration-300">
            <p className="text-sm italic text-gray-200 leading-relaxed mb-6 font-medium">
              &ldquo;Fiquei assustado com o suporte fantástico. Não entendia bem de Forex e eles me mandaram guias rápidos que em 5 minutos mudaram meu operacional.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-extrabold text-sm border border-brand-green/20">
                LN
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider font-display">Larissa N.</div>
                <div className="text-[10px] text-gray-400">Membro há 6 meses</div>
              </div>
              <div className="ml-auto text-brand-gold text-xs">★★★★★</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-card p-6 rounded-xl flex flex-col justify-between border border-dark-600 relative hover:border-brand-green/20 transition-all duration-300">
            <p className="text-sm italic text-gray-200 leading-relaxed mb-6 font-medium">
              &ldquo;O diferencial é a transparência. Se tem dia de perda, eles colocam na planilha e avisam no grupo. Sem lero-lero de marketing enganoso.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-extrabold text-sm border border-brand-green/20">
                DR
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider font-display">Danilo R.</div>
                <div className="text-[10px] text-gray-400">Membro há 2 meses</div>
              </div>
              <div className="ml-auto text-brand-gold text-xs">★★★★★</div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="glass-card p-6 rounded-xl flex flex-col justify-between border border-dark-600 relative hover:border-brand-green/20 transition-all duration-300">
            <p className="text-sm italic text-gray-200 leading-relaxed mb-6 font-medium">
              &ldquo;Eu já tinha testado mais de 5 robôs milagrosos. Só perdi dinheiro. Com a seriedade da análise humana daqui consegui consistência sólida.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-extrabold text-sm border border-brand-green/20">
                FC
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider font-display">Fabiano C.</div>
                <div className="text-[10px] text-gray-400">Membro há 9 meses</div>
              </div>
              <div className="ml-auto text-brand-gold text-xs">★★★★★</div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-[11px] text-gray-500 italic mt-4">
          Comentários espontâneos auditados e validados de traders ativos na comunidade.
        </p>
      </section>

      {/* --- SEÇÃO 8: PERGUNTAS FREQUENTES (FAQ Accordion) --- */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Esclarecimentos diretos sobre nossa operação e tática de mercado.
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <input 
              type="text"
              placeholder="🔍 Buscar perguntas..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full bg-dark-800 border border-dark-600 rounded-lg py-2.5 px-4 text-xs font-medium text-white focus:outline-none focus:border-brand-green placeholder-gray-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-3">
          {faqs
            .filter(faq => faq.q.toLowerCase().includes(faqSearch.toLowerCase()) || faq.a.toLowerCase().includes(faqSearch.toLowerCase()))
            .map((faq, index) => {
              const isOpen = selectedFaq === index;
              return (
                <div 
                  key={index} 
                  className="glass-card rounded-lg overflow-hidden border border-dark-600 transition-colors duration-250 hover:border-dark-600"
                >
                  <button
                    onClick={() => setSelectedFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex justify-between items-center transition-colors hover:bg-white/1 outline-none text-white focus:bg-white/5 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide pr-4">
                      {faq.q}
                    </span>
                    <span className="text-brand-green text-sm font-bold shrink-0">
                      {isOpen ? (
                        <span className="text-brand-green font-mono text-lg shrink-0 select-none">−</span>
                      ) : (
                        <span className="text-brand-green font-mono text-lg shrink-0 select-none">+</span>
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 border-t border-dark-600 text-xs sm:text-sm text-gray-400 leading-relaxed bg-dark-pure/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          
          {faqs.filter(faq => faq.q.toLowerCase().includes(faqSearch.toLowerCase()) || faq.a.toLowerCase().includes(faqSearch.toLowerCase())).length === 0 && (
            <p className="text-center text-xs text-gray-500 py-6">Nenhuma pergunta encontrada para sua busca.</p>
          )}
        </div>
      </section>

      {/* --- SEÇÃO 9: CTA PRINCIPAL --- */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl relative overflow-hidden p-8 sm:p-12 text-center border border-brand-green/10">
          {/* Pulse background light */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              Pronto Para Operar Com Método?
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
              Junte-se a mais de {settings.totalMembros} traders da nossa comunidade que operam de maneira disciplinada e sem rodeios de marketing enganosos.
            </p>

            <div className="pt-2 w-full max-w-md mx-auto">
              <a 
                href={settings.linkTelegram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-pulse-glow inline-flex items-center justify-center gap-3.5 w-full px-8 py-5 rounded-lg bg-gradient-to-r from-brand-green to-[#00BFA5] text-black font-display text-base sm:text-lg font-bold uppercase tracking-wider transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-brand-green/25 cursor-pointer"
              >
                🚀 ENTRAR NO GRUPO AGORA
              </a>
              
              <div className="flex flex-wrap justify-center items-center gap-4 mt-5 text-[11px] text-gray-400 font-medium">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-brand-green" /> Grupo Verificado
                </span>
                <span>•</span>
                <span>Sem Golpes</span>
                <span>•</span>
                <span>{settings.modeloAcesso}</span>
              </div>
            </div>
            
            <p className="text-[10px] text-gray-500 font-mono tracking-wide">
              *Apenas sinais fundamentados e transparentes. Sem spam.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 10: FOOTER COM DISCLAIMER OBRIGATÓRIO --- */}
      <footer className="py-12 border-t border-dark-600 px-4 text-center max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center items-center gap-4 text-gray-500 text-xs font-mono font-bold tracking-widest uppercase">
          {settings.nomeSala} COMMAND CENTER
        </div>

        <div className="flex justify-center gap-8 text-xs font-bold text-brand-green">
          <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green-hover transition-colors flex items-center gap-1">
            <Instagram className="w-4 h-4" /> Instagram 
          </a>
          <a href={settings.linkHistorico} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green-hover transition-colors flex items-center gap-1">
            <Activity className="w-4 h-4" /> Histórico público
          </a>
          <a href={settings.linkTelegram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green-hover transition-colors flex items-center gap-1">
            <MessageSquare className="w-4 h-4" /> Chat Telegram
          </a>
        </div>

        <div className="text-[10px] sm:text-[11px] text-gray-500 leading-relaxed max-w-3xl mx-auto space-y-3 font-mono">
          <p>
            ⚠️ DISCLAIMER DE RISCO OBRIGATÓRIO: A negociação de Opções Binárias e derivativos de balcão (OTC) envolve risco acelerado de perda integral de seu aporte de capital colocado em operação. As referências históricas e as métricas de aproveitamento passadas mostradas aqui servem puramente para estudos analíticos retrospectivos, não constituindo de forma alguma garantias de resultados ou retornos rentáveis recorrentes no futuro.
          </p>
          <p>
            Opere de maneira consciente e aplique unicamente capital cuja perda total não desestabilize sua situação financeira fundamental básica. Essa página constitui material puramente informativo e de fins pedagógicos para a comunidade, livre de recomendações regulamentadas sob consultoria formal.
          </p>
          <p className="pt-3 text-[9px] text-gray-600 tracking-wide font-sans">
            &copy; {new Date().getFullYear()} {settings.nomeSala}. Desenvolvido sob rigor técnico com Google AI Studio. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
