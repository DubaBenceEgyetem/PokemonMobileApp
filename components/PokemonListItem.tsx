import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';
import { Link } from 'expo-router';

interface PokemonListItemProps{
    id: number,
    name: string,
    image: string,
    price: number
}

const PokemonListItem = ({pokemon} :{pokemon:PokemonListItemProps}) =>{
  return(
    <Link href={`${pokemon.id}`} asChild>
    <Pressable style={styles.titleContainer}>
         <View style={styles.Container}>
            <Image style={styles.image} source={{ uri: pokemon.image}}/>
            <Text style={styles.title}>{pokemon.name}</Text>
            <Text style={styles.price}>{pokemon.price}</Text>
         </View>
    </Pressable>
    </Link>
  )
}

export default PokemonListItem

const styles = StyleSheet.create({
  titleContainer: {
      padding: 10,
      flex: 1,
      maxWidth: '50%'
  },
  Container: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1
},
  image:{
    width: '100%',
    aspectRatio: 2 / 1
  },
  title:{
    fontSize: 20,
    fontWeight: 600
  },
  price:{
    color: Colors.light.tint,
    fontWeight:'bold'
  }
});
