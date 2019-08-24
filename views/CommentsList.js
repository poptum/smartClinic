import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CommentsCard from "../components/CommentsCard";
import api from "../services/api";

class CommentsList extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    const { navigation } = this.props;
    const postId = navigation.getParam("postId");
    api.getComments(postId).then(comments => {
      this.setState({ comments });
    });
  }
  render() {
    return (
      <View style={{ backgroundColor: "#d6d7da" }}>
        <FlatList
          data={this.state.comments}
          renderItem={({ item }) => <CommentsCard comment={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default CommentsList;
