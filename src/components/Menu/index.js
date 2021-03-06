//Menu component

import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import { Link, useLocation } from "react-router-dom";
import { MenuContainer, MenuList, MenuListItem, MenuListItemText } from "./styles";

import { VscGraphLine } from "react-icons/vsc";
import { FaSolarPanel } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";


function Menu() {

    const location = useLocation();
    const [dashboardColor, setDashboardColor] = useState();
    const [unitsColor, setUnitsColor] = useState();
    const [generationColor, setGenerationColor] = useState();

    useEffect(() => {

        if(location.pathname === '/dashboard'){
            setDashboardColor(true);
            setUnitsColor(false);
            setGenerationColor(false);
        }
        if(location.pathname === '/unidades'){
            setDashboardColor(false);
            setUnitsColor(true);
            setGenerationColor(false);
        }
        if(location.pathname === '/geracoes'){
            setDashboardColor(false);
            setUnitsColor(false);
            setGenerationColor(true);
        }

    }, [location.pathname]);

    return (
        <MenuContainer>
            <Link to={'/dashboard'} ><Logo width={'50%'}/></Link>
            <MenuList>

                <Link to='/dashboard' style={{textDecoration:'none'}}>
                    <MenuListItem actual={dashboardColor}>
                        <FaChartPie size={22}/>
                        <MenuListItemText>Dashboard</MenuListItemText>
                    </MenuListItem>
                </Link>

                <Link to='/unidades' style={{textDecoration:'none'}}>
                    <MenuListItem actual={unitsColor}>
                        <FaSolarPanel size={22}/>
                        <MenuListItemText>Unidades</MenuListItemText>
                    </MenuListItem>
                </Link>
                <Link to='/geracoes' style={{textDecoration:'none'}}>
                    <MenuListItem actual={generationColor }>
                        <RiSettings5Fill size={22} />
                        <MenuListItemText>Cadastro de Energia Gerada</MenuListItemText>
                    </MenuListItem>
                </Link>
            </MenuList>
        </MenuContainer>
    );    
};

export default Menu;