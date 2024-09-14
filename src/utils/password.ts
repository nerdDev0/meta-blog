// utils/password.js
import bcrypt from "bcrypt";

// Salt and hash password function
export async function saltAndHashPassword(password:string) {
  const saltRounds = 10; // Number of rounds for salt
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
