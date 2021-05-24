const userMod = require("../module/users.module");

const addNewUser = async (req, res) => {
  try {
    const { email } = req.body;

    const newUse = new userMod.UserModel({
      email: email,
    });

    await newUse.save();
    res.send("done");
  } catch (err) {
    console.log(err);
    res.send("this account is here");
  }

};



module.exports = {
  addNewUser: addNewUser,
};
