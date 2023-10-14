import React, { useEffect, useState } from "react";
import styled from "styled-components";

enum EAccount {
  USERNAME = "admin",
  PASSWORD = "admin",
}

type AccountType = {
  username: string;
  password: string;
};

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AccountType>({
    username: "admin",
    password: "admin",
  });

  useEffect(() => {
    document.title = "Login - POKEMON APP";
  }, [])

  const handleLogin = () => {
    const { username, password } = data;
    setIsLoading(true);

    if (username === EAccount.USERNAME && password === EAccount.PASSWORD){
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = '/home';
      }, 2000);
    }else{
      setTimeout(() => {
        setIsLoading(false);
        alert('Username atau Password salah!')
      }, 2000);
    }
  
  };

  return (
    <div className="flex items-center justify-center w-full h-screen p-10">
      <Container>
        <h1 className="text-[1.5rem] font-bold text-center text-black tracking-widest mb-9">
          POKEMON APP
        </h1>
        <FormInput
          type="text"
          value={data.username}
          onChange={(e) =>
            setData({
              ...data,
              username: e.target.value,
            })
          }
        />
        <FormInput
          type="password"
          value={data.password}
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />
        <Button className="p-1" onClick={handleLogin}>
          {isLoading ? "Loading . . ." : "LOGIN"}
        </Button>
      </Container>
    </div>
  );
};

export default LoginScreen;

const Container = styled.div`
  border: 1px solid #051937;
  padding: 50px 40px;
  border-radius: 7px;
  width: 400px;
  background-color: #fff;
  -webkit-box-shadow: 10px 10px 42px -7px rgba(186, 186, 186, 1);
  -moz-box-shadow: 10px 10px 42px -7px rgba(186, 186, 186, 1);
  box-shadow: 10px 10px 42px -7px rgba(186, 186, 186, 1);
`;

const FormInput = styled.input`
  border: 1px solid #051937;
  padding: 5px;
  border-radius: 6px;
  width: 100%;
  color: black;
  background-color: #fff;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  color: white;
  border: 1px solid black;
  width: 100%;
  text-align: center
  margin-top: 0.2rem;
  border-radius: 5px;
  transition: 0.2s;
  font-weight: bold;
  background-color: #051937;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;
