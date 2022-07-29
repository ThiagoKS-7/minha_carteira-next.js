import { styled } from "@mui/system";

export const GradientContainer = styled('div')`
    display:flex;
    justify-content:flex-start;
    height:fit-content;
    margin-top: 10px;
`;

export const ButtonContainer = styled('div')`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: fit-content;
`;

export const GradientButton = styled('button')`
    border: none;
    height: 60px;
    font-size: 40px;
    border-radius: 10px;
    margin-left: 25px;
    width: 50%;
    background-image: linear-gradient(to left, #8066ea, #7a2dc6, #6bc6d6, #651aa1);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    animation: gradient 10s ease infinite;
    transition: 0.6s;
    font-size: 36px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    &:focus {
        outline: none;
    }
    &:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
            animation: gradient 5s ease infinite;
        transition: 0.6s;
        padding: 0 0 0 -15px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 42px;
        height: 70px;
    }
    @media only screen and (min-width : 300px) and (max-width : 700px)
    { 
        font-size: 25px;
        width: 78%;
        &:hover {
            animation: gradient 5s ease infinite;
            transition: 0.6s;
            padding: 0 0 0 -15px;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 28px;
            background-position: 100% 0;
            moz-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
                animation: gradient 5s ease infinite;
            transition: 0.6s;
        }
    }
    @media only screen and (min-width : 701px) and (max-width : 1028px)
    { 
        font-size: 30px;
        width: 66%;
        &:hover {
            animation: gradient 5s ease infinite;
            transition: 0.6s;
            padding: 0 0 0 -15px;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 32px;
            background-position: 100% 0;
            moz-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
                animation: gradient 5s ease infinite;
            transition: 0.6s;
        }
    }
    @media only screen and (min-width : 1029px) and (max-width : 1655px)
    { 
        width: 68%;
        font-size: 25px;
        &:hover {
            animation: gradient 5s ease infinite;
            transition: 0.6s;
            width: 68%;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 27px;
            background-position: 100% 0;
            moz-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
                animation: gradient 5s ease infinite;
            transition: 0.6s;
        }
    }
    @media only screen and (min-width : 30px) and (max-width : 600px)
    { 
        width: 23em;
        font-size: 20px;
        height: 40px;
        &:hover {
            animation: gradient 5s ease infinite;
            transition: 0.6s;
            width: 21em;
            height: 40px;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 22px;
            background-position: 100% 0;
            moz-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
                animation: gradient 5s ease infinite;
            transition: 0.6s;
        }
    }
    @media only screen and (min-width : 1656px) and (max-width : 3000px)
    { 
        width: 66%;
    }
`;

export const StyledButton = styled('button')`
    border: none;
    height: 45px;
    font-size: 20px;
    padding: 6px 0px 0px 30px;
    text-align: start;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    width: 79%;
    background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
    background-size: 300% 300%;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    animation: gradient 10s ease infinite;
    transition: 0.6s;
    margin: 0 0 0 8% !important;
    background-size: 300% 100%;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    cursor: pointer;
&:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
        animation: gradient 5s ease infinite;
    transition: 0.6s;
}
@media only screen and (min-width : 300px) and (max-width : 950px)
{
    margin: 0 0 0 51% !important;
    width: 135px;
    height: 45px;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    padding: 10px 0 0 13px;
    animation: gradient 10s ease infinite;
    transition: 0.6s;
    background-size: 300% 100%;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    &:hover {
        animation: gradient 5s ease infinite;
        transition: 0.6s;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        padding: 10px 0 0 25px;
        border-radius: 10px;
        height: 44px;
        color: white;
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
            animation: gradient 5s ease infinite;
        transition: 0.6s;
    }
}
@media only screen and (min-width : 951px) and (max-width : 9500px)
{
    margin: 0 0 0 8% !important;
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
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
            animation: gradient 5s ease infinite;
        transition: 0.6s;
    }
}
`;
