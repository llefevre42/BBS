import React from 'react';
import { Info, InfoContainer, Label } from './LabelNameStyled';

interface CellTextProps {
    label: string;
    value: string
}

const Information: React.FC<CellTextProps> = (props: CellTextProps) => {
    return (
        <InfoContainer>
            <Label>{props.label} : </Label>
            <Info>{props.value}</Info>
        </InfoContainer>)
}

export default Information