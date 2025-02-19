
const Loading = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="space-y-4">
          <div
            data-testid="skeleton"
            className="animate-pulse rounded-md bg-primary/10 aspect-video w-full"
          />
          <div className="space-y-2">
            <div className="animate-pulse rounded-md bg-primary/10 h-4 w-[250px]" />
            <div className="animate-pulse rounded-md bg-primary/10 h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;


