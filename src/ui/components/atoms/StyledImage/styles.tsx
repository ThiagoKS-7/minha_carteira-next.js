import { styled } from "@mui/system";

export const StyledImg = styled('img')`
    margin: 10px 30px 0 0;
    align-self: flex-start;
    width:95%;
    height: 80%;
    
    @media only screen and (min-width : 300px) and (max-width : 1028px)
    { 
       display: none
    }
`;