import { Link, useRouter } from "expo-router";
import {useState} from "react"
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";


const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
    const router = useRouter()
    const [text , setText] = useState("")
  const onTweetPress = () => {
    console.warn(`Tweet Post ${text}`);
    setText('')
    router.back()
  };

  return (
    <SafeAreaView style={{flex:1 , backgroundColor:'#fff' , paddingTop:18}}>
 
    <View style={styles.container}>
      {/* cancel button & Tweet Button */}
      <View style={styles.buttonContainer}>
        <Link href="../" style={{ fontSize: 16 }}>
          Cancel
        </Link>

        <Pressable onPress={onTweetPress} style={styles.button}>
          <Text style={styles.buttonText}>Tweet</Text>
        </Pressable>
      </View>

      <View style={styles.inputContainer}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <TextInput
          placeholder="What's Happening?"
          style={{
            flex: 1,
            paddingVertical: 8, // adjust the vertical padding to move the placeholder text down
            textAlignVertical: "top", // set the vertical alignment to top to prevent the text from being centered
          }}
          numberOfLines={10}
          multiline
          value={text}
          onChangeText={setText}
        />
      </View>
    </View>
           
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1c9bf0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  inputContainer: {
    flexDirection: "row",
  },
});
