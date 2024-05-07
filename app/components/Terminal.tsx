'use client';

import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { Terminal } from 'xterm';
import { FitAddon } from '@xterm/addon-fit';
import 'xterm/css/xterm.css';

const TerminalComponent: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket>();

  useEffect(() => {
    const socket = io('/api/terminal'); // Connect to the '/api/terminal' endpoint
    socketRef.current = socket;

    const terminal = new Terminal();
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    if (terminalRef.current) {
      terminal.open(terminalRef.current);
      fitAddon.fit();
    }

    // Receive terminal output from the server
    socket.on('terminal-output', (data) => {
      console.log('Received terminal output:', data);
      terminal.write(data);
    });

    // Send user input to the server
    terminal.onData((data) => {
      console.log('Sending terminal input:', data);
      socket.emit('terminal-input', data);
    });

    // Handle server disconnection
    socket.on('disconnect', () => {
      console.log('Server disconnected');
      terminal.write('\r\nServer disconnected\r\n');
    });

    return () => {
      socket.disconnect();
      terminal.dispose();
    };
  }, []);

  return <div ref={terminalRef} className="w-full h-96" />;
};

export default TerminalComponent;