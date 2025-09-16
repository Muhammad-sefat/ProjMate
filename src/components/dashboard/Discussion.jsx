import { useState } from "react";

const Discussion = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      role: "Project Manager",
      message:
        "Team, great progress on the first milestone! The client is happy with the initial designs.",
      timestamp: "2 hours ago",
      avatar: "SJ",
    },
    {
      id: 2,
      author: "Mike Chen",
      role: "Designer",
      message:
        "Thanks Sarah! I've updated the Figma files with the latest revisions. Please review when you have time.",
      timestamp: "1 hour ago",
      avatar: "MC",
    },
    {
      id: 3,
      author: "Alex Kumar",
      role: "Marketing Specialist",
      message:
        "The target audience research is complete. I'll share the insights in tomorrow's meeting.",
      timestamp: "45 minutes ago",
      avatar: "AK",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const addMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        author: "You",
        role: "Team Member",
        message: newMessage,
        timestamp: "Just now",
        avatar: "YO",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="space-y-4">
      {/* Discussion Header */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">Team Discussion</h3>
        <p className="text-gray-600 text-sm">
          Share updates, ideas, and collaborate with your team
        </p>
      </div>

      {/* Messages */}
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                {msg.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-800">{msg.author}</h4>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{msg.role}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{msg.timestamp}</span>
                </div>
                <p className="text-gray-700">{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Message */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <h4 className="font-semibold text-gray-800 mb-3">Add to Discussion</h4>
        <div className="space-y-3">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Share an update, ask a question, or start a discussion..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none h-24"
          />
          <div className="flex justify-end">
            <button
              onClick={addMessage}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Post Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
