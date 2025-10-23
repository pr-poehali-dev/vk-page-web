const Logo = ({ size = 48 }: { size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M 100 20 C 135 20, 170 35, 180 65 C 190 95, 180 130, 150 155 C 120 180, 80 185, 50 170 C 20 155, 10 125, 15 90 C 20 55, 40 30, 70 22" 
        stroke="currentColor" 
        strokeWidth="6" 
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;