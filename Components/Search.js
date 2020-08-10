
import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  text,
} from "react-native";
import FilmItem from "./FilmItem";
import films from "../Helpers/FilmsData";
import { getFilmsFromApiWithSearchedText } from "./API/TMDBApi";

class Search extends React.Component {
  _loadFilms() {
    getFilmsFromApiWithSearchedText("social").then((data) => console.log(data));
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.TextInput} placeholder="titre du film" />
        <Button title="rechercher" onPress={() => this._loadFilms()} />
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default Search;
