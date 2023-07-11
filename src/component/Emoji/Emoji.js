import React, { useState } from "react";

const emojiList = [
  { emoji: "😀", name: "Grinning Face" },
  { emoji: "😃", name: "Grinning Face with Big Eyes" },
  { emoji: "😄", name: "Grinning Face with Smiling Eyes" },
  { emoji: "😊", name: "Smiling Face with Smiling Eyes" },
  { emoji: "😍", name: "Smiling Face with Heart-Eyes" },
  
];

const EmojiSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredEmojis = emojiList.filter((emoji) => {
    const emojiName = emoji.name.toLowerCase();
    return emojiName.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1 >Emoji Search App</h1>
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        {filteredEmojis.map((emoji, index) => (
          <div key={index}>
            <span>{emoji.emoji}</span>
            <span>{emoji.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiSearchApp;