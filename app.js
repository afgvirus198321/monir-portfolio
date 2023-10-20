const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "monir.shekoyans1@gmail.com",
    pass: "qhxh zwer jtlu hpwu",
  },
});

const sendemail = (name, email, message) => {
  const mailoptions = {
    from: "monir.shekoyans1@gmail.com",
    to: "monir.shekoyans1@gmail.com",
    subject: "message from portfolio",
    text: `Name:${name}\n\nEmail:${email}\n\nMessage:${message}`,
  };
  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent :" + info.response);
    }
  });
};
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, ress) => {
  ress.render("index");
});
app.get("/home", (req, ress) => {
  ress.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/work", (req, res) => {
  res.render("work");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/connect", (req, res) => {
  res.render("connect");
});
app.post("/submitform", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  sendemail(name, email, message);
  res.redirect("/connect");
});
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
