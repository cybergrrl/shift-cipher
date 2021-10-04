class ShiftCipher {
    constructor(number) {
      this._number = number
    }
  
    encrypt(string) {
      let cipher = [];
      string = string.toUpperCase();
      for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
          let new_pos = string.charCodeAt(i) + this._number;
          if (new_pos > 90) {
            new_pos -= 26
          }
          cipher.push(String.fromCharCode(new_pos))
             
        } else {
          cipher.push(String.fromCharCode(string.charCodeAt(i)))
        }
      }
      return cipher.join('')
    }

    decrypt(encrypted_string) {
      let decipher = [];
      encrypted_string = encrypted_string.toLowerCase();
      for (let i = 0; i < encrypted_string.length; i++) {
        if (encrypted_string.charCodeAt(i) > 96 && encrypted_string.charCodeAt(i) < 123) {
          let new_pos = encrypted_string.charCodeAt(i) - this._number;
          if (new_pos < 97) {
            new_pos += 26
          }
          decipher.push(String.fromCharCode(new_pos))
             
        } else {
          decipher.push(String.fromCharCode(encrypted_string.charCodeAt(i)))
        }
      }
      return decipher.join('')
    }
  }
  

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'