import React, { useState, useEffect } from "react";

import DefaultContainer from "../../components/DefaultContainer";
import PageContentContainer from "../../components/PageContentContainer";
import PageTitle from "../../components/PageTitle";

import { CardContainer, Card, CardTitle, CardData, GraphContainer, GraphTitle, CardYearContainer, CardYear } from "./styles";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';



function Dashboard() {

    const [unitsData, setUnitsData] = useState([]);
    const [activeUnits, setActiveUnits] = useState([]);
    const [inactiveUnits, setInactiveUnits] = useState([]);
    const [meanEnergy, setMeanEnergy] = useState('');
    const months = ['Jan', 'Fev', 'Mar', 'Abr', "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const [year, setYear] = useState('2021');
    const [monthlyGen, setMonthlyGen] = useState([]);

    useEffect(() => {
        async function handleGetUnits() {

            await fetch(`http://localhost:3333/units`)
                .then(response => response.json())
                .then(data => {
                    setUnitsData(data);
                    setActiveUnits(data.filter(unit => unit.active === true));
                    setInactiveUnits(data.filter(unit => unit.active === false));
                });
        };

        async function handleGetData() {
            await fetch(`http://localhost:3333/generation`)
                .then(response => response.json())
                    .then(data => {
                    
                        setMeanEnergy(data
                            .map(gen => gen['generation'])
                            .reduce((a, b) => parseFloat(a) + parseFloat(b)));

                        let totalMonthGen = [];
                        for(let i=0; i<12; i++){
                            let currentMonthGen = data
                                .filter((gen) => (gen['year'] === year && Number(gen['month']) === i+1))
                            
                            if(currentMonthGen.length > 0){
                                currentMonthGen = currentMonthGen
                                    .map(gen => gen['generation'])
                                    .reduce((a, b) => parseFloat(a) + parseFloat(b));
                                totalMonthGen = [...totalMonthGen, currentMonthGen];
                            }
                                
                            else{
                                totalMonthGen = [...totalMonthGen, 0];
                            }
                            
                        
                        };

                        setMonthlyGen(totalMonthGen);
                        
                    });
        };

        handleGetUnits();
        handleGetData();

    }, [year]);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    const options = {
        reponsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    const graphData = {
        labels: months,
        datasets: [
            {
                label: year,
                data: monthlyGen,
                borderColor: 'rgb(52, 146, 235)',
                backgroundColor: 'rgba(52, 146, 235, 0.5)',
            },
        ],
      };
    
    return (
        
        <DefaultContainer>
            <PageTitle>Dashboard</PageTitle>
            <PageContentContainer>

                
                    <CardContainer>
                        <Card><CardTitle>Unidades Totais</CardTitle><CardData>{unitsData.length}</CardData></Card>
                        <Card><CardTitle>Unidades Ativas</CardTitle><CardData>{activeUnits.length}</CardData></Card>
                        <Card><CardTitle>Unidades Inativas</CardTitle><CardData>{inactiveUnits.length}</CardData></Card>
                        <Card><CardTitle>Média de Energia</CardTitle><CardData>{`${meanEnergy} kW`}</CardData></Card>
                    </CardContainer>
                    
                    <GraphContainer>
                        <GraphTitle>Energia Total Gerada por Mês</GraphTitle>

                        <CardYearContainer>
                            <CardYear onClick={() => setYear('2020')}>2020</CardYear>
                            <CardYear onClick={() => setYear('2021')}>2021</CardYear>
                            <CardYear onClick={() => setYear('2022')}>2022</CardYear>
                        </CardYearContainer>
                        
                        <Line 
                            options={options}
                            data={graphData}
                            />
                    </GraphContainer>
                
                
            </PageContentContainer>
        </DefaultContainer>
        
    );
};

export default Dashboard;