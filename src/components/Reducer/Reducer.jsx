import React, { useState } from "react";
import { useReducer } from "react";
import InitialModels from "./data";
import { modelReducer } from "./reducerfn";

export default function Reducer() {
  const [models, dispatch] = useReducer(modelReducer, InitialModels);
  const [modeltext, setModeltext] = useState("");
  return (
    <div>
      <input
        type="text"
        value={modeltext}
        onChange={(e) => setModeltext(e.target.value)}
        placeholder="InsertModel"
      />
      <button
        onClick={() => {
          if (!modeltext.trim()) return;
          dispatch({
            type: "addModel",
            payload: { id: Date.now(), name: modeltext },
          });
          setModeltext("");
        }}
      >
        Add Model
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-4">
        {models.map((m) => (
          <div
            key={m.id}
            className={` shadow-md rounded-xl p-4 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow ${
              m.ready ? "bg-emerald-200" : "bg-red-200"
            } `}
          >
            <h1 className="text-lg font-semibold text-gray-800">{m.name}</h1>
            <div className="flex gap-2">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                onClick={() => dispatch({ type: "deleteModel", payload: m.id })}
              >
                Delete Model
              </button>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                onClick={() =>
                  dispatch({ type: "updateReadyState", payload: m.id })
                }
              >
                Update Model name
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
