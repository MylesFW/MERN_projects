const express = require("express");
const app = express();
const port = 8000 //localhost:

let faker = require('faker') //for fake API info "https://github.com/marak/Faker.js/"

// req is short for request
// res is short for response

class User {
  constructor() {
    this.uuid = faker.datatype.uuid(); //faker.the category.name of it()
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
let newUser = new User(); //need to set it to new var to .get
console.log(new User())

app.get("/api/user/new", (req, res) => {
  res.json(newUser) // call the newUser to display on the page
});

class Company {
  constructor() {
    this.uuid = faker.datatype.uuid();
    this.companyName = faker.company.companyName();
      this.streetName = faker.address.streetName();
      this.cityName = faker.address.cityName();
      this.state = faker.address.state();
      this.zipCode = faker.address.zipCode();
      this.county = faker.address.county();
  }
}
let newCompany = new Company();
console.log(newCompany)

app.get("/api/company/new", (req, res) => {
  res.json(newCompany)
});



app.get("/api/user/company", (req, res) => {
  res.json([newUser, newCompany]) // an array is used to put both classes on the page
});

app.get("/api", (req, res) => {
  res.send("Locked and Loaded bb");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);