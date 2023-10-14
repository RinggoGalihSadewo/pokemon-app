import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type CartProps = {
    name: string,
    url: string,
    photo: string
}

const Cart = (props: CartProps) => {

  return (
    <CartContainer data-aos="slide-up">
        <Name className='capitalize'>{props.name}</Name>
        <img src={props.photo} alt='photo' title='photo' width={100} height={100} style={{borderWidth: 1, borderColor: 'black', borderRadius: 10, margin: '1rem auto' }} />
        <Link to={`/detail/${props.name}`}>
          <Button>Lihat Detail</Button>
        </Link>
    </CartContainer>
  )
}

export default Cart


const CartContainer = styled.div`
  border: 1px solid #1E5B5F;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  background-color: #fff;
  margin-top: -3rem;
  position: relative;
  -webkit-box-shadow: 10px 10px 42px -7px rgba(87,87,87,1);
  -moz-box-shadow: 10px 10px 42px -7px rgba(87,87,87,1);
  box-shadow: 10px 10px 42px -7px rgba(87,87,87,1);
`;

const Name = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`

const Button = styled.button`
  color: black;
  border: 1px solid black;
  width: 100%;
  text-align: center
  padding: 5px;
  margin-top: 0.2rem;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    background-color: #051937;
    color: white;
  }
`