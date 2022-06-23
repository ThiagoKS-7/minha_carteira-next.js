import {
    StyledImg
} from './Icon.styles';

interface IIconProps {
    src:any;
    alt:string;
    width:number;
    height:number;
}
import { Box } from '@mui/material';

export default function Icon(props: IIconProps ) {
    return (
        <>
            <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
                <StyledImg src={props.src} alt={props.alt} width={props.width} height={props.height}/>
            </Box>
        </>
    )
}