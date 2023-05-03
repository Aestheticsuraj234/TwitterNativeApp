import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { TweetType } from "../types";
type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
    console.log(tweet.user.image.toLowerCase())
  return (
    <View style={styles.container}>
      <Image style={styles.userImage} source={{ uri: tweet.user.image }} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    width: "100%",
    backgroundColor: "white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
    color: "#000",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default Tweet;
