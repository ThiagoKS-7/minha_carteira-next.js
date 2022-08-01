import { styled } from "@mui/system";

export const Container = styled('li')`
    list-style: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 12px 40px;
    width:94%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #313862, #374494, #0d8aa1, #444c80);  // #9b26ad
    cursor: pointer;
    transition: all .3s;
    position: relative;
    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }
    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;    
        padding-left: 10px;    
    }
    > div span {
        font-size: 22px;
        font-weight: 500;
    }
    
    
`;

export const Tag = styled('div')`
`;