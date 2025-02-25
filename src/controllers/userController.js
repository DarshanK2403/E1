const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).send("Invalid email or password");
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Invalid email or password");
      }
  
      // Ensure the role is defined, default to 'user' if not
      const userRole = user.role || 'user';
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id, role: userRole }, 'your_secret_key', { expiresIn: '1h' });
  
      // Set the cookie
      res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
  
      res.json({
        message: "Login successful",
        role: userRole
      });
    } catch (error) {
      res.status(400).send("Error logging in: " + error.message);
    }
  };

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send("Error registering user: " + error.message);
  }
};

module.exports = { login, signup };
