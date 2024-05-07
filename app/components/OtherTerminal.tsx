'use client';

import { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

const OtherTerminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminal = useRef<Terminal>();
  const [directories, setDirectories] = useState<string[]>(['directory1']);
  const [files, setFiles] = useState<string[]>(['file1.txt', 'file2.txt']);

  useEffect(() => {
    if (terminalRef.current) {
      terminal.current = new Terminal();
      terminal.current.open(terminalRef.current);
      terminal.current.write('Welcome to the Linux Terminal!\r\n');
      terminal.current.write('$ ');

      const fitAddon = new FitAddon();
      terminal.current.loadAddon(fitAddon);
      fitAddon.fit();

      let currentCommand = '';

      terminal.current.onKey((e) => {
        const printable = !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;

        if (e.domEvent.keyCode === 13) {
          // Enter key
          terminal.current?.write('\r\n');
          processCommand(currentCommand);
          currentCommand = '';
          terminal.current?.write('$ ');
        } else if (e.domEvent.keyCode === 8) {
          // Backspace key
          if (terminal.current && terminal.current.buffer.active.cursorX > 2) {
            terminal.current.write('\b \b');
            currentCommand = currentCommand.slice(0, -1);
          }
        } else if (printable) {
          terminal.current?.write(e.key);
          currentCommand += e.key;
        }
      });
    }

    return () => {
      if (terminal.current) {
        terminal.current.dispose();
        setDirectories(['directory1']);
        setFiles(['file1.txt', 'file2.txt']);
      }
    };
  }, []);

  const processCommand = (command: string) => {
    if (terminal.current) {
      const [cmd, ...args] = command.trim().split(' ');

      switch (cmd) {
        case 'ls':
          const showHidden = args.includes('-a') || args.includes('--all');
          const showLong = args.includes('-l') || args.includes('--long');
          let output = files.join(' ') + ' ' + directories.join(' ') + '\r\n';
          if (showHidden) {
            output += '.hidden_file\r\n';
          }
          if (showLong) {
            output = files.map(file => `-rw-r--r-- 1 user group 1024 Jun 1 12:00 ${file}`).join('\r\n') + '\r\n' +
                     directories.map(dir => `drwxr-xr-x 2 user group 4096 Jun 3 09:45 ${dir}`).join('\r\n') + '\r\n';
            if (showHidden) {
              output += '-rw------- 1 user group 512 Jun 4 18:20 .hidden_file\r\n';
            }
          }
          terminal.current.write(output);
          break;

        case 'cd':
          const directory = args[0] || '~';
          if (directories.includes(directory)) {
            terminal.current.write(`Changing directory to ${directory}\r\n`);
          } else {
            terminal.current.write(`Directory not found: ${directory}\r\n`);
          }
          break;

        case 'pwd':
          terminal.current.write('/home/user\r\n');
          break;

        case 'mkdir':
          const newDirectory = args[0];
          if (newDirectory) {
            if (!directories.includes(newDirectory)) {
              setDirectories([...directories, newDirectory]);
              terminal.current.write(`Creating directory ${newDirectory}\r\n`);
            } else {
              terminal.current.write(`Directory already exists: ${newDirectory}\r\n`);
            }
          } else {
            terminal.current.write('Please specify a directory name\r\n');
          }
          break;

        case 'touch':
          const newFile = args[0];
          if (newFile) {
            if (!files.includes(newFile)) {
              setFiles([...files, newFile]);
              terminal.current.write(`Creating file ${newFile}\r\n`);
            } else {
              terminal.current.write(`File already exists: ${newFile}\r\n`);
            }
          } else {
            terminal.current.write('Please specify a file name\r\n');
          }
          break;

        case 'rm':
          const fileToRemove = args[0];
          if (fileToRemove) {
            if (files.includes(fileToRemove)) {
              setFiles(files.filter(file => file !== fileToRemove));
              terminal.current.write(`Removing file ${fileToRemove}\r\n`);
            } else {
              terminal.current.write(`File not found: ${fileToRemove}\r\n`);
            }
          } else {
            terminal.current.write('Please specify a file to remove\r\n');
          }
          break;

        case 'cat':
          const fileToDisplay = args[0];
          if (fileToDisplay) {
            if (files.includes(fileToDisplay)) {
              terminal.current.write(`Displaying contents of ${fileToDisplay}:\r\n`);
              terminal.current.write('This is the content of the file.\r\n');
            } else {
              terminal.current.write(`File not found: ${fileToDisplay}\r\n`);
            }
          } else {
            terminal.current.write('Please specify a file to display\r\n');
          }
          break;

        case 'echo':
          const text = args.join(' ');
          terminal.current.write(`${text}\r\n`);
          break;

        case 'clear':
          terminal.current.clear();
          break;

        case 'whoami':
          terminal.current.write('user\r\n');
          break;

        case 'date':
          const currentDate = new Date().toLocaleString();
          terminal.current.write(`${currentDate}\r\n`);
          break;

        case 'help':
          terminal.current.write('Available commands:\r\n');
          terminal.current.write('- ls [-a, --all] [-l, --long]: List files and directories\r\n');
          terminal.current.write('- cd [directory]: Change directory\r\n');
          terminal.current.write('- pwd: Print working directory\r\n');
          terminal.current.write('- mkdir <directory>: Create a new directory\r\n');
          terminal.current.write('- touch <file>: Create a new file\r\n');
          terminal.current.write('- rm <file>: Remove a file\r\n');
          terminal.current.write('- cat <file>: Display file contents\r\n');
          terminal.current.write('- echo <text>: Print text to the terminal\r\n');
          terminal.current.write('- clear: Clear the terminal screen\r\n');
          terminal.current.write('- whoami: Print the current user\r\n');
          terminal.current.write('- date: Print the current date and time\r\n');
          terminal.current.write('- help: Show available commands\r\n');
          break;
          case 'cp':
        const sourceFile = args[0];
        const destinationFile = args[1];
        if (sourceFile && destinationFile) {
          if (files.includes(sourceFile)) {
            setFiles([...files, destinationFile]);
            terminal.current.write(`Copied ${sourceFile} to ${destinationFile}\r\n`);
          } else {
            terminal.current.write(`File not found: ${sourceFile}\r\n`);
          }
        } else {
          terminal.current.write('Please specify source and destination files\r\n');
        }
        break;

      case 'mv':
        const oldFile = args[0];
        const newFile2 = args[1];
        if (oldFile && newFile2) {
          if (files.includes(oldFile)) {
            setFiles(files.map(file => file === oldFile ? newFile : file));
            terminal.current.write(`Renamed ${oldFile} to ${newFile2}\r\n`);
          } else {
            terminal.current.write(`File not found: ${oldFile}\r\n`);
          }
        } else {
          terminal.current.write('Please specify old and new file names\r\n');
        }
        break;

      case 'head':
        const fileToHead = args[0];
        if (fileToHead) {
          if (files.includes(fileToHead)) {
            terminal.current.write(`Displaying first 10 lines of ${fileToHead}:\r\n`);
            terminal.current.write('This is the content of the file.\r\n');
          } else {
            terminal.current.write(`File not found: ${fileToHead}\r\n`);
          }
        } else {
          terminal.current.write('Please specify a file\r\n');
        }
        break;

      case 'tail':
        const fileToTail = args[0];
        if (fileToTail) {
          if (files.includes(fileToTail)) {
            terminal.current.write(`Displaying last 10 lines of ${fileToTail}:\r\n`);
            terminal.current.write('This is the content of the file.\r\n');
          } else {
            terminal.current.write(`File not found: ${fileToTail}\r\n`);
          }
        } else {
          terminal.current.write('Please specify a file\r\n');
        }
        break;

      case 'chmod':
        const permissions = args[0];
        const fileToChmod = args[1];
        if (permissions && fileToChmod) {
          if (files.includes(fileToChmod)) {
            terminal.current.write(`Changing permissions of ${fileToChmod} to ${permissions}\r\n`);
          } else {
            terminal.current.write(`File not found: ${fileToChmod}\r\n`);
          }
        } else {
          terminal.current.write('Please specify permissions and file\r\n');
        }
        break;

      case 'man':
        const command = args[0];
        if (command) {
          terminal.current.write(`Displaying manual page for ${command}:\r\n`);
          terminal.current.write('This is the manual page for the command.\r\n');
        } else {
          terminal.current.write('Please specify a command\r\n');
        }
        break;

        default:
          terminal.current.write(`Command not found: ${cmd}\r\n`);
      }
    }
  };

  return <div ref={terminalRef} style={{ width: '100%', height: '400px' }} />;
};

export default OtherTerminal;