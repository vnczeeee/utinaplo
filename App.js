import { View, StyleSheet } from 'react-native';
import Bejegyzes from './components/bejegyzes';

const bejegyzesek = [
  { id: '1', cim: 'Első nap Rómában', hely: 'Róma, Olaszország', leiras: 'Megnéztük a Colosseumot.' },
  { id: '2', cim: 'Kirándulás a Balatonnál', hely: 'Balaton, Magyarország' },
  { id: '3', cim: 'Kávézás Bécsben', hely: 'Bécs, Ausztria'},
];

export default function App() {
  return (
    <View style={styles.container}>
      {bejegyzesek.map((b) => (
        <Bejegyzes key={b.id} cim={b.cim} hely={b.hely} leiras={b.leiras} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60 },
});