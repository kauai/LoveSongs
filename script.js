$(document).ready(function(){
    $('.title').click(function(){
      $('.container').addClass('open');
      setTimeout(() => {
          document.querySelector('.container-video').innerHTML =`
          <div class="elasticMedia-container">
              <iframe class="elasticMedia" src="https://player.vimeo.com/video/285149242?autoplay=1?fullscreen=1" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        `
      },15000)
      $('.title-2').css({top:'300px'})
    });
    
    
    $('.close').click(function(){
      $('.container').removeClass('open');
    });
  });