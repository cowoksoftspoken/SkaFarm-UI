$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const idProduk = parseInt(urlParams.get("id"));

  const dataProduk = JSON.parse(localStorage.getItem("dataProduk") || "[]");

  const produk = dataProduk.find((p) => p.id === idProduk);

  if (!produk)
    $("main").html(
      "<div class='alert alert-danger'>Produk Tidak Ditemukan</div>"
    );

  function updateAddCartQty(qty) {
    $("#addCart").attr("data-quantity", qty);
  }

  $(".image-utama").attr("src", produk.gambar).attr("alt", produk.nama);
  $("#judulProduk").text(produk.nama);
  $(".breadcrumb-item.active").text(produk.nama);
  $(".product-location").html(
    `<i class="fas fa-location-dot text-success"></i> ${produk.lokasi}`
  );
  $("#hargaDiskon").first().text(formatRupiah.format(produk.harga));
  $("#stok").text(`Stok: ${produk.stok} Tersedia`);
  $("#addCart")
    .attr("data-id", produk.id)
    .attr("data-name", produk.nama)
    .attr("data-location", produk.lokasi)
    .attr("data-price", produk.harga)
    .attr("data-img", produk.gambar);

  $("#produkDetail").html(`
      <div class="d-flex align-items-center gap-1">
      <div class="text-warning">
    ${tampilkanBintang(produk.rating)}
     </div>
     <span class="text-gray">(${produk.ulasan} ulasan)</span>
    </div>
      <span class="mx-2">•</span>
      <span>${produk.terjual} Terjual</span>
    `);

  $(".breadcrumb-item").eq(2).text(produk.kategori);

  const persenDiskon = 0.2;
  const hargaAsli = produk.harga / (1 - persenDiskon);
  $("#hargaAsli").text(formatRupiah.format(hargaAsli));
  $(".badge-diskon").text(`Diskon ${persenDiskon * 100}%`);

  const thumbnailContainer = $(".image-thumbnail-container");
  thumbnailContainer.empty();
  produk.thumbnail.forEach((thumb) => {
    thumbnailContainer.append(`
    <img src="${thumb}" class="rounded border image-thumbnail" />
  `);
  });

  $(document).on("click", ".image-thumbnail", function () {
    const src = $(this).attr("src");
    $(".image-utama").attr("src", src);
  });

  $(document).on("click", "#shareProduk", function () {
    navigator
      .share({
        title: produk.nama,
        url: window.location.href,
      })
      .then(function () {
        console.log("Share Success");
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  $("#plus").click(function () {
    const val = parseInt($("#inputProduk").val()) || 1;
    if (val < produk.stok) {
      $("#inputProduk").val(val + 1);
      updateAddCartQty(val + 1);
    }
  });

  $("#mines").click(function () {
    const val = parseInt($("#inputProduk").val()) || 1;
    if (val > 1) {
      $("#inputProduk").val(val - 1);
      updateAddCartQty(val - 1);
    }
  });

  $(".star").on("mouseenter", function () {
    const val = $(this).data("value");
    $(".star").each(function () {
      if ($(this).data("value") <= val) {
        $(this).addClass("hover");
      } else {
        $(this).removeClass("hover");
      }
    });
  });

  $(".star").on("mouseleave", function () {
    $(".star").removeClass("hover");
  });

  $(".star").on("click", function () {
    const val = $(this).data("value");
    $("#ratingValue").val(val);
    $(".star").each(function () {
      if ($(this).data("value") <= val) {
        $(this).addClass("selected");
      } else {
        $(this).removeClass("selected");
      }
    });
  });

  $("#formUlasan").on("submit", function (e) {
    e.preventDefault();

    const rating = $("#ratingValue").val();
    const komentar = $("#komentar").val();
    const fileInput = $("#fotoUlasan")[0];
    const foto = fileInput.files.length > 0 ? fileInput.files[0] : null;

    console.log("Rating:", rating);
    console.log("Komentar:", komentar);
    console.log("Foto:", foto);
    this.reset();
    $(".star").removeClass("selected");
    $("#modalUlasan").modal("hide");
  });
});
