import { RequestHandler } from "express";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { sanitize, Trim } from "class-sanitizer";
import HttpException from "../exception/HttpException";

function dtoValidationMiddleware(type, skipMissingProperties = false) {

  return (req, res, next) => {
    const dtoObj = plainToClass(type, req.body);
    validate(dtoObj, { skipMissingProperties }).then(
      (errors) => {
        if (errors.length > 0) {
          const dtoErrors = errors.map((error) =>
            (Object).values(error.constraints)).join(", ");
          next(new HttpException(400, dtoErrors));
        } else {
          //sanitize the object and call the next middleware
          sanitize(dtoObj);
          req.body = dtoObj;
          next();
        }
      }
    );
  };
}