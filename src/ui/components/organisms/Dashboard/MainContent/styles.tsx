import { styled } from "@mui/system";

export const Container = styled('div')`
    height: (100vh -70px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width:10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #220b70;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: #041a6286;
    }
`;