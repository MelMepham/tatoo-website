$(document).ready(function() {
    $(".lightSlider").each(function() {
      console.log('not ready yet')
      jQuery(this).lightSlider({
          item: 5,
          autoWidth: true,
          autoHeight: true,
          currentPagerPosition: 'bottom',
          loop: true
        });
    })
  });