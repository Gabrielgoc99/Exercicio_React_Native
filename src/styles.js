import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  itensContainer: {
    flexDirection: 'row',
    padding: 12,
  },
  paragraph: {
    margin: 0,
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagem: {
    height: 220,
    width: 128,
  },
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
  },
});