(function() {
  document.getElementById('beta-btn-1').onclick = function() {
    var emailFieldValue = document.getElementById('email-field-1').value
    if (emailFieldValue === "") { return }
    window.open('https://beta.harmany.me/' + '?email=' + encodeURI(emailFieldValue),
    '_blank');
  }

  document.getElementById('beta-btn-2').onclick = function() {
    var emailFieldValue = document.getElementById('email-field-2').value
    if (emailFieldValue === "") { return }
    window.open('https://beta.harmany.me/' + '?email=' + encodeURI(emailFieldValue),
    '_blank');
  }
})();