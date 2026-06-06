export const token = async () => {
  const { token } = await auth.api.getToken({ headers: await headers() });
  console.log(token);
  return token;
};
