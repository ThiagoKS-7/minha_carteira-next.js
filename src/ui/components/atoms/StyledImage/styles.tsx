import { styled } from "@mui/system";

export const StyledImg = styled('img')`
    margin: 10px 125px 0 0;
    align-self: flex-start;
    width: 100%;
    height: 87%;
    animation: gradient 5s ease infinite;
    transition: 0.6s;
    -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDEwMjQgNjAwIj48ZGVmcy8+PHBhdGggZD0iTTEwMjQgNTA0LjE1Mkw0MjYuMjg3IDM4OS4zMzFDMjg2LjcyMSAzNjIuNTIgMTk1LjE3OCAyMjcuNDQzIDIyMS45ODggODcuODc3TDIzOC44NyAwSDEwMjR2NTA0LjE1MnoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNMTAyNCA1OTAuOTMyTDM4NS45ODcgMzk2LjQ5OUMyNTAuMDQyIDM1NS4wNyAxNzMuMzA2IDIxMS4wNjQgMjE0LjczNSA3NS4xMThMMjM3LjYyOCAwSDEwMjR2NTkwLjkzMnoiLz48L3N2Zz4=);
    -webkit-mask-position: right bottom;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDEwMjQgNjAwIj48ZGVmcy8+PHBhdGggZD0iTTEwMjQgNTA0LjE1Mkw0MjYuMjg3IDM4OS4zMzFDMjg2LjcyMSAzNjIuNTIgMTk1LjE3OCAyMjcuNDQzIDIyMS45ODggODcuODc3TDIzOC44NyAwSDEwMjR2NTA0LjE1MnoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNMTAyNCA1OTAuOTMyTDM4NS45ODcgMzk2LjQ5OUMyNTAuMDQyIDM1NS4wNyAxNzMuMzA2IDIxMS4wNjQgMjE0LjczNSA3NS4xMThMMjM3LjYyOCAwSDEwMjR2NTkwLjkzMnoiLz48L3N2Zz4=);
    mask-position: right bottom;
    mask-repeat: no-repeat;
    mask-size: cover;
    
    @media only screen and (min-width : 1071px) and (max-width : 1190px)
    {
        animation: gradient 5s ease infinite;
        transition: 0.6s;
        height: 57%;
        -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDEwMjQgNjAwIj48ZGVmcy8+PHBhdGggZD0iTTEwMjQgNTA0LjE1Mkw0MjYuMjg3IDM4OS4zMzFDMjg2LjcyMSAzNjIuNTIgMTk1LjE3OCAyMjcuNDQzIDIyMS45ODggODcuODc3TDIzOC44NyAwSDEwMjR2NTA0LjE1MnoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNMTAyNCA1OTAuOTMyTDM4NS45ODcgMzk2LjQ5OUMyNTAuMDQyIDM1NS4wNyAxNzMuMzA2IDIxMS4wNjQgMjE0LjczNSA3NS4xMThMMjM3LjYyOCAwSDEwMjR2NTkwLjkzMnoiLz48L3N2Zz4=);
        -webkit-mask-position: right bottom;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: cover;
        mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDEwMjQgNjAwIj48ZGVmcy8+PHBhdGggZD0iTTEwMjQgNTA0LjE1Mkw0MjYuMjg3IDM4OS4zMzFDMjg2LjcyMSAzNjIuNTIgMTk1LjE3OCAyMjcuNDQzIDIyMS45ODggODcuODc3TDIzOC44NyAwSDEwMjR2NTA0LjE1MnoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNMTAyNCA1OTAuOTMyTDM4NS45ODcgMzk2LjQ5OUMyNTAuMDQyIDM1NS4wNyAxNzMuMzA2IDIxMS4wNjQgMjE0LjczNSA3NS4xMThMMjM3LjYyOCAwSDEwMjR2NTkwLjkzMnoiLz48L3N2Zz4=);
        mask-position: right bottom;
        mask-repeat: no-repeat;
        mask-size: cover;
    }
    @media only screen and (min-width : 900px) and (max-width : 1070px)
    { 
       animation: gradient 5s ease infinite;
       transition: 0.6s;
       height: 50%;
       -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDEwMjQgNjAwIj48ZGVmcy8+PHBhdGggZD0iTTEwMjQgNTA0LjE1Mkw0MjYuMjg3IDM4OS4zMzFDMjg2LjcyMSAzNjIuNTIgMTk1LjE3OCAyMjcuNDQzIDIyMS45ODggODcuODc3TDIzOC44NyAwSDEwMjR2NTA0LjE1MnoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNMTAyNCA1OTAuOTMyTDM4NS45ODcgMzk2LjQ5OUMyNTAuMDQyIDM1NS4wNyAxNzMuMzA2IDIxMS4wNjQgMjE0LjczNSA3NS4xMThMMjM3LjYyOCAwSDEwMjR2NTkwLjkzMnoiLz48L3N2Zz4=);
       -webkit-mask-position: right bottom;
       -webkit-mask-repeat: no-repeat;
       -webkit-mask-size: cover;
       mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDEwMjQgNjAwIj48ZGVmcy8+PHBhdGggZD0iTTEwMjQgNTA0LjE1Mkw0MjYuMjg3IDM4OS4zMzFDMjg2LjcyMSAzNjIuNTIgMTk1LjE3OCAyMjcuNDQzIDIyMS45ODggODcuODc3TDIzOC44NyAwSDEwMjR2NTA0LjE1MnoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNMTAyNCA1OTAuOTMyTDM4NS45ODcgMzk2LjQ5OUMyNTAuMDQyIDM1NS4wNyAxNzMuMzA2IDIxMS4wNjQgMjE0LjczNSA3NS4xMThMMjM3LjYyOCAwSDEwMjR2NTkwLjkzMnoiLz48L3N2Zz4=);
       mask-position: right bottom;
       mask-repeat: no-repeat;
       mask-size: cover;
       opacity: 0.3;
    }
    @media only screen and (min-width : 50px) and (max-width : 899px)
    { 
       animation: gradient 5s ease infinite;
       transition: 0.6s;
       display: none;
       
       
    }
`;