import impressions from "./ImpressionsData";
export default function Socials() {
  return (
    <section className="p-12 flex flex-col">
      <p className="font-semibold tracking-tight leading-[1.5] text-gray-800 break-words leading-regular md:text-5xl text-3xl md:pb-6 pb-2 border-b text-left border-gray-800">
        Social Media Reach
      </p>
      <ul className="md:flex md:flex-row grid grid-cols-2 place-items-center md:justify-center md:items-center md:pt-20 pt-10 md:space-x-24 list-none">
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
