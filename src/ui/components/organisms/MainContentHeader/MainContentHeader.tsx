import SelectInput from "@/atoms/SelectInput/SelectInput";
import { useCallback, useState } from "react";
import { IMainContentHeaderProps } from "./@types";
import {
    Container,
    ContentSelects,
    ContentTitle,
} from './styles'


export default function MainContentHeader(props: IMainContentHeaderProps) {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const months = [
        { value: 1, label: "Janeiro" },
        { value: 2, label: "Fevereiro" },
        { value: 3, label: "Março" },
        { value: 4, label: "Abril" },
        { value: 5, label: "Maio" },
        { value: 6, label: "Junho" },
        { value: 7, label: "Julho" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Setembro" },
        { value: 10, label: "Outubro" },
        { value: 11, label: "Novembro" },
        { value: 12, label: "Dezembro" },
    ]
    const years = [
        { value: 2020, label: 2020 },
        { value: 2021, label: 2021 },
        { value: 2022, label: 2022 }
    ];
    const handleYearSelected = useCallback((year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch{
            throw new Error('invalid year value. Is accept integer numbers.')
        }
    },[]);  
    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch{
            throw new Error('invalid month value. Is accept 0 - 24.')
        }
    },[]);
  return (
    <Container>
      <ContentTitle>
        {props.title}
      </ContentTitle>
      <ContentSelects>
        <SelectInput 
            options={months}
            onChange={(e) => handleMonthSelected(e.target.value)} 
            defaultValue={'Julho'}
        />
        <SelectInput 
            options={years} 
            onChange={(e) => handleYearSelected(e.target.value)} 
            defaultValue={'2022'}
        />
      </ContentSelects>
    </Container>
  )
}
