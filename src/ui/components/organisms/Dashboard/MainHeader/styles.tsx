import { styled } from "@mui/system";

export const Container = styled('div')`
    grid-area: MH;
    background-image:  linear-gradient(270deg, #041a6286 0%, #220b70 35%,  #220b70 100%);
    border-right: 1px solid #000c3387;
    border-bottom: 1px solid #00233386;
    opacity: 0.9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const Profile = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
`;

export const WelcomeWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
`;

export const Welcome = styled('h3')`
    height:fit-content;
`;

export const UserName = styled('span')``;