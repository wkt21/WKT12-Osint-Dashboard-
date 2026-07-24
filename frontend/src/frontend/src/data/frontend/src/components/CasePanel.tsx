import React, { useState } from "react";

interface CasePanelProps {
  identifier: { email?: string; phone?: string };
  setIdentifier: React.Dispatch<React.SetStateAction<{ email?: string; phone?: string }>>;
}

const CasePanel: React.FC<CasePanelProps> = ({ identifier, setIdentifier }) => {
  const [caseId, setCaseId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIdentifier((prev) => ({ ...prev, [name]: value }));
  };

  const handleRun = (tool: string) => {
    console.log(`Running ${tool} for`, identifier);
    window.open(`/api/enrich/${tool}`, "_blank");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-yellow-400">Case & Identifier</h2>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">
          Case ID
          <input
            type="text"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            className="w-full mt-1 p-2 bg-slate-800 border border-slate-700 rounded"
            placeholder="Case #1234"
          />
        </label>

        <label className="block text-sm text-slate-300">
          Email
          <input
            type="email"
            name="email"
            value={identifier.email || ""}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-slate-800 border border-slate-700 rounded"
            placeholder="target@example.com"
          />
        </label>

        <label className="block text-sm text-slate-300">
          Phone
          <input
            type="tel"
            name="phone"
            value={identifier.phone || ""}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-slate-800 border border-slate-700 rounded"
            placeholder="+1 (555) 123-4567"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        <button
          onClick={() => handleRun("epieos")}
          className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-yellow-500"
        >
          Run Epieos
        </button>
        <button
          onClick={() => handleRun("phoneinfoga")}
          className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-yellow-500"
        >
          Run PhoneInfoga
        </button>
        <button
          onClick={() => handleRun("intelx")}
          className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-yellow-500"
        >
          Run IntelX
        </button>
      </div>
    </div>
  );
};

export default CasePanel;
