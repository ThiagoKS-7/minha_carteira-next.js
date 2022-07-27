import { styled } from "@mui/system";

export const LoginContainer = styled('div')`
    grid-area: LC;
    display: flex;
    justify-content: space-around;
    height: 85%;
    @media only screen and (min-width : 30px) and (max-width : 1028px)
    { 
        display: flex;
        justify-content: center;
        width: 100%;
    }
`;

export const VideoWrapper = styled('div')`
    height: 100%;
    width: 90%;
`;

export const LoginWrapper = styled('div')`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PairWrapper = styled('div')`
    display: flex;
    justify-content: space-around;
`;

export const ImageWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
`;

export const StyledImage = styled('img')`
    width: 100%;
    height: 100%;
    margin-top: 2em;
    margin-right: 5em;
    -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDEwMjQgNjAwIj48ZGVmcy8+PHBhdGggZD0iTTEwMjQgNTA0LjE1Mkw0MjYuMjg3IDM4OS4zMzFDMjg2LjcyMSAzNjIuNTIgMTk1LjE3OCAyMjcuNDQzIDIyMS45ODggODcuODc3TDIzOC44NyAwSDEwMjR2NTA0LjE1MnoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNMTAyNCA1OTAuOTMyTDM4NS45ODcgMzk2LjQ5OUMyNTAuMDQyIDM1NS4wNyAxNzMuMzA2IDIxMS4wNjQgMjE0LjczNSA3NS4xMThMMjM3LjYyOCAwSDEwMjR2NTkwLjkzMnoiLz48L3N2Zz4=);
    -webkit-mask-position: right bottom;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDEwMjQgNjAwIj48ZGVmcy8+PHBhdGggZD0iTTEwMjQgNTA0LjE1Mkw0MjYuMjg3IDM4OS4zMzFDMjg2LjcyMSAzNjIuNTIgMTk1LjE3OCAyMjcuNDQzIDIyMS45ODggODcuODc3TDIzOC44NyAwSDEwMjR2NTA0LjE1MnoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNMTAyNCA1OTAuOTMyTDM4NS45ODcgMzk2LjQ5OUMyNTAuMDQyIDM1NS4wNyAxNzMuMzA2IDIxMS4wNjQgMjE0LjczNSA3NS4xMThMMjM3LjYyOCAwSDEwMjR2NTkwLjkzMnoiLz48L3N2Zz4=);
    mask-position: right bottom;
    mask-repeat: no-repeat;
    mask-size: cover;
    @media only screen and (min-width : 30px) and (max-width : 1028px)
    { 
       display: none;
    }
`;