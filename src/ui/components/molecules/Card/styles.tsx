import { styled } from "@mui/system";
import DollarSvg from "../../../assets/Dollar/DollarSvg";
import ArrowDownSvg from "../../../assets/ArrowDown/ArrowDownSvg";
import ArrowUpSvg from "../../../assets/ArrowUp/ArrowUpSvg";

export const StyledContainer = styled('div')`
    min-width: 32%;
    min-height: 160px;
    margin: 0.3em 0;
    border-radius: 10px;
    padding: 1.4em;
    position: relative;
    overflow: hidden;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleContainer = styled('div')`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`;

export const AmountContainer = styled('div')`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 33px;
    color: #FFFFFF;
`;

export const Icon = styled('img')``;

export const ObsContainer = styled('div')`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    position: absolute;
    bottom: 8px;
`;

export const SvgContainer = styled('div')`
    position: absolute;
    top: -10px;
    right: -30px;
    opacity: 0.4;
    z-index: 1;
`;

export const StyledDollar = styled(DollarSvg)`
    height: 130%;
`;

export const StyledUp = styled(ArrowUpSvg)`
    height: 130%;
`;

export const StyledDown = styled(ArrowDownSvg)`
    height: 130%;
`;

export const CardBox = styled('div')`
    display:flex;
    flex-direction: column;
`;