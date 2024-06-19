export const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }
    next();
};