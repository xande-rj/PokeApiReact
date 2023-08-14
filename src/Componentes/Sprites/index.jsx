import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from './sprites.module.css'

const PokemonSprites = (props) => {
  const [sprites, setSprites] = useState('');
  const valor = String(props.valor)

  const Gen = props.gen

  useEffect(() => {
    // Faz a requisição para a API da PokeAPI usando o Axios
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then((response) => {
        // Filtra os sprites da geração 5
        if(Gen === '1'){
          const spritesGen1 = response.data.sprites.versions["generation-i"]["red-blue"];
          setSprites(spritesGen1);
        }
        if(Gen === '2'){
          const spritesGen2 = response.data.sprites.versions["generation-ii"]["gold"];
          setSprites(spritesGen2);
        }
        if(Gen === '3'){
          const spritesGen3 = response.data.sprites.versions["generation-iii"]["ruby-sapphire"];
          setSprites(spritesGen3);
        }
        if(Gen === '4'){
          const spritesGen4 = response.data.sprites.versions["generation-iv"]["heartgold-soulsilver"];
          setSprites(spritesGen4);
        }
        if(Gen === '5'){
          const spritesGen5 = response.data.sprites.versions["generation-v"]["black-white"];
          setSprites(spritesGen5);
        }
        if(Gen === '6'){
          const spritesGen6 = response.data.sprites.versions["generation-vi"]["x-y"];
          setSprites(spritesGen6);
        }
        if(Gen === '7'){
          const spritesGen7 = response.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"];
          setSprites(spritesGen7);
        }
        if(Gen === '8'){
          const spritesGen8 = response.data.sprites.versions["generation-viii"]["icons"];
          setSprites(spritesGen8);
        }

        
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do Pokemon:", error);
      });
  }, [valor,Gen]);

  if (!sprites) {
    return <div>Carregando...</div>;
  }
  if (!sprites.back_default) {
    return<img src={sprites.front_default} alt="Sprite do pokemon na Geração 5" />
    ;
  }

  return (
    <div className={styles.sprites}>
      <h2>Sprite da Geração {props.gen} do {props.valor.toUpperCase()}</h2>
      <img className={styles.pokemons} src={sprites.front_default} alt="Sprite do Pokemon na Geração 5" />
      <img className={styles.pokemons} src={sprites.back_default} alt="Sprite de costas do Pokemon na Geração 5" />
      
    </div>
    
  );
};

export default PokemonSprites;
