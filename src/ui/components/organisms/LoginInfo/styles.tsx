import { styled } from "@mui/system";

export const InfoContainer = styled('div')`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
`;

export const LeftSideInfo = styled('div')`
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 92%;
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
 background:linear-gradient(90deg, #460e7f 0%, #6113af 27%, #3adef085 100%);
 align-items:"center";
 justify-content:"center";
`;  

export const YoutubeWrapper = styled('div')`
    width:"100%";
    height:"100%";
    padding:"5px";
`;


export const BotaoContainer = styled('div')`
    margin-top: 2rem;
    height: fit-content;
`;

export const BotaoRegister = styled('button')`
    border: none;
    height: 50px;
    margin: 0 0 0 2rem !important;
    font-size: 30px;
    border-radius: 10px;
    width: 87%;
    background: linear-gradient(90deg, #460e7f 0%, #6113af 45%, #3adef085 100%);
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    animation: gradient 10s ease infinite;
    transition: 0.6s;
    &:hover {
        background: linear-gradient(90deg, #09501a 0%, #0c9a24 55%, #9cfa3885 100%);
        animation: gradient 5s ease infinite;
        transition: 0.6s;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 35px;
        height: 60px;
    }
`;