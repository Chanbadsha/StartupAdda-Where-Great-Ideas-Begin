export const GetAllData = async ({ search, category, sort } = {}) => {
  try {
    const query = new URLSearchParams();

    if (search) query.set("search", search);
    if (category) query.set("category", category);
    if (sort) query.set("sort", sort);

    const res = await fetch(
      `${process.env.DATABASE_API_URL}/ideas?${query.toString()}`,
      {
        cache: "no-store",
      },
    );

    const data = await res.json();
    return data || [];
  } catch (error) {
    return [];
  }
};
export const GetAllDataByCreator = async (creatorId) => {
  try {
    const res = await fetch(
      `${process.env.DATABASE_API_URL}/idea/${creatorId}`,
    );
    const data = await res.json();
    return data || [];
  } catch (error) {
    return [];
  }
};

export const GetCommentById = async (id) => {
  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/comment/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();

    return data || [];
  } catch (error) {
    return [];
  }
};
export const GetDataById = async (id) => {
  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/ideas/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data || {};
  } catch (error) {
    return {};
  }
};

export const PostData = async (Postdata) => {
  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/ideas`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Postdata),
    });
    const data = await res.json();

    return data || [];
  } catch (error) {
    return [];
  }
};
