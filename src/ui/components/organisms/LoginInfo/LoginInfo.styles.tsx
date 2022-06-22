import { styled } from "@mui/system";

export const InfoContainer = styled('div')`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
`;

export const LeftSideInfo = styled('div')`
    display:"flex";
    flex-direction:"column";
`;

export const StyledTitle = styled('h1')`
    font-size: 3.8rem;
    margin-left: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: fit-content;

    /* AJUSTES DE RESPONSICIDADES NAS TELAS */
    @media only screen and (min-width : 3976px) and (max-width : 9975px)
    { 
        font-size: 18rem;
    }
    @media only screen and (min-width : 3501px) and (max-width : 3975px)
    { 
        font-size: 14.5rem;
    }

    @media only screen and (min-width : 2501px) and (max-width : 3500px)
    { 
        font-size: 9rem;
    }

    @media only screen and (min-width : 1901px) and (max-width : 2500px)
    { 
        font-size: 6.5rem;
    }

    @media only screen and (min-width : 1766px) and (max-width : 1900px)
    { 
        font-size: 5.9rem;
    }

    @media only screen and (min-width : 1650px) and (max-width : 1766px)
    { 
        font-size: 5.5rem;
    }
    @media only screen and (min-width : 300px) and (max-width : 1028px)
    { 
        text-align:center;
    }
`;

export const StyledSubTitle = styled('h1')`
    font-size: 1.4rem;
    margin-left: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: fit-content;

    /* AJUSTES DE RESPONSICIDADES NAS TELAS */
    @media only screen and (min-width : 3976px) and (max-width : 9975px)
    { 
        font-size: 5rem;
    }
    @media only screen and (min-width : 3501px) and (max-width : 3975px)
    { 
        font-size: 4rem;
    }

    @media only screen and (min-width : 2501px) and (max-width : 3500px)
    { 
        font-size: 2.5rem;
    }

    @media only screen and (min-width : 1901px) and (max-width : 2500px)
    { 
        font-size: 2rem;
    }

    @media only screen and (min-width : 1766px) and (max-width : 1900px)
    { 
        font-size: 1.8rem;
    }

    @media only screen and (min-width : 1650px) and (max-width : 1766px)
    { 
        font-size: 1.6rem;
    }
    @media only screen and (min-width : 300px) and (max-width : 1028px)
    { 
        text-align:center;
    }
`;

export const VideoContainer = styled('div')`    
 margin-top:"25px";
 margin-left: "2rem";
 width:"87%";
 background:linear-gradient(90deg, #4787e7 0%, #2b0a8f 40%, #0e0d38 50%);
 align-items:"center";
 justify-content:"center";
`;  

export const YoutubeWrapper = styled('div')`
    width:"100%";
    height:"100%";
    padding:"5px";
`;