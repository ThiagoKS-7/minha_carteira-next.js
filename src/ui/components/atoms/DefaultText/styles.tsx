import { styled } from "@mui/system";

export const TitleContent = styled('h1')`
    font-size: 2.8rem;
    color: #ffff;
    margin-bottom: 1rem;
    margin-left: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: fit-content;
    @media only screen and (min-width : 300px) and (max-width : 800px)
    { 
       align-self: center;
       font-size: 3.2rem;
    }
`;

export const SubTitleContent = styled('h1')`
    font-size: 1.4rem;
    color:#ffff;
    margin-left: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: fit-content;
    @media only screen and (min-width : 598px) and (max-width : 1330px)
    {
        display: none;
    }    
`;