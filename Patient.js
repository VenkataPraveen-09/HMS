const form=document.getElementById('form');
const name1=document.getElementById('n1');
const phone=document.getElementById('phn');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const firstName=name1.value;
    const Phone=phone.value;

    localStorage.setItem('first-Name',firstName)
    localStorage.setItem('phn no',Phone)

    console.log("Redirecting to success page");
    window.location.href="Success.html";
})