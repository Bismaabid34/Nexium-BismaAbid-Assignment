"use client";

import { useState } from "react";
import { Navbar } from "components/ui/navigation-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "components/ui/select";
import { Button } from "components/ui/button";

const quotes: Record<string, string[]> = {
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
  ],
  love: [
    "Love is composed of a single soul inhabiting two bodies. – Aristotle",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. – Lao Tzu",
    "Love all, trust a few, do wrong to none. – William Shakespeare",
    "The best thing to hold onto in life is each other. – Audrey Hepburn",
    "To love and be loved is to feel the sun from both sides. – David Viscott",
  ],
  success: [
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
  ],
  humor: [
    "I'm not arguing, I'm just explaining why I'm right.",
    "I'm on a seafood diet. I see food and I eat it.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I used to think I was indecisive, but now I'm not so sure.",
    "I'm not lazy, I'm on energy-saving mode.",
  ],
  sad: [
    "Tears come from the heart and not from the brain. – Leonardo da Vinci",
    "The word 'happy' would lose its meaning if it were not balanced by sadness. – Carl Jung",
    "Every human walks around with a certain kind of sadness. – Brad Pitt",
    "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water. – Christopher Morley",
    "Sadness flies away on the wings of time. – Jean de La Fontaine",
  ],
  life: [
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "In the end, we only regret the chances we didn't take.",
    "Life is short, and it's up to you to make it sweet. – Sarah Louise Delany",
  ],
  wisdom: [
    "Knowing yourself is the beginning of all wisdom. – Aristotle",
    "The only true wisdom is in knowing you know nothing. – Socrates",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "Honesty is the first chapter in the book of wisdom. – Thomas Jefferson",
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. – Albert Einstein",
  ],
  friendship: [
    "Friendship is the only cement that will ever hold the world together. – Woodrow Wilson",
    "A real friend is one who walks in when the rest of the world walks out.",
    "True friends are never apart, maybe in distance but never in heart.",
    "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one.' – C.S. Lewis",
    "Friends are the family we choose for ourselves.",
  ],
  happiness: [
    "Happiness depends upon ourselves. – Aristotle",
    "For every minute you are angry you lose sixty seconds of happiness. – Ralph Waldo Emerson",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Happiness is a direction, not a place. – Sydney J. Harris",
  ],
  confidence: [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "No one can make you feel inferior without your consent. – Eleanor Roosevelt",
    "Confidence comes not from always being right but from not fearing to be wrong.",
    "Optimism is the faith that leads to achievement. – Helen Keller",
    "With confidence, you have won before you have started. – Marcus Garvey",
  ],
  leadership: [
    "A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
    "Leadership is the capacity to translate vision into reality. – Warren Bennis",
    "The greatest leader is not necessarily the one who does the greatest things. – Ronald Reagan",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Leadership and learning are indispensable to each other. – John F. Kennedy",
  ],
};

export default function Home() {
  const [genre, setGenre] = useState("");
  const [generated, setGenerated] = useState<string[]>([]);

  const handleGenerate = () => {
    if (genre && quotes[genre]) {
      const selectedQuotes = quotes[genre].slice(0, 5);
      setGenerated(selectedQuotes);
    } else {
      setGenerated([]);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-center flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Pick a Theme & Get a Quote <span className="ml-2">✨</span>
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
          className="bg-purple-100 shadow-lg rounded-lg p-6 w-full max-w-md text-left border border-purple-200"
        >
          <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-[#f5e8ff]">
           Select a Genre
        </label>
          <Select onValueChange={(value) => setGenre(value)}>
           <SelectTrigger className="w-full bg-white border border-gray-300">
      <SelectValue placeholder="Choose a genre" />
    </SelectTrigger>
    <SelectContent className="bg-white text-black">
      <SelectItem value="motivation">Motivation</SelectItem>
      <SelectItem value="love">Love</SelectItem>
      <SelectItem value="success">Success</SelectItem>
      <SelectItem value="humor">Humor</SelectItem>
      <SelectItem value="sad">Sad</SelectItem>
      <SelectItem value="life">Life</SelectItem>
      <SelectItem value="wisdom">Wisdom</SelectItem>
      <SelectItem value="friendship">Friendship</SelectItem>
      <SelectItem value="happiness">Happiness</SelectItem>
      <SelectItem value="confidence">Confidence</SelectItem>
      <SelectItem value="leadership">Leadership</SelectItem>
    </SelectContent>
  </Select>
</div>

          <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
            Generate Quotes
          </Button>
        </form>

        {generated.length > 0 && (
          <div className="mt-10 w-full max-w-2xl">
            <ul className="space-y-4">
              {generated.map((quote, index) => (
                <li
                  key={index}
                  className="bg-purple-100 border border-purple-200 text-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-2xl px-4 py-3 text-left text-sm md:text-base"
                >
                  {quote}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <footer className="w-full text-center py-4 bg-violet-200 text-gray-800 text-sm">
        © 2025 Quote Gen. Built using ShadCN UI & Next.js.
      </footer>
    </>
  );
}
