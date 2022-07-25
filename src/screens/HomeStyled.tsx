import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: black;
    flex: 1;
`;

export const Background = styled.ImageBackground`
    flex: 1;
`;

export const SearchBar = styled.TextInput`
    margin-top : 10px;
    margin-bottom : 10px;
    margin-left : 20px;
    margin-right : 20px;
    padding : 10px;
    border-width: 1px;
    border-color : white;
    color: white;
`;

export const DataContainer = styled.View`
    align-items: center;
    border-width: 1px;
    margin-bottom: 10px;
    border-color : white
    margin-horizontal: 10px;
    width: ${(props: { size: number; }) => props.size / 2 - 20 || 100}; 
    display : ${(props: { isPlanet: boolean; }) => props.isPlanet ? "flex" : "none"}; 
`;

export const FlatListContainer = styled.View`
    align-items: center;
    `;


export const Info = styled.Text`
    width: 200px;
    fontSize: 20px;
    color: white;
    text-align: center;
    font-weight: 600;
`;

export const ImagePlanete = styled.Image`
    width: 100px;
    height: 100px;
    margin-vertical: 10px;
    resize-mode: contain;
    flex: 1;
    justify-content: space-between;
`;