$(function () {
  // Sidebar toggle
  $("#toggleSidebar").click(() => {
    $("#sidebar").addClass("active");
    $("#overlay").addClass("active");
  });
  $("#closeSidebar, #overlay").click(() => {
    $("#sidebar").removeClass("active");
    $("#overlay").removeClass("active");
  });

  // Nav
  $(".sidebar .nav-link").click(function (e) {
    e.preventDefault();
    $(".sidebar .nav-link").removeClass("active");
    $(this).addClass("active");
    $(".page").addClass("d-none");
    $("#" + $(this).data("page")).removeClass("d-none");
    $("#pageTitle").text($(this).text().trim());
    if (window.innerWidth < 992) {
      $("#closeSidebar").click();
    }
  });

  // CRUD Produk
  let indexEdit = null;
  $("#productForm").submit(function (e) {
    e.preventDefault();
    let nama = $("#namaProduk").val();
    let kategori = $("#kategori").val();
    let harga = $("#harga").val();
    let stok = $("#stok").val();
    let gambar =
      $("#gambar").val() ||
      "https://picsum.photos/seed/" + Math.random() + "/60";

    if (indexEdit === null) {
      let rowCount = $("#productTable tr").length + 1;
      $("#productTable").append(`
            <tr>
              <td>${rowCount}</td>
              <td><img src="${gambar}" alt=""></td>
              <td>${nama}</td>
              <td>${kategori}</td>
              <td>${harga}</td>
              <td>${stok}</td>
              <td>
                <button class="btn btn-warning btn-sm edit"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger btn-sm delete"><i class="bi bi-trash"></i></button>
              </td>
            </tr>
          `);
    } else {
      let row = $("#productTable tr").eq(indexEdit);
      row.find("td:eq(1) img").attr("src", gambar);
      row.find("td:eq(2)").text(nama);
      row.find("td:eq(3)").text(kategori);
      row.find("td:eq(4)").text(harga);
      row.find("td:eq(5)").text(stok);
      indexEdit = null;
    }

    $("#productForm")[0].reset();
    $("#productModal").modal("hide");
  });

  // Delete
  $(document).on("click", ".delete", function () {
    $(this).closest("tr").remove();
  });

  // Edit
  $(document).on("click", ".edit", function () {
    let row = $(this).closest("tr");
    indexEdit = row.index();
    $("#namaProduk").val(row.find("td:eq(2)").text());
    $("#kategori").val(row.find("td:eq(3)").text());
    $("#harga").val(row.find("td:eq(4)").text());
    $("#stok").val(row.find("td:eq(5)").text());
    $("#gambar").val(row.find("td:eq(1) img").attr("src"));
    $("#productModal").modal("show");
  });

  // Chart
  new Chart(document.getElementById("salesChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
      datasets: [
        {
          label: "Penjualan (Rp)",
          data: [2000000, 2500000, 1800000, 3000000, 2800000, 3200000],
          borderColor: "#198754",
          backgroundColor: "rgba(25,135,84,0.2)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
  });
  new Chart(document.getElementById("productChart"), {
    type: "doughnut",
    data: {
      labels: ["Sayur", "Buah", "Pupuk", "Bibit"],
      datasets: [
        {
          data: [450, 300, 250, 150],
          backgroundColor: ["#198754", "#28a745", "#6fba82", "#c2f0c2"],
        },
      ],
    },
    options: { plugins: { legend: { position: "bottom" } } },
  });
});
