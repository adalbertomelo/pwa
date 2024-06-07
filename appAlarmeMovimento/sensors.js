
alarmeAtivado = false;

function ativarAlarme(){
	alarmeAtivado = true;
    // Motion
    if ('DeviceMotionEvent' in window) {
        window.addEventListener('devicemotion', event => {
			document.getElementById('motion-data').innerText = `Acceleration X: ${event.acceleration.x}, Y: ${event.acceleration.y}, Z: ${event.acceleration.z}`;
				if (  (event.acceleration.x > 1) 
					||(event.acceleration.y > 1) 
					||(event.acceleration.z > 1)){
						alert("Moveu");
				}
        });
    }

}


function desligarAlarme(){
	alarmeAtivado = false;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch(error => console.error('Service Worker registration failed:', error));
}
