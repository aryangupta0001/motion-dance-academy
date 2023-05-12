const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const port = 80;


const urlencodedParser = bodyParser.urlencoded({ extended: false })


// connecting to mongoose :-

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/DanceEnquiry');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



// creating schema :-

var DanceEnquirySchema = new mongoose.Schema({
  name: String,
  phone : Number,
  email : String,
  address : String,
  enquiry : String
});


// converting schema to model :-

var EnquiryModel = mongoose.model('Enquiry', DanceEnquirySchema);




app.use("/static", express.static("static"));           // for serving static files

app.set("view engine", "pug");




// POST & GET REQUESTS :-

    
app.get("/", (req, res) => {
    res.status(200).render("home");
    
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact");  
});

app.post("/contact", urlencodedParser, (req, res) => {
  var myData = new EnquiryModel(req.body);

  myData.save().then(() => {
    res.send("This item had been saved");
  })

  .catch(() => {
    res.status(400).send("Item updation failed")
  })

})





















app.listen(port, () => {} );