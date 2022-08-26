import { IListProps } from './@types';
import { Container, Tag }  from './styles';

export default function List(props: IListProps) {
    return (
        <Container>
            <Tag style={{borderLeft:`14px solid ${props.tagColor}`}}>
                <span>{props.title}</span>
                <small>{props.subtitle}</small>
            </Tag>        
            <h3>{props.amount}</h3>
        </Container>
    )
};