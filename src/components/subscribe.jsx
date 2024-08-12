export function SubscibeComp() {
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="text-4xl font-semibold text-center max-md:text-start">
        Sign Up for <span className="text-coral-red">Updates</span> & NewsLetter
      </h1>
      <div className="w-full  flex border-[#6d6d6d] border-[1px] rounded-full p-3">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="w-full outline-none"
        />
        <button className="bg-[#ff6353] text-lg font-semibold text-white w-[150px] rounded-full p-3">
          Sign Up
        </button>
      </div>
    </div>
  );
}
