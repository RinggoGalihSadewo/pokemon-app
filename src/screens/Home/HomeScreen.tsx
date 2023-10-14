import React, { useEffect, useState } from "react";
import { findAll, getOne } from "../../api";
import Banner from "../../components/Banner";
import Cart from "../../components/Cart";
import styled from "styled-components";

type PokemonType = {
  name: string;
  url: string;
};

const HomeScreen = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [limit, setLimit] = useState<number>(9);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    document.title = "List Pokemon - POKEMON APP";
    setIsLoading(true);
    findAll(limit)
      .then((res: any) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setIsLoading(false);
      });

      findOne();
  }, [data, limit]);

  const findOne = () => {
    data?.map((value: any) => {

      getOne(value.name)
        .then((res: any) => {
          setImages([...images, res.data.sprites.front_default])
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
  };

  return (
    <div>
      <Banner />
      <div className="md:px-52 flex md:flex-row flex-wrap md:gap-32 gap-28 justify-center items-center">
        {
        data && data.length > 0
          ? data?.map((value: any, index: any) => {
              return <Cart key={index} name={value.name} url={value.url} photo={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}/>;
            })
          : null
        }
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Button onClick={() => setLimit(limit+9)}>Show More</Button>
      </div>
    </div>
  );  
};

export default HomeScreen;

const Button = styled.button`
  color: black;
  border: 1px solid black;
  text-align: center;
  padding: 10px;
  margin-top: 0.2rem;
  border-radius: 5px;
  transition: 0.2s;
  margin-bottom: 3rem;

  &:hover {
    background-color: #051937;
    color: white;
  }
`