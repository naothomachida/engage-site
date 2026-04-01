import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Home.css';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Lógica para o FAQ (acordeão)
    const details = document.querySelectorAll('details');
    const handleToggle = (e: Event) => {
      const target = e.currentTarget as HTMLDetailsElement;
      if (target.open) {
        details.forEach((detail) => {
          if (detail !== target) {
            detail.open = false;
          }
        });
      }
    };

    details.forEach((d) => d.addEventListener('toggle', handleToggle));
    return () => {
      details.forEach((d) => d.removeEventListener('toggle', handleToggle));
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`home-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
      <header>
        <div className="container head">
          <a href="#top" aria-label="Engage Max" onClick={closeMenu}>
            <img src="/logo.png" alt="Engage Max" style={{ height: '32px', width: 'auto' }} />
          </a>
          
          <nav aria-label="principal" className="desktop-nav">
            <a href="#plataforma">Plataforma</a>
            <a href="#agentes">Agentes</a>
            <a href="#resultados">Resultados</a>
            <a href="#faq">Dúvidas</a>
          </nav>

          <div className="head-actions">
            <a href="#contato" className="btn btn-primary desktop-only">Falar com um especialista</a>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <nav>
            <a href="#plataforma" onClick={closeMenu}>Plataforma</a>
            <a href="#agentes" onClick={closeMenu}>Agentes</a>
            <a href="#resultados" onClick={closeMenu}>Resultados</a>
            <a href="#faq" onClick={closeMenu}>Dúvidas</a>
            <a href="#contato" className="btn btn-primary" onClick={closeMenu}>Falar com um especialista</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-wrap">
            <div className="hero-copy">
              <div className="eyebrow">Ecossistema inteligente de operação</div>
              <h1>
                A plataforma que <span>automatiza atendimento, processos e performance</span> em um só lugar
              </h1>
              <p>A Engage Max organiza a entrada de contatos, executa fluxos operacionais e gera visão gerencial, reduzindo custo e aumentando o retorno.</p>
              <div className="hero-cta">
                <a href="#contato" className="btn btn-primary">Quero entender a solução</a>
              </div>
              <div className="hero-metrics">
                <div className="metric"><strong>24/7</strong><span>operação contínua.</span></div>
                <div className="metric"><strong>60x</strong><span>mais velocidade.</span></div>
                <div className="metric"><strong>-72%</strong><span>de esforço manual.</span></div>
              </div>
            </div>
            <div className="hero-panel">
              <div className="hero-inner">
                <div className="hero-logo">
                  <img src="/symbol.png" alt="Logo Engage Max" style={{ height: '60px', width: 'auto' }} />
                </div>
                <div className="sim-boxes">
                  <div className="sim">
                    <h4>Atendimento</h4>
                    <p>Identifica intenção e encaminha em segundos.</p>
                    <div className="sim-line"><span></span></div>
                  </div>
                  <div className="sim">
                    <h4>Operação</h4>
                    <p>Agenda e pedidos na mesma estrutura.</p>
                    <div className="sim-line"><span style={{ animationDelay: '.7s' }}></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="section">
          <div className="container cards-4">
            <article className="card">
              <div className="iconbox">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Atende mais rápido</h3>
              <p>Responde sem fila e sem pausa.</p>
            </article>
            <article className="card">
              <div className="iconbox">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" /><path d="M7 12l3-3 3 2 4-5" />
                </svg>
              </div>
              <h3>Gera mais retorno</h3>
              <p>Melhora conversão e reduz perdas.</p>
            </article>
            <article className="card">
              <div className="iconbox">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" />
                </svg>
              </div>
              <h3>Executa processos</h3>
              <p>Organiza agenda, pedidos e triagem.</p>
            </article>
            <article className="card">
              <div className="iconbox">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
                </svg>
              </div>
              <h3>Visão gerencial</h3>
              <p>Indicadores e leitura de performance.</p>
            </article>
          </div>
        </section>

        {/* PLATAFORMA */}
        <section className="section" id="plataforma">
          <div className="container split">
            <div className="panel">
              <div className="eyebrow">A plataforma</div>
              <h2 className="title">Eficiência e Escala</h2>
              <p className="subtitle">Uma camada inteligente que atende, organiza e registra dados para a sua gestão.</p>
              <div className="grid" style={{ marginTop: '22px', gap: '14px' }}>
                <div className="card" style={{ padding: '18px' }}><h3>Reduz custos</h3><p>Menos perda de lead e retrabalho.</p></div>
                <div className="card" style={{ padding: '18px' }}><h3>Capacidade 24/7</h3><p>Processa múltiplos fluxos sem parar.</p></div>
              </div>
            </div>
            <div className="orbits" aria-hidden="true">
              <div className="ring r1"></div>
              <div className="ring r2"></div>
              <div className="core"><img src="/symbol.png" alt="Ícone" style={{ width: '50px' }} /></div>
              <div className="orb o1"><h4>Atendimento</h4></div>
              <div className="orb o2"><h4>Processos</h4></div>
              <div className="orb o3"><h4>Relatórios</h4></div>
              <div className="orb o4"><h4>Retorno</h4></div>
            </div>
          </div>
        </section>

        {/* AGENTES */}
        <section className="section" id="agentes">
          <div className="container">
            <div className="eyebrow">Agentes Especializados</div>
            <h2 className="title">Atuação em frentes críticas</h2>
            <div className="agent-grid" style={{ marginTop: '28px' }}>
              <article className="agent">
                <div className="agent-head"><small>Atendimento</small><h3>Jornada Inicial</h3></div>
                <div className="agent-body">
                  <ul><li>Recebe multicanal.</li><li>Entende intenção.</li><li>Coleta dados.</li></ul>
                  <div className="impact"><strong>Valor</strong><span>Velocidade imediata.</span></div>
                </div>
              </article>
              <article className="agent">
                <div className="agent-head"><small>Food</small><h3>Pedidos Fluídos</h3></div>
                <div className="agent-body">
                  <ul><li>Apresenta cardápio.</li><li>Executa upsell.</li><li>Confirma pedidos.</li></ul>
                  <div className="impact"><strong>Valor</strong><span>Maior ticket médio.</span></div>
                </div>
              </article>
              <article className="agent">
                <div className="agent-head"><small>Clínicas</small><h3>Secretaria Digital</h3></div>
                <div className="agent-body">
                  <ul><li>Agendamento.</li><li>Confirmações.</li><li>Fila de espera.</li></ul>
                  <div className="impact"><strong>Valor</strong><span>Menos faltas.</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* INDICADORES */}
        <section className="section" id="resultados">
          <div className="container">
            <div className="eyebrow">Indicadores</div>
            <h2 className="title">Números que mostram o investimento</h2>
            <div className="kpis">
              <div className="kpi"><strong>60x</strong><span>mais velocidade.</span></div>
              <div className="kpi"><strong>-72%</strong><span>esforço operacional.</span></div>
              <div className="kpi"><strong>+31%</strong><span>aproveitamento.</span></div>
              <div className="kpi"><strong>24/7</strong><span>continuidade.</span></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container faqwrap">
            <div className="grid" style={{ gap: '14px' }}>
              <details open><summary>O que é a Engage Max?<span>+</span></summary><p>Uma plataforma que automatiza processos, organiza fluxos e gera relatórios gerenciais.</p></details>
              <details><summary>Por que investir?<span>+</span></summary><p>Reduz custos, ganha velocidade e evita perda de oportunidades.</p></details>
            </div>
            <aside className="faqside">
              <img src="/symbol.png" alt="Ícone" style={{ width: '50px', marginBottom: '12px' }} />
              <h3>Conversa consultiva</h3>
              <p>Desenhamos a solução ideal para o seu negócio.</p>
            </aside>
          </div>
        </section>

        {/* CONTATO */}
        <section className="section cta" id="contato">
          <div className="container">
            <div className="cta-card">
              <img src="/logo.png" alt="Engage Max" style={{ height: '40px', marginBottom: '20px' }} />
              <h2 style={{ color: 'white' }}>Sua operação inteligente agora</h2>
              <div className="cta-actions">
                <a className="btn btn-primary" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Falar com um consultor</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-main">
        <div className="container foot">
          <div className="foot-left">
            <img src="/logo.png" alt="Engage Max" style={{ height: '24px', width: 'auto' }} />
            <p className="copy">© 2026 Engage Max.</p>
          </div>
          <div className="foot-right">
            <p className="copy">Atendimento · Processos · Relatórios</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
