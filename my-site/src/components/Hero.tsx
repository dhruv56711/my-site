import React, { useState, useEffect } from "react";

const Hero = () => {
  const [tiles, setTiles] = useState<(number | null)[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  // Initialize the game board
  const initGame = () => {
    const numbers = Array.from({ length: 15 }, (_, i) => i + 1);
    // Add null for the empty space
    let shuffled = [...numbers, null].sort(() => Math.random() - 0.5);
    setTiles(shuffled);
    setMoves(0);
    setGameWon(false);
    setShowCongrats(false);
  };

  // Check if puzzle is solved
  const checkWin = (currentTiles: (number | null)[]) => {
    for (let i = 0; i < 15; i++) {
      if (currentTiles[i] !== i + 1) return false;
    }
    return currentTiles[15] === null;
  };

  // Handle tile click
  const handleTileClick = (index: number) => {
    if (gameWon) return;

    const emptyIndex = tiles.indexOf(null);
    const clickedValue = tiles[index];

    // Check if the clicked tile is adjacent to the empty space
    const row = Math.floor(index / 4);
    const col = index % 4;
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;

    const isAdjacent = 
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) || 
      (Math.abs(col - emptyCol) === 1 && row === emptyRow);

    if (isAdjacent) {
      const newTiles = [...tiles];
      newTiles[emptyIndex] = clickedValue;
      newTiles[index] = null;
      setTiles(newTiles);
      setMoves(moves + 1);

      if (checkWin(newTiles)) {
        setGameWon(true);
        setShowCongrats(true);
        setTimeout(() => setShowCongrats(false), 3000); // Hide congrats after 3 seconds
      }
    }
  };

  // Initialize game on component mount
  useEffect(() => {
    initGame();
  }, []);

  return (
    <section id="home" className="pt-40 pb-28">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-16 md:mb-0">
          <span className="text-primary font-semibold block mb-6">Hello, I'm</span>
          <h1 className="text-6xl font-bold mb-8">Dhruv Yadav</h1>
          <p className="text-gray text-xl mb-10">
            A passionate Computer Science student who loves puzzles!
            Can you solve this 15-puzzle challenge?
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#contact" className="btn border-2 border-primary text-primary px-8 py-4 rounded-md font-semibold hover:bg-primary hover:text-white transition-all">
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center flex-col items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden border-4 border-white shadow-xl bg-gray-800">
            <div className="grid grid-cols-4 grid-rows-4 gap-2 p-2 h-full w-full">
              {tiles.map((tile, index) => (
                tile ? (
                  <div
                    key={tile}
                    className={`flex items-center justify-center ${
                      gameWon ? 'bg-green-500' : 'bg-primary'
                    } text-white font-bold rounded-md cursor-pointer transition-all hover:scale-105`}
                    onClick={() => handleTileClick(index)}
                  >
                    {tile}
                  </div>
                ) : (
                  <div key="empty" className="bg-gray-700 rounded-md"></div>
                )
              ))}
            </div>
            
            {showCongrats && (
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white">
                <div className="text-center p-6">
                  <p className="text-5xl mb-4">🎉</p>
                  <p className="text-3xl font-bold mb-4">Congratulations!</p>
                  <p className="mb-6">You solved it in {moves} moves!</p>
                  <button 
                    onClick={initGame}
                    className="px-6 py-3 bg-primary rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-gray-600">
            {gameWon ? (
              <p className="text-green-500">Puzzle solved! Click any tile to play again</p>
            ) : (
              <p>Moves: {moves} | Arrange numbers 1-15 in order</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
