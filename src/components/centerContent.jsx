import React from "react";
import icon1 from "../assets/icon_1.png";
import icon2 from "../assets/icon_2.png";
import icon3 from "../assets/icon_3.png";
import icon4 from "../assets/icon_4.png";
import icon5 from "../assets/icon_5.png";
import icon6 from "../assets/icon_6.png";

function CenterContent() {
  return (
    <div className="py-5">
      {/* top section */}
      <div className="flex justify-center pb-5">
        <p className="font-bold text-2xl">
          {" "}
          keuntungan mendaftar{" "}
          <span className="text-blue-900"> AXA life Indonesia </span> di
          Pilihkartu
        </p>
      </div>
      <div className="flex justify-center text-xs">
        <div className="grid grid-cols-2 gap-5">
          <div className=" justify-end ">
            <div className="flex gap-2">
              {" "}
              <p>
                {" "}
                Diberikan gratis secara cuma-cuma tanpa premi.
                <span className="font-bold"> PREMI : RP. 0,- (NOL RUPIAH)</span>
              </p>
              <img src={icon1} width={20} height={20} alt="icons-1" />
            </div>
            <div className="flex gap-2">
              <p>
                {" "}
                santunan meninggal dunia akibat kecelkaan sebesar
                <span className="font-bold">
                  {" "}
                  Rp 25.000.000,- (dua puluh lima juta rupiah).
                </span>
              </p>
              <img src={icon2} width={20} height={20} alt="icons-2" />
            </div>
            <div className="flex gap-2">
              <p>
                {" "}
                perlindungan
                <span className="font-bold"> Asuransi GRATIS </span>
                akan diberikan kepada pemegang kartu kredit yang mendaftar
                program AXA Care Protection melalui Pilihkartu.com
              </p>
              <img src={icon3} width={20} height={20} alt="icons-3" />
            </div>
          </div>
          <div className="justify-start ">
            <div className="flex gap-2">
              <img src={icon4} width={20} height={20} alt="icons-4" />
              <p>
                {" "}
                Diberikan gratis secara cuma-cuma tanpa premi.
                <span className="font-bold"> PREMI : RP. 0,- (NOL RUPIAH)</span>
              </p>
            </div>
            <div className="flex gap-2">
              <img src={icon5} width={20} height={20} alt="icons-5" />
              <p>
                {" "}
                Diberikan gratis secara cuma-cuma tanpa premi.
                <span className="font-bold"> PREMI : RP. 0,- (NOL RUPIAH)</span>
              </p>
            </div>
            <div className="flex gap-2">
              <img src={icon6} width={20} height={20} alt="icons-6" />
              <p>
                {" "}
                <span className="font-bold"> Bukan Penawran </span> melainkan
                pemberian
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterContent;
