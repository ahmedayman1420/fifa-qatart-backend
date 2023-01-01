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
    .connect(`${process.env.CONNECTION_STRING}`, connectOptions)
    .then((result) => {
      console.log("Node Connected With Mongo BD");
    })
    .catch((error) => {
      console.log("Error In Database Connection");
    });
};

/* ====================== /// <==> Export Connection Function <==> /// ====================== */
module.exports = Connection;
