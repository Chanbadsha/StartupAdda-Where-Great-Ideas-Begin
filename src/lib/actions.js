import { revalidateTag } from "next/cache";

export const postCommentAction = async (commentInfo, formData) => {
  "use server";

  const { comment } = Object.fromEntries(formData.entries());
  const commentList = {
    ...commentInfo,
    comment,
  };

  try {
    const res = await fetch(`${process.env.DATABASE_API_URL}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentList),
    });
    const data = await res.json();
    console.log();
    if (data.data.acknowledged === true) {
      revalidateTag("/ideas/:ideaId");
    }
    return data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
