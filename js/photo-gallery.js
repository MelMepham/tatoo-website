$(document).ready(function() {
    $(".lightSlider").each(function() {
      jQuery(this).lightSlider({
          item: 5,
          autoWidth: true,
          autoHeight: true,
          currentPagerPosition: 'bottom',
          loop: true
        });
    })
  });