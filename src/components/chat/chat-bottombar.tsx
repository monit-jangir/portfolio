// src/components/chat/chat-bottombar.tsx
'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp, Mic, Volume2, VolumeX } from 'lucide-react';
import React, { useEffect } from 'react';


interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
  isListening?: boolean;
  toggleListening?: () => void;
  isVoiceEnabled?: boolean;
  setIsVoiceEnabled?: (val: boolean) => void;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
  isListening = false,
  toggleListening,
  isVoiceEnabled = false,
  setIsVoiceEnabled,
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      !isToolInProgress &&
      input.trim()
    ) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-2 md:pb-8"
    >
      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-full border border-[#E5E5E9] bg-[#ECECF0] py-2 pr-2 pl-6 dark:border-neutral-700 dark:bg-neutral-800">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={
              isToolInProgress ? 'Tool is in progress...' : 'Ask me anything'
            }
            className="text-md w-full border-none bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
            disabled={isToolInProgress || isLoading}
          />

          {/* Voice toggle (Mute/Unmute TTS) */}
          <button
            type="button"
            onClick={() => setIsVoiceEnabled?.(!isVoiceEnabled)}
            className="mr-1.5 flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-300/40 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700/40 dark:hover:text-neutral-200 transition-colors cursor-pointer"
            title={isVoiceEnabled ? "Mute AI voice output" : "Unmute AI voice output"}
          >
            {isVoiceEnabled ? (
              <Volume2 className="h-5 w-5 text-[#0171E3]" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </button>

          {/* Microphone toggle (STT) */}
          <button
            type="button"
            onClick={toggleListening}
            className={`mr-2 flex h-9 w-9 items-center justify-center rounded-full transition-all cursor-pointer ${
              isListening
                ? "bg-red-500 text-white animate-pulse"
                : "text-neutral-500 hover:bg-neutral-300/40 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700/40 dark:hover:text-neutral-200"
            }`}
            title={isListening ? "Stop listening" : "Start voice dictation"}
          >
            <Mic className="h-5 w-5" />
          </button>

          <button
            type="submit"
            disabled={isLoading || !input.trim() || isToolInProgress}
            className="flex items-center justify-center rounded-full bg-[#0171E3] p-2 text-white disabled:opacity-50 cursor-pointer"
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault();
                stop();
              }
            }}
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
