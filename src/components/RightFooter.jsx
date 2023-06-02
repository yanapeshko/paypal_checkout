const RightFooter = () => {
  return (
    <div className="flex justify-between">
      <div className="pl-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <button className="absolute bottom-0 right-0 py-8 px-16 bg-[#FFE192] font-semibold text-2xl">
        Add to Cart +
      </button>
    </div>
  );
};

export default RightFooter;
