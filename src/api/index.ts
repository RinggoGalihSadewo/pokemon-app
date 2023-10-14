import axios from "axios";

const URL: string = "https://pokeapi.co/api/v2/pokemon";

export const findAll = async (limit: number): Promise<any> => {
  try {
    return axios({
      method: "GET",
      url: `${URL}/?limit=${limit}`,
    });
  } catch (error) {
    console.log(error);
    Promise.reject(error);
  }
};

export const getOne = async (name: string): Promise<any> => {
  try {
    return axios({
      method: "GET",
      url: `${URL}/${name}`,
    });
  } catch (error) {
    console.log(error);
    Promise.reject(error);
  }
};
