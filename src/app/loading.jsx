const Loading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-violet-600">StartupAdda</h1>

        <div className="mx-auto mt-6 h-10 w-10 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />

        <p className="mt-4 text-sm text-slate-500">Fetching awesome ideas...</p>
      </div>
    </div>
  );
};

export default Loading;
