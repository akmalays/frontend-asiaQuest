import React from "react";
import UpHeader from "../components/upHeader";
import BottomHeader from "../components/bottomHeader";

function Mainroute() {
  return (
    <div>
      <div className="bg-blue-900 h-7"></div>
      <UpHeader />
      <BottomHeader />
      <div className="bg-blue-900 h-10">
        <div className="pl-10 text-white py-3">
          <p className="text-xs">
            Copyright © 2017 Pilihkartucom and AXA All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mainroute;
