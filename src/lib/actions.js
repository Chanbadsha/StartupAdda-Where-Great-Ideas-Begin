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
    console.log(data.data);

    return data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
