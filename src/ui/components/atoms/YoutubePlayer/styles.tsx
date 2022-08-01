import { styled } from "@mui/system";

export const Container = styled('div')`
    height: 62%;
    width:67%;
    * {
        height: 100%;
    }
    @media only screen and (min-width : 30px) and (max-width : 600px)
    { 
        height: 47%;
        width: 28em;
    }
    @media only screen and (min-width : 601px) and (max-width : 1028px)
    { 
        height: 67%;
    }
    @media only screen and (min-width : 1029px) and (max-width : 1528px)
    { 
        height: 72%;
        width:72%;
    }
    @media only screen and (min-width : 1529px) and (max-width : 2000px)
    { 
        height: 72%;
        width:48em;
    }
`;