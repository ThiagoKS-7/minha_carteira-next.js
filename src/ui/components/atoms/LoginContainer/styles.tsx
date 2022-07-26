import { styled } from "@mui/system";

/*
* Layout
* LC = LoginContent
* LA = LoginAside
* Lh = LoginHeader
*/
export const StyledContainer = styled('div')`
    display:grid;
    padding-bottom: 40px;
    grid-template-columns: auto 350px;
    grid-template-rows: 200px auto;
    grid-template-areas: 'LH LA' 'LC LA';
    height: 100vh; //viewport height
    color: white; 
`;