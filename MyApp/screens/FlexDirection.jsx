import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const FlexDirectionBasics = ()=>
{
    const [flexDirection, setFlexDirection] = useState('column');
    return (
        <PreviewLayout
        label="flexDirection"
        values={['column', 'row', 'column-reverse', 'row-reverse']}
        selectedValue={flexDirection}
        setSelectedValue={setFlexDirection}>
        <View style={[styles.box, {backgroundColor: 'powderblue'}]}/>
        <View style={[styles.box, {backgroundColor: 'skyblue'}]}/>
        <View style={[styles.box, {backgroundColor: 'steelblue'}]}/>
        </PreviewLayout>
    );
};
const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
})=>(
  <View style={{padding: 10, flex: 1}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
          {values.map(value=>(
              <TouchableOpacity
                  key={value}
                  onPress={()=>{setSelectedValue(value)}}
                  style={[styles.button, selectedValue === value && styles.selected]}>
                  <Text
                      style={[
                          styles.buttonLabel,
                          selectedValue === value && styles.selectedLabel,
                      ]}>
                      {value}
                  </Text>
              </TouchableOpacity>
          ))}
      </View>
      <View style={[styles.container, {[label]:selectedValue}]}>
          {children}
      </View>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    box: {
        width: 50,
        height: 50,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldPlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    buttonLabel:{
        fontSize: 12,
        fontWeight: '500',
        color: 'coral',
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24
    },

});

export default FlexDirectionBasics;