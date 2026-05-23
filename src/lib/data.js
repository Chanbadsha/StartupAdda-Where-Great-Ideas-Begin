export const GetAllData = async () => {
  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/ideas`);
    const data = await res.json();
    return data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const GetDataById = async (id) => {
  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/ideas/${id}`);
    const data = await res.json();
    return data || {};
  } catch (error) {
    return {};
  }
};

export const PostData = async (Postdata) => {
  try {
    const res = await fetch(`http://localhost:5000/ideas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Postdata),
    });
    const data = await res.json();
    return data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
