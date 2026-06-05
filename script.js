// This is a placeholder for your ENCRYPTED HTML string.
// See Step 4 for how to generate this string.
const encryptedData = "U2FsdGVkX19PLACEHOLDER_STRING_REPLACE_ME_LATER=";

function promptPassword() {
    const pwd = prompt(""); // Blank prompt so it looks like an error or glitch
    if (!pwd) return;

    try {
        // Attempt to decrypt using the inputted password
        const bytes = CryptoJS.AES.decrypt(encryptedData, pwd);
        const decryptedHTML = bytes.toString(CryptoJS.enc.Utf8);

        // If decryption is successful and results in HTML
        if (decryptedHTML.includes("secret-container")) {
            document.body.innerHTML = decryptedHTML;
        } 
        // If password is wrong, it fails silently or returns gibberish
    } catch (e) {
        // Do nothing. It's hackproof. They just fail.
    }
}
