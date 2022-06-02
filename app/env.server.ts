import invariant from "tiny-invariant";
export function getEnv() {
  console.log("ADMIN_EMAIL: ", process.env.ADMIN_EMAIL);
  invariant(process.env.ADMIN_EMAIL, "Admin Email should be defiend");
  return {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}