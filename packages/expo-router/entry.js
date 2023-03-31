import "@expo/metro-runtime";

import { ExpoRoot } from "expo-router";
import Head from "expo-router/head";

import { renderRootComponent } from "./src/renderRootComponent";

const ctx = require.context(process.env.EXPO_ROUTER_APP_ROOT);

// Must be exported or Fast Refresh won't update the context
export function App() {
  return (
    <Head.Provider>
      <ExpoRoot context={ctx} />
    </Head.Provider>
  );
}

renderRootComponent(App);
