    import { useEffect } from 'react';
import { View, Text } from 'react-native';
    
    export function Sair({navigation}: {navigation:  any}) {
        useEffect(() => {navigation.navigate('Welcome')}, []);
     return(
        <View>
            <Text>Saindo...</Text>
        </View>
          )
    }