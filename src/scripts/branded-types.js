import {
  assertEmail,
  isEmail,
  sendEmail,
} from "../implementations/branded-types.js";

const email = "juan.ferrer@vml.com";

sendEmail(email);

if (isEmail(email)) {
  sendEmail(email);
}

assertEmail(email);
sendEmail(email);
