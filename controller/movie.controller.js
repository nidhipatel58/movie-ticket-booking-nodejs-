let { MovieService } = require("../services");


let bookticket = async (req, res) => {

    try {
        console.log(req.body);
        let body = req.body;

        let user = await MovieService.bookticket(body);

        res.status(200).json({
            message: "Ticket book success!",
            user
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })

    }
}

let getticket = async (req, res) => {
    try {
        console.log(req.body);
        let get = await MovieService.getticket();

        res.status(200).json({
            message: "Get Ticket success!",
            get,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let cancelTicket = async (req, res) => {

    try {
        console.log(req.params);
        let { id } = req.params;
        let cancle = await MovieService.cancelTicket(id);
        
        res.status(200).json({
            message: "Deleted Ticket success!!",
            cancle,
        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let updateTicket = async (req, res) => {
    try {

        let body = req.body;
        let { id } = req.params;

        let update = await MovieService.updateTicket(id, body);

        res.status(200).json({
            message: "update ticket success!",
            update,
        })
    } catch (err) {

        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = { bookticket, getticket, cancelTicket, updateTicket}