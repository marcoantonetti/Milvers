  
  function animationEnd() {
    
      const title = document.querySelector('.title2');

    
        title.addEventListener('animationend', (event) => {
            if (event.animationName === 'displayTransition') {
                title.style.display = 'none';
                title.style.color = "red"
            }
        });

  }

  export default animationEnd
