import React, { useEffect } from 'react';
import './Home.css';

function Home() {
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

  return (
    <div className="home-wrapper">
      <header>
        <div className="container head">
          <a href="#top" aria-label="Engage Max">
            <img src="/logo.png" alt="Engage Max" style={{ height: '56px', width: 'auto' }} />
          </a>
          <nav aria-label="principal" className="desktop-nav">
            <a href="#plataforma">Plataforma</a>
            <a href="#solucoes">Soluções</a>
            <a href="#agentes">Agentes</a>
            <a href="#resultados">Resultados</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <div className="head-actions">
            <a href="#contato" className="btn btn-primary">Falar com um especialista</a>
          </div>
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
                  </div>
                  <div className="sim">
                    <h4>Operação</h4>
                    <p>Agenda e pedidos na mesma estrutura.</p>
                  </div>
                </div>
                <div className="hero-metrics-mini">
                  <div className="metric-mini"><strong>24/7</strong><span>operação</span></div>
                  <div className="metric-mini"><strong>60x</strong><span>velocidade</span></div>
                  <div className="metric-mini"><strong>-72%</strong><span>esforço</span></div>
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
              <p className="subtitle">Uma camada inteligente que atende, organiza e registra dados.</p>
              <div className="grid" style={{ marginTop: '22px', gap: '14px' }}>
                <div className="card" style={{ padding: '18px' }}><h3>Reduz custos</h3><p>Menos perda de lead e retrabalho.</p></div>
                <div className="card" style={{ padding: '18px' }}><h3>Capacidade 24/7</h3><p>Processa múltiplos fluxos simultaneamente.</p></div>
              </div>
            </div>
            <div className="orbits" aria-hidden="true">
              <div className="ring r1"></div>
              <div className="ring r2"></div>
              <div className="ring r3"></div>
              <div className="core"><img src="/symbol.png" alt="Ícone" style={{ width: '50px' }} /></div>
              <div className="orb o1"><h4>Atendimento</h4><p>Interpreta e conduz.</p></div>
              <div className="orb o2"><h4>Processos</h4><p>Etapas com regra.</p></div>
              <div className="orb o3"><h4>Relatórios</h4><p>Visão operacional.</p></div>
              <div className="orb o4"><h4>Retorno</h4><p>Gera resultado.</p></div>
            </div>
          </div>
        </section>

        {/* SOLUCOES (RESTAURADA) */}
        <section className="section" id="solucoes">
          <div className="container">
            <div className="eyebrow">Soluções da plataforma</div>
            <h2 className="title">A Engage Max em situações reais</h2>
            <p className="subtitle">Organização de jornadas e redução de atrito para clientes e gestão.</p>
            <div className="solution-grid">
              <article className="solution">
                <div className="solution-top"><h3>Entrada inteligente</h3><div className="pill">Lead</div><div className="pill">Triagem</div></div>
                <div className="solution-body">
                  <div className="sim-ui">
                    <div className="chat">
                      <div className="bubble user">Oi, queria saber preço.</div>
                      <div className="bubble bot">Posso te ajudar. Me diga sua necessidade e já te direciono.</div>
                      <div className="bubble bot">Em 12s: triagem concluída e dados captados.</div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="solution">
                <div className="solution-top"><h3>Processos internos</h3><div className="pill">Agenda</div><div className="pill">Pedidos</div></div>
                <div className="solution-body">
                  <div className="sim-ui">
                    <div className="table-sim">
                      <div className="trow"><strong>Etapa</strong><strong>Status</strong></div>
                      <div className="trow"><span>Triagem</span><span>Automática</span></div>
                      <div className="trow"><span>Dados</span><span>Concluída</span></div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="solution">
                <div className="solution-top"><h3>Visão gerencial</h3><div className="pill">KPIs</div><div className="pill">Gestão</div></div>
                <div className="solution-body">
                  <div className="sim-ui">
                    <div className="table-sim">
                      <div className="trow"><span>Contatos</span><strong>184</strong></div>
                      <div className="trow"><span>Automação</span><strong>71%</strong></div>
                    </div>
                  </div>
                </div>
              </article>
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

        {/* IMPLANTACAO (RESTAURADA) */}
        <section className="section">
          <div className="container split">
            <div>
              <div className="eyebrow">Implantação consultiva</div>
              <h2 className="title">Aderência técnica gera resultado</h2>
              <p className="subtitle">Entendemos sua operação para estruturar o melhor fluxo.</p>
              <div className="timeline">
                <div className="step"><div className="num">01</div><h3>Diagnóstico</h3><p>Entendimento dos canais e gargalos.</p></div>
                <div className="step"><div className="num">02</div><h3>Desenho Técnico</h3><p>Configuração dos agentes e automações.</p></div>
                <div className="step"><div className="num">03</div><h3>Go-live</h3><p>Entrada assistida e ajuste fino.</p></div>
              </div>
            </div>
            <div className="panel">
              <div className="eyebrow">Por que importa</div>
              <h2 className="title">Resultado Real</h2>
              <div className="grid" style={{ marginTop: '20px', gap: '14px' }}>
                <div className="card" style={{ padding: '18px' }}><h3>Menos custo</h3><p>Redução de horas em tarefas repetitivas.</p></div>
                <div className="card" style={{ padding: '18px' }}><h3>Mais escala</h3><p>Crescimento sem caos operacional.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* INDICADORES & VIZ (RESTAURADA) */}
        <section className="section" id="resultados">
          <div className="container">
            <div className="eyebrow">Indicadores</div>
            <h2 className="title">O impacto do investimento</h2>
            <div className="kpis">
              <div className="kpi"><strong>60x</strong><span>mais velocidade.</span></div>
              <div className="kpi"><strong>-72%</strong><span>esforço operacional.</span></div>
              <div className="kpi"><strong>+31%</strong><span>aproveitamento.</span></div>
              <div className="kpi"><strong>24/7</strong><span>continuidade.</span></div>
            </div>
            <div className="dataviz">
              <article className="viz">
                <h3>Ganho operacional</h3>
                <div className="funnel">
                  <div className="row"><strong>Contato</strong><div className="bar"><span style={{ width: '100%' }}></span></div><strong>100%</strong></div>
                  <div className="row"><strong>Triado</strong><div className="bar"><span style={{ width: '92%' }}></span></div><strong>92%</strong></div>
                  <div className="row"><strong>Qualificado</strong><div className="bar"><span style={{ width: '79%' }}></span></div><strong>79%</strong></div>
                </div>
              </article>
              <article className="viz">
                <h3>Performance Live</h3>
                <div className="mini-dash">
                  <div className="dash-top"><div className="tabs"><span>Atendimento</span><span>Processos</span></div><strong style={{ color: 'var(--primary)' }}>Live</strong></div>
                  <div className="curve">
                    <svg viewBox="0 0 600 220" preserveAspectRatio="none">
                      <path d="M0,210 C60,190 95,160 140,156 C190,151 215,128 260,118 C308,106 340,96 390,90 C450,82 510,52 600,20 L600,220 L0,220 Z" fill="rgba(21,214,255,.1)"></path>
                      <path d="M0,210 C60,190 95,160 140,156 C190,151 215,128 260,118 C308,106 340,96 390,90 C450,82 510,52 600,20" fill="none" stroke="var(--primary)" strokeWidth="4"></path>
                    </svg>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container faqwrap">
            <div className="grid" style={{ gap: '14px' }}>
              <details open><summary>O que é a Engage Max?<span>+</span></summary><p>Uma plataforma que automatiza processos, organiza fluxos e gera relatórios gerenciais.</p></details>
              <details><summary>Por que investir?<span>+</span></summary><p>Reduz custos, ganha velocidade e evita perda de oportunidades comerciais.</p></details>
            </div>
            <aside className="faqside">
              <img src="/symbol.png" alt="Ícone" style={{ width: '50px', marginBottom: '12px' }} />
              <h3>Conversa consultiva</h3>
              <p>Desenhamos a solução ideal para o seu negócio.</p>
            </aside>
          </div>
        </section>

        {/* CONTATO */}
        <section className="section contact-section" id="contato">
          <div className="container">
            <div className="contact-card">
              <div className="contact-content">
                <div className="eyebrow" style={{ marginBottom: '20px' }}>Pronto para o próximo nível?</div>
                <h2>A sua operação <span>escalável e inteligente</span> começa aqui</h2>
                <p>Junte-se às empresas que já automatizaram seus processos e estão focando no que realmente importa: o crescimento.</p>
                <div className="contact-benefits">
                  <div className="benefit-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Implantação assistida</span>
                  </div>
                  <div className="benefit-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Suporte especializado</span>
                  </div>
                  <div className="benefit-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>ROI comprovado</span>
                  </div>
                </div>
                <div className="contact-actions">
                  <a className="btn btn-primary btn-lg" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Falar com um especialista agora
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="contact-visual">
                <div className="visual-circle">
                  <img src="/symbol.png" alt="Engage Max" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col brand-col">
            <img src="/logo.png" alt="Engage Max" className="footer-logo" />
            <p>Transformamos operações através de inteligência artificial e automação de processos, gerando escala e eficiência real para o seu negócio.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <nav>
              <a href="#top">Início</a>
              <a href="#plataforma">Plataforma</a>
              <a href="#solucoes">Soluções</a>
              <a href="#agentes">Agentes</a>
              <a href="#resultados">Resultados</a>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Soluções</h4>
            <nav>
              <a href="#">Entrada Inteligente</a>
              <a href="#">Processos Internos</a>
              <a href="#">Visão Gerencial</a>
              <a href="#">Secretaria Digital</a>
              <a href="#">Food & Pedidos</a>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📍 São Paulo, Brasil</p>
              <p>📧 contato@engagemax.com.br</p>
              <p>📞 (11) 99999-9999</p>
              <a href="#contato" className="btn btn-secondary btn-sm" style={{ marginTop: '16px' }}>Falar com suporte</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div className="bottom-inner">
            <p className="copy">© 2026 Engage Max. Todos os direitos reservados.</p>
            <div className="legal-links">
              <a href="#">Termos de Uso</a>
              <a href="#">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
