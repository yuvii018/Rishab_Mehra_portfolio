// Set current year in footer
document.addEventListener('DOMContentLoaded',function(){
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // Simple client-side form handling — send message to WhatsApp
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const message = data.get('message') || '';
      if(!name.trim() || !email.trim() || !message.trim()){
        alert('Please fill in all fields.');
        return;
      }

      // Build WhatsApp URL (international number without + or spaces)
      const waNumber = '919873861146';
      const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

      // Open WhatsApp chat in new tab/window (mobile will open app)
      window.open(url, '_blank');
      form.reset();
    });
  }
});
