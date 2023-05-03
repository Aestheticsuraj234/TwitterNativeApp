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

export default IconButton

const styles = StyleSheet.create({})