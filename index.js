import { useState } from "react";
import { Mail } from "lucide-react";

const dummyFiles = [
  { name: "EPC-attest.pdf", date: "21 mei 2025", link: "#" },
  { name: "Elektriciteitskeuring.pdf", date: "22 mei 2025", link: "#" },
  { name: "Watertoets.pdf", date: "23 mei 2025", link: "#" },
];

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "demo2025") setIsLoggedIn(true);
    else alert("Wachtwoord onjuist");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {!isLoggedIn ? (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-gold">Login klantenzone</h2>
          <input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 w-full rounded"
          />
          <button
            className="w-full bg-gold text-black py-2 px-4 rounded hover:opacity-90"
            onClick={handleLogin}
          >
            Inloggen
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-6 text-gold">Welkom in jouw klantenzone</h1>
          <div className="space-y-4">
            {dummyFiles.map((file, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium">{file.name}</p>
                  <p className="text-sm text-gray-400">Toegevoegd op {file.date}</p>
                </div>
                <a href={file.link} className="text-gold underline">
                  Download
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-gray-500 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Je ontvangt een e-mail telkens er een nieuw attest wordt toegevoegd.
          </div>
        </div>
      )}
    </div>
  );
}
