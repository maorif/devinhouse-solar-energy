import styled from "styled-components";

export const MenuContainer = styled.nav`
    height: 100vh;
    width: 15vw;

    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 15px;

    @media only screen and (max-width: 600px) {
        margin-top: 120px;
    };
`;
export const MenuList = styled.ul`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    gap: 15px;

    list-style: none;
    width: 80%;
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
    
    font-size: 95%;
    font-weight: bolder;
    background: ${(props) => props.actual ? '#55d4b2' : '#ffff'};
    color: ${(props) => props.actual ? '#ffff' : 'gray'};
    box-shadow: ${(props) => props.actual ? '3px 3px 3px rgba(0, 0, 0, 0.18)' : 'none'};

    &:hover{
        cursor: pointer;
        background: #55d4b2;
        color: #ffff;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.18);
    };

    @media only screen and (max-width: 900px) {
        justify-content: center;
        font-size: 3vw;
    };

    @media only screen and (max-width: 600px) {
        font-size: 5vw;
        padding: 3px;
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
    };
`;