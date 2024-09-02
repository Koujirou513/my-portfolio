// サイドバーを定義
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen fixed top-10 flex flex-col items-center">
      <h1 className="text-8xl pb-10">My Portfolio</h1>
      <div className="flex-row justify-around">
        <nav className="flex flex-row gap-24 text-xl">
          <a>
            Home
          </a>
          <a>
            About me
          </a>
          <a>
            Works
          </a>
          <a>
            Skills
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;