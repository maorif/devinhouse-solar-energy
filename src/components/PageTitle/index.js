import React from "react";
import { Title, TitleContainer } from "./styles";

function PageTitle({children}) {

    return (

        <TitleContainer>
            <Title>{children}</Title>
        </TitleContainer>

    );
};

export default PageTitle;