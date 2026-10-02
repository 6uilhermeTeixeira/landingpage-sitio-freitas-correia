import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  const [sent, setSent] = useState(false);

  return <>
    <header>
      <a className="brand" href="#inicio"><span>SÍTIO</span><b>FREITAS CORREIA</b></a>
      <nav><a href="#terreno">O terreno</a><a href="#tecnica">Ficha técnica</a><a className="button ghost" href="#contato">Quero conhecer</a></nav>
    </header>

    <main>
      <section className="hero" id="inicio">
        <img src="/assets/hero-aereo-ilustrativo.png" alt="Vista aérea ilustrativa de uma área rural" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Uma oportunidade para criar raízes</p>
          <h1>O campo no<br /><em>seu compasso.</em></h1>
          <div className="hero-bottom"><span>Terreno rural<br />apresentação preliminar</span><a href="#terreno">Conhecer a área <i>↓</i></a></div>
        </div>
      </section>

      <section className="intro" id="terreno">
        <p className="eyebrow">Sítio Freitas Correia</p>
        <h2>Mais espaço para<br /><em>o que importa.</em></h2>
        <div><p>Uma proposta para quem procura natureza, privacidade e liberdade para imaginar o próximo capítulo. Um terreno rural com vocação para descanso, convivência ou projeto de vida no campo.</p><p className="note">As imagens desta apresentação são conceituais e serão substituídas pelas fotos e informações oficiais do imóvel.</p></div>
      </section>

      <section className="aerial">
        <img src="/assets/vista-superior-ilustrativa.png" alt="Vista superior ilustrativa de uma área rural" />
        <div className="aerial-shade" />
        <svg className="boundary" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-label="Recorte ilustrativo do terreno">
          <path d="M220,112 L500,76 L777,160 L830,350 L690,468 L352,450 L160,326 Z" />
        </svg>
        <div className="aerial-copy"><p className="eyebrow">Vista do alto</p><h2>O lugar para<br /><em>fazer acontecer.</em></h2><span>Recorte meramente ilustrativo</span></div>
      </section>

      <section className="access">
        <div className="access-copy"><p className="eyebrow">Chegada</p><h2>O caminho também<br /><em>faz parte.</em></h2><p>O acesso e a paisagem fazem da chegada uma transição: você desacelera, respira e encontra o seu tempo.</p></div>
        <img src="/assets/acesso-ilustrativo.png" alt="Acesso rural ilustrativo entre árvores e campo" />
      </section>

      <section className="technical" id="tecnica">
        <div><p className="eyebrow">Descrição técnica</p><h2>Informação clara,<br /><em>decisão segura.</em></h2></div>
        <div className="technical-list">
          <div><span>Tipologia</span><strong>Terreno rural / sítio</strong></div>
          <div><span>Uso potencial</span><strong>Lazer, moradia ou projeto rural*</strong></div>
          <div><span>Topografia e área</span><strong>A confirmar em levantamento técnico</strong></div>
          <div><span>Acesso e infraestrutura</span><strong>A confirmar em vistoria</strong></div>
          <div><span>Documentação</span><strong>Sujeita à análise e validação</strong></div>
          <small>*O uso definitivo depende de consulta à legislação local, viabilidade e documentação do imóvel.</small>
        </div>
      </section>

      <section className="contact" id="contato">
        <div><p className="eyebrow">Próximo passo</p><h2>Vamos conversar<br /><em>sobre o sítio.</em></h2><p>Deixe seus dados para receber as informações oficiais e agendar uma visita.</p></div>
        {sent ? <div className="success"><span>✓</span><h3>Recebemos seu interesse.</h3><p>Em breve entraremos em contato.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          <label>Nome<input required placeholder="Como podemos chamar você?" /></label>
          <label>Telefone<input required type="tel" placeholder="(00) 00000-0000" /></label>
          <label>E-mail<input required type="email" placeholder="voce@exemplo.com" /></label>
          <label className="consent"><input required type="checkbox" /> Concordo em receber contato sobre este imóvel.</label>
          <button type="submit">Quero receber informações <span>→</span></button>
        </form>}
      </section>
    </main>
    <footer><a className="brand" href="#inicio"><span>SÍTIO</span><b>FREITAS CORREIA</b></a><p>Apresentação preliminar. Imagens e recorte do terreno meramente ilustrativos.</p></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
