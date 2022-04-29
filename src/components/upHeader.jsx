import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function upHeader() {
  return (
    <div>
      <section>
        <div className="bg-[#f3f3f3]">
          <div className="py-5 px-10">
            <div className="flex justify-end">
              <button className=" hover:opacity-80 flex items-center gap-2 bg-blue-900 px-3 rounded py-2 text-white font-semibold text-xs">
                <MdOutlineArrowBackIosNew size={10} />
                kembali ke Pilihkartu
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default upHeader;
