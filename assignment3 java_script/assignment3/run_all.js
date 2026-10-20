"use strict";
const { spawnSync } = require("child_process");
const files = ["q1_data_parser","q2_bonus_calculator","q3_transaction_validator","q4_debugging_mystery",
  "q5_hoisting_lab","q6_pyramid","q7_smart_calculator","q8_strict_showdown","q9_json_audit","q10_nested_hoisting"];
for (const f of files) {
  const r = spawnSync(process.execPath, [`${__dirname}/${f}.js`], { encoding: "utf8" });
  console.log(r.stdout + (r.stderr || ""));
}
