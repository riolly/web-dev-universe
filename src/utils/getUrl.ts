export function getUrl(path: string) {
  const env = import.meta.env.VERCEL_ENV;
  let url = "";

  switch (env) {
    case undefined:
    case "development":
      url = "http://localhost:3000${path}";
      break;
    case "preview":
      url = `https://${import.meta.env.VERCEL_URL}${path}`;
      break;
    case "production":
      url = `https://riolly.dev${path}`;
      break;

    default:
      break;
  }

  return url;
}
