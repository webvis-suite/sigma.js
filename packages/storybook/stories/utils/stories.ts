import type { Meta, StoryObj } from "@storybook/web-components";

import FitViewportToNodesPlay from "./fit-viewport-to-nodes";
import FitViewportToNodesSource from "./fit-viewport-to-nodes?raw";
import template from "./index.html?raw";

const meta: Meta = {
  id: "utils",
  title: "utils",
};
export default meta;

type Story = StoryObj;

export const FitViewportToNodes: Story = {
  name: "Fit viewport to nodes",
  render: () => template,
  play: FitViewportToNodesPlay,
  args: {},
  parameters: {
    storySource: {
      source: FitViewportToNodesSource,
    },
  },
};
