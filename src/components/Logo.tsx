const Logo = ({ size = 40 }: { size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1 8"
        opacity="0.9"
      />
    </svg>
  );
};

export default Logo;
