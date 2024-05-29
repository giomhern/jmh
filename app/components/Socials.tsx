import impressions from "../components/impressions";
export default function Socials() {
  return (
    <section className="bg-blue-100 py-24 flex flex-col rounded-t-[125px]">
      <p className="font-semibold tracking-tight leading-[1.5] mx-auto text-gray-800 break-words leading-regular text-4xl text-center pb-10">
        Utilize social networks to create meaningful impact.
      </p>

      <div className="relative flex px-10 pt-5 pb-10 items-center">
        <div className="flex-grow border-t border-gray-800"></div>
        <div className="flex-shrink px-4 py-2 relative top-1 -rotate-[12deg] bg-white bottom-5 rounded-full">
          <p className="text-md tracking-tight text-black">
            Social Media Reach
          </p>
        </div>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>

      <ul className="flex justify-center items-center pt-5 space-x-24 list-none">
        {impressions.map((impression) => {
          return (
            <li key={impression.id} className="space-y-3">
              <div className="h-16 py-3 flex items-center">
                {impression.platform}
              </div>
              <div>
                <p className="text-4xl text-gray-800 font-semibold tracking-tight">
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
