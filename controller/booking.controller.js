let { BookingService } = require("../services");

let booking = async (req, res) => {
    try {

        console.log(req.body);
        let body = req.body;

        let user = await BookingService.booking(body)
        console.log(user,"res");

        res.status(200).json({
            message: "Booking sucessfully!",
            user,
        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let getbooking = async (req, res) => {
    try {
        console.log(req.body);
        let get = await BookingService.getbooking();

        res.status(200).json({
            message: "Get Booking successfully!",
            get,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let cancelbooking = async (req, res) => {

    try {
        console.log(req.params);
        let { id } = req.params
        let user = await BookingService.cancelbooking(id);

        res.status(200).json({
            message: "Cancel Booking successfully!",
            user,
        })
    } catch (err) {
        res.status(500)({
            message: err.message
        })
    }

}

let updatebooking = async (req, res) => {

    try {
        let body = req.body;
        let { id } = req.params;

        let update = await BookingService.updatebooking(id, body);

        res.status(500).json({
            meassage: "Update succesfully",
            update,
        })
    } catch (err) {
        res.status(500).json({
            message: err.meassage
        })
    }
}

module.exports = { booking, getbooking, cancelbooking, updatebooking }