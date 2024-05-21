// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
// );

// const firebaseConfig = {
//   apiKey: "AIzaSyA8b0Hmsvp0AOFGU_aZPgaDxh9hejhT7cU",
//   authDomain: "fcm-push-d19a2.firebaseapp.com",
//   projectId: "fcm-push-d19a2",
//   storageBucket: "fcm-push-d19a2.appspot.com",
//   messagingSenderId: "925891131633",
//   appId: "1:925891131633:web:ece7fc83d8bd276d445150",
//   measurementId: "G-QLSVS11Q75"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
