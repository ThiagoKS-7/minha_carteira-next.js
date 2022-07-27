import { styled } from "@mui/system";

export const StyledImg = styled('img')`
    width:100%;
    padding-bottom: 10px;
    align-self: flex-start;
    
    @media only screen and (min-width : 300px) and (max-width : 1028px)
    { 
       display: none
    }
`;