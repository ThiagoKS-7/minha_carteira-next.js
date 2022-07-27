import { styled } from "@mui/system";

/*
* Layout
* MH = MainHeader
* MA = MainAside
* MC = MainContent
*/
export const StyledContainer = styled('div')`
    display:grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 'MA MH' 'MA MC';
    height: 100vh; //viewport height
    color: white; 
`;