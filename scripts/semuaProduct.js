const productContainer = $("#productContainer");
const tombolKembali = $("#KembaliKeBeranda");

const produk = localStorage.getItem("dataProduk") || "[]";
const products = JSON.parse(produk);

tombolKembali.on("click", function () {
  window.history.back();
});

$("#filterForm").on("submit", function (event) {
  event.preventDefault();
  const hargaMinimal = parseInt($("#hargaMin").val()) || 0;
  const hargaMaximal = parseInt($("#hargaMax").val()) || Infinity;
  const ratingMinimal = parseFloat($("#ratingMin").val()) || 0;
  const urutkanBerdasarkan = $("#sortBy").val();
  let hasilFilter = semuaProduk.filter((produk) => {
    return (
      produk.harga >= hargaMinimal &&
      produk.harga <= hargaMaximal &&
      produk.rating >= ratingMinimal
    );
  });

  switch (urutkanBerdasarkan) {
    case "termurah":
      hasilFilter.sort((a, b) => a.harga - b.harga);
      break;
    case "termahal":
      hasilFilter.sort((a, b) => b.harga - a.harga);
      break;
    case "terlaris":
      hasilFilter.sort((a, b) => b.terjual - a.terjual);
      break;
    case "rating":
      hasilFilter.sort((a, b) => b.rating - a.rating);
      break;
  }

  tampilkanProduk(hasilFilter, $(productContainer));

  const popup = bootstrap.Modal.getInstance(
    document.getElementById("filterModal")
  );
  popup.hide();
});

$("#resetFilter").on("click", function () {
  $("#hargaMin").val("");
  $("#hargaMax").val("");
  $("#ratingMin").val("0");
  $("#sortBy").val("terbaru");

  tampilkanProduk(semuaProduk, $(productContainer));

  const popup = bootstrap.Modal.getInstance(
    document.getElementById("filterModal")
  );
  popup.hide();
});

tampilkanProduk(products, productContainer);
