export default function UKFlag({ className = 'w-5 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-label="UK flag">
      <rect width="60" height="40" fill="#012169" rx="2" />
      {/* White diagonals */}
      <line x1="0" y1="0" x2="60" y2="40" stroke="white" strokeWidth="10" />
      <line x1="60" y1="0" x2="0" y2="40" stroke="white" strokeWidth="10" />
      {/* Red diagonals */}
      <line x1="0" y1="0" x2="60" y2="40" stroke="#C8102E" strokeWidth="6" />
      <line x1="60" y1="0" x2="0" y2="40" stroke="#C8102E" strokeWidth="6" />
      {/* White horizontal + vertical cross */}
      <rect x="24" width="12" height="40" fill="white" />
      <rect y="15" width="60" height="10" fill="white" />
      {/* Red horizontal + vertical cross */}
      <rect x="26" width="8" height="40" fill="#C8102E" />
      <rect y="17" width="60" height="6" fill="#C8102E" />
    </svg>
  );
}
