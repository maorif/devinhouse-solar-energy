import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DefaultContainer from "../../components/DefaultContainer";
import PageTitle from "../../components/PageTitle";
import PageContentContainer from "../../components/PageContentContainer";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";

function Geracoes() {

    const [unitData, setUnitData] = useState([]);
    const [optionUnit, setOptionUnit] = useState('');
    const [date, setDate] = useState(new Date());
    const [month, setMonth] = useState(`${date.getMonth() + 1}`);
    const [year, setYear] = useState(`${date.getFullYear()}`);
    const [totalWatts, setTotalWatss] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        async function handleGetUnits() {
            const response = await fetch(`http://localhost:3333/units`);
            const data = await response.json();

            setUnitData(data);
        };

        handleGetUnits();

    }, []);

    async function handleSetUnitGeneration(event) {

        event.preventDefault();

        if (!optionUnit){ 
            setErrors({...errors, optionUnit: true});
        }
        else if (!date){
            setErrors({...errors, date: true});
        }
        else if (!totalWatts){
            setErrors({...errors, totalWatts: true});
        }

        else { 

            try {
                
                await fetch(`http://localhost:3333/generation`,
                    {
                        method: 'POST',
                        body: JSON.stringify({
                                 
                            unit: optionUnit,
                            year: year,
                            month: month,
                            generation: totalWatts
                            
                        }),
                        headers: { 'Content-Type': 'application/json' },
                    },
                )
                
                setErrors({});
                toast.success('Dados salvos com sucesso!');
                
            } catch (error) {
            
                toast.error('Falha ao salvar.')
            };
        };    
    };

    function getDate(date) {
        
        setDate(date)
        const d = new Date(date)
        setMonth(`${d.getMonth() + 1}`);
        setYear(`${d.getFullYear()}`);
    };

    return (

        <DefaultContainer>

            <PageTitle>Lançamento de Geração Mensal</PageTitle>

            <PageContentContainer>

                <Form onSubmit={handleSetUnitGeneration}>

                    <Select label={'Unidade geradora'} 
                            description='Selecione uma unidade' 
                            value={optionUnit} 
                            options={unitData}
                            onChange={(event) => setOptionUnit(event.target.value)}
                            error={errors.optionUnit}
                            errorText={'Selecione uma unidade.'}/>

                    <DatePicker
                        selected={date}
                        onChange={(date) => getDate(date)}
                        className="date-picker"
                        dateFormat="MMMM-yyyy"
                        showMonthYearPicker />

                    <Input 
                        label={'Total KW gerados'}
                        type='number'
                        value={totalWatts}
                        onChange={(event) => setTotalWatss(event.target.value)}
                        error={errors.totalWatts}
                        errorText={'Preencha este campo.'} />

                    <Button 
                        side={'left'} 
                        noMargin
                        type='submit'>Salvar</Button>

                </Form>

            </PageContentContainer>

            <Toaster />
        </DefaultContainer>
    );
};

export default Geracoes;