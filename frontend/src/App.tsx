import React, { useState } from "react";
import CasePanel from "./components/CasePanel";
import PivotWorkflow from "./components/PivotWorkflow";
import ToolDirectory from "./components/ToolDirectory";
import IdentityGraph from "./components/IdentityGraph";

const App: React.FC = () => {
  const [identifier, setIdentifier] = useState<{ email?: string; phone?: string }>({});

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-yellow-400">WKT12 OSINT Dashboard</h1>
          <p className="text-xs text-slate-400">Phone & Email Intelligence</p>
        </div>
      </header>
      <main className="flex flex-1">
        <section className="w-1/3 border-r border-slate-800 p-4">
          <CasePanel identifier={identifier} setIdentifier={setIdentifier} />
        </section>
        <section className="w-1/3 border-r border-slate-800 p-4">
          <PivotWorkflow />
        </section>
        <section className="w-1/3 p-4 flex flex-col">
          <ToolDirectory identifier={identifier} />
          <div className="mt-4 flex-1">
            <IdentityGraph />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
