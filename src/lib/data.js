export const PostData = async (postData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_API_URL}/ideas`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      console.log("Backend Error Response:", data);
      throw new Error(data.message || "Failed to create idea");
    }

    return data;
  } catch (error) {
    console.error("PostData Error:", error.message);
    return null;
  }
};

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
