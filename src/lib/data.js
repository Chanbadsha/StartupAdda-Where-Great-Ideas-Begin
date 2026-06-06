import { headers } from "next/headers";
import { auth } from "./auth";

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
  "use server";
  const { token } = await auth.api.getToken({ headers: await headers() });

  try {
    const res = await fetch(
      `${process.env.DATABASE_API_URL}/idea/${creatorId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    return data || [];
  } catch (error) {
    return [];
  }
};

export const GetCommentById = async (id) => {
  "use server";
  const { token } = await auth.api.getToken({ headers: await headers() });

  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/comment/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    const data = await res.json();

    return data || [];
  } catch (error) {
    return [];
  }
};
export const GetDataById = async (id) => {
  "use server";
  const { token } = await auth.api.getToken({ headers: await headers() });

  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/ideas/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    const data = await res.json();
    return data || {};
  } catch (error) {
    return {};
  }
};
