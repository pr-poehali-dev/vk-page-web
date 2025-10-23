const Logo = ({ size = 40 }: { size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M50 5 C70 5, 95 20, 95 50 C95 80, 70 95, 50 95 C30 95, 5 80, 5 50 C5 20, 25 8, 45 10" 
        stroke="currentColor" 
        strokeWidth="4" 
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;