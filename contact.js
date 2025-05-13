document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();  // Sayfa yenilemesini engelle

    // Form değerlerini al
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const messageValue = document.getElementById('message').value.trim();

    // Konu ve gövde metinlerini hazırla
    const subjectText = `Web İletişim Formu - ${nameValue}`;
    const bodyText =
      `Ad: ${nameValue}\n` +
      `E-posta: ${emailValue}\n` +
      `Mesaj: ${messageValue}`;

    // encodeURIComponent ile URL güvenliği
    const encodedSubject = encodeURIComponent(subjectText);
    const encodedBody = encodeURIComponent(bodyText);

    // mailto linkini oluştur
    const mailtoLink =
      `mailto:altanvuralicmimarlik@gmail.com` +
      `?subject=${encodedSubject}` +
      `&body=${encodedBody}`;

    // E-posta istemcisini aç
    window.location.href = mailtoLink;
  });
});