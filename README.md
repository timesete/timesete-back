# timesete-back

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDMMRLFWltiU63LOOjwXAjNvTeJ8GALGqw",
    authDomain: "backend-timesete-mundo-diverso.firebaseapp.com",
    projectId: "backend-timesete-mundo-diverso",
    storageBucket: "backend-timesete-mundo-diverso.appspot.com",
    messagingSenderId: "829666527582",
    appId: "1:829666527582:web:ab9410bc0a052bb5f427cf",
    measurementId: "G-DQQR2YWZFG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
<!--  -->

service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\*\*} {
allow read, write: if request.auth != null;
}
}
}
