function showAlert(alertId) {
   const bootstrapAlert = document.querySelector("#" + alertId);
   const collapse = new bootstrap.Collapse(bootstrapAlert); 
   collapse.show();
}

const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
modalYesBtn.addEventListener("click", function () {    
   const sendBtn = document.querySelector("#send-message-btn");
   sendBtn.style.display = "none";
   showAlert("conf-alert");
});


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
   document.getElementById('liveAlertPlaceholder').hidden= false;
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('send-message-btn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Thank You, We will Contact you soon!', 'success')
  })
}