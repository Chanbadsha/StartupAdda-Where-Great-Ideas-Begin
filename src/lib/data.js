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

// export const GetUser = async () => {};
