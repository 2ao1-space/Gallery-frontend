import { useState } from "react";
import MenuBoard from "./MenuBoard";

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuBtn = function () {
    setOpenMenu(true);
  };

  const closeMenuBtn = function () {
    setOpenMenu(false);
  };
  return (
    <>
      <button
        onClick={openMenuBtn}
        className="absolute top-4 right-4 font-Losta_Masta text-main transition-all duration-500 hover:text-black"
      >
        Menu
      </button>
      {openMenu && <MenuBoard closeMenuBtn={closeMenuBtn} />}
    </>
  );
}
