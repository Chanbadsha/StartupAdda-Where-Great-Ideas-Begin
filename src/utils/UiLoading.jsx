export default function CardLoadings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-72 rounded-2xl bg-gray-200 animate-pulse" />
      ))}
    </div>
  );
}
