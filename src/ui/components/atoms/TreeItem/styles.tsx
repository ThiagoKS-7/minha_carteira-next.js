import { styled } from "@mui/system";

export const ItemContainer = styled('div')`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    height: fit-content;
    padding: 7px;
    text-align:center;
    border: none;
    background-size: 300% 100%;

    border-radius: 6px;
    moz-transition: all .6s ease-in-out;
    -o-transition: all .6s ease-in-out;
    -webkit-transition: all .6s ease-in-out;
    transition: all .6s ease-in-out;
   height: fit-content;
   &:hover {
        background-position: 100% 0;
        moz-transition: all .6s ease-in-out;
        -o-transition: all .6s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
        /* background-image: linear-gradient(to right, #12153e, #5767e3, #b6ecd2, #2bb673);
        box-shadow: 0 4px 15px 0 rgba(49, 105, 196, 0.75); */
        background-image: linear-gradient(to right, #f562d8, #af03e4, #8171fa, #5419e8);
        box-shadow: 0 4px 15px 0 rgba(10, 214, 229, 0.75);
   }
   &:focused {
    background-position: 100% 0;
        moz-transition: all .6s ease-in-out;
        -o-transition: all .6s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
        background-image: linear-gradient(to right, #12153e, #5767e3, #b6ecd2, #2bb673);
        box-shadow: 0 4px 15px 0 rgba(49, 105, 196, 0.75);
        //background-image: linear-gradient(to right, #f562d8, #af03e4, #8171fa, #5419e8);
        box-shadow: 0 4px 15px 0 rgba(10, 214, 229, 0.75);
   }
`;