import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../assets/styles/main.scss';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Anjali's assistant. Feel free to ask about her skills, projects, experience, education, or how to contact her!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const speakResponse = (text: string) => {
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    resetTranscript();
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateResponse(input);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
      speakResponse(botResponse);
    }, 1000);
  };

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const generateResponse = (query: string): string => {
    const normalizedQuery = query.toLowerCase();

    if (normalizedQuery.includes('project') || normalizedQuery.includes('work')) {
      return "Anjali has worked on impactful full-stack and AI-driven projects. One of her major works is CareerGenie, an AI-powered job-seeking platform built using Next.js, Neon DB, Prisma, TailwindCSS, and Gemini API. It provides features like secure authentication, AI-generated resumes, interview preparation, and real-time industry insights. She also created a real-time Chat App using the MERN stack, Socket.IO, TailwindCSS, and DaisyUI, supporting theme switching, online user tracking, and highly reliable messaging. You can visit the Projects section of her portfolio to explore these live applications through the provided URLs!";
    }
    else if (normalizedQuery.includes('skill') || normalizedQuery.includes('tech') || normalizedQuery.includes('technologies')) {
      return "Anjali has a strong blend of technical and soft skills. Her technical skills include JavaScript, Python, C/C++, React.js, Node.js, Express.js, RESTful APIs, MongoDB, Neon DB, TailwindCSS, DaisyUI, Git, GitHub, Linux, ARIS modeling tool, and GenAI integration. Along with that, Anjali also possesses strong soft skills such as effective communication, teamwork, adaptability, time management, and creative problem-solving. These skills allow her to work efficiently both individually and collaboratively, delivering high-quality results.";
    }
    else if (normalizedQuery.includes('experience') || normalizedQuery.includes('history') || normalizedQuery.includes('background')) {
      return "Anjali has professional experience at 3SDA Evaya Data Systems, Ranchi. She worked as a Software Engineer Intern from March 2024 to July 2024, and then continued as a Software Engineer Trainee from August 2024 to April 2025. Her role included developing full-stack applications, integrating GenAI features into user interfaces, optimizing backend services for faster performance, and solving real-time production issues, contributing significantly to product improvement and efficiency.";
    }
    else if (normalizedQuery.includes('education') || normalizedQuery.includes('degree') || normalizedQuery.includes('study')) {
      return "Anjali completed her Bachelor of Technology (B.Tech) in Information Technology from Dr. A.P.J. Abdul Kalam Technical University, Lucknow, between 2020 and 2024. She maintained a strong academic record with a CGPA of 8.0, showcasing her consistent dedication, technical understanding, and problem-solving capabilities throughout her studies.";
    }
    else if (normalizedQuery.includes('contact') || normalizedQuery.includes('email') || normalizedQuery.includes('reach')) {
      return "You can easily reach out to Anjali through multiple platforms. You can email her at arvish946@gmail.com, call her directly at +91-9336364026, or connect with her professional profiles on LinkedIn and GitHub. All her official contact links are neatly organized in the Contact section of her portfolio for easy access.";
    }
    else if (normalizedQuery.includes('hello') || normalizedQuery.includes('hi') || normalizedQuery.includes('hey')) {
      return "Hello! I'm Anjali's AI-powered portfolio assistant, designed to help you learn more about her professional journey. Feel free to ask me about her projects, technical skills, soft skills, work experience, educational background, or how to contact her. I'm here to assist you!";
    }
    else {
      return "I'm sorry, I didn't fully understand your query. Please feel free to ask me anything about Anjali’s projects, skills, experience, education, or contact information. I'm here to help you learn more!";
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="chatbot-container">
        <div className="p-4 text-center text-red-500">
          Your browser doesn't support speech recognition.
        </div>
      </div>
    );
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header bg-dark-lighter p-3 flex items-center justify-between">
        <h3 className="text-white font-medium">Portfolio Assistant</h3>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-green-500 rounded-full"></span>
          <span className="text-xs text-green-400">
            {listening ? 'Listening...' : 'Online'}
          </span>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.sender}`}
          >
            {message.text}
          </div>
        ))}

        {isTyping && (
          <div className="chatbot-message bot">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef}></div>
      </div>

      <form onSubmit={handleSendMessage} className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={listening ? 'Listening...' : 'Type or speak your question...'}
          className="flex-grow"
        />
        <button
          type="button"
          onClick={toggleListening}
          className={`p-2 rounded-md mr-2 transition-colors ${
            listening ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary-dark'
          }`}
        >
          {listening ? <MicOff size={18} /> : <Mic size={18} />}
        </button>
        <button type="submit">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
