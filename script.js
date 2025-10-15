document.getElementById("inquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const property = document.getElementById("property").value;
  const message = document.getElementById("message").value;
  
  const phone = "2347035810795";
  const text = `Hello, my name is ${name}. I'm interested in "${property}". ${message}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  
  window.open(url, "_blank");
});