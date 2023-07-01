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


  // Mendapatkan elemen input dan tombol pencarian
  const searchInput = document.querySelector('#searchInput');
  const searchBtn = document.querySelector('#searchBtn');

  // Fungsi pencarian
  function search() {
    const searchTerm = searchInput.value;
    // Lakukan sesuatu dengan searchTerm, misalnya mengirimnya ke backend atau melakukan manipulasi DOM
    console.log('Pencarian:', searchTerm);
  }

  // Event listener untuk klik tombol pencarian
  searchBtn.addEventListener('click', search);

  // Ambil elemen-elemen yang diperlukan
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');

  let itemCount = 0;

  // Tambahkan event listener pada tombol cartBtn
  cartBtn.addEventListener('click', function() {
      itemCount++;
      cartCount.textContent = itemCount;
  });