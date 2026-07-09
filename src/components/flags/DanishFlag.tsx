export default function DanishFlag({ className = 'w-5 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 37 28" xmlns="http://www.w3.org/2000/svg" aria-label="Danish flag">
      <rect width="37" height="28" fill="#C60C30" rx="2" />
      <rect x="11" width="5" height="28" fill="white" />
      <rect y="11.5" width="37" height="5" fill="white" />
    </svg>
  );
}
