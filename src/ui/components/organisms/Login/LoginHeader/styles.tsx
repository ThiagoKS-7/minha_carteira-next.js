import { styled } from "@mui/system";

export const Container = styled('div')`
    grid-area: LH;
    background-image: linear-gradient(120deg, #000c3387 0%, #220b70 55%,  #130837 100%);
    border-right: 1px solid #000c3387;
    border-bottom: 1px solid #00233386;
    opacity: 0.8;
    z-index: 1;
    display: flex;
    justify-content: space-between;
`;
export const LoginImage = styled('img')`
    height: 100%;
    z-index: 2;
    opacity: 0.9;
    width: 100%;
    
    @media only screen and (min-width : 300px) and (max-width : 1128px)
    { 
       display: none
    }    
`;

export const LoginGif = styled('img')`
    -webkit-mask-image: url(https://assets.codepen.io/1101822/circles-mask-whole.svg);
    -webkit-mask-position: right bottom;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-image: url(https://assets.codepen.io/1101822/circles-mask-whole.svg);
    mask-position: right bottom;
    mask-repeat: no-repeat;
    mask-size: cover;
`;
