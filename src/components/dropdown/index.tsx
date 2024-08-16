import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './style';

interface props{
  label: string;
  mode: 'dialog' | 'dropdawn';
  options: string[];

}

export function Dropdown({label, mode, options}: props) {
  const [selectedValue, setSelectedValue] = useState('Escolha aqui');

  const handleValueChange = (itemValue: string) => {
    setSelectedValue(itemValue);
  };

  return (
    <View>
      <Text style={styles.textDropDown}>{label}</Text>
      <View style={styles.areaDropDown}>
        <Picker
          mode='dialog'
          selectedValue={selectedValue}
          onValueChange={handleValueChange}
        >
          {options.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>
    </View>
  );
}