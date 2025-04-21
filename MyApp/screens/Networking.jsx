import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import api from "../api/api";

function NetworkingScreen(props) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const getMovies = async () => {
        try {
            const response = await api.get('/movies.json');
            console.log("response:", response);
            setData(response.data.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <View style={{flex: 1, padding: 24}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => (
                        <Text>
                            {item.title}, {item.releaseYear}
                        </Text>
                    )}
                />
            )}
        </View>
    );
}

export default NetworkingScreen;