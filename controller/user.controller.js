const { createToken } = require("../middleware/auth");
let { UserService } = require("../services");

let register = async (req, res) => {
    try {

        console.log(req.body);
        let body = req.body;
        let {path}=req.file;

        let newBody={
            ...body,
            profile:path,
        }

        let user = await UserService.register(newBody);

        res.status(200).json({
            message: "user register successfully!",
            user
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


let getUser = async (req, res) => {

    try {

        console.log(req.body);
        let getuser = await UserService.getUser();

        res.status(200).json({
            message: "Get All user success",
            getuser,
        })
    } catch (err) {
        re.status(500).json({
            message: err.message
        })
    }
}

let deleteUser = async (req, res) => {

    try {

        console.log(req.params);
        let { id } = req.params

        let deleted = await UserService.deleteUser(id)

        res.status(200).json({
            message: "delete user success!",
            deleted,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let updateUser = async (req, res) => {

    try {
        let body = req.body;
        let { id } = req.params;

        let update = await UserService.updateUser(id, body);
        console.log(update, "update");

        res.status(200).json({
            message: "updated user success!!",
            update,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let Login = async (req, res) => {
    try {

        let { email, password } = req.body

        let user = await UserService.FindUser(email)
        console.log(user, "checking");

        if (!user) {
            throw new Error("User not found!")
        }

        if (user.password != password) {
            throw new Error("Password is not valid!")
        }

        let token = createToken({ user })
        console.log(token);

        res.cookie(token, "token")

        res.status(200).json({
            message: "Login Successfully!"
        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let getProfile = (req, res) => {

    let user = req.user;
    res.status(200).json({
        message: "profile get success!",
        user,
    })
}


module.exports = { register, getUser, deleteUser, updateUser, Login, getProfile }