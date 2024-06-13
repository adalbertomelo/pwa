const video = document.getElementById('video');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const recordedVideo = document.getElementById('recordedVideo');

let mediaRecorder;
let recordedChunks = [];

// Solicitar permissão para acessar a câmera
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then((stream) => {
    video.srcObject = stream;

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      recordedChunks = [];
      const url = URL.createObjectURL(blob);
      recordedVideo.src = url;
    };
  })
  .catch((err) => {
    console.error("Erro ao acessar a câmera: ", err);
  });

startButton.addEventListener('click', () => {
  mediaRecorder.start();
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  mediaRecorder.stop();
  startButton.disabled = false;
  stopButton.disabled = true;
});
