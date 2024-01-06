let calculation =  localStorage.getItem('calculate') || '';
    
    displayCalculation();

// we use getItem only when we wanrt to rereive our data bacl from localStorage.
// we used getItem only on let calculation because we want to get back our data when required.
//we used setItem on = and reset cause we are saving the data there.

    function updateCalculation (value) {
      calculation += value;
      console.log(calculation);
      displayCalculation();
      localStorage.setItem('calculate',calculation);
    }
    // Optional: you can also create a function in order
      // to reuse this code.
      // simply write saveCalculation in those places.
      // BELOW COMMENTS ---> ARE CODE OPTION
      //function saveCalculation() {
        //localStorage.setItem('calculation', calculation);
      //}

      function displayCalculation() {
        document.querySelector('.js-message').innerHTML = `${calculation}`;
      }