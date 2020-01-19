import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal
} from "react-native";
import icAdd from "../assets/images/add.png";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import Header from "../components/Header";
import firebase from "../utils/firebase";
import MenuItem from "../components/MenuItem";
const OfferItem = props => {
  return (
    <View>
      <Text>SDSA</Text>
    </View>
  );
};

const CreateChangeOffer = props => {
  const {} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    // firebase
    //   .database()
    //   .ref("category")
    //   .on("value", snap => {
    //     console.log(snap);
    //     let data = snap.val();
    //     let dataWithKeys = Object.keys(data).map(key => {
    //       var obj = data[key];
    //       obj._key = key;
    //       return obj;
    //     });
    //     // setMenuList(dataWithKeys);
    //     console.log(dataWithKeys);
    //   });
    console.log("rerender");
    firebase
      .database()
      .ref("menu")
      .on("value", snap => {
        console.log(snap);
        let data = snap.val();
        let dataWithKeys = Object.keys(data).map(key => {
          var obj = data[key];
          obj._key = key;
          return obj;
        });
        setMenuList(dataWithKeys);
        console.log(dataWithKeys);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => {
          return <OfferItem />;
        }}
        ListFooterComponent={() => {
          if (items.length === 0) {
            return (
              <View style={styles.noData}>
                <Text style={styles.noDataText}>Добавьте позиции</Text>
              </View>
            );
          }
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        style={styles.addIcon}
      >
        <Image style={styles.icon} source={icAdd} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.container}>
          <Header
            onClose={() => {
              setModalVisible(false);
            }}
            title="Menu"
          />
          <FlatList
            data={menuList}
            renderItem={({ item, index }) => {
              return <MenuItem key={index} item={item} />;
            }}
          />
        
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  addIcon: {
    position: "absolute",
    right: Sizes.iconHeight,
    bottom: Sizes.iconHeight,
    height: Sizes.iconHeight * 3,
    width: Sizes.iconWidth * 3,
    backgroundColor: Colors.secondColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
  },
  icon: {
    width: Sizes.iconWidth,
    height: Sizes.iconHeight,
    tintColor: Colors.defaultWhite
  },
  noData: {
    alignItems: "center",
    marginVertical: 20
  },
  noDataText: {
    fontSize: Sizes.h1,
    color: Colors.mainColor
  }
});

export default CreateChangeOffer;
