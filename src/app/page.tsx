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

const quotes: Record<string, string[]> = { /* same quotes as before */ };

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
            <label className="block text-sm font-medium mb-1 text-gray-700">
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
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Top Quotes:</h2>
            <ul className="space-y-4">
              {generated.map((quote, index) => (
                <li
                  key={index}
                  className="bg-yellow-100 border border-yellow-200 text-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-2xl px-4 py-3 text-left text-sm md:text-base"
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

