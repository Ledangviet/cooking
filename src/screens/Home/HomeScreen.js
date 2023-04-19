import React, { useState, useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <MenuImage onPress={() => navigation.openDrawer()} />,
      headerRight: () => <View />,
    });
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);

  const onPressRecipe = (item) => {
    navigation.navigate("Công thức", { item });
  };

  const onSelectItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const renderRecipe = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(234, 237, 237,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={item.photo_url} />
        <View style={styles.checkboxContainer}>
          <Icon
            name={selectedItems.includes(item.recipeId) ? "heart" : "heart-o"}
            type="font-awesome"
            color="#f50"
            onPress={() => onSelectItem(item.recipeId)}
          />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={recipes}
      renderItem={renderRecipe}
      keyExtractor={(item) => `${item.recipeId}`}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
  function FavoritesScreen(props) {
    const { navigation, route } = props;
    const { selectedItems } = route.params;

    const onPressRecipe = (item) => {
      navigation.navigate("Công thức", { item });
    };

    const filteredRecipes = recipes.filter((item) =>
      selectedItems.includes(item.recipeId)
    );

    const renderRecipe = ({ item }) => (
      <TouchableHighlight
        underlayColor="rgba(234, 237, 237,0.9)"
        onPress={() => onPressRecipe(item)}
      >
        <View style={styles.container}>
          <Image style={styles.photo} source={item.photo_url} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </TouchableHighlight>
    );

    return (
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={filteredRecipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => `${item.recipeId}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}
