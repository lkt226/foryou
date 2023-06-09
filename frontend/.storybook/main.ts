import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  core: {
    builder: "@storybook/builder-webpack5"
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;