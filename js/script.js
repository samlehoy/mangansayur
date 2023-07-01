// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

                // Fungsi untuk menambahkan item ke keranjang
                function addToCart() {
                  var cartCountElement = document.getElementById("cartCount");
                  var cartCount = parseInt(cartCountElement.innerHTML);
                  cartCount++;
                  cartCountElement.innerHTML = cartCount;
              }
          
              // Fungsi untuk menambahkan item ke favorit
              function addToFavorite() {
                  var favCountElement = document.getElementById("favCount");
                  var favCount = parseInt(favCountElement.innerHTML);
                  favCount++;
                  favCountElement.innerHTML = favCount;
              }
          
              // Fungsi untuk melakukan pencarian
              function search() {
                  // Implementasikan logika pencarian sesuai kebutuhan Anda
                  console.log("Melakukan pencarian...");
              }
          
              // Tambahkan event listener untuk tombol keranjang
              var cartBtn = document.getElementById("cartBtn");
              cartBtn.addEventListener("click", addToCart);
          
              // Tambahkan event listener untuk tombol favorit
              var favBtn = document.getElementById("favBtn");
              favBtn.addEventListener("click", addToFavorite);
          
              // Tambahkan event listener untuk tombol pencarian
              var searchBtn = document.getElementById("searchBtn");
              searchBtn.addEventListener("click", search);