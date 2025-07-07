import { assertEmail, sendEmail } from "../implementations/branded-types.js";

const email = "juan.ferrer@vml.com";
assertEmail(email);

sendEmail("invalid email");
