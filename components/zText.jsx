"use client"

import React, { useState, useEffect } from "react"

const textos = [
  'Pogramador Back-End',
  'Ciência da Computação - UFMA',
  'Programador Front-End',
  'Trilheiro de Inovação e Tecnologia',
  'Automação Industrial - IFMA',
]

export default function TextoDinamico() {
  const [indiceTexto, setIndiceTexto] = useState(0);
  const [indiceLetra, setIndiceLetra] = useState(0);
  const [apagando, setApagando] = useState(false);
  const [textoVisivel, setTextoVisivel] = useState("");

  useEffect(() => {
    let timeout;

    if (!apagando && indiceLetra < textos[indiceTexto].length) {
      timeout = setTimeout(() => {
        setTextoVisivel(
          (prev) => prev + textos[indiceTexto].charAt(indiceLetra)
        );
        setIndiceLetra((prev) => prev + 1);
      }, 100);
    } else if (!apagando && indiceLetra === textos[indiceTexto].length) {
      timeout = setTimeout(() => {
        setApagando(true);
      }, 1500);
    } else if (apagando && indiceLetra > 0) {
      timeout = setTimeout(() => {
        setTextoVisivel((prev) => prev.slice(0, -1));
        setIndiceLetra((prev) => prev - 1);
      }, 50);
    } else if (apagando && indiceLetra === 0) {
      setApagando(false);
      setIndiceTexto((prev) => (prev + 1) % textos.length);
    }

    return () => clearTimeout(timeout);
  }, [indiceLetra, apagando, indiceTexto]);

  return (
    <>
      {textoVisivel}
      <span className="animate-pulse">|</span>
    </>
  );
}