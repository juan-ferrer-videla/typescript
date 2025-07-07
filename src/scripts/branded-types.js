import {
  assertEmail,
  isEmail,
  sendEmail,
} from "../implementations/branded-types.js";

const email = "juan.ferrer@vml.com";

sendEmail(email);

// With type-predicates
// No side effects, you need an if clause if you want to narrow the type
if (isEmail(email)) {
  sendEmail(email);
}

sendEmail(email);

// With assertion functions
// It has side effects, it throws if the value isn't valid
assertEmail(email);
sendEmail(email);
