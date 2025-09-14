const appEnv =
  process.env.APP_ENV ?? process.env.NEXT_PUBLIC_APP_ENV ?? "development";

const domain = process.env.DOMAIN ?? process.env.NEXT_PUBLIC_DOMAIN ?? "";

const getBaseUrl = () =>
  appEnv === "development" ? "http://localhost:3000" : `https://${domain}`;
export default getBaseUrl;
