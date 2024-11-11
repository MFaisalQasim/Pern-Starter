import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JSONbig from "json-bigint";

const getHashedPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  } catch (error: any) {
    throw new Error(error);
  }
};

const createJwtToken = (id: any) =>
  jwt.sign({ id }, `${process.env.SECRET}`, { expiresIn: "3d" });

const parseBigJSON = (json: any) => JSONbig.parse(JSONbig.stringify(json));

export { getHashedPassword, createJwtToken, parseBigJSON };
