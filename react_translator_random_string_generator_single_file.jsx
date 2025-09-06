import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// Single-file example React app using Tailwind for styles.
// Instructions:
// 1. Put this file in src/App.jsx of a Create React App / Vite React project.
// 2. Install dependencies: react-router-dom, and ensure Tailwind is configured.
// 3. Set your RapidAPI key in an env var: REACT_APP_RAPIDAPI_KEY (or replace the string directly for testing).
// 4. RapidAPI note: below is a *sample* fetch using the popular RapidAPI Google Translate wrapper (host: "google-translate1.p.rapidapi.com").
//    Replace endpoint/host with the translation API you chose on RapidAPI if different.

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-white shadow">
          <div className="max-w-4xl mx-auto p-4 flex gap-4 items-center">
            <h1 className="text-xl font-semibold">Translator & Random String App</h1>
            <nav className="ml-4 flex gap-2">
              <NavLink
                to="/translate"
                className={({ isActive }) =>
                  `px-3 py-1 rounded ${isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`
                }
              >
                Translate
              </NavLink>
              <NavLink
                to="/random"
                className={({ isActive }) =>
                  `px-3 py-1 rounded ${isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`
                }
              >
                Random String
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translate" element={<Translator />} />
            <Route path="/random" element={<RandomGenerator />} />
          </Routes>
        </main>

        <footer className="max-w-4xl mx-auto p-6 text-sm text-gray-500">
          Built with React + Tailwind. RapidAPI used for translation (set your key in environment).
        </footer>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="p-6 bg-white rounded shadow"> 
      <h2 className="text-lg font-medium mb-2">Welcome</h2>
      <p>Use the navigation above to open the Translator or Random String generator.</p>
    </div>
  );
}

function Translator() {
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("hi");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useCallback for the translate action
  const translate = useCallback(async () => {
    setLoading(true);
    setError(null);
    setTranslated("");

    const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY || "YOUR_RAPIDAPI_KEY";

    try {
      // NOTE: This is an example using the RapidAPI "google-translate1" wrapper.
      // If you subscribe to a different translation API on RapidAPI, replace the host, endpoint and body accordingly.
      const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";

      const body = new URLSearchParams();
      body.append("q", text);
      body.append("target", targetLang);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "accept-encoding": "application/gzip",
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
          "x-rapidapi-key": RAPIDAPI_KEY,
        },
        body: body.toString(),
      });

      if (!res.ok) {
        const textErr = await res.text();
        throw new Error(`API error ${res.status}: ${textErr}`);
      }

      const data = await res.json();
      // Google-translate1 returns translated text at data.data.translations[0].translatedText
      const out = data?.data?.translations?.[0]?.translatedText;
      if (!out) throw new Error("No translated text returned by API");

      setTranslated(out);
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }, [text, targetLang]);

  return (
    <div className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-lg font-medium">Text Translator</h2>

      <label className="block">
        <span className="text-sm">English text</span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded border-gray-200 shadow-sm"
          placeholder="Type English text here..."
        />
      </label>

      <div className="flex gap-3 items-center">
        <label className="block">
          <span className="text-sm">Target language</span>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="mt-1 block rounded border-gray-200 shadow-sm"
          >
            <option value="hi">Hindi (hi)</option>
            <option value="es">Spanish (es)</option>
            <option value="fr">French (fr)</option>
            <option value="de">German (de)</option>
            <option value="ja">Japanese (ja)</option>
            <option value="ar">Arabic (ar)</option>
          </select>
        </label>

        <div className="mt-6">
          <button
            onClick={translate}
            className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-60"
            disabled={!text || loading}
          >
            {loading ? "Translating..." : "Translate"}
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Result</h3>
        <div className="mt-2 p-3 rounded bg-gray-50 border min-h-[64px]">
          {error ? <span className="text-red-500">{error}</span> : translated || <span className="text-gray-400">No translation yet</span>}
        </div>
      </div>

      <div className="text-xs text-gray-500">
        <p>Note: set <code>REACT_APP_RAPIDAPI_KEY</code> in your .env.local (or replace the placeholder) with your RapidAPI key.</p>
        <p>If you subscribed to a different RapidAPI translation provider, update the fetch url/headers and request body accordingly.</p>
      </div>
    </div>
  );
}

function RandomGenerator() {
  const [length, setLength] = useState(12);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [result, setResult] = useState("");

  const chars = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>/?",
  };

  const buildPool = useCallback(() => {
    let pool = "";
    if (useLower) pool += chars.lower;
    if (useUpper) pool += chars.upper;
    if (useNumbers) pool += chars.numbers;
    if (useSymbols) pool += chars.symbols;
    return pool;
  }, [useLower, useUpper, useNumbers, useSymbols]);

  const generate = useCallback(() => {
    const pool = buildPool();
    if (!pool) {
      setResult("");
      return;
    }

    let out = "";
    for (let i = 0; i < length; i++) {
      out += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    setResult(out);
  }, [length, buildPool]);

  // useEffect used to create an initial example and to auto-generate when options change
  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generate]);

  return (
    <div className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-lg font-medium">Random String Generator</h2>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm">Length</span>
          <input
            type="number"
            min={1}
            max={128}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="mt-1 rounded border-gray-200 shadow-sm w-full"
          />
        </label>

        <div>
          <span className="text-sm">Options</span>
          <div className="mt-2 flex flex-col gap-1">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} />
              <span>Lowercase</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} />
              <span>Uppercase</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} />
              <span>Numbers</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} />
              <span>Symbols</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={generate} className="px-4 py-2 bg-indigo-600 text-white rounded">Generate</button>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(result || "");
          }}
          className="px-4 py-2 bg-gray-100 rounded"
        >
          Copy
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Result</h3>
        <div className="mt-2 p-3 rounded bg-gray-50 border min-h-[48px] break-words">{result}</div>
      </div>

      <div className="text-xs text-gray-500">This component uses useState, useCallback and useEffect as requested.</div>
    </div>
  );
}
