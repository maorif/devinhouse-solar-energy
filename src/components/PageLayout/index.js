import React from "react";

import PageTitle from "../PageTitle";
import Menu from "../Menu";
import DefaultContainer from "../DefaultContainer";

function PageLayout({title, children}) {

    return (
        <>
            <Menu />
            <DefaultContainer>
                <PageTitle>{title}</PageTitle>
                {children}
            </DefaultContainer>
        </>
    );
};

export default PageLayout;