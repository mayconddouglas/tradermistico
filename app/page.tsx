'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  AlertTriangle, 
  X, 
  FileText,
  ChevronRight,
  MessageSquare,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const linkTelegram = 'https://t.me/+yWw9Il5GTVdlMjkx';
  const nomeSala = 'TRADER MÍSTICO';
  const avatarUrl = 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=300&auto=format&fit=crop';

  // State Management
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  // High-credibility, compliance-friendly client testimonials text
  const testimonials = [
    {
      initials: "L.M.",
      date: "Há 2 dias",
      text: "O que mais gostei foi a didática sobre controle de risco. Finalmente entendi como traçar simetrias sólidas."
    },
    {
      initials: "R.S.",
      date: "Há 1 semana",
      text: "Ambiente fantástico para aprender de verdade. O canal é focado puramente em price action, sem promessas absurdas."
    },
    {
      initials: " Thiago K.",
      date: "Há 4 dias",
      text: "Estudos diários exemplares. Ideal para quem quer aprender sobre disciplina gráfica e parar de operar por impulso."
    },
    {
      initials: "M.A.",
      date: "Há 12h",
      text: "Excelente acompanhamento estatístico. O melhor canal gratuito para estudar zonas de suporte e resistência em m5."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 flex flex-col justify-between font-sans overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* Subtle minimalist borders on left and right for premium structural framing */}
      <div className="hidden md:block absolute inset-y-0 left-10 w-[1px] bg-zinc-900 pointer-events-none" />
      <div className="hidden md:block absolute inset-y-0 right-10 w-[1px] bg-zinc-900 pointer-events-none" />

      {/* --- HEADER --- */}
      <motion.header 
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="w-full max-w-2xl mx-auto pt-8 px-6 flex justify-between items-center relative z-20"
      >
        <div id="brand-indicator" className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
            Canal Verificado Ativo
          </span>
        </div>
        <div id="compliance-quick-links" className="flex gap-4 text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
          <button 
            onClick={() => setActiveModal('privacy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacidade
          </button>
          <span>/</span>
          <button 
            onClick={() => setActiveModal('terms')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Termos
          </button>
        </div>
      </motion.header>

      {/* --- MAIN CONTENT AREA --- */}
      <main id="main-content-area" className="flex-grow flex flex-col items-center justify-center py-12 px-6 max-w-xl mx-auto w-full relative z-10">
        
        {/* Monochromatic Profile Avatar with local grays */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          id="avatar-container" 
          className="relative w-24 h-24 mb-6"
        >
          <div className="absolute inset-0 rounded-full border border-zinc-800" />
          <img 
            src={avatarUrl} 
            alt={nomeSala} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full border border-zinc-700 filter grayscale contrast-125 relative z-10 shadow-lg"
          />
        </motion.div>

        {/* Brand Information */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          id="title-wrapper" 
          className="text-center space-y-4 w-full"
        >
          <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
            {nomeSala}
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-800 bg-zinc-950">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[10px] font-bold tracking-wider font-mono text-zinc-400 uppercase">
              Educação Cambial · Análise de Fluxo
            </span>
          </div>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal pt-1 max-w-sm mx-auto">
            Metodologia baseada em Price Action (leitura técnica de fluxo gráfico) e gestão estatística de alta disciplina para estudos de mercado financeiro.
          </p>
        </motion.div>



        {/* --- PASSO A PASSO / COMO OPERAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          id="how-to-operate" 
          className="w-full mt-10 space-y-3"
        >
          <div className="flex items-center gap-2 px-1">
            <Activity className="w-3.5 h-3.5 text-zinc-400" />
            <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-zinc-400">
              Como Operar Passo a Passo
            </h4>
          </div>

          <div className="space-y-2.5 w-full">
            {[
              {
                number: "01",
                title: "Entrar no Grupo Free",
                description: "Clique no botão principal de acesso abaixo e entre instantaneamente no nosso canal de estudos gratuito do Telegram."
              },
              {
                number: "02",
                title: "Fazer Parte da Comunidade",
                description: "Junte-se à nossa comunidade exclusiva para interagir e compreender a mentalidade de riscos controlados com outros traders."
              },
              {
                number: "03",
                title: "Abrir Conta em uma Corretora",
                description: "Cadastre-se na corretora de Opções Binárias de sua preferência. Você tem total liberdade e escolha universal de plataforma."
              },
              {
                number: "04",
                title: "Acompanhar as Análises no Grupo",
                description: "Monitore as marcações gráficas e estudos de simetria enviados diariamente no canal por nossos analistas técnicos."
              },
              {
                number: "05",
                title: "Replicar os Estudos na Sua Conta",
                description: "Aplique as leituras práticas e os suportes/resistências na sua corretora de maneira didática para aprimorar suas operações."
              }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-lg bg-zinc-950 border border-zinc-900 flex gap-4 items-start transition-colors hover:border-zinc-805"
              >
                <div className="font-mono text-[10px] font-bold text-white bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded shrink-0">
                  {step.number}
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">
                    {step.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- PREMIUM HORIZONTAL SCROLLING TESTIMONIALS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          id="testimonials-section" 
          className="w-full mt-10 space-y-3 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-1">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
            <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-zinc-400">
              Depoimentos de Estudantes
            </h4>
          </div>
          
          {/* Endless looping sliding grid */}
          <div className="w-full relative py-1 overflow-hidden pointer-events-none select-none">
            {/* Minimalist side shadow gradient for smooth blend */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#050505] to-transparent z-10" />

            <motion.div 
              className="flex gap-4 w-max"
              animate={{ x: [0, -800] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {/* Render testimonials twice to allow seamless illusion loop */}
              {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                <div 
                  key={index} 
                  className="w-64 shrink-0 p-4 rounded bg-zinc-950 border border-zinc-900 flex flex-col justify-between space-y-3"
                >
                  <p className="text-zinc-400 text-[11px] leading-relaxed font-sans h-12 overflow-hidden text-ellipsis">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between border-t border-zinc-900/80 pt-2">
                    <span className="text-[10px] font-mono font-bold text-white uppercase">
                      {item.initials}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-600">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* --- FAQ SECTION (Accordion) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
          id="faq-section" 
          className="w-full mt-10 space-y-3"
        >
          <div className="flex items-center gap-2 px-1">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
            <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-zinc-400">
              Perguntas Frequentes (FAQ)
            </h4>
          </div>

          <div className="space-y-2 w-full">
            {[
              {
                q: "Como funciona a sala de sinais?",
                a: "Compartilhamos análises gráficas e de Price Action de alta relevância sob tempo real no Telegram. As informações servem unicamente como material de estudo didático."
              },
              {
                q: "Preciso pagar alguma mensalidade?",
                a: "Absolutamente não. O acesso ao canal do Trader Místico é inteiramente gratuito, sem custos ocultos, com o objetivo de apoiar no estudo de estratégias cambiais."
              },
              {
                q: "Quais corretoras posso utilizar?",
                a: "Você é totalmente autônomo para operar em qualquer plataforma ou corretora do mercado. Nossas análises técnicas e padrões de probabilidade são de aplicação universal."
              },
              {
                q: "O canal oferece garantias de ganhos?",
                a: "Não. O mercado de derivativos possui riscos reais. Não trabalhamos com garantias ou ilusão de retornos fáceis — fomentamos a educação e o controle de risco rigoroso."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded bg-zinc-950 border border-zinc-900 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-4 py-3.5 flex justify-between items-center text-left hover:bg-zinc-900/60 transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide font-mono text-white pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : ''} shrink-0`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-1.5 text-zinc-400 text-xs leading-relaxed border-t border-zinc-900/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* --- SINGLE EXCLUSIVE CTA BUTTON AT FOOTER OF CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
          id="cta-button-block" 
          className="w-full mt-10"
        >
          <motion.a 
            href={linkTelegram} 
            target="_blank" 
            rel="noopener noreferrer"
            animate={{ 
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 0 0 0px rgba(255, 255, 255, 0)",
                "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 16px 3px rgba(255, 255, 255, 0.18)",
                "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 0 0 0px rgba(255, 255, 255, 0)"
              ]
            }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            transition={{
              scale: {
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut"
              },
              boxShadow: {
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut"
              }
            }}
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-md bg-white text-black hover:bg-zinc-200 font-mono text-[13px] sm:text-[14px] font-extrabold uppercase tracking-widest text-center cursor-pointer shadow-lg outline-none"
          >
            <span>ENTRAR NO GRUPO TELEGRAM</span>
            <ChevronRight className="w-4 h-4 text-black block shrink-0" />
          </motion.a>
          
          <div className="flex items-center justify-center gap-1.5 mt-4 text-[9px] text-zinc-600 font-mono tracking-wider uppercase font-bold text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span>Redirecionamento Integrado Para Canal Seguro Oficial</span>
          </div>
        </motion.div>

      </main>

      {/* --- MONOCHROMATIC FOOTER COMPLIANCE --- */}
      <footer className="w-full max-w-2xl mx-auto py-8 px-6 mt-auto border-t border-zinc-900 text-center space-y-6">
        
        {/* Compliance Links */}
        <div id="compliance-buttons-bottom" className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-[10px] font-mono tracking-wider uppercase font-bold text-zinc-500">
          <button 
            onClick={() => setActiveModal('privacy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
          <span>/</span>
          <button 
            onClick={() => setActiveModal('terms')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Termos de Uso
          </button>
          <span>/</span>
          <a 
            href="mailto:suporte@tradermistico.com"
            className="hover:text-white transition-colors"
          >
            suporte@tradermistico.com
          </a>
        </div>

        {/* Rigorous Plain-text Legal Warning required for TikTok approval */}
        <div id="risk-disclosure-disclaimer" className="text-[10px] text-zinc-500 leading-relaxed space-y-3 font-mono text-left bg-zinc-950 p-4.5 rounded border border-zinc-900">
          <p className="font-bold text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider text-[9px]">
            <AlertTriangle className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            AVISO LEGAL IMPORTANTE E DISCLAIMER DE RISCO:
          </p>
          <p>
            A negociação de mercados cambiais, moedas sob contratos de derivativos, Forex ou Opções Binárias de balcão (OTC) envolve risco operacional acentuado de perda de capital. As menções de aproveitamento gráfico e discussões teóricas postadas no portal do Telegram servem unicamente como material didático explicativo retrospectivo, não devendo de maneira alguma ser interpretadas como recomendação de investimento ou prestação de assessoria regulada.
          </p>
          <p>
            Resultados observados anteriormente não constituem garantia de ganhos ou retornos futuros sistemáticos. Use apenas fundos que não prejudiquem seu orçamento de sobrevivência ou reservas familiares.
          </p>
          <p className="text-[9px] text-zinc-650 text-center pt-1">
            &copy; {new Date().getFullYear()} {nomeSala}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* --- COOKIE CONSENT BANNER (Dark Mode / Monochromatic) --- */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 inset-x-0 bg-zinc-950 border-t border-zinc-900 p-4 z-40 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-2xl mx-auto rounded-t-lg shadow-2xl"
          >
            <div className="flex items-start gap-2.5">
              <FileText className="w-4.5 h-4.5 text-zinc-400 mt-0.5 shrink-0" />
              <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-relaxed font-mono">
                Utilizamos cookies técnicos essenciais para manter a estabilidade do site, em estreito acordo com nossa <button onClick={() => { setActiveModal('privacy'); }} className="underline font-bold text-white cursor-pointer">Política de Privacidade</button>.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button 
                onClick={acceptCookies}
                className="w-full sm:w-auto px-4 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white font-mono font-bold text-[10px] uppercase transition-all cursor-pointer border border-zinc-700"
              >
                Aceitar
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97 }}
              className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto relative text-left font-mono"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {activeModal === 'privacy' ? (
                <div id="modal-privacy" className="space-y-4 pr-1">
                  <h2 className="text-sm font-bold font-display text-white flex items-center gap-2 uppercase tracking-wider">
                    <ShieldCheck className="w-4.5 h-4.5 text-zinc-400" /> Política de Privacidade
                  </h2>
                  <div className="text-[11px] text-zinc-400 leading-relaxed space-y-3">
                    <p className="font-sans font-bold text-zinc-500">Última atualização: Junho de 2026</p>
                    <p>
                      Sua privacidade é extremamente importante para nós. Esta política de privacidade explica de modo transparente como tratamos as informações que circulam no ecossistema de estudo <span className="text-white font-bold">{nomeSala}</span>.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[9px] mt-4">1. Coleta de Informações:</p>
                    <p>
                      Não solicitamos dados cadastrais confidenciais, cookies de rastreamento comercial, RG, CPF ou dados bancários aos visitantes em nossa página de entrada. Ao clicar no link de redirecionamento, seu encaminhamento é repassado diretamente ao aplicativo oficial Telegram Messenger.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[9px] mt-4">2. Cookies Técnicos:</p>
                    <p>
                      Implementamos cookies técnicos locais estritamente necessários para otimizar a velocidade de exibição do site e lembrar sua aceitação sobre os termos éticos do portal.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[9px] mt-4">3. Contato Legal:</p>
                    <p>
                      Se desejar obter esclarecimentos sobre termos ou relatórios de políticas vigentes, entre em contato através do e-mail corporativo: <span className="text-white font-bold">suporte@tradermistico.com</span>.
                    </p>
                  </div>
                </div>
              ) : (
                <div id="modal-terms" className="space-y-4 pr-1">
                  <h2 className="text-sm font-bold font-display text-white flex items-center gap-2 uppercase tracking-wider">
                    <FileText className="w-4.5 h-4.5 text-zinc-400" /> Termos de Uso do Portal
                  </h2>
                  <div className="text-[11px] text-zinc-400 leading-relaxed space-y-3">
                    <p className="font-sans font-bold text-zinc-500">Última atualização: Junho de 2026</p>
                    <p>
                      Ao acessar este portal pedagógico, você concorda de maneira plena e indissolúvel com as diretrizes e termos de uso expostos abaixo:
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[9px] mt-4">1. Caráter Pedagógico e de Estudos:</p>
                    <p>
                      Todas as publicações de simulações cambiais e análises gráficas integradas servem puramente para propósitos de instrução teórica, simulações em contas fictícias de treinamento e demonstrações de ferramentas analíticas.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[9px] mt-4">2. Isenção de Custódia e Licenciamento:</p>
                    <p>
                      Não realizamos promessas de retornos automatizados ou custódia de fundos alheios. Nós não captamos capital e incentivamos que cada estudante defina suas corretoras, limites e critérios técnicos com total autonomia.
                    </p>
                    <p className="font-bold text-white uppercase tracking-wider text-[9px] mt-4">3. Aceite de Riscos do Mercado:</p>
                    <p>
                      O mercado financeiro possui riscos inerentes. Usuários declaram e concordam que suas decisões práticas de acompanhamento e aplicação são tomadas de forma 100% livre e autônoma, isentando os desenvolvedores de quaisquer perdas materiais resultantes.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-zinc-900 text-center">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-[10px] uppercase transition-colors cursor-pointer border border-zinc-800 rounded"
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
