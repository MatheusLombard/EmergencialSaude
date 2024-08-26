import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style'; // Ajuste conforme necessário
import { useStylesTheme } from '../../styles';
import { useEmergencialContext } from '../../hook/useEmergencialContext';

interface Props {
  title: string; 
  style?: ViewStyle;
}

export function Check({ title, style }: Props) {
  const { colorText } = useEmergencialContext();
  const styleTheme = useStylesTheme();
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={style}>
      <CheckBox
        title={title}
        checkedIcon={<Icon name="check-square" size={27} color={colorText} />}
        uncheckedIcon={<Icon name="square-o" size={27} color={colorText} />}
        checked={isSelected}
        onPress={() =>{ 
          setSelection(!isSelected); 
          console.log(isSelected ? 'desselecionado' : title );
        }}
        textStyle={{...styleTheme.pequeno,...styles.checkBoxText}}
        containerStyle={styles.checkBoxContainer}
      />
    </View>
  );
}
