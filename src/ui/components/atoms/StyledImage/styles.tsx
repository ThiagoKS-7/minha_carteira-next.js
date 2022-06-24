import { styled } from "@mui/system";

export const StyledImg = styled('img')`
    margin: 10px 125px 0 0;
    align-self: flex-start;
    width: 100%;
    height: 87%;
    animation: gradient 5s ease infinite;
    transition: 0.6s;
    
    @media only screen and (min-width : 1071px) and (max-width : 1190px)
    {
        animation: gradient 5s ease infinite;
        transition: 0.6s;
        height: 57%;
    }
    @media only screen and (min-width : 300px) and (max-width : 1070px)
    { 
       display: none;
       animation: gradient 5s ease infinite;
       transition: 0.6s;
    }
`;