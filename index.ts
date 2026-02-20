import type { OpenClawPluginApi } from "openclaw/plugin-sdk";
import { emptyPluginConfigSchema } from "openclaw/plugin-sdk";

const plugin = {
  id: "hello-world",
  name: "Hello World",
  description: "A simple hello world plugin for testing",
  configSchema: emptyPluginConfigSchema(),
  register(api: OpenClawPluginApi) {
    console.log("Hello from hello-world plugin!");
  },
};

export default plugin;