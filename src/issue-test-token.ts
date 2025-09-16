import jwt from "jsonwebtoken";
import config from "./config";

const payload = {
  sub: "216c1653-7b13-49bd-9499-53007ead0126",
};

const token = jwt.sign(payload, config.jwt, {
  expiresIn: "1h",
  issuer: "task manager",
});

console.log(token);
