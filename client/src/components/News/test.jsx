import React from "react";
export default function TestGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="text-blue-300 h-32">Item 1</div>
      <div className="bg-red-300 h-32">Item 2</div>
      <div className="bg-green-300 h-32">Item 3</div>
      <div className="bg-yellow-300 h-32">Item 4</div>
    </div>
  );
}
