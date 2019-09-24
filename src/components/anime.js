export default Vue.component('anime', {
  template: '#anime',
  data() {
    return {
      data: '100',
    }
  },
  mounted() {

    anime({
      targets: '.demo1',
      translateX: 250,
      loop: true
    });

    anime({
      targets: '.demo2',
      width: '100%',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });

    anime({
      targets: '.demo3',
      loop: true,
      translateX: 500
    });


    var logEl = document.querySelector('.demo4');

    var battery = {
      charged: '0%',
      cycles: 120
    }

    anime({
      targets: battery,
      charged: '100%',
      cycles: 130,
      round: 1,
      loop: true,
      easing: 'linear',
      update: function() {
        logEl.innerHTML = JSON.stringify(battery);
      }
    });

    anime({
      targets: '.demo5',
      loop: true,
      translateX: 250,
      scale: 2,
      duration: 3000,
      rotate: '1turn'
    });



    anime({
      targets: '.demo6',
      translateX: {
        value: 500,
        duration: 800
      },
      loop: true,
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250
    });

    anime({
      targets: '.demo7',
      translateX: 270,
      direction: 'alternate',
      loop: true,
      delay: function(el, i, l) {
        return i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      }
    });


  }
})
