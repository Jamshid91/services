const menu = document.querySelector('.menu-content'),
      menuBtn = document.querySelector('.menu__btn'),
      menuClose = document.querySelector('.menu__close'),
      menuLists = document.querySelectorAll('.menu .header-list div'),
      cityBtn = document.querySelectorAll('.header-city-title'),
      cityPopUp = document.querySelector('.popUp.city'),
      activeCity = document.querySelectorAll('.header-city-title .activ__city'),
      cityPopUpClose = document.querySelector('.popUp.city .popUp__close'),
      cityPopUpLists = document.querySelectorAll('.popUp.city ul li'),
      body = document.querySelector('body')



menuLists.forEach(list => {
    list.addEventListener('click', () => {
        list.parentElement.classList.toggle('showMenu')
    })
})

menuBtn.addEventListener('click', () => {
    menu.classList.remove('d-none')
});

menuClose.addEventListener('click', () => {
    menu.classList.add('d-none')
});


cityBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        cityPopUp.classList.remove('d-none')
    });
})

cityPopUpClose.addEventListener('click', () => {
    cityPopUp.classList.add('d-none')
  });

  cityPopUpClose.addEventListener('click', () => {
    thanksPopUp.classList.add('d-none')
  });
  
  window.addEventListener('click', (e) => {
    if(e.target == cityPopUp) {
        cityPopUp.classList.add('d-none')
    }
  });

  cityPopUpLists.forEach(city => {
    city.addEventListener('click', () => {
        activeCity.forEach(active => {
            active.textContent = city.textContent;
        })
        cityPopUp.classList.add('d-none')
    })
  });

