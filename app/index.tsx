import React from "react";
import { Text } from "react-native";
import { RelayEnvironmentProvider } from "react-relay";

import { environment } from "./environment";
import UsersView from "./Components/Users";

export default function Index() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <UsersView />
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
}
