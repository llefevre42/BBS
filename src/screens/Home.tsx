import React, { useState, useEffect } from 'react';
import { Image, Dimensions, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchData } from '../api/fetch';
import { Background, Container, DataContainer, FlatListContainer, Info, SearchBar } from './HomeStyled';
import { useDispatch } from 'react-redux';
import { SavePlanet } from '../redux/saveAction';

const { width } = Dimensions.get("window");
const background = { uri: "https://wallpaper.dog/large/5544534.jpg" };
const images = [{ name: 'Uranus', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/640px-Uranus2.jpg' },
{ name: 'Neptune', uri: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg' },
{ name: 'Jupiter', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/280px-Jupiter.jpg' },
{ name: 'Mars', uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg' },
{ name: 'Mercure', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/280px-Mercury_in_color_-_Prockter07_centered.jpg' },
{ name: 'Saturne', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1200px-Saturn_during_Equinox.jpg' },
{ name: 'La Terre', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png/280px-Earth_by_the_EPIC_Team_on_21_April_2018.png' },
{ name: 'Vénus', uri: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/3/3/f/33f89f4d3a_50184634_venus-mariner-10.jpg' }]

function findImage(name: string) {
    const uri = images.find((tab) => tab.name == name)
    return uri?.uri;
}

export default function Home({ navigation }: any) {
    const [seachText, onChangeText] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(setData, setLoading, seachText)
    }, []);

    useEffect(() => {
        fetchData(setData, setLoading, seachText)
    }, [seachText]);


    if (isLoading)
        return (<ActivityIndicator />)
    else
        return (
            <Container>
                <Background source={background} resizeMode="cover">
                    <SearchBar
                        onChangeText={(search: string) => onChangeText(search)}
                        value={seachText}
                        placeholder="Rechercher une planete"
                        placeholderTextColor="#FFFFFF"
                    ></SearchBar>
                    <FlatListContainer>
                        <FlatList
                            data={data.filter((item) => item.isPlanet == true)}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => { dispatch(SavePlanet({ id: item.id, uri: findImage(item.name) })), navigation.push('Profile') }}>
                                    <DataContainer size={width} isPlanet={item.isPlanet}>
                                        <Info>{item.name}</Info>
                                        <Image source={{ uri: findImage(item.name) }}
                                            style={styles.image}></Image>
                                    </DataContainer>
                                </TouchableOpacity>
                            }
                        ></FlatList>
                    </FlatListContainer>
                </Background>
            </Container>
        )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
        resizeMode: "contain",
    },
});