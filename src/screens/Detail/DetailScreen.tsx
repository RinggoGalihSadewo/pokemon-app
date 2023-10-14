import React, { useEffect, useState } from "react";
import { findAll, getOne } from "../../api";
import Banner from "../../components/Banner";
import Cart from "../../components/Cart";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';

const DetailScreen = () => {
  const [data, setData] = useState<any>({});
  const [image, setImage] = useState<string>('');
  const { name } = useParams();

  useEffect(() => {
    document.title = `Detail Pokemon ${name} - POKEMON APP`;
    findOne(name);
  }, [data]);

  const findOne = (name: any) => {
    getOne(name)
      .then((res: any) => {
        setData(res.data)
        setImage(res.data.sprites.front_default)
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Banner title={name}/>
      <Wrapper className="md:flex md:items-center md:justify-center">
        <WrapperImg>
          <img src={image} title="detail" alt="detail" width={300} height={300}/>
        </WrapperImg>
        <div className="mt-7 md:ml-12 capitalize">
          <p>Name: {name}</p>
          <p>Weight: {data.weight}</p>
          <p>Height: {data.height}</p>
          <p>Ability:{' '}
          {
            data &&
            data?.abilities?.map((value: any, index: number) => (
              <span key={index}>
                {value.ability.name}
                {index < data.abilities.length - 1 && ', '}
              </span>
            ))
          }
          </p>
          <p>Types:{' '}
          {
            data &&
            data?.types?.map((value: any, index: number) => (
              <span key={index}>
                {value.type.name}
                {index < data.types.length - 1 && ', '}
              </span>
            ))
          }
          </p>
          <p>Stats:{' '}
          {
            data &&
            data?.stats?.map((value: any, index: number) => (
              <span key={index}>
                {value.stat.name}
                {index < data.stats.length - 1 && ', '}
              </span>
            ))
          }
          </p>
        </div>
      </Wrapper>
      <div className="flex justify-center items-center">
        <Link to={`/home`}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );  
};

export default DetailScreen;

const Wrapper = styled.div`
  border: 1px solid #1E5B5F;
  padding: 45px;
  border-radius: 10px;
  width: 75%;
  margin: 0 auto;
  background-color: #fff;
  margin-top: -3rem;
  position: relative;
  -webkit-box-shadow: 10px 10px 42px -7px rgba(87,87,87,1);
  -moz-box-shadow: 10px 10px 42px -7px rgba(87,87,87,1);
  box-shadow: 10px 10px 42px -7px rgba(87,87,87,1);
`;


const WrapperImg = styled.div`
  border: 1px solid #1E5B5F;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  color: black;
  border: 1px solid black;
  text-align: center;
  padding: 10px;
  margin-top: 3rem;
  border-radius: 5px;
  transition: 0.2s;
  margin-bottom: 3rem;

  &:hover {
    background-color: #051937;
    color: white;
  }
`