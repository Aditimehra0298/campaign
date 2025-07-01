import React, { useState, useRef, useEffect } from 'react';

const steps = [
  { key: 'name', question: 'What is your name?' },
  { key: 'email', question: 'What is your email address?' },
  { key: 'phone', question: 'What is your phone number?' },
  { key: 'profession', question: 'What is your profession?' },
  { key: 'location', question: 'What is your location?' },
];

export default function Chatbot() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ name: '', email: '', phone: '', profession: '', location: '' });
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! Let's register for the course." },
    { from: 'bot', text: steps[0].question },
  ]);
  const [input, setInput] = useState('');
  const [done, setDone] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const currentKey = steps[step]?.key;
    setMessages([...messages, { from: 'user', text: input }]);
    if (currentKey) {
      setAnswers({ ...answers, [currentKey]: input });
      setTimeout(() => {
        setMessages(msgs => [
          ...msgs,
          { from: 'bot', text: steps[step + 1]?.question || 'Thank you! Your registration is complete.' },
        ]);
        setStep(step + 1);
        setInput('');
        if (step + 1 === steps.length) {
          setDone(true);
          // Send data to Google Sheets
          fetch('https://script.google.com/macros/s/AKfycbxd_DG0BXgk_yBEwBSq8krNR-ozqzVueyVxNiPAMA-l0qObMfSHxjVXqrWXs1Su5cCY/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: answers.name,
              email: answers.email,
              phone: answers.phone,
              profession: answers.profession,
              location: answers.location
            })
          });
        }
      }, 500);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg p-4 hover:scale-110 hover:animate-bounce transition-transform"
        onClick={() => setOpen(o => !o)}
        aria-label="Open chatbot"
      >
        {/* SVG Robot Icon */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#6366F1"/>
          <rect x="8" y="12" width="16" height="10" rx="5" fill="#fff"/>
          <rect x="12" y="8" width="8" height="6" rx="3" fill="#a5b4fc"/>
          <circle cx="12.5" cy="17" r="1.5" fill="#6366F1"/>
          <circle cx="19.5" cy="17" r="1.5" fill="#6366F1"/>
          <rect x="15" y="20" width="2" height="2" rx="1" fill="#6366F1"/>
          <rect x="15.5" y="6" width="1" height="4" rx="0.5" fill="#6366F1"/>
          <rect x="7" y="14" width="2" height="1" rx="0.5" fill="#6366F1"/>
          <rect x="23" y="14" width="2" height="1" rx="0.5" fill="#6366F1"/>
        </svg>
      </button>
      {/* Chatbot Window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 max-w-xs bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 font-bold">AI Course Chatbot</div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto" style={{ maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'bot' ? 'text-left' : 'text-right'}>
                <span className={
                  msg.from === 'bot'
                    ? 'inline-block bg-gray-100 text-gray-800 rounded-lg px-3 py-1 mb-1'
                    : 'inline-block bg-blue-500 text-white rounded-lg px-3 py-1 mb-1'
                }>
                  {msg.text}
                </span>
              </div>
            ))}
            {done && (
              <div className="text-xs text-gray-500 mt-2">
                <div><b>Name:</b> {answers.name}</div>
                <div><b>Email:</b> {answers.email}</div>
                <div><b>Phone:</b> {answers.phone}</div>
                <div><b>Profession:</b> {answers.profession}</div>
                <div><b>Location:</b> {answers.location}</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {!done && (
            <div className="flex border-t border-gray-200">
              <input
                className="flex-1 px-3 py-2 outline-none"
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Type your answer..."
                autoFocus
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-r-xl hover:bg-blue-600"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          )}
          {done && (
            <div className="p-2 text-center text-green-600 font-semibold">Registration complete!</div>
          )}
        </div>
      )}
    </>
  );
} 