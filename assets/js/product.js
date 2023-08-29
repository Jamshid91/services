const branchs = document.querySelectorAll('.chose-branch-head '),
      choseCenter = document.querySelectorAll('.chose-center-head'),
      faqs = document.querySelectorAll('.faqs-head')


  branchs.forEach(branch => {
    branch.addEventListener('click', () => {
        branch.parentElement.classList.toggle('showBranch')
    })
  });

  choseCenter.forEach(center => {
    center.addEventListener('click', () => {
        center.parentElement.classList.toggle('showCenter')
    })
  });
  

  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.classList.toggle('showFaq')
    })
  });