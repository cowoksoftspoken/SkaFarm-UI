const produkUnggulan = [
  {
    id: 1,
    nama: "Garpu Kebun",
    harga: 230000,
    lokasi: "Jakarta Selatan",
    stok: 330,
    terjual: 800,
    rating: 4.5,
    ulasan: 127,
    kategori: "Alat Pembantu",
    gambar: "./assets/sekop-garpu.jpg",
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
  },
  {
    id: 2,
    nama: "Singkal Diesel",
    harga: 25000000,
    lokasi: "Bandung",
    stok: 130,
    terjual: 890,
    rating: 4.0,
    ulasan: 92,
    kategori: "Alat Pembantu",
    gambar: "./assets/singkal.jpg",
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
  },
  {
    id: 3,
    nama: "Wortel Segar (4Kg)",
    harga: 75000,
    lokasi: "Bogor",
    stok: 2100,
    terjual: 234,
    rating: 5,
    ulasan: 243,
    kategori: "Sayuran",
    gambar: "./assets/gambar wortel.jpg",
    thumbnail: [
      "./assets/gambar wortel1.jpg",
      "./assets/gambar wortel2.jpg",
      "./assets/gambar wortel3.jpg",
    ],
  },
  {
    id: 4,
    nama: "Sawi Segar (2Kg)",
    harga: 2250000,
    lokasi: "Surabaya",
    stok: 330,
    terjual: 749,
    rating: 3.5,
    ulasan: 56,
    kategori: "Sayuran",
    gambar: "./assets/sawi.jpg",
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
  },
];

const produkPetani = [
  {
    id: 5,
    nama: "Beras Premium",
    harga: 120000,
    lokasi: "Solo",
    stok: 1000,
    terjual: 2000,
    rating: 5,
    ulasan: 415,
    kategori: "Bahan Pokok",
    gambar: "./assets/images-removebg-preview.png",
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
  },
  {
    id: 6,
    nama: "Bayam",
    harga: 35000,
    lokasi: "Indramayu",
    stok: 240,
    terjual: 590,
    rating: 4,
    ulasan: 178,
    kategori: "Sayuran",
    gambar: "./assets/bayam.jpg",
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
  },
  {
    id: 7,
    nama: "Sawi Segar (4Kg)",
    harga: 225000,
    lokasi: "Lombok",
    stok: 330,
    terjual: 749,
    rating: 3.5,
    ulasan: 56,
    kategori: "Sayuran",
    gambar: "./assets/sawi.jpg",
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
  },
  {
    id: 8,
    nama: "Cangkul Kecil (3 Buah)",
    harga: 300000,
    lokasi: "Malang",
    stok: 60,
    terjual: 1332,
    rating: 4,
    ulasan: 189,
    kategori: "Alat Pembantu",
    gambar: "./assets/cangkul.jpg",
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
  },
  {
    id: 9,
    nama: "Jagung",
    harga: 25000,
    lokasi: "Sidoarjo",
    terjual: 20000,
    rating: 4.5,
    ulasan: 170,
    stok: 4000,
    kategori: "Bahan Pokok",
    gambar: "./assets/jagung.jpg",
    thumbnail: [
      "./assets/jagung1.jpg",
      "./assets/jagung2.jpg",
      "./assets/jagung3.jpg",
    ],
  },
  {
    id: 13,
    nama: "Tomat Segar (1Kg)",
    harga: 25000,
    lokasi: "Surabaya",
    terjual: 20000,
    rating: 4.5,
    ulasan: 170,
    stok: 10000,
    kategori: "Alat Pembantu",
    gambar: "./assets/tomat.jpg",
    thumbnail: [
      "./assets/tomat1.jpg",
      "./assets/tomat2.jpg",
      "./assets/tomat3.jpg",
    ],
  },
  {
    id: 14,
    nama: "Bibit Kakao",
    harga: 25000,
    lokasi: "Surabaya",
    terjual: 20000,
    rating: 5,
    ulasan: 170,
    stok: 10000,
    kategori: "Biji-bijian",
    gambar: "./assets/bibit.jpg",
    thumbnail: [
      "./assets/bibit1.jpg",
      "./assets/bibit2.jpg",
      "./assets/bibit3.jpg",
    ],
  },
];

const semuaProduk = [
  ...produkUnggulan,
  ...produkPetani,
  {
    id: 10,
    nama: "Rotavator",
    harga: 15000000,
    lokasi: "Jakarta",
    terjual: 20000,
    rating: 4.5,
    ulasan: 170,
    stok: 1000,
    kategori: "Alat Pembantu",
    gambar: "./assets/rotavator.jpg",
    thumbnail: [
      "./assets/rotavator1.jpg",
      "./assets/rotavator2.jpg",
      "./assets/rotavator3.jpg",
    ],
  },
  {
    id: 11,
    nama: "Penanam Padi",
    harga: 25000000,
    lokasi: "Jakarta",
    terjual: 20000,
    rating: 4.5,
    ulasan: 170,
    stok: 12000,
    kategori: "Alat Pembantu",
    gambar: "./assets/Penanam Padi (NSPU-68C).jpg",
    thumbnail: [
      "./assets/Penanam Padi (NSPU-68C)1.jpg",
      "./assets/Penanam Padi (NSPU-68C)2.jpg",
    ],
  },
  {
    id: 12,
    nama: "Traktor",
    harga: 120000000,
    lokasi: "Jakarta",
    terjual: 20,
    rating: 5,
    stok: 12,
    ulasan: 159,
    kategori: "Alat Pembantu",
    gambar: "./assets/traktor.jpg",
    thumbnail: [
      "./assets/traktor1.jpg",
      "./assets/traktor2.jpg",
      "./assets/traktor3.jpg",
    ],
  },
  {
    id: 15,
    nama: "Kultivator",
    harga: 100000000,
    lokasi: "Jakarta",
    terjual: 20,
    rating: 5,
    stok: 12,
    ulasan: 150,
    kategori: "Alat Pembantu",
    gambar: "./assets/alat bertani moderen Cultivator _ Kultivator _.jpg",
    thumbnail: [
      "./assets/alat bertani moderen Cultivator _ Kultivator _1.jpg",
      "./assets/alat bertani moderen Cultivator _ Kultivator _2.jpg",
      "./assets/alat bertani moderen Cultivator _ Kultivator _3.jpg",
    ],
  },
  {
    id: 16,
    nama: "Garu Piring",
    harga: 150000000,
    lokasi: "Jakarta",
    terjual: 200,
    rating: 5,
    stok: 12,
    ulasan: 150,
    kategori: "Alat Pembantu",
    gambar: "./assets/alat bertani modern Garu Piring.jpg",
    thumbnail: [
      "./assets/alat bertani modern Garu Piring1.jpg",
      "./assets/alat bertani modern Garu Piring2.jpg",
    ],
  },
  {
    id: 17,
    nama: "Mesin Penanam Benih",
    harga: 130000000,
    lokasi: "Jakarta",
    terjual: 2100,
    rating: 5,
    stok: 12,
    ulasan: 150,
    kategori: "Alat Pembantu",
    gambar: "./assets/alat bertani modern Mesin Penanam Benih.jpg",
    thumbnail: [
      "./assets/alat bertani modern Mesin Penanam Benih1.jpg",
      "./assets/alat bertani modern Mesin Penanam Benih2.jpg",
      "./assets/alat bertani modern Mesin Penanam Benih3.jpg",
    ],
  },
  {
    id: 18,
    nama: "Sawah",
    harga: 230000000,
    lokasi: "Probolinggo",
    terjual: 2,
    rating: 5,
    stok: 12,
    ulasan: 150,
    kategori: "Tanah Subur",
    gambar: "./assets/sawah.jpg",
    thumbnail: [
      "./assets/sawah1.jpg",
      "./assets/sawah2.jpg",
      "./assets/sawah3.jpg",
    ],
  },
];

function tampilkanBintang(rating) {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      star += '<i class="fas fa-star"></i>';
    } else if (i - rating < 1) {
      star += '<i class="fas fa-star-half-alt"></i>';
    } else {
      star += '<i class="far fa-star"></i>';
    }
  }
  return star;
}

const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

function buatProdukCard(produk) {
  return `
      <div class="col-6 col-md-4 col-lg-3 cursor-pointer" data-produk-id="${
        produk.id
      }">
        <div class="card product-card h-85 shadow">
          <div class="w-100 position-relative">
            <img src="${produk.gambar}" class="card-img-top product-img" alt="${
    produk.nama
  }" />
            <span class="badge bg-success-subtle text-success fw-semibold mb-2 position-absolute" style="top: 0; right: 0;">
              ${produk.kategori}
            </span>
          </div>
          <div class="card-body">
            <h5 class="card-title product-title">${produk.nama}</h5>
            <p class="product-price">${formatRupiah.format(produk.harga)}</p>
            <p class="product-location">
              <i class="fa-solid fa-location-dot text-success"></i> ${
                produk.lokasi
              }
            </p>
            <p class="product-rating">
              ${tampilkanBintang(produk.rating)}
              <span class="ms-1">(${produk.ulasan})</span>
            </p>
            <p class="text-sm text-gray">Stok: ${produk.stok} | Terjual: ${
    produk.terjual
  }</p>
          </div>
        </div>
      </div>
    `;
}

function tampilkanProduk(listProduk, container) {
  container.empty();
  listProduk.forEach((produk) => {
    container.append(buatProdukCard(produk));
  });
}

function tampilkanSaran(keyword, selector) {
  const hasil = semuaProduk
    .filter((produk) =>
      produk.nama.toLowerCase().includes(keyword.toLowerCase())
    )
    .slice(0, 5);
  const list = $(selector);
  list.empty();

  if (hasil.length === 0 || keyword.length === 0) {
    list.addClass("d-none");
    return;
  }

  hasil.forEach((produk) => {
    list.append(`
      <li class="list-group-item list-group-item-action" data-id="${produk.id}" style="background: var(--light)">
        ${produk.nama}
      </li>
    `);
  });

  list.removeClass("d-none");
}

function ambilKeranjang() {
  const data = localStorage.getItem("keranjang");
  return data ? JSON.parse(data) : [];
}

function simpanKeranjang(data) {
  localStorage.setItem("keranjang", JSON.stringify(data));
}

function updateBadgeKeranjang() {
  const keranjang = ambilKeranjang();
  const jumlah = keranjang.reduce((total, item) => total + item.qty, 0);
  const badge = $("#cartBadge");

  if (jumlah > 0) {
    badge.removeClass("d-none").text(jumlah);
  } else {
    badge.addClass("d-none");
  }
}

function tampilkanKeranjang() {
  const keranjang = ambilKeranjang();
  let totalHarga = 0;
  let jumlahProduk = 0;
  let isiHTML = "";

  if (keranjang.length === 0) {
    isiHTML = `<p class="text-center text-muted">Keranjang kosong</p>`;
    updateBadgeKeranjang();
    $("#cartContent").html(isiHTML);
    $("#jumlahTerpilih").text(0);
    $("#totalHarga").text("0");
    $("#checkOut").prop("disabled", true).text("Checkout");
    return;
  }

  keranjang.forEach((p) => {
    totalHarga += p.qty * p.harga;
    jumlahProduk += p.qty;

    isiHTML += `
      <div class="d-flex align-items-start mb-3 cart-product" data-id="${p.id}" data-price="${p.harga}">
        <input type="checkbox" class="form-check-input me-2 cart-check" checked />
        <img src="${p.img}" alt="${p.nama}" class="img-thumbnail me-3" style="width: 80px; height: 80px; object-fit: cover;" />
        <div class="flex-grow-1">
          <h6 class="mb-1">${p.nama}</h6>
          <p class="small text-muted mb-1">
            <i class="fas fa-location-dot text-success me-1"></i> ${p.lokasi}
          </p>
          <div class="d-flex align-items-center justify-content-between mb-2">
            <button class="btn btn-sm btn-outline-danger btn-delete"><i class="fas fa-trash me-1"></i> Hapus</button>
            <div class="d-flex align-items-center">
              <button class="btn btn-outline-secondary btn-sm minus me-2"><i class="fas fa-minus"></i></button>
              <span class="count">${p.qty}</span>
              <button class="btn btn-outline-secondary btn-sm plus ms-2"><i class="fas fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  updateBadgeKeranjang();
  $("#cartContent").html(isiHTML);
  $("#jumlahTerpilih").text(jumlahProduk);
  $("#totalHarga").text(totalHarga.toLocaleString("id-ID"));
  updateTotal();
}

function updateTotal() {
  let total = 0,
    count = 0;
  $("#cartContent .cart-product").each(function () {
    const checked = $(this).find(".cart-check").prop("checked");
    if (checked) {
      count++;
      const price = parseInt($(this).data("price"));
      const qty = parseInt($(this).find(".count").text());
      total += price * qty;
    }
  });

  $("#totalHarga").text(total.toLocaleString("id-ID"));
  $("#jumlahTerpilih").text(count);
  $("#checkOut")
    .prop("disabled", count === 0)
    .text(count > 0 ? `Checkout (${count})` : "Checkout");
}

function getProductId(element) {
  return parseInt($(element).closest(".cart-product").data("id"));
}

$(document).ready(function () {
  const containerProdukUnggulan = $("#produkUnggulan");
  const containerProdukPetani = $("#produkPetani");
  const containerSemuaProduk = $("#semuaProduk");

  tampilkanProduk(produkUnggulan, containerProdukUnggulan);
  tampilkanProduk(produkPetani, containerProdukPetani);
  tampilkanProduk(semuaProduk, containerSemuaProduk);

  localStorage.setItem("dataProduk", JSON.stringify(semuaProduk));

  $(document).on("click", ".product-card", function () {
    const id = $(this).closest("[data-produk-id]").data("produk-id");
    const baseUrl = window.location.pathname.split("/")[1];
    window.location.href = `/${baseUrl}/detailProduct.html?id=${id}`;
  });
});

$(document).ready(function () {
  tampilkanKeranjang();
});

$(document).ready(function () {
  $(document).on("click", "#openCart", function (event) {
    event.preventDefault();
    $("#cartContainer").toggleClass("show");
  });

  $(document).on("click", "#closeCart", function () {
    $("#cartContainer").removeClass("show");
  });

  $(document).on("click", "#fullScreenCart", function () {
    $("#cartContainer").toggleClass("fullScreen");
  });

  $(document).on("click", "#addCart", function () {
    const id = parseInt($(this).data("id"));
    const nama = $(this).data("name");
    const lokasi = $(this).data("location");
    const harga = parseInt($(this).data("price"));
    const img = $(this).data("img");
    const qty = parseInt($(this).attr("data-quantity")) || 1;

    let keranjang = ambilKeranjang();
    const udahAda = keranjang.find((item) => item.id === id);
    if (udahAda) {
      udahAda.qty += qty;
    } else {
      keranjang.push({ id, nama, lokasi, harga, img, qty: qty });
    }

    simpanKeranjang(keranjang);
    tampilkanKeranjang();
    $("#cartContainer").addClass("show");
    updateTotal();
  });

  $(document).on("click", ".plus", function () {
    const id = parseInt($(this).closest(".cart-product").data("id"));
    const keranjang = ambilKeranjang();
    const produk = keranjang.find((item) => item.id === id);
    if (produk) produk.qty += 1;
    simpanKeranjang(keranjang);
    tampilkanKeranjang();
  });

  $(document).on("click", ".minus", function () {
    const id = parseInt($(this).closest(".cart-product").data("id"));
    const keranjang = ambilKeranjang();
    const produk = keranjang.find((item) => item.id === id);
    if (produk && produk.qty > 1) {
      produk.qty -= 1;
      simpanKeranjang(keranjang);
      tampilkanKeranjang();
    }
  });

  $(document).on("click", ".btn-delete", function () {
    const id = parseInt($(this).closest(".cart-product").data("id"));
    let keranjang = ambilKeranjang();
    keranjang = keranjang.filter((k) => k.id !== id);
    simpanKeranjang(keranjang);
    tampilkanKeranjang();
  });

  $(document).on("change", ".cart-check", function () {
    const id = getProductId(this);
    const keranjang = ambilKeranjang();
    const item = keranjang.find((p) => p.id === id);
    item.checked = $(this).is(":checked");
    updateTotal();
  });

  $("#pilihSemua").click(() => {
    const keranjang = ambilKeranjang();
    const semuaDicentang = keranjang.every((p) => p.checked);
    keranjang.forEach((p) => (p.checked = !semuaDicentang));
    tampilkanKeranjang();
    updateTotal();
  });

  $("#hapusSemua").click(() => {
    localStorage.removeItem("keranjang");
    tampilkanKeranjang();
    updateTotal();
  });
});

$(document).ready(function () {
  $("#inputSearchDesktop").on("input", function () {
    const keyword = $(this).val().trim();
    tampilkanSaran(keyword, "#saranSearchDesktop");
  });

  $("#saranSearchDesktop").on("click", "li", function () {
    const id = $(this).data("id");
    const baseUrl = window.location.pathname.split("/")[1];
    window.location.href = `/${baseUrl}/detailProduct.html?id=${id}`;
  });

  $("#inputSearchMobile").on("input", function () {
    const keyword = $(this).val().trim();
    tampilkanSaran(keyword, "#saranSearchMobile");
  });

  $("#saranSearchMobile").on("click", "li", function () {
    const id = $(this).data("id");
    const baseUrl = window.location.pathname.split("/")[1];
    window.location.href = `/${baseUrl}/detailProduct.html?id=${id}`;
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest("#inputSearchDesktop,#saranSearchDesktop").length
    ) {
      $("#saranSearchDesktop").addClass("d-none");
    }
    if (!$(e.target).closest("#inputSearchMobile, #saranSearchMobile").length) {
      $("#saranSearchMobile").addClass("d-none");
    }
  });
});

$(document).ready(function () {
  const popup = $("#popupRefer");
  const searchBtn = $("#searchPopupBtn");

  searchBtn.on("click", function (e) {
    e.stopPropagation();
    popup.toggleClass("show");
  });

  $(window).on("resize", function () {
    if ($(this).width() >= 560) {
      popup.removeClass("show");
    }
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest("#popupRefer, #searchPopupBtn").length) {
      popup.removeClass("show");
    }
  });
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

  tampilkanProduk(hasilFilter, $("#semuaProduk"));

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

  tampilkanProduk(semuaProduk, $("#semuaProduk"));

  const popup = bootstrap.Modal.getInstance(
    document.getElementById("filterModal")
  );
  popup.hide();
});
