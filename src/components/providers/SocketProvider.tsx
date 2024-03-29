"use client";

import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { Socket, io } from "socket.io-client"

type SocketContextType = {
  socket: Socket | null,
  isConnected: boolean
}

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false
});

export const useSocket = () => {
  return useContext(SocketContext);
};

const SocektProvider = ({children}:PropsWithChildren) => {

  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let newSocket: Socket;

    const URL =
      process.env.NODE_ENV === "production"
        ? undefined
        : "http://localhost:4000";
    
    newSocket = io(URL as string)

    newSocket.on("connect", () => {
      setIsConnected(true);
    })

    newSocket.on("disconnect", () => {
      setIsConnected(false);
    })

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    }

  }, []);

  return (
    <SocketContext.Provider value={{isConnected, socket}}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocektProvider