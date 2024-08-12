import React, {useState} from 'react';
import {Text, StyleSheet, View, ViewStyle} from 'react-native';
import { styles } from './style';
import { CheckBox } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

interface props{
    key: number;
    title: string;
    style?: ViewStyle;
}

export function Check({title, key} : props) {
  const [isSelected, setSelection] = useState(false);

  return (
      <View>
        <CheckBox
          key={key}
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
};