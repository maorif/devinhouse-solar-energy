import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';

import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import DefaultContainer from "../../components/DefaultContainer";
import Form from "../../components/Form";
import Input from "../../components/Input";
import PageContentContainer from "../../components/PageContentContainer";
import PageTitle from "../../components/PageTitle";

import { NewUnitTitle } from "./styles";



function CadastroUnidade() {
    
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [active, setActive] = useState(false);

    const [errors, setErrors] = useState({});

    const errorText = 'Preencha este campo.';

    useEffect(() => {
        
        try{
            if(params.id !== 'nova'){

                async function handleGetUnit() {

                    const response = await fetch(`http://localhost:3333/units/${params.id}`);
                    const data = await response.json();

                    setName(data.name);
                    setLocation(data.location);
                    setBrand(data.brand);
                    setModel(data.model);
                    setActive(data.active);
                };

                handleGetUnit();
            };
        }

        catch {
            toast.error('Falha ao carregar dados da unidade.')
        }

    }, [params.id]);

    async function handleNewUnit(event) {

        event.preventDefault();

        if (!name){ 
            setErrors({...errors, name: true});
        }
        else if (!location){
            setErrors({...errors, location: true});
        }
        else if (!brand){
            setErrors({...errors, brand: true});
        }
        else if (!model){
            setErrors({...errors, model: true});
        }

        else {

            try {

                await fetch(`http://localhost:3333/units/`,
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            id: crypto.randomUUID(),
                            name: name,
                            location: location,
                            brand: brand,
                            model: model,
                            active: active
                        }),
                        headers: {'Content-Type': 'application/json' },
                    },
                )
                
                setErrors({});
                toast.success('Nova uniade cadastrada com sucesso!');
                setTimeout(() => {
                    navigate('/unidades');
                }, 2500);

            } catch {

                toast.error('Falha ao cadastrar nova unidade.')
            };
        };
    };
    
    async function handleEditUnit(event) {

        event.preventDefault();

        if (!name){ 
            setErrors({...errors, name: true});
        }
        else if (!location){
            setErrors({...errors, location: true});
        }
        else if (!brand){
            setErrors({...errors, brand: true});
        }
        else if (!model){
            setErrors({...errors, model: true});
        }

        else { 

            try {
                
                await fetch(`http://localhost:3333/units/${params.id}`,
                    {
                        method: 'PATCH',
                        body: JSON.stringify({
                            name: name,
                            location: location,
                            brand: brand,
                            model: model,
                            active: active
                        }),
                        headers: { 'Content-Type': 'application/json' },
                    },
                )
                
                setErrors({});
                toast.success('Dados salvos com sucesso!');
                setTimeout(() => {
                    navigate('/unidades');
                }, 2500); 
                
            } catch {
            
                toast.error('Falha ao salvar.')
            };
        };    
    };
    
    return (

        <DefaultContainer>

            <PageTitle>Unidades</PageTitle>

            <PageContentContainer>

                <NewUnitTitle>Cadastro de Unidade Geradora</NewUnitTitle>
                <Form onSubmit={params.id === 'nova' ? handleNewUnit : handleEditUnit}>

                    <Input 
                        label={'Apelido'} 
                        value={name} 
                        onChange={(event) => setName(event.target.value)}
                        error={errors.name}
                        errorText={errorText} />

                    <Input 
                        label={'Local'} 
                        value={location} 
                        onChange={(event) => setLocation(event.target.value)}
                        error={errors.location}
                        errorText={errorText} />
                    

                    <Input 
                        label={'Marca'} 
                        value={brand} 
                        onChange={(event) => setBrand(event.target.value)}
                        error={errors.brand}
                        errorText={errorText} />

                    <Input 
                        label={'Modelo'} 
                        value={model} 
                        onChange={(event) => setModel(event.target.value)}
                        error={errors.model}
                        errorText={errorText} />

                    <Checkbox 
                        label={'Ativa'} 
                        checked={active} 
                        onChange={(event) => setActive(event.target.checked)} />

                    <Button side={'left'} noMargin type='submit'>Salvar</Button>

                </Form>

            </PageContentContainer>

            <Toaster />
        </DefaultContainer>
    );
};

export default CadastroUnidade;