const IdeasDetailsPage = async ({ params }) => {
  let { ideaId } = await params;
  console.log(ideaId);
  return (
    <div className="container mx-auto">
      <h2>This is idea details page</h2>
    </div>
  );
};

export default IdeasDetailsPage;
