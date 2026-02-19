export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-heading tracking-tight ${className}`}>
      <span className="font-light">WORK</span>
      <span className="font-extrabold">ON</span>
      <sup className="ml-0.5 text-[0.4em] font-light">&reg;</sup>
    </span>
  );
}
