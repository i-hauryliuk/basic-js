class VigenereCipheringMachine {
    constructor(isDirect=true) {
        this.isDirect = isDirect;
    }
    
    encrypt(message, key) {
        if (arguments.length < 2) {
            throw new Error('Wrong arguments!');
        } else {
            const encryptedChars = [];
            for (let i = 0, omissions = 0; i < message.length; i++) {
                if (/^[^A-Z]$/i.test(message[i])) {
                    omissions++;
                    encryptedChars.push(message[i]);
                } else {
                    encryptedChars.push(
                        String.fromCharCode(
                            ((message.toUpperCase().charCodeAt(i) - 65) +
                            (key.toUpperCase().charCodeAt((i - omissions) % key.length) - 65)) %
                            26 + 65)
                    );
                }
            }
            return this.isDirect ? encryptedChars.join('') : encryptedChars.reverse().join('');
        }
    }
    
    decrypt(encryptedMessage, key) {
        if (arguments.length < 2) {
            throw new Error('Wrong arguments!');
        } else {
            const decryptedChars = [];
            for (let i = 0, omissions = 0; i < encryptedMessage.length; i++) {
                if (/^[^A-Z]$/.test(encryptedMessage[i])) {
                    omissions++;
                    decryptedChars.push(encryptedMessage[i]);
                } else {
                    decryptedChars.push(
                        String.fromCharCode((26 +
                            ((encryptedMessage.charCodeAt(i) - 65) -
                            (key.toUpperCase().charCodeAt((i - omissions) % key.length) - 65))) %
                            26  + 65));
                }
            }
            return this.isDirect ? decryptedChars.join('') : decryptedChars.reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;
