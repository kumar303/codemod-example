import { defineInlineTest } from "jscodeshift/src/testUtils";

import transform from "./import-example";

defineInlineTest(
  transform,
  // Transform options.
  {},
  // Input
  `
import example from "package";

const addonId = 1234;
  `,
  // Expected output
  `
import example from "package";

import { thing } from "some-package";

const addonId = 1234;
  `,
  "add an import to the top"
);
