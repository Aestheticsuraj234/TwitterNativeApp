import { StyleSheet ,View ,FlatList} from "react-native";
import tweets from "../../assets/data/tweets";

import Tweet from "../../components/Tweet";



export default function TabOneScreen() {
  return (
    <View style={styles.page}>
    <FlatList
    data={tweets}
    renderItem={({item}) => <Tweet tweet={item} />}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    />
    </View>

  );
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:"#fff",
    flex:1
  }
});
