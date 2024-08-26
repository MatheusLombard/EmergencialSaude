import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './style';
import { useStylesTheme } from '../../styles';

interface props{
  label: string;
  mode: 'dialog' | 'dropdown';
  options: string[];

}

export function Dropdown({label, mode, options}: props) {
  const styleTheme = useStylesTheme();
  const [selectedValue, setSelectedValue] = useState('Escolha aqui');

  const handleValueChange = (itemValue: string) => {
    setSelectedValue(itemValue);
  };

  return (
    <View>
      <Text style={{...styleTheme.pequeno,...styles.textDropDown}}>{label}</Text>
      <View style={{...styleTheme.backgroundColorComponents,...styles.areaDropDown}}>
        <Picker
          mode={mode}
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