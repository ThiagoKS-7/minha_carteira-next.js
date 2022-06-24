import { styled } from "@mui/system";
import Image from "../../atoms/Icon/Icon";

export const StyledTitle = styled('h1')`
    font-size: 2.5rem;
    text-align: center;
    height:fit-content;
    margin: 0 0 10px 0;
    padding: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media only screen and (min-width : 3976px) and (max-width : 9975px)
{ 
    font-size: 8rem;
}
@media only screen and (min-width : 3501px) and (max-width : 3975px)
{ 
    font-size: 6rem;
}

@media only screen and (min-width : 2501px) and (max-width : 3500px)
{ 
    font-size: 4rem;
}

@media only screen and (min-width : 1901px) and (max-width : 2500px)
{ 
    font-size: 3.2rem;
}

@media only screen and (min-width : 1766px) and (max-width : 1900px)
{ 
    font-size: 2.8rem;
}

@media only screen and (min-width : 1650px) and (max-width : 1766px)
{ 
    font-size: 2.9rem;
}
`;

export const TextFieldWrapper = styled('div')`
    color: #fff9f9;
    margin: 3%;
    height:10%;
    max-height: 70px;
    padding: 10px;
    display: flex;
    font-size:2rem;
    @media only screen and (min-width : 300px) and (max-width : 625px)
    {
        height: 34px;
        color: #fff9f9;
        margin: 3%;
        height:18%;
        padding: 10px;
        display: flex;
        font-size:2rem;
    }
`;

export const Input = styled('input')`
    width: 90%;
    margin-left: 7%;
    font-size:30px;
    max-height: 65px;
    border-radius: 8px;
`;


export const BotaoSubmit = styled('button')`
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
@media only screen and (min-width : 300px) and (max-width : 625px)
{
    margin: 2% 0 0 52%!important;
    width: 166px;
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

export const Icon = styled(Image)`
    width: 50px;
    height: 50px;
`;

export const TitleContainer = styled('div')`
    display:flex;
    height: fit-content;
    display:flex;
    margin-top: 2rem;
    justify-content: center;
`;

export const BotaoContainer = styled('div')`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Text = styled('span')`
    padding: 0 0 5px 0;
`;

export const ButtonIcon = styled('img')`
    width: 35px;
    margin: 0px 0px 5px 0px;
    height: 35px;
    animation: gradient 5s ease infinite;
    transition: 0.6s;
`;

