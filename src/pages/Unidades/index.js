import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Button from "../../components/Button";
import DefaultContainer from "../../components/DefaultContainer";
import PageContentContainer from "../../components/PageContentContainer";
import PageTitle from "../../components/PageTitle";

import { EditButton, RemoveButton, Row, RowItem, Table, TableBody, TableHeader, TableHeaderItem, UnitsTitle } from "./styles";


function Unidades() {

    const [unitsData, setUnitsData] = useState([]);
    const [removedUnitID, setRemovedUnitID] = useState();

    useEffect(() => {
        async function handleGetUnits() {
            const response = await fetch(`http://localhost:3333/units`);
            const data = await response.json();

            setUnitsData(data);
        };
        
        handleGetUnits();

    }, [removedUnitID]);

    async function handleRemoveUnit(id) {

        try {

            await fetch(`http://localhost:3333/units/${id}`,
                {
                    method: 'DELETE'
                }
            ).then(
                await fetch(`http://localhost:3333/generation?unit=${id}`,
                    {
                        method: 'DELETE'
                    }
            )).then(
                setRemovedUnitID(id),
                toast.success('Unidade deletada com sucesso!')
            );

        } catch (error) {
            
            toast.error('Falha ao deletar unidade.')
        };
    };

    return (
        
        <DefaultContainer>
            <PageTitle>Unidades</PageTitle>
            <PageContentContainer>

                <UnitsTitle>Lista de Unidades</UnitsTitle>
                
                <Table>

                    <TableHeader>
                        <Row>
                            <TableHeaderItem>ID</TableHeaderItem>
                            <TableHeaderItem>Apelido</TableHeaderItem>
                            <TableHeaderItem>Local</TableHeaderItem>
                            <TableHeaderItem>Marca</TableHeaderItem>
                            <TableHeaderItem>Modelo</TableHeaderItem>
                        </Row>
                    </TableHeader>

                    <TableBody>
                        {
                            unitsData.map((unit) => (
                            <Row key={unit.id}>
                                <RowItem>{unit.id.toString().slice(-4)}</RowItem>
                                <RowItem>{unit.name}</RowItem>
                                <RowItem>{unit.location}</RowItem>
                                <RowItem>{unit.brand}</RowItem>
                                <RowItem>{unit.model}</RowItem>
                                <RowItem><Link to={`/cadastro-unidade/${unit.id}`}><EditButton>Editar</EditButton></Link></RowItem>
                                <RowItem><RemoveButton onClick={() => handleRemoveUnit(unit.id)}>Remover</RemoveButton></RowItem>
                            </Row>))
                        }
                    </TableBody>
                </Table>

                <Button side={'right'} link={'/cadastro-unidade/nova'}>Nova Unidade</Button>

            </PageContentContainer>

            <Toaster />
        </DefaultContainer>
        
    );
};

export default Unidades;