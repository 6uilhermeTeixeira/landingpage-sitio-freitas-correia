import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  const [sent, setSent] = useState(false);

  return <>
    <header>
      <a className="brand" href="#inicio"><span>TERRENO</span><b>FREITAS CORREIA</b></a>
      <nav><a href="#terreno">O terreno</a><a href="#tecnica">Ficha técnica</a><a className="button ghost" href="#contato">Quero conhecer</a></nav>
    </header>

    <main>
      <section className="hero" id="inicio">
        <img src="/assets/property/terreno-panorama.jpeg" alt="Vista do terreno residencial em Cotia" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Cotia · São Paulo</p>
          <h1>Espaço para<br /><em>o próximo projeto.</em></h1>
          <div className="hero-bottom"><span>30.700 m² de área total<br />200 m de testada</span><a href="#terreno">Conhecer a área <i>↓</i></a></div>
        </div>
      </section>

      <section className="intro" id="terreno">
        <p className="eyebrow">Jardim Colibri · Cotia</p>
        <h2>Uma área ampla,<br /><em>pronta para avançar.</em></h2>
        <div><p>Terreno residencial com área integralmente aproveitável, infraestrutura próxima e atributos naturais que fazem do endereço uma oportunidade para incorporação, condomínio ou projeto exclusivo.</p><p className="note">As fotos desta seção são do imóvel. A vista superior e seu recorte continuam meramente ilustrativos até a validação de levantamento técnico.</p></div>
      </section>

      <section className="aerial">
        <img src="/assets/vista-superior-ilustrativa.png" alt="Vista superior ilustrativa de uma área rural" />
        <div className="aerial-shade" />
        <svg className="boundary" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-label="Recorte ilustrativo do terreno">
          <path d="M220,112 L500,76 L777,160 L830,350 L690,468 L352,450 L160,326 Z" />
        </svg>
        <div className="aerial-copy"><p className="eyebrow">Vista do alto</p><h2>Escala para<br /><em>fazer acontecer.</em></h2><span>Recorte meramente ilustrativo</span></div>
      </section>

      <section className="access">
        <div className="access-copy"><p className="eyebrow">Localização</p><h2>Conectado à cidade.<br /><em>Próximo à natureza.</em></h2><p>Via das Magnólias, 1520, Jardim Colibri. Um endereço tranquilo em Cotia, com acesso asfaltado e o cenário valorizado da região de Granja Viana.</p></div>
        <img src="/assets/property/acesso.jpeg" alt="Acesso ao terreno pela Via das Magnólias" />
      </section>

      <section className="technical" id="tecnica">
        <div><p className="eyebrow">Descrição técnica</p><h2>Informação clara,<br /><em>decisão segura.</em></h2></div>
        <div className="technical-list">
          <div><span>Área e testada</span><strong>30.700 m² · 200 m de frente</strong></div>
          <div><span>Endereço</span><strong>Via das Magnólias, 1520 · Cotia/SP</strong></div>
          <div><span>Infraestrutura</span><strong>Asfalto, água, esgoto e energia elétrica</strong></div>
          <div><span>Atributos</span><strong>Terreno limpo, rio nos fundos e casa de apoio</strong></div>
          <div><span>Potencial indicado</span><strong>Até 33 lotes de 500 m²*</strong></div>
          <small>*Informações baseadas no dossiê técnico disponibilizado. Potencial, viabilidade e qualquer desdobro dependem de análise legal, urbanística e documental.</small>
        </div>
      </section>

      <section className="contact" id="contato">
        <div><p className="eyebrow">Próximo passo</p><h2>Vamos conversar<br /><em>sobre a área.</em></h2><p>Deixe seus dados para receber a apresentação técnica completa e agendar uma visita.</p></div>
        {sent ? <div className="success"><span>✓</span><h3>Recebemos seu interesse.</h3><p>Em breve entraremos em contato.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          <label>Nome<input required placeholder="Como podemos chamar você?" /></label>
          <label>Telefone<input required type="tel" placeholder="(00) 00000-0000" /></label>
          <label>E-mail<input required type="email" placeholder="voce@exemplo.com" /></label>
          <label className="consent"><input required type="checkbox" /> Concordo em receber contato sobre este imóvel.</label>
          <button type="submit">Quero receber informações <span>→</span></button>
        </form>}
      </section>
    </main>
    <footer><a className="brand" href="#inicio"><span>TERRENO</span><b>FREITAS CORREIA</b></a><p>Fotos do imóvel. Vista aérea e recorte do terreno meramente ilustrativos.</p></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
