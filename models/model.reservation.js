const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./model.accountsUsers")

const ReservationSchema = new Schema(
    {
        reservationID: { type: String, required: true },
        accountID: { type: mongoose.Types.ObjectId, required: true, ref="AccountsUsers" },
        dateReserved: { type: Date, required: true },
        dateReturned: { type: Date, required: true },
        totalRate: { type: Number, required: true },
        status: { type: Boolean, required: true, default: true },

    }
);
module.exports = mongoose.model('Reservation', ReservationSchema);