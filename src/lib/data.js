export const GetAllData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_API_URL}/ideas`,
    );
    const data = await res.json();
    return data || [];
  } catch (error) {
    console.log(error);
  }
};

export const GetDataById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_API_URL}/ideas/${id}`,
    );
    const data = await res.json();
    return data || {};
  } catch (error) {}
};
