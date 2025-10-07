import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://uncomplex-pamula-prorealistic.ngrok-free.dev');
}
