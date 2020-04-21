const rule = require("../tabindex-no-positive");
const makeRuleTester = require("./makeRuleTester");

const message = "Avoid positive integer values for tabindex.";

makeRuleTester("tabindex-no-positive", rule, {
  valid: [
    {
      filename: "test.vue",
      code: "<template><span tabindex='0'></span></template>"
    },
    {
      filename: "test.vue",
      code: "<template><span v-if='true' tabindex='0'></span></template>"
    },
    {
      filename: "test.vue",
      code: "<template><span tabindex='-1'></span></template>"
    },
    {
      filename: "test.vue",
      code: "<template><span :tabindex='number'></span></template>"
    }
  ],
  invalid: [
    {
      filename: "test.vue",
      code: "<template><span tabindex='1'></span></template>",
      errors: [{ message }]
    },
    {
      filename: "test.vue",
      code: "<template><span tabindex='2'></span></template>",
      errors: [{ message }]
    },
    {
      filename: "test.vue",
      code: "<template><span :tabindex='2'></span></template>",
      errors: [{ message }]
    }
  ]
});