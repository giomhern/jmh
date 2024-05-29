import impressions from "./ImpressionsData";
export default function Socials() {
  return (
    <section className="bg-blue-100 py-24 flex flex-col md:rounded-t-[125px] rounded-t-[75px]">
      <p className="font-semibold tracking-tight leading-[1.5] mx-auto text-gray-800 break-words leading-regular md:text-4xl text-xl text-center pb-10">
        Utilize social networks to create meaningful impact.
      </p>

      <div className="relative flex px-10 pt-5 pb-10 items-center">
        <div className="flex-grow border-t border-gray-800"></div>
        <div className="flex-shrink px-4 py-2 relative top-1 -rotate-[12deg] bg-white bottom-5 rounded-full">
          <p className="md:text-lg text-sm tracking-tight text-black">
            Social Media Reach
          </p>
        </div>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>

      <ul className="md:flex md:flex-row grid grid-cols-2 place-items-center md:justify-center md:items-center pt-5 md:space-x-24 list-none">
        {impressions.map((impression) => {
          return (
            <li
              key={impression.id}
              className="flex flex-col items-center md:space-y-3"
            >
              <div className="flex items-center justify-center py-3">
                {impression.platform}
              </div>
              <div className="text-center">
                <p className="md:text-4xl text-xl text-gray-800 font-semibold tracking-tight">
                  {impression.header}
                </p>
                <p className="tracking-tight text-gray-500">
                  {impression.subheader}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
