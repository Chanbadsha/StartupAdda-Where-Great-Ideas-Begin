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
