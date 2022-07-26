import { styled } from "@mui/system";

export const TitleContent = styled('h1')`
    font-size: 3.8rem;
    margin-left: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: fit-content;
    @media only screen and (min-width : 622px) and (max-width : 748px)
    { 
       align-self: center;
    }
`;

export const SubTitleContent = styled('h1')`
    font-size: 1.4rem;
    margin-left: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: fit-content;
    @media only screen and (min-width : 300px) and (max-width : 748px)
    { 
       display: none
    }    
`;