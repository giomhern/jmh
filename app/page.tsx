/* eslint-disable react/no-unescaped-entities */
'use client';
import { JSX, PromiseLikeOfReactNode } from 'react';
import React, { ReactNode, Component } from 'react'
import 'swiper/swiper-bundle.css';




const jumbo = <section className='flex md:px-20 md:py-10 px-10 py-2 justify-start font-extrabold'>
    <p className='text-2xl break-words md:text-4xl lg:text-6xl mx-7 md:mx-8 lg:mx-10'>A 23 year old <span className='text-black'>undocumented/DACA  entrepreneur </span>sharing his journey of <span className='text-black'>starting  a business</span></p>
</section>

const bizSection = <div className='md:grid md:grid-cols-2 flex flex-col-reverse justify-center items-center p-7 px-20'>
    <ol className="relative border-l border-gray-200 dark:border-gray-700 py-3 text-white my-10 text-xl">
        <li className="mb-10 ml-4 bg-gray-100 text-blue-600 p-7 rounded-lg">
            <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border border-yellow-200"></div>
            <time className="mb-1 font-semibold text-sm text-blue-900 leading-none">2021</time>
            <p className="mb-4 font-normal md:md:text-md text-sm text-md">I wasn't able to get hired because I didn't have DACA. I had the initial idea of
                helping immigrant students get jobs.</p>
        </li>

        <li className="mb-10 ml-4 bg-gray-100 text-blue-600 p-7 rounded-lg">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 font-semibold text-sm  text-blue-900 leading-none">2022</time>
            <p className="font-normal md:text-md text-sm">Launched a recruitment agency, freelance/contract platform, and a questions & answers platform I helped 2 DACA recipients get a job, helped 6
                students get short term contract jobs (students made $2000 in revenue), had 800
                users, 135 user signups, and 3.5M impressions on IG.</p>
        </li>
        <li className=" ml-4 bg-gray-100 text-blue-600 p-7 rounded-lg">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-semibold text-blue-900 leading-none">2023</time>
            <p className="font-normal md:text-md text-sm">Launch of the service side and launch of entrepreneurship course on August 13.</p>
        </li>
    </ol>
   <h2 className='py-2 md:py-10 md:px-20 px-5 capitalize font-bold text-xl md:text-6xl'>My Business Journey</h2>
</div>;


const about = <div className='md:grid md:grid-cols-2 flex flex-col justify-center items-center p-7 md:px-20'>
    <h2 className='flex items-center py-2 md:py-10 capitalize font-bold text-xl md:text-6xl'>About Me 🧔🏻</h2>
    <div className='p-7 md:text-md text-sm'>
        <p className='pb-5'>Despite facing numerous challenges as an undocumented/DACA immigrant, including epilepsy and a move to the United States at a young age, I have excelled in my studies and career. I started my first business at age 19 and I scaled it to generate $8,000 in earnings to finance my studies at UCLA.</p>
        <p>I have also participated in numerous startup accelerator programs including:</p>
        <ul className='text-white list-disc px-10 pb-5'>
            <li>SEED 2.0 at Caravanserai Project 2023</li>
            <li>Dream Fund at Caravanserai Project 2022</li>
            <li>UCLA Startup Summer Accelerator 2022</li>
            <li>Blackstone Launchpad Summer 2022 Student Entrepeneurship Program</li>
            <li>Pre-Accelerator SEED Lab at Caravanserai Project</li>
            <li>UCLAUNCH Accelerator 2021 at UC Berkeley</li>
        </ul>
        <p>And in total I've raised $27,500 for my business through programs & grants</p>
    </div>
</div>;


const impactSection = <div className='px-7'>
    <h2 className='flex justify-center items-center capitalize font-bold text-xl md:text-6xl pb-5'>my impact in numbers</h2>
    <div className='md:px-20  px-8 flex flex-col md:grid md:grid-cols-3 md:gap-7'>
        {card(<a href='#'><svg className="hover:fill-blue-300 fill-white h-8 w-8 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg></a>, 'Tiktok', '4M+ Views', '18K+ Followers')}
        {card(<a href='#'><svg className="hover:fill-blue-300 fill-white h-8 w-8 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg></a>, 'Youtube', '200K+ Views', '1.6K+ Followers')}
        {card(<a href='#'><svg className="hover:fill-blue-300 fill-white h-8 w-8 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg></a>, 'LinkedIn', '400 Subs', '2.2K+ Followers')}

    </div>
    <div className='flex flex-col md:flex-row justify-center md:gap-[50px] pb-5'>
        {card(<a href='#'><svg className="hover:fill-blue-300 fill-white h-8 w-8 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a>, 'Instagram', '100K+ Views', '2.2K+ Followers')}
        {card(<a href=''><svg className="hover:fill-blue-300 fill-white h-8 w-8 md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M283.2 345.5c2.7 2.7 2.7 6.8 0 9.2-24.5 24.5-93.8 24.6-118.4 0-2.7-2.4-2.7-6.5 0-9.2 2.4-2.4 6.5-2.4 8.9 0 18.7 19.2 81 19.6 100.5 0 2.4-2.3 6.6-2.3 9 0zm-91.3-53.8c0-14.9-11.9-26.8-26.5-26.8-14.9 0-26.8 11.9-26.8 26.8 0 14.6 11.9 26.5 26.8 26.5 14.6 0 26.5-11.9 26.5-26.5zm90.7-26.8c-14.6 0-26.5 11.9-26.5 26.8 0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-11.9 26.8-26.5 0-14.9-11.9-26.8-26.8-26.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-99.7 140.6c-10.1 0-19 4.2-25.6 10.7-24.1-16.7-56.5-27.4-92.5-28.6l18.7-84.2 59.5 13.4c0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-12.2 26.8-26.8 0-14.6-11.9-26.8-26.8-26.8-10.4 0-19.3 6.2-23.8 14.9l-65.7-14.6c-3.3-.9-6.5 1.5-7.4 4.8l-20.5 92.8c-35.7 1.5-67.8 12.2-91.9 28.9-6.5-6.8-15.8-11-25.9-11-37.5 0-49.8 50.4-15.5 67.5-1.2 5.4-1.8 11-1.8 16.7 0 56.5 63.7 102.3 141.9 102.3 78.5 0 142.2-45.8 142.2-102.3 0-5.7-.6-11.6-2.1-17 33.6-17.2 21.2-67.2-16.1-67.2z" /></svg></a>, 'Reddit', '400 Members', '9K+ Followers')}
    </div>
</div>;



function card(tag: string | number | boolean | JSX.Element | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined, title: string, views: string, followers: string) {
    return <div className='rounded-xl py-2 px-10'>
        <div className='flex gap-x-6 justify-center'>
            {tag}
        </div>
        <div className='flex gap-10 pt-5 justify-center items-center'>
            <p className='lg:text-lg md:text-md text-sm font-md'>{views}</p>
            <p className='lg:text-lg md:text-md  text-sm font-md'>{followers}</p>
        </div>
    </div>
}

export default function Home() {
  return (
    <main className='min-h-screen bg-blue-600 text-white'>
        {jumbo}
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse justify-center items-center py-5 px-20'>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 py-3 text-white my-10 text-xl">
                <li className="mb-10 ml-4 bg-gray-100 text-blue-600 p-7 rounded-lg">
                    <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border border-yellow-200"></div>
                    <p className="mb-1 font-normal text-sm leading-none">01</p>
                    <h3 className="md:text-md text-sm font-semibold text-blue-900">Startup Diaries 📖 (100+ Episodes)</h3>
                    <p className="mb-4 font-normal md:text-md text-sm">Day to day learnings from working on my startup every single</p>
                </li>

                <li className="mb-10 ml-4 bg-gray-100 text-blue-600 p-7 rounded-lg">
                    <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border border-yellow-200"></div>
                    <p className="mb-1 font-normal text-sm leading-none">03</p>
                    <h3 className="md:text-md text-sm font-semibold text-blue-900">Leverage Blog 🪜 (22+ Articles)</h3>
                    <p className="mb-4 font-normal md:text-md text-sm">Weekly in depth learnings from working on my startup.</p>
                </li>

                <li className="mb-10 ml-4 bg-gray-100 text-blue-600 p-7 rounded-lg">
                    <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border border-yellow-200"></div>
                    <p className="mb-1 font-normal text-sm leading-none">03</p>
                    <h3 className="md:text-md text-sm font-semibold text-blue-900">Leverage Podcast 📖 (1 Episode)</h3>
                    <p className="mb-4 font-normal md:text-md text-sm">Audio version of the Leverage Blog. Available on Spotify and Apple Podcasts.</p>
                </li>

                <li className="ml-4 bg-gray-100 text-blue-600 p-7 rounded-lg">
                    <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border border-yellow-200"></div>
                    <p className="mb-1 font-normal text-sm leading-none">04</p>
                    <h3 className="md:text-md text-sm font-semibold text-blue-900">Mayarketing (Coming Soon)</h3>
                    <p className="mb-4 font-normal md:text-md text-sm">Marketing lessons from building my company, from mistakes to strategies that work for me.</p>
                </li>
            </ol>
            <h2 className='py-2 md:py-10 md:px-20 px-5 capitalize font-bold text-xl md:text-6xl'>👈 Join My Journey</h2>
            
        </div>
        {about}
        {bizSection}
        {impactSection} 

        <section className='md:px-20 px-10 py-10 md:py-20'>
           <a className="capitalize lg:text-8xl md:text-6xl text-4xl font-extrabold flex justify-center hover:underline hover:underline-offset-4" href="mailto:jmayahern@preparebiz.com">Get in Touch.</a>
        </section>
    
    </main>
  )
}
