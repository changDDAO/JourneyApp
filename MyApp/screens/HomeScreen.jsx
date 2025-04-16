import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        홈 화면
      </Text>
      <Button
          title="상세페이지로 이동"
          onPress={()=>navigation.navigate('Detail')}
      />
    </View>
 );}

export default HomeScreen;