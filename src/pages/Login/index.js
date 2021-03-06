//Login page

import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import LoginButton from "../../components/LoginButton";

import { Greet, LoginForm, LoginFormContainer, LoginImage, LogoForLogin } from "./styles";

import { AiOutlineMail } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';

import InputLogin from "../../components/InputLogin";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        if(!email){
            setErrorEmail('Preencha seu e-mail.');
        }
        else if(!password){
            setErrorPassword('Preencha sua senha.');
        }
        else{
            
            try {  
                await fetch(`http://localhost:3333/user?email=${email}`)

                    .then((response) => response.json())

                        .then((data) => {
                        
                            if(data[0].password != password){
                                toast.error('Senha incorreta!');
                            }
                            else{
                                toast.success('Login feito com sucesso!');
                                navigate('/dashboard');
                            };
                        });
                }
            
            catch (error) {
                toast.error('E-mail incorreto!');
            };
        };
    };
    

    return (
        <>

            <LoginImage
                src={require('../../assets/images/login-image.jpg')} alt="Solar energy image"/>

            <LoginFormContainer>

                <LogoForLogin src={require('../../assets/images/logo.png')} />
                <Greet>Seja bem vindo</Greet>
                
                <LoginForm onSubmit={handleSubmit}>

                    <InputLogin
                        icon={<AiOutlineMail size={22} color="gray" style={{marginLeft: "10px"}}/>}
                        type='email'
                        width='60%'
                        errorText={errorEmail}
                        placeholder={'E-mail'}
                        onChange={(event) => setEmail(event.target.value)}/>

                    <InputLogin
                        icon={<BiLockAlt size={22} color="gray" style={{marginLeft: "10px"}}/>}
                        type='password'
                        width='60%'
                        errorText={errorPassword}
                        placeholder={'Senha'}
                        onChange={(event) => setPassword(event.target.value)} />

                    <LoginButton>Entrar</LoginButton>

                </LoginForm>
                <Toaster />
            </LoginFormContainer>
        
        </>

    );

};

export default Login;