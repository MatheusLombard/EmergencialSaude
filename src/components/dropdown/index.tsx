import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './style';

export function Dropdown() {
  const [doencas, setDoencas] = useState(['Escolha aqui', 'Feminino', 'Masculino']);
  const [selectedValue, setSelectedValue] = useState('Escolha aqui');

  return (
    <View>
      <Text style={styles.textDropDown}>Sexo</Text>
      <View style={styles.areaDropDown}>
        <Picker
          mode="dropdown"
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {doencas.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>
    </View>
  );
}