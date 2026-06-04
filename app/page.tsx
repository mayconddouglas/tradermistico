'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  AlertTriangle, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  X,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const linkTelegram = 'https://t.me/+yWw9Il5GTVdlMjkx';
  const nomeSala = 'TRADER MÍSTICO';
  const avatarUrl = 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=300&auto=format&fit=crop';

  // Compliance Modals State
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  // Auto-hide cookie banner if accepted in session
  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted');
    if (accepted) {
      const timer = setTimeout(() => {
        setShowCookieBanner(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setShowCookieBanner(false);
  };

  return (
    <div className="relative min-h-screen bg-dark-900 text-slate-100 flex flex-col justify-between font-sans overflow-x-hidden selection:bg-brand-green/30 selection:text-brand-green">
      
      {/* Dynamic Background Mesh Grid & Radials */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-brand-green/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/2 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- HEADER --- */}
      <header className="w-full max-w-3xl mx-auto pt-8 px-4 flex justify-between items-center relative z-20">
        <div id="brand-indicator" className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-green uppercase">
            Canal Verificado Ativo
          </span>
        </div>
        <div id="compliance-quick-links" className="flex gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <button 
            onClick={() => setActiveModal('privacy')}
            className="hover:text-brand-green transition-colors cursor-pointer"
          >
            Privacidade
          </button>
          <button 
            onClick={() => setActiveModal('terms')}
            className="hover:text-brand-green transition-colors cursor-pointer"
          >
            Termos
          </button>
        </div>
      </header>

      {/* --- MAIN ROOT LANDER CONTENT --- */}
      <main id="main-content-area" className="flex-grow flex flex-col items-center justify-center py-12 px-4 max-w-2xl mx-auto w-full relative z-10">
        
        {/* Profile Avatar Card */}
        <div id="avatar-container" className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-brand-green/20 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-brand-green/30 animate-spin-slow pointer-events-none" />
          <img 
            src={avatarUrl} 
            alt={nomeSala} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full border-2 border-brand-green relative z-10 shadow-xl shadow-brand-green/10"
          />
        </div>

        {/* Title and Strategic Subtitle */}
        <div id="title-wrapper" className="text-center space-y-4 max-w-xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            {nomeSala}
          </h1>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/20">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-[10px] font-bold tracking-wider font-mono text-brand-green uppercase">
              Educação Cambial · Análise de Fluxo
            </span>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium pt-2">
            Descubra a metodologia de leitura técnica de fluxo gráfico (Price Action) e gerenciamento de risco rigoroso de forma totalmente descomplicada.
          </p>
        </div>

        {/* Concise Bento-Style Cards Block */}
        <div id="benefits-grid" className="w-full grid gap-4 mt-8">
          
          {/* Card 1 */}
          <div className="glass-card p-4 sm:p-5 rounded-xl border border-dark-600/50 flex gap-4 items-start transition-all hover:border-brand-green/10 duration-300">
            <div className="p-2 ml-0 rounded-lg bg-brand-green/10 text-brand-green border border-brand-green/20">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="text-white text-sm font-bold tracking-wide">
                Estudo de Price Action Puro
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Análises fundamentadas sob zonas cruciais de suporte, resistência e simetrias do mercado financeiro sem falsas promessas ou especulação milagrosa.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-4 sm:p-5 rounded-xl border border-dark-600/50 flex gap-4 items-start transition-all hover:border-brand-green/10 duration-300">
            <div className="p-2 ml-0 rounded-lg bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
              <Activity className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="text-white text-sm font-bold tracking-wide">
                Gerenciamento Estatístico Rigoroso
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                A matemática a favor do seu capital. Orientamos exclusivamente planos de risco controlados para conservação sólida de fundos na sua carteira.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-4 sm:p-5 rounded-xl border border-dark-600/50 flex gap-4 items-start transition-all hover:border-brand-green/10 duration-300">
            <div className="p-2 ml-0 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h3 className="text-white text-sm font-bold tracking-wide">
                100% Gratuito & Transparente
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Acesso livre para fins de estudo e aprendizagem prática de traders. Zero custos ocultos e total transparência ao acompanhar nossas operações.
              </p>
            </div>
          </div>

        </div>

        {/* --- CRITICAL SINGLE CTA BUTTON CONSTRAINTS --- */}
        <div id="cta-button-block" className="w-full mt-10">
          <motion.div
            initial={{ scale: 0.96 }}
            animate={{ scale: [0.98, 1.01, 0.98] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="w-full"
          >
            <a 
              href={linkTelegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full px-6 py-4.5 rounded-xl bg-gradient-to-r from-brand-green to-[#00BFA5] text-black font-display text-[15px] sm:text-[17px] font-extrabold uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 text-center cursor-pointer shadow-xl shadow-brand-green/20"
            >
              🚀 ENTRAR NO GRUPO TELEGRAM GRATUITO
            </a>
          </motion.div>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-500 font-mono tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Nenhum custo de entrada / Canal seguro verificado</span>
          </div>
        </div>

      </main>

      {/* --- FOOTER COMPLIANCE --- */}
      <footer className="w-full max-w-2xl mx-auto py-10 px-4 mt-auto border-t border-dark-600/40 text-center space-y-6">
        
        {/* Compliance Buttons */}
        <div id="compliance-buttons-bottom" className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-gray-400">
          <button 
            onClick={() => setActiveModal('privacy')}
            className="hover:text-brand-green transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
          <span>•</span>
          <button 
            onClick={() => setActiveModal('terms')}
            className="hover:text-brand-green transition-colors cursor-pointer"
          >
            Termos de Uso
          </button>
          <span>•</span>
          <a 
            href="mailto:suporte@tradermistico.com"
            className="hover:text-brand-green transition-colors"
          >
            Suporte: suporte@tradermistico.com
          </a>
        </div>

        {/* Risk Disclaimer mandated by TikTok Ad Policy */}
        <div id="risk-disclosure-disclaimer" className="text-[10px] text-gray-500 leading-relaxed space-y-3 font-mono text-left bg-dark-pure/30 p-4.5 rounded-lg border border-dark-600/30">
          <p className="font-bold text-gray-400 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            AVISO LEGAL IMPORTANTE E DISCLAIMER DE RISCO:
          </p>
          <p>
            A negociação de Opções Binárias, Forex e derivativos financeiros de balcão (OTC) envolve risco técnico elevado de perda integral de seu capital investido. Todo o conteúdo disponibilizado nesta página e no canal de Telegram associado possui intuito puramente educacional para simulações e estudos dirigidos, não consistindo em assessoria para investimentos ou recomendações de operação.
          </p>
          <p>
            Lucros históricos e análises retrospectivas passadas mostradas aqui não garantem retornos ou resultados positivos programados no futuro. Opere de forma responsável aplicando capital cuja eventual diminuição ou perda total não cause impacto negativo na sua saúde financeira ou estilo de vida básico familiar.
          </p>
          <p className="text-[9px] text-gray-600 text-center pt-2">
            &copy; {new Date().getFullYear()} {nomeSala}. Todos os direitos reservados. Este projeto não possui vínculos afiliados obrigatórios ou relações corporativas associativas de exclusividade com corretoras financeiras de câmbio.
          </p>
        </div>
      </footer>

      {/* --- COOKIE CONSENT BANNER (Boosts platform verification) --- */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 inset-x-0 bg-dark-pure/95 border-t border-dark-600 p-4 z-40 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-4xl mx-auto rounded-t-xl shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
              <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                Utilizamos cookies técnicos essenciais para manter a estabilidade do site e otimizar a velocidade de exibição, em estreito acordo com nossa <button onClick={() => { setActiveModal('privacy'); }} className="underline font-bold text-brand-green cursor-pointer">Política de Privacidade</button>.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button 
                onClick={acceptCookies}
                className="w-full sm:w-auto px-4 py-2 rounded bg-brand-green text-black font-bold text-xs hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                Aceitar Cookies
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- PRIVACY POLICY / TERMS OF USE INTERACTIVE MODALS --- */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="modal-backdrop"
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-dark-800 border border-dark-600 rounded-xl p-6 max-w-xl w-full max-h-[80vh] overflow-y-auto relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {activeModal === 'privacy' ? (
                <div id="modal-privacy" className="space-y-4 pr-1">
                  <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-green" /> Política de Privacidade
                  </h2>
                  <div className="text-xs text-gray-300 leading-relaxed space-y-3 font-mono">
                    <p className="font-sans font-bold text-gray-400">Última atualização: Junho de 2026</p>
                    <p>
                      Sua privacidade é extremamente importante para nós. Esta política de privacidade explica de modo transparente como tratamos as informações que circulam no ecossistema do <span className="text-white font-bold">{nomeSala}</span>.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[10px] mt-4">1. Coleta de Informações:</p>
                    <p>
                      Não solicitamos dados cadastrais confidenciais, RG, CPF ou dados bancários aos visitantes em nossa página. Ao clicar no link de redirecionamento, seu encaminhamento é repassado de maneira privada e criptografada diretamente ao aplicativo Telegram Messenger.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[10px] mt-4">2. Cookies Técnicos:</p>
                    <p>
                      Implementamos cookies técnicos provisórios exclusivamente de sessão local em seu navegador para acelerar os carregamentos gráficos do site e lembrar sua aceitação sobre os alertas do portal.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[10px] mt-4">3. Contato de Encarregado LGPD:</p>
                    <p>
                      Se você desejar obter detalhes sobre a exclusão de dados de simulações ou relatórios analíticos, envie sua mensagem diretamente para nosso encarregado legal no e-mail corporativo: <span className="text-brand-green">suporte@tradermistico.com</span>.
                    </p>
                  </div>
                </div>
              ) : (
                <div id="modal-terms" className="space-y-4 pr-1">
                  <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-brand-green" /> Termos de Uso do Portal
                  </h2>
                  <div className="text-xs text-gray-300 leading-relaxed space-y-3 font-mono">
                    <p className="font-sans font-bold text-gray-400">Última atualização: Junho de 2026</p>
                    <p>
                      Ao acessar este portal, você concorda de maneira plena e integral com os moldes e as diretrizes pedagógicas definidos a seguir:
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[10px] mt-4">1. Caráter Pedagógico e Educacional:</p>
                    <p>
                      Todas as publicações de simulações cambiais e análises de gráficos nesta página ou em nosso canal gratuito no Telegram Messenger constituem material com finalidade puramente teórica e educativa, para estudos e fins práticos demonstrativos do mercado.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[10px] mt-4">2. Isenção de Custódia e Licenciamento:</p>
                    <p>
                      Nós não exercemos custódia de fundos alheios, não oferecemos consultoria regulamentada individual e não indicamos corretoras específicas de forma exclusiva. O usuário possui total autonomia e liberdade para tomar suas decisões práticas ou simulações.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[10px] mt-4">3. Limitação de Responsabilidade:</p>
                    <p>
                      O mercado financeiro de Opções Binárias e derivativos é inerentemente volátil. Ao aderir aos simulados, você declara consciência de todos os riscos cambiais e se responsabiliza integralmente pelos resultados práticos e testes de estratégias colocados em vigor.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-dark-600 text-center">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2.5 rounded bg-dark-600 text-white font-bold text-xs hover:bg-dark-500 transition-colors cursor-pointer"
                >
                  Entendi e Aceito os Termos
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
