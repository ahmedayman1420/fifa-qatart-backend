/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require("mongoose");

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
/*
//==// connection function used to connection node.js project with mongodb 
*/

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const Connection = async () => {
  await mongoose
    .connect(
      `mongodb+srv://Ahmed:wzszliMs6RhEeJn8@cluster0.zkrlfzw.mongodb.net/Fifa-Qatar-2022?retryWrites=true&w=majority`,
      connectOptions
    )
    .then((result) => {
      console.log("Node Connected With Mongo BD");
    })
    .catch((error) => {
      console.log("Error In Database Connection");
    });
};

/* ====================== /// <==> Export Connection Function <==> /// ====================== */
module.exports = Connection;
