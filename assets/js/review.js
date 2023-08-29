const faqs = document.querySelectorAll('.faqs-head')

  

  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.classList.toggle('showFaq')
    })
  });

$(document).ready(function() {
    $('.filter-box').hide();
    $('.filter-box:first-child').show();
    $('.filter__btn').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.filter-box').hide();
      $('.' + pageInfo).show();
    })
  });


  $(function () {
    $('.input--tel').mask('+7 (999) 999-99-99');
    
    $('.input--tel').on('focus', function () {
       if ($(this).val().length === 0) {
         $(this).val('+7 (');
       }
    });
  });