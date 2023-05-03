import { StyleSheet, Text, View, Image ,TouchableOpacity} from "react-native";
import React from "react";
import { Entypo, EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: number | string;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>

      <EvilIcons name={icon} size={24} color="gray" />
      <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
    </TouchableOpacity>
  );
};

import { TweetType } from "../types";
type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userImage} source={{ uri: tweet.user.image }} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username} · 2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && (
          <Image style={styles.image} source={{ uri: tweet.image }} />
        )}
        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="retweet" text={tweet.numberOfLikes} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="chart" text={tweet.impressions || 0} />
          <IconButton icon="share-apple"  />
       
        </View>
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
  },
  username: {
    marginLeft: 5,
    color: "gray",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-around",
  },
});

export default Tweet;
