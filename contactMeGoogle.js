const scriptURL = 'https://script.google.com/macros/s/AKfycbx-pMtrVIuoQTFI5QUpabjna4oqLjJi_WAMgnFc7P1FUvrzXp95nQTAe1lWRpnHMwkD/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(function(){ msg.innerHTML = ""; }, 3000);
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})