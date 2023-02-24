import User from '../model/User';
import bcrypt from 'bcryptjs';
import e from 'express';
export const getAllUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: 'No user found' });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return;
    console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: 'User Already registered!!' });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    user.save();
    console.log('user saved in data base');
  } catch (err) {
    return console.log(err);
  }

  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { user, password } = req.body;
  let existingUser;
  try {
    existingUser = User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: 'user not registered yet' });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if(!isPasswordCorrect){
res.status(400).json({message:"Incorrect Password"})
  }
  return res.status(200).json({messgae:"login sucessfull"})
};
