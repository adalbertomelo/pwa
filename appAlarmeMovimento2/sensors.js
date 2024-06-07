
alarmeAtivado = false;

function ativarAlarme(){
	alarmeAtivado = true;
    // Motion
    if ('DeviceMotionEvent' in window) {
        window.addEventListener('devicemotion', event => {
			var x = event.acceleration.x;
			var y = event.acceleration.y;
			var z = event.acceleration.z;

			document.getElementById('motion-data').innerText = `Acceleration X: ${x}, Y: ${y}, Z: ${z}`;
				if ( (x > 3) || (y > 3) || (z > 3)){
					alert("Moveu x:"+x+" y:"+y+ " z:"+z);
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
