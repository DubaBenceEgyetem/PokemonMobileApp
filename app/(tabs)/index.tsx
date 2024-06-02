import { Text, View, FlatList } from 'react-native';
import pokemons from '../../assets/pokemons';
import PokemonListItem from '@/components/PokemonListItem';


export default function HomeScreen() {
  return (
    <View style={{flex:1}}>
     <FlatList data={pokemons} renderItem={({item}) => <PokemonListItem pokemon={item}
     />}
     numColumns={2}
     />
      
    </View>
  );
}
