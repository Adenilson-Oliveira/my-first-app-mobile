import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Participant() {
  return (
    <View style={styles.constainer}>
      <Text style={styles.name}>Adenilson N Oliveira</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  )
}