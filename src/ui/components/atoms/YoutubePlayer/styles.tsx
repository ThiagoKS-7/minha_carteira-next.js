import { styled } from "@mui/system";

export const Container = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    @media only screen and (min-width : 300px) and (max-width : 700px)
    { 
        width: 60em;
    }
`;
