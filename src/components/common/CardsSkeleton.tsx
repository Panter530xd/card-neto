export default function CardsSkeleton() {
  return (
    <div className="flex gap-10 mx-auto">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="">
          <div className="border border-border  bg-neutral-200 h-72 w-full animate-pulse"></div>
          <h3 className="font-onest text-xl font-medium bg-neutral-200 h-8 w-72 animate-pulse mt-3"></h3>
          <p className="text-base bg-neutral-200 h-6 w-24 animate-pulse mt-3"></p>
        </div>
      ))}
    </div>
  );
}
