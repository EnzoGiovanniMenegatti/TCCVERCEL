// Importa o React e o hook 'useState'
import React, { useState } from 'react';
import './App.css';

// Este é o componente principal do seu site
function App() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para fechar o menu (usada ao clicar num link)
  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <div className="App">
      
      {/* --- HEADER --- */}
      <header className="header">
        <div className="container">
          <div className="logo">Bariatric Health Care</div>

          {/* Botão Hambúrguer (só aparece em mobile) */}
          <button 
            className={`menu-toggle ${menuAberto ? 'ativo' : ''}`}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navegação - ganha classe 'ativa' quando o estado 'menuAberto' é true */}
          <nav className={menuAberto ? 'ativa' : ''}>
            <ul>
              {/* Cada link agora fecha o menu ao ser clicado */}
              <li><a href="#home" onClick={fecharMenu}>Início</a></li>
              <li><a href="#problema" onClick={fecharMenu}>O Problema</a></li>
              <li><a href="#solucao" onClick={fecharMenu}>A Solução</a></li>
              <li><a href="#funcionalidades" onClick={fecharMenu}>Funcionalidades</a></li>
              <li><a href="#equipe" onClick={fecharMenu}>Equipe</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* --- SEÇÃO HERO (HOME) --- */}
        <section id="home" className="hero">
          <div className="container">
            <h1>Bariatric Health Care</h1>
            <p className="subtitle">Ferramenta Mobile para Monitoramento e Acompanhamento de Pacientes Pós-Bariátricos</p>
            <p>
              Um aplicativo focado em complementar o atendimento nutricional, visando monitorar sinais e sintomas relacionados à falta de macros e micronutrientes.
            </p>
            <a href="#funcionalidades" className="btn-primary">Conheça as Funcionalidades</a>
          </div>
        </section>

        {/* --- SEÇÃO O PROBLEMA --- */}
        <section id="problema" className="section">
          <div className="container">
            <h2>O Problema</h2>
            <p>
              A obesidade é uma das doenças que mais cresce no Brasil, com 34% da população adulta apresentando algum grau em 2024. 
              A cirurgia bariátrica é um tratamento eficaz, mas apresenta riscos de longo prazo, como deficiências nutricionais e distúrbios psicológicos.
            </p>
            <p>
              Para garantir resultados, o acompanhamento multidisciplinar é fundamental para prevenir complicações e promover uma melhor qualidade de vida.
            </p>
          </div>
        </section>

        {/* --- SEÇÃO A SOLUÇÃO --- */}
        <section id="solucao" className="section section-light">
          <div className="container">
            <h2>A Solução Proposta</h2>
            <p>
              O <strong>Bariatric Health Care</strong> é uma ferramenta mobile desenvolvida para auxiliar no acompanhamento pós-cirurgia bariátrica, melhorando a qualidade de vida de pacientes e profissionais da nutrição.
            </p>
            <p>
              Utilizando <strong>Flutter/Dart</strong> com backend em <strong>Firebase (BaaS)</strong>, o aplicativo serve como um complemento direto ao atendimento profissional.
            </p>
            <div className="tech-stack">
              <span>Flutter</span>
              <span>Dart</span>
              <span>Firebase</span>
              <span>FlutterFlow</span>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO FUNCIONALIDADES --- */}
        <section id="funcionalidades" className="section">
          <div className="container">
            <h2>Funcionalidades Principais</h2>
            <div className="features-grid">
              
              <div className="feature-card">
                <h3>Para Pacientes</h3>
                <ul>
                  <li>Visualização do plano alimentar designado</li>
                  <li>Registro de progresso (diário alimentar, peso, etc.)</li>
                  <li>Preenchimento de questionários recorrentes de sintomas</li>
                  <li>Comunicação direta com seu nutricionista</li>
                  <li>Acesso ao perfil do profissional vinculado</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <h3>Para Nutricionistas</h3>
                <ul>
                  <li>Gestão da lista de pacientes vinculados</li>
                  <li>Geração de relatórios de sintomas e nutrientes em PDF</li>
                  <li>Visualização do histórico completo dos pacientes</li>
                  <li>Recebimento de notificações (ex: primeiro login, formulários)</li>
                  <li>Canal de comunicação seguro com pacientes</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* --- SEÇÃO EQUIPE --- */}
        <section id="equipe" className="section section-light">
          <div className="container text-center">
            <h2>Equipe de Desenvolvimento</h2>
            <p>Trabalho de Final de Curso de Bacharelado em Sistemas de Informação.</p>
            <ul className="team-list">
              <li>Enzo Giovanni Menegatti</li>
              <li>Fernando Faria Hong</li>
              <li>Luiz Gustavo Rocha Gomes</li>
              <li>Matheus Mencinauski de Sousa</li>
            </ul>
            <p><strong>Orientador:</strong> Prof. Terigi Augsto Scardovelli</p>
            <p className="university">Universidade de Mogi das Cruzes</p>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} - Bariatric Health Care - TCC</p>
        </div>
      </footer>

    </div>
  );
}

export default App;