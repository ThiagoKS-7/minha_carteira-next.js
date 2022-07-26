import { styled } from "@mui/system";

export const GradientContainer = styled('div')`
    display:flex;
    justify-content:center;
    height:fit-content;
    margin-top: 10px;
`;

export const ButtonContainer = styled('div')`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const GradientButton = styled('button')`
    border: none;
    height: 60px;
    font-size: 40px;
    border-radius: 10px;
    margin-left: 25px;
    width: 50%;
    background: linear-gradient(90deg, #460e7f 0%, #6113af 45%, #3adef085 100%);
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    animation: gradient 10s ease infinite;
    transition: 0.6s;
    &:hover {
        background: linear-gradient(90deg, #09501a 0%, #0c9a24 55%, #9cfa3885 100%);
        animation: gradient 5s ease infinite;
        transition: 0.6s;
        padding: 0 0 0 -15px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 50px;
        height: 70px;
    }
`;

export const StyledButton = styled('button')`
    border: none;
    height: 45px;
    margin-top: 10px;
    font-size: 20px;
    padding: 10px 0 0 10px;
    text-align: start;
    border-radius: 10px;
    width: 87%;
    background: linear-gradient(90deg, #460e7f 0%, #6113af 27%, #3adef085 100%);
    background-size: 300% 300%;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    animation: gradient 10s ease infinite;
    transition: 0.6s;
    margin: 0 0 0 8% !important;
&:hover {
    background: linear-gradient(90deg, #09501a 0%, #0c9a24 55%, #9cfa3885 100%);
}
@media only screen and (min-width : 300px) and (max-width : 950px)
{
    margin: 0 0 0 57% !important;
    width: 135px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    padding: 10px 0 0 35px;
    &:hover {
        animation: gradient 5s ease infinite;
        transition: 0.6s;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 22px;
        padding: 10px 0 0 25px;
        border-radius: 10px;
        height: 44px;
        background-size: 300% 300%;
        color: white;
        background: (90deg, #09501a 0%, #0c9a24 55%, #9cfa3885 100%);//linear-gradient(90deg, rgba(100,16,189,1) 0%, rgb(150, 17, 211) 27%, rgb(240, 8, 151) 100%);
    }
}
@media only screen and (min-width : 951px) and (max-width : 9500px)
{
    margin: 0 0 0 8% !important;
    background: (90deg, #09501a 0%, #0c9a24 55%, #9cfa3885 100%);
    &:hover {
        animation: gradient 5s ease infinite;
        padding: 7px 0 0 10px;
        transition: 0.6s;
        height: 48px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 25px;
        border-radius: 10px;
        background-size: 300% 300%;
        color: white;
        background: (90deg, #09501a 0%, #0c9a24 55%, #9cfa3885 100%);//linear-gradient(90deg, rgba(100,16,189,1) 0%, rgb(150, 17, 211) 27%, rgb(240, 8, 151) 100%);
    }
}
`;
