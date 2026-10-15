import { View, Text, StyleSheet } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras }) {
  return (
    <View style={styles.kartya}>
      <Text style={styles.cim}>{cim}</Text>
      <Text style={styles.hely}>{hely}</Text>
      {leiras ? <Text style={styles.leiras}>{leiras}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: { padding: 12, marginBottom: 12},
  cim: { fontSize: 18},
  hely: { fontSize: 14, color: '#555' },
  leiras: { marginTop: 6 },
});