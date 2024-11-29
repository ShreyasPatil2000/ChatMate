import bcrypt from 'bcrypt';

// Function to hash a password using bcrypt
export const hashPassword = async (password) => {
    const saltRounds = 10;  // Higher salt rounds make it more secure but slower
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

// Function to verify a password using bcrypt
export const verifyPassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}
