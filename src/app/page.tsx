"use client";

import { useState } from "react";
import { Navbar } from "components/ui/navigation-menu"; 
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "components/ui/select";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";

const quotes: Record<string, string[]> = {
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn't just find you. You have to go out and get it.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Great things never come from comfort zones.",
    "Don't stop when you're tired. Stop when you're done.",
  ],
  love: [
    "Love is composed of a single soul inhabiting two bodies.",
    "To love and be loved is to feel the sun from both sides.",
    "You call it madness, but I call it love.",
    "Love is not something you find. Love is something that finds you.",
    "Where there is love, there is life.",
  ],
  success: [
    "Success is not in what you have, but who you are.",
    "Don't wait for opportunity. Create it.",
    "Opportunities don't happen. You create them.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The road to success and the road to failure are almost exactly the same.",
  ],
  happiness: [
  "Happiness is not something ready-made. It comes from your own actions.",
  "The purpose of our lives is to be happy.",
  "Happiness is a direction, not a place.",
  "For every minute you are angry, you lose sixty seconds of happiness.",
  "Smile, it's the key that fits the lock of everybody's heart.",
],
friendship: [
  "Friendship is the only cement that will ever hold the world together.",
  "A real friend is one who walks in when the rest of the world walks out.",
  "True friendship comes when the silence between two people is comfortable.",
  "Friends are the family we choose for ourselves.",
  "Good friends are like stars. You don't always see them, but you know they're always there.",
],
life: [
  "Life is what happens when you're busy making other plans.",
  "Live life to the fullest, and focus on the positive.",
  "Life is short, and it's up to you to make it sweet.",
  "Life isn't about finding yourself. It's about creating yourself.",
  "Difficult roads often lead to beautiful destinations.",
],
wisdom: [
  "The only true wisdom is in knowing you know nothing.",
  "Knowing yourself is the beginning of all wisdom.",
  "Turn your wounds into wisdom.",
  "Honesty is the first chapter in the book of wisdom.",
  "A wise man learns more from his enemies than a fool from his friends.",
],
humor: [
  "I'm not arguing, I'm just explaining why I'm right.",
  "Why don’t scientists trust atoms? Because they make up everything.",
  "I’m on a seafood diet. I see food and I eat it.",
  "If at first you don't succeed, then skydiving definitely isn't for you.",
  "I used to think I was indecisive, but now I'm not too sure.",
],
confidence: [
  "Believe you can and you're halfway there.",
  "Confidence comes not from always being right, but from not fearing to be wrong.",
  "With confidence, you have won before you have started.",
  "Don’t be satisfied with stories. Unfold your own myth.",
  "Confidence is silent. Insecurities are loud.",
],
leadership: [
  "A leader is one who knows the way, goes the way, and shows the way.",
  "Leadership is not about being in charge. It's about taking care of those in your charge.",
  "The greatest leader is not necessarily the one who does the greatest things.",
  "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
  "Leadership is the capacity to translate vision into reality.",
],
sad: [
  "Tears come from the heart and not from the brain.",
  "Sadness flies away on the wings of time.",
  "It's sad when someone you know becomes someone you knew.",
  "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.",
  "The word ‘happy’ would lose its meaning if it were not balanced by sadness.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Pick a Theme & Get a Quote <span className="ml-2">✨</span>
        </h1>

        <div className="mb-6 w-full max-w-xs">
          <Select onValueChange={(value) => setGenre(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a genre" />
            </SelectTrigger>
            <SelectContent>
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

        <Button onClick={handleGenerate} className="mb-8 bg-blue-600 hover:bg-blue-700">
          Generate Quotes
        </Button>

        <div className="grid gap-4 max-w-2xl w-full">
          {generated.map((quote, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-left text-sm md:text-base">{quote}</CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="w-full text-center py-4 bg-violet-200 text-gray-800 text-sm">
  © 2025 Quote Gen. Built using ShadCN UI & Next.js.
</footer>
</>
  );
}