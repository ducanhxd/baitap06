import { StyleSheet, TextInput } from "react-native";

export default function MainButton(props) {
  return <TextInput style={styles.input} placeholder={props.placeholder} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: "#d3d3d3",
  },
});
