import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style'; // Ajuste conforme necessário

interface Props {
  title: string;
  style?: ViewStyle;
}

export function Check({ title, style }: Props) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={style}>
      <CheckBox
        title={title}
        checkedIcon={<Icon name="check-square" size={27} color="white" />}
        uncheckedIcon={<Icon name="square-o" size={27} color="white" />}
        checked={isSelected}
        onPress={() => setSelection(!isSelected)}
        textStyle={styles.checkBoxText}
        containerStyle={styles.checkBoxContainer}
      />
    </View>
  );
}
