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

// const sufian = new UserModel({
//     email: 'sufian.hamdan.1992.94@gmail.com',
//     movies: [{name: 'asdasdasdasd', description: 'klaskfnanma', year: '04-11-2000', duration: '190'}]

//   });

module.exports = {
  addNewUser: addNewUser,
};
