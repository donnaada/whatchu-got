import { StyleSheet } from 'react-native';

export const css = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15
  },
  centerContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyCenter: {
    alignItems: 'center',
    justifyCenter: 'center',
  },
  w80:{
    width:'80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 32,
    fontWeight: 400,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#0E4C92',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
