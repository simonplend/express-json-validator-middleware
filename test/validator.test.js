const { test } = require("tap");
const Ajv = require("ajv");
const Ajv2019 = require("ajv/dist/2019");

const { Validator } = require("../src");

test("Validator instance", async t => {
	t.type(new Validator().ajv, Ajv, " property `ajv` should be an Ajv instance");
});

test("Validator instance w/ custom AJV instance", async t => {
	t.type(new Validator(new Ajv2019()).ajv, Ajv2019, " property `ajv` should be an Ajv2019 instance");
});
