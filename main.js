let annualPricing = true;

const pricingSwitchHandler = () => {
  // annualPricing = !document.getElementById('price-switcher').checked
  // if(annualPricing) {
  //   document.
  // }
  console.log("run")
  document.querySelectorAll('.price-annually').forEach(elem => elem.classList.toggle("hide"))
  document.querySelectorAll('.price-monthly').forEach(elem => elem.classList.toggle("hide"))

}