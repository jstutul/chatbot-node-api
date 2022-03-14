const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to chatbot Api");
});
app.get("/chatbot", async (req, res) => {
  const paid_type = parseInt(req.query.paid_type);
  const rate = parseInt(req.query.rate);
  const offerres = req.query.offer;
  const decissionR = req.query.decission;
  console.log("des", decissionR);
  const obj = { paid_type: "", question: "" };
  if (paid_type === 1) {
    (obj.paid_type = 1),
      (obj.question = "How much do you get paid hourly? in Dollars");
    if (rate > 0 && rate >= 21) {
      if (offerres === "") {
        const offer = (rate * 10) / 100 + rate;
        obj.question = `we can give u a raise of 10% per hour, so your total hourly wage would be ${offer} .
        Are you happy with the salary? (y/n)`;
      } else {
        if (offerres === "y") {
          obj.question = `you are hired on an hourly wage of ${
            (rate * 10) / 100 + rate
          }`;
        } else if (offerres === "n") {
          if (!decissionR) {
            obj.question =
              "We can give you a maximum raise of 20% ?Do you agree ? y/n";
          } else {
            if (decissionR === "y") {
              obj.question = `You are hired,with a hourly wage of, ${
                (rate * 20) / 100 + rate
              }`;
            } else if (decissionR === "n") {
              obj.question = `It was nice talking to you`;
            } else {
              obj.question = `Put valid input`;
            }
          }
        }
      }
    } else if (rate > 0 && rate <= 20) {
      if (offerres === "") {
        const offer = (rate * 20) / 100 + rate;
        obj.question = `we can give u a raise of 20% per hour, so your total hourly wage would be ${offer} .
            Are you happy with the salary? (y/n)`;
      } else {
        if (offerres === "y") {
          obj.question = `you are hired on an hourly wage of ${
            (rate * 20) / 100 + rate
          }`;
        } else if (offerres === "n") {
          if (!decissionR) {
            obj.question = `We can give you a maximum raise of 20% ?  ${
              (rate * 25) / 100 + rate
            } Do you agree ? y/n`;
          } else {
            if (decissionR === "y") {
              obj.question = `You are hired`;
            } else if (decissionR === "n") {
              obj.question = `It was nice talking to you`;
            } else {
              obj.question = `Put valid input`;
            }
          }
        }
      }
    }
  } else if (paid_type === 2) {
    (obj.paid_type = 2),
      (obj.question = "How much do you get paid annualy? in Dollars");
    if (rate > 0 && rate >= 2000) {
      if (offerres === "") {
        const offer = (rate * 30) / 100 + rate;
        obj.question = `We can give u a raise of 30% per annum, so your total annualy wage would be ${offer} .
          Are you happy with the salary? (y/n)`;
      } else {
        if (offerres === "y") {
          obj.question = `You are hired on an annual salary of ${
            (rate * 30) / 100 + rate
          }`;
        } else if (offerres === "n") {
          if (!decissionR) {
            obj.question =
              "We can offer you a salary with hike of 40%, Do you agree?  y/n";
          } else {
            if (decissionR === "y") {
              obj.question = `You are hired,with a hourly wage of, ${
                (rate * 40) / 100 + rate
              } $`;
            } else if (decissionR === "n") {
              obj.question = `It was nice talking to you`;
            } else {
              obj.question = `Put valid input`;
            }
          }
        }
      }
    } else if (rate > 0 && rate <= 2000) {
      if (offerres === "") {
        const offer = (rate * 15) / 100 + rate;
        obj.question = `We can give you a raise of 20% , so your final annualy wages would be ${offer} .
              Are you happy with the salary? (y/n)`;
      } else {
        if (offerres === "y") {
          obj.question = `you are hired on an hourly wage of ${
            (rate * 15) / 100 + rate
          }`;
        } else if (offerres === "n") {
          if (!decissionR) {
            obj.question = `The best we can offer you is a hike of 30%,  ${
              (rate * 25) / 100 + rate
            } Do you agree ? y/n`;
          } else {
            if (decissionR === "y") {
              obj.question = `You are hired with a base salary of ${
                (rate * 25) / 100 + rate
              } $`;
            } else if (decissionR === "n") {
              obj.question = `It was nice talking to you`;
            } else {
              obj.question = `Put valid input`;
            }
          }
        }
      }
    }
  }
  res.json({ obj });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
