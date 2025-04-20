import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import api from "../api/api";

function NetworkingScreen(props) {
    useEffect(() => {
        const fetchData = async() =>{
            try{
                const res = await api.get('/movies.json');
                console.log("res : ", res);
            }catch (e) {
                console.error("api 호출 에러 : ", e);
            }

        }
        fetchData();

    }, []);
 return (
  <View>
      <Text></Text>
    </View>
 );}

export default NetworkingScreen;