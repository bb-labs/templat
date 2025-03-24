import React from "react";
import { Button, Text, View } from "react-native";
import { useLazyLoadQuery } from "react-relay";
import { UsersQuery } from "../Queries/UsersQuery";
import type { UsersQuery as UsersQueryType } from "../Queries/__generated__/UsersQuery.graphql";

export default function UsersView() {
  const data = useLazyLoadQuery<UsersQueryType>(UsersQuery, {});

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Users List</Text>
      {data.users?.map((user) => (
        <Text key={user._id}>
          {user.name} - {user.age}
        </Text>
      ))}
      <Button title="Click me" onPress={() => alert("Button pressed")} />
    </View>
  );
}
