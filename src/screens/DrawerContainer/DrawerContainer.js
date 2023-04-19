import React from "react";
import { View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <MenuButton
          title="Trang Chủ"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Trang Chủ");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Lựa Chọn"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Lựa Chọn");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Tìm Kiếm"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Tìm Kiếm");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Yêu Thích"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Yêu Thích");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
