import React, { Component } from "react";
import { StyleSheet, View, FlatList, TouchableHighlight } from "react-native";
import PostCard from "../components/PostCard";
import api from "../services/api";
class PostList extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    api.getPosts().then(posts => {
      this.setState({ posts });
    });
  }
  handlePress = item => {
    this.props.navigation.navigate("CommentsList", { postId: item.id });
  };
  render() {
    return (
      <View style={{ backgroundColor: "#d6d7da" }}>
        <FlatList
          data={this.state.posts}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => this.handlePress(item)}>
              <PostCard post={item} />
            </TouchableHighlight>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default PostList;
