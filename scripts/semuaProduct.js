const productContainer = $("#productContainer");
const tombolKembali = $("#KembaliKeBeranda");

const produk = localStorage.getItem("dataProduk") || "[]";
const products = JSON.parse(produk);

tombolKembali.on("click", function () {
  window.history.back();
});

tampilkanProduk(products, productContainer);
