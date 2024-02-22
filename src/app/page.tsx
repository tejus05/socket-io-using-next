"use client";

import { useSocket } from "@/components/providers/SocketProvider";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {

  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const {socket, isConnected} = useSocket();

  // const socket:Socket = io("http://localhost:4000");

  
  useEffect(() => {
    if (socket) {
      socket.on("received-message", (data:string) => {
        setMessages(prev=>[...prev,data])
      });
    }

    socket?.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    return () => {
      if (socket) {
        socket.off("received-message");
      }
    };
  }, [socket]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="absolute top-5 left-5">
        {isConnected ? (
          <div>
            Online
            <Circle className="inline mx-2 rounded-full h-4 w-4 text-green-500 bg-green-500" />
          </div>
        ) : (
          <div>
            Offline
            <Circle className="inline mx-2 rounded-full h-4 w-4 text-red-500 bg-red-500" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 items-center">
        <input
          type="text"
          placeholder="Enter your message"
          className="px-3 py-2 outline-none rounded-lg"
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        />
        <button
          className="bg-white py-2 px-3 w-20 text-center rounded-lg outline-none"
          onClick={() => {
            if (socket) {
              socket.emit("sent-message", userMessage);
              // setUserMessage("");
            }
          }}
        >
          Send
        </button>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
}
