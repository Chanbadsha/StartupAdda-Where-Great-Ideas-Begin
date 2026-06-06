import { revalidateTag } from "next/cache";
import { auth } from "./auth";
import { headers } from "next/headers";

export const postCommentAction = async (commentInfo, formData) => {
  "use server";

  const { token } = await auth.api.getToken({ headers: await headers() });

  const { comment } = Object.fromEntries(formData.entries());
  const commentList = {
    ...commentInfo,
    comment,
  };

  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/comment`, {
      cache: "no-store",
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentList),
    });
    const data = await res.json();

    if (data.data.acknowledged === true) {
      revalidateTag("/ideas/:ideaId");
      revalidateTag("/ideas");
    }
    return data || [];
  } catch (error) {
    return [];
  }
};

export const editCommentAction = async (commentId, editText) => {
  "use server";
  const { token } = await auth.api.getToken({ headers: await headers() });

  const updateComment = {
    commentId,
    comment: editText,
  };

  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/comment`, {
      cache: "no-store",
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateComment),
    });
    const data = await res.json();

    if (data.result.modifiedCount > 0) {
      revalidateTag("/ideas/:ideaId");
    }
    return data || [];
  } catch (error) {
    return [];
  }
};
export const editIdeaAction = async (ideaId, ideaEditText) => {
  "use server";
  const { token } = await auth.api.getToken({ headers: await headers() });

  const updateIdea = {
    ideaId,
    ideaEditText,
  };

  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/idea`, {
      cache: "no-store",
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateIdea),
    });
    const data = await res.json();

    if (data.result.modifiedCount > 0) {
      revalidateTag("/idea/:creatorId");
    }
    return data || [];
  } catch (error) {
    return [];
  }
};
export const deleteCommentAction = async (commentId) => {
  "use server";
  const { token } = await auth.api.getToken({ headers: await headers() });

  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/comment`, {
      cache: "no-store",
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentId),
    });
    const data = await res.json();

    if (data.result.deletedCount > 0) {
      revalidateTag("/ideas/:ideaId");
      revalidateTag("/ideas");
    }
    return data || [];
  } catch (error) {
    return [];
  }
};
export const deleteIdeaAction = async (ideaId) => {
  "use server";
  const { token } = await auth.api.getToken({ headers: await headers() });

  try {
    const ideaID = { ideaId };
    const res = await fetch(`${process.env.DATABASE_API_URL}/idea`, {
      cache: "no-store",
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(ideaID),
    });
    const data = await res.json();

    if (data.result.deletedCount > 0) {
      revalidateTag("/idea/:creatorId");
      revalidateTag("/ideas");
    }
    return data || [];
  } catch (error) {
    return [];
  }
};
