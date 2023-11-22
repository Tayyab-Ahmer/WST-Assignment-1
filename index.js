const passwordBox = document.getElementById("password");
const length = 12;

const characterSets = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:',.<>?/\"\\`~"
};

const allCharacters =
    characterSets.upperCase +
    characterSets.lowerCase +
    characterSets.numbers +
    characterSets.symbols;

function generatePassword(callback) {
    let password = "";

    for (const set in characterSets) {
        const charSet = characterSets[set];
        password += charSet[Math.floor(Math.random() * charSet.length)];
    }

    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Use a callback to return the generated password
    callback(password);
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

// Async function using await to generate and display the password
async function generateAndDisplayPassword() {
    try {
        await new Promise((resolve) => {
            generatePassword((password) => {
                passwordBox.value = password;
                resolve();
            });
        });
    } catch (error) {
        console.error("Error generating password:", error);
    }
}


