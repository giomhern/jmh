export default function About() {
  return (
    <main className="bg-white px-14 mx-auto">
      <p className="font-semibold tracking-tight leading-[1.5] text-gray-800 break-words leading-regular md:text-5xl text-3xl pb-2 border-b border-gray-800">
        Who I Am
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 md:py-16 py-10">
        <div className="md:col-span-1 hidden md:block"></div>
        <div className="md:col-span-2">
          <h3 className="font-semibold md:text-3xl text-xl pb-3 text-gray-800">About Me</h3>
          <p className="md:text-lg text-sm md:pb-20 pb-10 text-gray-800">
            Despite facing numerous challenges as an undocumented/DACA
            immigrant, including epilepsy and a move to the United States at a
            young age, I have excelled in my studies and career. I started my
            first business at age 19 and I scaled it to generate $8,000 in
            earnings to finance my studies at UCLA.
          </p>
          <h3 className="font-semibold md:text-3xl text-xl pb-3 text-gray-800">My Business Journey</h3>
          <div className="md:text-lg text-sm text-gray-800">
            <p>
              I have also participated in numerous startup accelerator programs
              including:
            </p>
            <ul className="list-disc px-10 pb-5 text-gray-800">
              <li>SEED 2.0 at Caravanserai Project 2023</li>
              <li>Dream Fund at Caravanserai Project 2022</li>
              <li>UCLA Startup Summer Accelerator 2022</li>
              <li>
                Blackstone Launchpad Summer 2022 Student Entrepeneurship Program
              </li>
              <li>Pre-Accelerator SEED Lab at Caravanserai Project</li>
              <li>UCLAUNCH Accelerator 2021 at UC Berkeley</li>
            </ul>
            <p>
              And in total I&apos;ve raised $27,500 for my business through programs
              & grants
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
