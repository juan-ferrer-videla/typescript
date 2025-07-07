export function assertEmail(email) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error(`${email} isn't a valid email`);
  }
}

export function sendEmail(email) {
  //send email
}
