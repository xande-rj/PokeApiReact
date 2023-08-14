import React, { useState } from "react";
import axios from "axios";
import PokemonSprites from "../Sprites";
import styles from "./formulario.module.css"

const Formulario = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonGen, setPokemonGen] = useState('1');
  const [pokemonData, setPokemonData] = useState(null);

  const ProcuraPokemon = (event) => {
    event.preventDefault();
    // Faz a requisição para a API da PokeAPI usando o Axios
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        // Extrai os dados do response e armazena no state
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do Pokemon:", error);
        setPokemonData(null); // Limpa os dados se houver erro na busca
      });

      
  };

  const mudancaGen = (event) => {
    const selectedValue = event.target.value;
    setPokemonGen(selectedValue);
  };

  return (
    <div>
      {pokemonData && (
        <div className={styles.pokemon}>
          <h2>{ pokemonData.name.toUpperCase()}</h2>
          <p>Altura: {pokemonData.height} decimetres</p>
          <p>Peso: {pokemonData.weight} hectograms</p>
          <PokemonSprites valor={pokemonData.name} gen={pokemonGen}/>
          <h2 className={styles.types}>Tipos :</h2>
          <ul>
            {pokemonData.types.map((type)=>(
              <li className={styles.type} key={type.slot}>{type.type.name}</li>
            ))}
          </ul>
          <h3>Habilidades :</h3>
          <ul>
              {pokemonData.abilities.map((ability)=>(
                <li key={ability.slot}>{ability.ability.name}</li>
              ))}
          </ul>
          {/* Mostrar outros dados do Pokémon conforme necessário */}
        </div>
      )}

      <form onSubmit={ProcuraPokemon} className={styles.formulario}>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Digite o nome do Pokémon"
        />
        <select value={pokemonGen} onChange={mudancaGen}>
          <option value='1'>I</option>
          <option value="2">II</option>
          <option value="3">III</option>
          <option value="4">IV</option>
          <option value="5">V</option>
          <option value="6">VI</option>
          <option value="7">VII</option>
          <option value="8">VIII</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Formulario;
