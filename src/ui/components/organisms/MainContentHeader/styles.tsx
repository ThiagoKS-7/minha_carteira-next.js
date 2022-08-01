import { styled } from "@mui/system";

export const Container = styled('div')`
    display: flex;
    justify-content: space-between;
    margin: 10px 50px;
    height: fit-content;
`;

export const ContentSelects = styled('div')`
    display: flex;
    margin-top: 10px;
    align-items: flex-end;
    height: fit-content;
`;


export const ContentTitle = styled('h1')`
    height:fit-content;
    &:after {
        content: "";
        display: block;
        width: 55px;
        top:30%;
        left: auto;
        height: 10px;
        border-radius: 2px;
        background-image: linear-gradient(130deg,#ff18aa,#7200af 41.07%,#318397 76.05%);
    }
`;