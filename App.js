import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RequestItem from "./RequestItem";


const requestsList = [
  {
    "id": 202,
    "myss_parent": {
      "full_name": "Test Parent"
    },
    "myss_sitter": {
      "full_name": "Test Sitter"
    },
    "sitter_id": "0f8ec772-0cb7-4705-b4a1-1107371edfef",
    "start_time": "04:44:00+00",
    "status": {
      "code": "New",
      "id": 1
    }
  }
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#757575",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default () => {

  const [requests, setRequests] = useState(requestsList);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Upcoming Requests</Text>

      <View>
        {requests.map((request, key) => (
          <RequestItem
            key={key}
            {...{ request }}
          />
        ))}
      </View>
    </ScrollView>
  );
}