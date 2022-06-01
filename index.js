// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = function (IsiListBelanjaan) {
  let iList = [];
  for (let VarListBelanjaan = 0; VarListBelanjaan < IsiListBelanjaan.length; VarListBelanjaan++) {
    let DaftarListBelanjaan = "-" + " " + IsiListBelanjaan[VarListBelanjaan].nama + " x " + IsiListBelanjaan[VarListBelanjaan].kuantitas;
    iList.push(DaftarListBelanjaan);
  }
  return iList;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = function (HasilDariTotal) {
  let iTotal = 0;
  for (let VarTotalBelanjaan = 0; VarTotalBelanjaan < HasilDariTotal.length; VarTotalBelanjaan++) {
    iTotal = HasilDariTotal[VarTotalBelanjaan].harga * HasilDariTotal[VarTotalBelanjaan].kuantitas + iTotal;
  }
  return iTotal;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
