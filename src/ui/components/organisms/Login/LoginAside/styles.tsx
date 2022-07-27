import { styled } from "@mui/system";

export const AsideContainer = styled('div')`
    grid-area: LA;
    background-image: linear-gradient(360deg, #130837 0%, #220b70 55%, #000c3387 100%);
    border-left: 1px solid #000c3387;
    opacity: 0.8;
`;

export const TextFieldWrapper = styled('div')`
    color: #fff9f9;
    margin: 3%;
    height:10%;
    max-height: 150px;
    padding: 10px;
    display: flex;
    font-size:2rem;
`;

export const Input = styled('input')`
    width: 90%;
    margin-left: 7%;
    font-size:30px;
    max-height: 65px;
    border-radius: 8px;
`;