import { defineInlineTest } from "jscodeshift/src/testUtils";

import transform from "./find-replace-example";

defineInlineTest(
  transform,
  // Transform options.
  {},
  // Input
  `
const addonId = 1234;
const somethingElse ='nope';
  `,
  // Expected output
  `
const addonIdWOW = 1234;
const somethingElse ='nope';
  `,
  "replace a variable in code"
);
