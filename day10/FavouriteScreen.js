import React, { useContext } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import { FavoriteContext } from './FavouriteContext';

const backgroundImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxZkt1k9glZ_GNiAXiZFT4nZAJpOFGyDwVQ&s';
const FavoriteScreen = () => {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text>No favorites yet.</Text>
      ) : (
        
        <ScrollView>
          {favorites.map((product) => (
            <View key={product.id} style={styles.favoriteItem}>
              <Text style={styles.title}>{product.name}</Text>
               
              <Button title="Remove" onPress={() => removeFavorite(product.id)} />
            </View>
          ))}
        </ScrollView>
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  favoriteItem: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#82C3FB',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
    fontWeight:'600',
  },
});

export default FavoriteScreen;