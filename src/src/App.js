
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <div className="app-wrapper text-white">
      <header className="text-center py-5 bg-dark bg-opacity-75">
        <h1 className="display-4 fw-bold">JRD – JAPENSE RACCON DOG</h1>
        <p className="lead">From prompts to viral dramas — powered by AI, fueled by your imagination.</p>
      </header>

      <Roadmap />

      <main className="container py-5">
        <section className="mb-5 text-center">
          <h2>¿Qué es JRD?</h2>
          <p>
            JRD no es solo otra memecoin — es la puerta a una IA creativa que genera series de drama adictivas
            a partir de tus ideas, imágenes o links.
          </p>
        </section>

        <section className="mb-5 text-center">
          <h2>¿Cómo funciona?</h2>
          <p>
            Usá tus tokens JRD para desbloquear un bot de video que genera hasta 3 episodios por hora.
            Ideal para contenido viral en TikTok, Facebook, o donde esté tu audiencia.
          </p>
        </section>

        <section className="mb-5 text-center">
          <h2>Monetizá tu creatividad</h2>
          <p>
            Sin esperas ni intermediarios. Creá, subí, monetizá. Convertí ideas en vistas, y vistas en cripto.
          </p>
        </section>

        <section className="text-center">
          <h4 className="fw-bold">Powered by JRD. Backed by hype. Fueled by creativity.</h4>
        </section>
      </main>

      <footer className="text-center py-4 bg-dark bg-opacity-75 mt-auto">
        <small>© 2025 JRD Memecoin. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default App;
