import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<body>

    <header>
        <div class="container">
            <div class="logo">Bariatric Health Care</div>
            <nav>
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#problema">O Problema</a></li>
                    <li><a href="#solucao">A Solução</a></li>
                    <li><a href="#funcionalidades">Funcionalidades</a></li>
                    <li><a href="#equipe">Equipe</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="container">
                <h1>Bariatric Health Care</h1>
                [cite_start]<p class="subtitle">Ferramenta Mobile para Monitoramento e Acompanhamento de Pacientes Pós-Bariátricos [cite: 7]</p>
                [cite_start]<p>Um aplicativo focado em complementar o atendimento nutricional e monitorar sinais e sintomas de deficiências nutricionais no pós-operatório. [cite: 21, 27]</p>
                <a href="#funcionalidades" class="btn">Conheça as Funcionalidades</a>
            </div>
        </section>

        <section id="problema">
            <div class="container">
                <h2>O Problema</h2>
                [cite_start]<p>A obesidade é uma das doenças que mais cresce no Brasil, com 34% da população adulta apresentando algum grau em 2024[cite: 54, 55]. [cite_start]A cirurgia bariátrica é um tratamento eficaz [cite: 60][cite_start], mas apresenta riscos de longo prazo, como deficiências nutricionais e distúrbios psicológicos[cite: 61].</p>
                [cite_start]<p>Para garantir resultados, o acompanhamento multidisciplinar é fundamental para prevenir complicações e promover uma melhor qualidade de vida. [cite: 62, 63]</p>
            </div>
        </section>

        <section id="solucao">
            <div class="container">
                <h2>A Solução Proposta</h2>
                [cite_start]<p>O <strong>Bariatric Health Care</strong> é uma ferramenta mobile desenvolvida com o objetivo de auxiliar no acompanhamento pós-cirurgia bariátrica, melhorando a qualidade de vida de pacientes e profissionais da nutrição. [cite: 66, 76]</p>
                [cite_start]<p>Utilizando <strong>Flutter/Dart</strong> com backend em <strong>Firebase</strong> [cite: 20, 26][cite_start], o aplicativo visa monitorar sinais e sintomas relacionados à falta de macros e micronutrientes[cite: 21], servindo como um complemento direto ao atendimento profissional.</p>
                
                <div class="tech-logos">
                    <div class="tech-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Flutter-logo.svg/768px-Flutter-logo.svg.png" alt="Flutter"/>
                        <span>Flutter</span>
                    </div>
                    <div class="tech-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1024px-Firebase_Logo.svg.png" alt="Firebase"/>
                        <span>Firebase</span>
                    </div>
                    <div class="tech-logo">
                        <img src="https://seeklogo.com/images/D/dart-logo-FDA1A5C61D-seeklogo.com.png" alt="Dart"/>
                        <span>Dart</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="funcionalidades">
            <div class="container">
                <h2>Funcionalidades Principais</h2>
                <div class="features-grid">
                    
                    <div class="feature-column">
                        <h3>Para o Paciente</h3>
                        <ul>
                            [cite_start]<li>Visualização de plano alimentar designado pelo nutricionista. [cite: 108]</li>
                            [cite_start]<li>Registro de progresso (diário alimentar, peso, etc.). [cite: 109]</li>
                            [cite_start]<li>Preenchimento de questionários recorrentes de sintomas. [cite: 22, 28]</li>
                            [cite_start]<li>Comunicação direta com o profissional vinculado. [cite: 110]</li>
                            [cite_start]<li>Acesso ao perfil e informações do seu nutricionista. [cite: 111]</li>
                        </ul>
                    </div>

                    <div class="feature-column">
                        <h3>Para o Nutricionista</h3>
                        <ul>
                            [cite_start]<li>Gestão da lista de pacientes vinculados. [cite: 99]</li>
                            [cite_start]<li>Geração de relatórios de sintomas e nutrientes em PDF. [cite: 22]</li>
                            [cite_start]<li>Visualização do histórico completo e perfil dos pacientes. [cite: 100]</li>
                            [cite_start]<li>Recebimento de notificações (ex: primeiro login, formulários preenchidos). [cite: 103]</li>
                            [cite_start]<li>Canal de comunicação seguro com seus pacientes. [cite: 104]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="equipe">
            <div class="container">
                <h2>Equipe de Desenvolvimento</h2>
                [cite_start]<p>Trabalho desenvolvido para finalização do curso de Bacharelado em Sistemas de Informação da Universidade de Mogi das Cruzes. [cite: 1, 2, 15]</p>
                <ul class="team-list">
                    [cite_start]<li>Matheus Mencinauski de Sousa [cite: 3]</li>
                    [cite_start]<li>Luiz Gustavo Rocha Gomes [cite: 4]</li>
                    [cite_start]<li>Enzo Giovanni Menegatti [cite: 5]</li>
                    [cite_start]<li>Fernando Faria Hong [cite: 6]</li>
                </ul>
                [cite_start]<p><strong>Orientador:</strong> Prof. Terigi Augsto Scardovelli [cite: 15]</p>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 - Bariatric Health Care | [cite_start]Universidade de Mogi das Cruzes [cite: 1, 9]</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
  )
}

export default App
