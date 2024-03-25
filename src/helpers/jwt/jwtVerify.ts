import { SignJWT, jwtVerify } from "jose";

export const verifyJWT = async <T>(token: string): Promise<T> => {
    try {
      return (
        await jwtVerify(
          token,
          new TextEncoder().encode(process.env.JWT_Token)
        )
      ).payload as T;
    } catch (error) {
      console.log(error);
      throw new Error("Your token has expired.");
    }
  };