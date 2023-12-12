<script type="module">
  // Import the functions you need from the SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

  // Web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCrw_CarqkEJ5SEGe6igjSoVHGFgdzy6HE",
    authDomain: "articraft-ea3c6.firebaseapp.com",
    projectId: "articraft-ea3c6",
    storageBucket: "articraft-ea3c6.appspot.com",
    messagingSenderId: "841675948280",
    appId: "1:841675948280:web:daf1cd7082c14f88a27b0d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to database services
  const bd = getDatabase(app);
  document.getElementById("submit").addEventListener('click', function(e){
              e.preventDefault();
              set(ref(db, 'user/' + document.getElementById("username").value),
              {
   
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                PhoneNumber: document.getElementById("phone").value

              });
                alert("Login Sucessfull  !");
             })

</script>