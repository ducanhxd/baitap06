import { Text } from "react-native";

export default function MainButton(props) {
  return (
    <Text style={{ color: "#719ced", fontSize: 25, margin: 15 }}>
      {props.txt}
    </Text>
  );
}
