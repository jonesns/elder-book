import axios from "axios";
const URL = "https://627fe5d97532b4920f69de5e.mockapi.io/";
interface CursosProps {
  id: number,
  cateroria: string,
  capa: string,
  titulo: string,
}

async function getCursos(): Promise<CursosProps>{
  const response = await axios.get(`${URL}cursos`);

  return response.data;
}

export const api = {
  getCursos,
};