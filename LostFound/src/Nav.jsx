import React from 'react';
import world from './assets/world.svg';

export default function Nav() {
  return (
    <div className="flex flex-row items-center justify-between  w-full min-h-16 bg-blue-400">
      <div className="flex mx-12 h-full">
        <div className="flex items-center space-x-5 mb-1 cursor-pointer">
          <div className="flex items-center text-3xl text-purple-700 font-bold">
            <a href="/">
              <img src={world} className="w-10" />
            </a>
          </div>
          <p className="text-white text-2xl font-bold rounded-lg px-2 hover:bg-blue-800 hover:backdrop-blur-md transition-all duration-300">
            <a href="/home">Home</a>
          </p>
          <p className="text-white text-2xl font-bold rounded-lg px-2 hover:bg-blue-800 hover:backdrop-blur-md transition-all duration-300">
            <a href="/lost">LostItems</a>
          </p>
          <p className="text-white text-2xl font-bold rounded-lg px-2 hover:bg-blue-800 hover:backdrop-blur-md transition-all duration-300">
            <a href="found">Found</a>
          </p>
          <p className="text-white text-2xl font-bold rounded-lg px-2 hover:bg-blue-800 hover:backdrop-blur-md transition-all duration-300">
            <a href="post">Post for Help</a>
          </p>
        </div>
      </div>
      <div className="flex items-center text-white text-2xl font-bold mr-10">Login <img src="./public/user.png" alt="" className='mx-3 rounded-full w-[60px] p-2' /></div>
    </div>
  );
}
