class ShiftCipher {
    constructor(string, number) {
      this._string = string;
      this._number = number
    }
  
    encrypt() {
      let cipher = [];
      this._string = this._string.toUpperCase();
      for (let i = 0; i < this._string.length; i++) {
        if (this._string.charCodeAt(i) > 64 && this._string.charCodeAt(i) < 91) {
          let new_pos = this._string.charCodeAt(i) + this._number;
          if (new_pos > 90) {
            new_pos -= 26
          }
          cipher.push(String.fromCharCode(new_pos))
             
        } else {
          cipher.push(String.fromCharCode(this._string.charCodeAt(i)))
        }
      }
      return cipher.join('')
    }
  }
  
  const mystring = new ShiftCipher("h-elloz", 1)
  console.log(mystring.encrypt())