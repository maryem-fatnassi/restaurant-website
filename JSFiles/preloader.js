window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        AOS.init(
          {
            duration:2500,
         }
        );
    }, 4000);
});