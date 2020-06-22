import { scrypt, randomBytes } from 'crypto'; //built in node lib - this is callback based
import { promisify } from 'util';

const scryptAsync = promisify(scrypt); //Crypto is callback based. We're changing it to Async

export class Password {
  //static methods can be used without instantiating a new Password object
  static async toHash(password: string) {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer; //Take the password from the user, hash it using the salt in DB

    return buf.toString('hex') === hashedPassword; //Compare both hashes
  }
}
