import axios from "axios"

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
 });

export default  api
  
//Criação da chamada do api para o axios, apos isso eu exporto para o 
//conteudo para la sim eu manipular
