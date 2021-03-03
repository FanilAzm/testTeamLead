;
// Начинать писать отсюда!!!!

$(document).ready(function(){

  // Bg-video

  $('.video-bg').vide('static/video/ocean');

  // Slider

	$('.js-slider').slick({
  speed: 500,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  });

  // Timer

  const timer = (id, deadline) => {
    const addZero = (num) => {
      if(num <= 9) {
        return '0' + num;
      } else {
        return num;
      }
    }
  
    const getTimeRemaining = (endtime) => {
      const time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time/1000) % 60),
            minutes = Math.floor((time/1000/60) % 60),
            hours = Math.floor((time/1000/60/60) % 24),
            days = Math.floor((time/(1000 * 60 * 60 * 24)));
  
      return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      }
    }
  
    const setClock = (selector, endtime) => {
      const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
  
      updateClock();
            
      function updateClock() {
        const time = getTimeRemaining(endtime);
  
        days.textContent = addZero(time.days);
        hours.textContent = addZero(time.hours);
        minutes.textContent = addZero(time.minutes);
        seconds.textContent = addZero(time.seconds);
  
        if(time.total <= 0) {
          days.textContent = '00';
          hours.textContent = '00';
          minutes.textContent = '00';
          seconds.textContent = '00';
  
          clearInterval(timeInterval);
        }
      }
    }
    setClock(id, deadline);
  }
  
  const deadline = '2021-03-15';
  
  timer('container1', deadline);

  // Validate phone

  $("#phone").on('input', function(e){
    this.value = this.value.replace(/[^0-9\.]/g, '');
  });

  // Scroll

  $('.scroll-link').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

});