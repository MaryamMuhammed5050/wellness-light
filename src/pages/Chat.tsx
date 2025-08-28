import { useState } from "react";
import { HealthCard } from "@/components/HealthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const healthResponses = [
  "For headaches, try staying hydrated, getting enough sleep, and taking breaks from screens. If headaches persist, consult a healthcare provider.",
  "For better sleep, maintain a consistent bedtime routine, avoid caffeine late in the day, and create a comfortable sleep environment.",
  "For stress management, try deep breathing exercises, regular physical activity, and mindfulness meditation.",
  "For digestive issues, eat smaller meals, stay hydrated, include fiber in your diet, and avoid foods that trigger discomfort.",
  "For fatigue, ensure you're getting quality sleep, eating balanced meals, staying active, and managing stress levels.",
  "For muscle pain, try gentle stretching, applying heat or cold, staying hydrated, and getting adequate rest.",
  "Remember, these are general suggestions. For persistent or severe symptoms, always consult with a healthcare professional."
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your health assistant. I can provide general wellness tips and lifestyle suggestions. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("headache") || lowerMessage.includes("head")) {
      return healthResponses[0];
    } else if (lowerMessage.includes("sleep") || lowerMessage.includes("insomnia")) {
      return healthResponses[1];
    } else if (lowerMessage.includes("stress") || lowerMessage.includes("anxiety")) {
      return healthResponses[2];
    } else if (lowerMessage.includes("stomach") || lowerMessage.includes("digest")) {
      return healthResponses[3];
    } else if (lowerMessage.includes("tired") || lowerMessage.includes("fatigue")) {
      return healthResponses[4];
    } else if (lowerMessage.includes("pain") || lowerMessage.includes("muscle")) {
      return healthResponses[5];
    } else {
      return `I understand you're asking about "${userMessage}". For any health concerns, I recommend staying hydrated, maintaining a balanced diet, getting regular exercise, and ensuring adequate sleep. If symptoms persist, please consult a healthcare professional.`;
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Health Assistant</h1>
        <p className="text-muted-foreground mt-1">Get personalized health tips and guidance</p>
      </div>

      <HealthCard className="h-[500px] flex flex-col">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.isBot ? "" : "flex-row-reverse space-x-reverse"
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  message.isBot 
                    ? "bg-health-primary/20" 
                    : "bg-health-secondary/20"
                }`}>
                  {message.isBot ? (
                    <Bot className="w-4 h-4 text-health-primary" />
                  ) : (
                    <User className="w-4 h-4 text-health-secondary" />
                  )}
                </div>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? "bg-muted text-foreground"
                    : "bg-health-primary text-white"
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex space-x-2 mt-4 pt-4 border-t">
          <Input
            placeholder="Describe your symptoms or ask a health question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-health-primary hover:bg-health-primary/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </HealthCard>

      <HealthCard className="bg-gradient-to-r from-health-warning/5 to-health-warning/10 border-health-warning/20">
        <div className="text-center">
          <h3 className="font-semibold text-health-warning mb-2">Important Disclaimer</h3>
          <p className="text-sm text-muted-foreground">
            This chat provides general wellness information only. Always consult healthcare professionals for medical advice, diagnosis, or treatment.
          </p>
        </div>
      </HealthCard>
    </div>
  );
}