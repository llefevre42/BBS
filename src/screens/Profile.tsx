import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchDataByID } from '../api/fetch';
import Information from '../component/LabelName';
import { Back, Background, Container, LabelContainer } from './ProfileStyled';
import { useSelector } from 'react-redux';

const background = { uri: "https://wallpapercave.com/wp/wp5093353.jpg" };

export default function Profile({ navigation }: any) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<{ [key: string]: any }>([]);
    const reduxReturn: any = useSelector(state => state);


    useEffect(() => {
        fetchDataByID(setData, setLoading, reduxReturn.planet.planet.id)
    }, []);


    if (isLoading)
        return (<ActivityIndicator />)
    else
        return (
            <Container>
                <Background source={background} resizeMode="cover">
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <Back source={require('../../Picto_precedent.png')}></Back>
                    </TouchableOpacity>
                    <LabelContainer>
                        <Information label={"Nom"} value={data.name} ></Information>
                        <Information label={"Id"} value={data.id} ></Information>
                        <Information label={"Nom Anglais"} value={data.englishName} ></Information>
                        <Information label={"Est une planete"} value={data.isPlanet ? "oui" : "non"} ></Information>
                        <Information label={"Semimajor axis"} value={data.semimajorAxis} ></Information>
                        <Information label={"Perihelion"} value={data.perihelion} ></Information>
                        <Information label={"Aphelion"} value={data.aphelion} ></Information>
                    </LabelContainer>
                    <Image source={{ uri: reduxReturn.planet.planet.uri }}
                        style={styles.image}></Image>
                </Background>
            </Container>
        )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        marginVertical: 10,
        resizeMode: "contain",
        flex: 1,
        alignSelf: 'center'
    },
});