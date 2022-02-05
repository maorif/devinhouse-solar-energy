import styled from "styled-components";

export const MenuContainer = styled.nav`
    height: 100vh;
    width: 17vw;

    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 15px;

    @media only screen and (max-width: 600px) {
        padding: 5vw;
        margin-top: 10vw;
    };
`;
export const MenuList = styled.ul`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    gap: 15px;

    list-style: none;
    width: 65%;
`;

export const MenuListItem = styled.li`
    width: 100%;
    min-height: 50px;

    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    align-items: center;

    gap: 15px;
    border-radius: 10px;
    padding: 5px 5px 5px 10px;
    
    font-size: 100%;
    font-weight: bolder;
    background: ${(props) => props.actual ? '#4CBC9A' : '#ffff'};
    color: ${(props) => props.actual ? '#ffff' : 'gray'};
    box-shadow: 1px 1px lightgray;

    &:hover{
        cursor: pointer;
        background: #55d4b2;
        color: #ffff;
    };

    @media only screen and (max-width: 900px) {
        justify-content: center;
        font-size: 3vw;
    };
`;

export const MenuListItemText = styled.p`
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    align-content: center;

    width: 60%;

    @media only screen and (max-width: 900px) {
        display: none;
        width: 0%;
    };
`;