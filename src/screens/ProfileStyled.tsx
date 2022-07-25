import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: black;
    flex: 1;
`;

export const Background = styled.ImageBackground`
    flex: 1;
`;

export const Back = styled.Image`
    height: 30px;
    width: 30px;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 20px; 
`;

export const LabelContainer = styled.View`
    margin-top: 10px;
    margin-left: 20px;
`;

export const ImageContainer = styled.View`
    align-items: center;
    margin: 20px
`;

export const ImagePlanete = styled.Image`
    width: 300px;
    height: 300px;
    resize-mode: cover;
`;