"use client";
import { lazy, Suspense, useState, useEffect } from "react";
import axios from "axios";

// Import the ChatBot component lazily
const ChatBot = lazy(() => import("react-chatbotify"));

const MyChatBot = () => {
  const options = {
    theme: {
      embedded: true,
      primaryColor: "#F4B41A",
      secondaryColor: "#143D59",
    },
    chatHistory: {
      storageKey: "example_hotel_management",
    },
    audio: { disabled: false, defaultToggledOn: true, tapToPlay: true },
    chatInput: { showCharacterCount: true, characterLimit: 10 },
    voice: { disabled: false },
    header: {
      title: "ChatBot", // Set the title here
      // Try adding more options incrementally
    },
  };

  const [form, setForm] = useState({});

  const sendMessageToRasa = async (message: string) => {
    try {
      const response = await axios.post("/api/rasa", {
        sender: "user",
        message,
      });
      return response.data;
    } catch (error) {
      console.error("Error communicating with Rasa:", error);
      return [{ text: "Error communicating with Rasa server" }];
    }
  };

  const flow = {
    start: {
      message: "Welcome to our Hotel! How can I assist you today?",
    },
  };

  return <ChatBot settings={options} flow={flow} />;
};

const ChatWidget = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <Suspense fallback={<div>Loading...</div>}>
          <MyChatBot />
        </Suspense>
      )}
    </>
  );
};

export default ChatWidget;
