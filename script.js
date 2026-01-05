document.getElementById('contactForm').addEventListener('submit', function(e)
 {
    e.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;
    
    alert('Gracias ' + nombre + '! Tu mensaje ha sido enviado.');
    
    document.getElementById('contactForm').reset();
});