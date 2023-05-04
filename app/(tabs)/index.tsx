import { StyleSheet, View, FlatList, Pressable,SafeAreaView } from "react-native";
import tweets from "../../assets/data/tweets";
import { AntDesign } from "@expo/vector-icons";
import Tweet from "../../components/Tweet";
import { Link } from "expo-router";
export default function TabOneScreen() {
  return (
 
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <Link href={"/new-tweet"} asChild>
        <AntDesign
          name="plus"
          size={24}
          color="white"
          style={styles.Floatingbutton}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
  },
  Floatingbutton: {
    backgroundColor: "#1c9bf0",

    borderRadius: 50,
    position: "absolute",
    padding: 15,
    right: 25,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    overflow: "hidden",
  },
});
