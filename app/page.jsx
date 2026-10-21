'use client';

import React, { useState } from 'react';

export default function AxiomTerminal() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 selection:bg-emerald-500 selection:text-slate-950">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AXIOM CLOUD TERMINAL
            </h1>
            <span className="px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
              PRO v2.4
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">Solana On-Chain Portfolio & Risk Manager</p>
        </div>

        <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-xl shadow-inner">
          <div>
            <span className="text-xs text-slate-400 block">Banca Total Gerenciada</span>
            <span className="text-lg font-bold text-emerald-400">R$ 500,00</span>
          </div>
          <button
            onClick={() => setWalletConnected(!walletConnected)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-lg ${
              walletConnected
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold'
            }`}
          >
            {walletConnected ? 'Phantom Conectada' : 'Conectar Phantom'}
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex flex-wrap gap-2 mb-8">
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow">
          Meu Portfólio & P&L
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-slate-800 transition-all">
          Scanner On-Chain & IA
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-slate-800 transition-all">
          Gestão de Risco (R$ 500)
        </button>
      </nav>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Posicões & P&L em Tempo Real */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Suas Posições & P&L em Tempo Real
            </h2>
            <span className="text-xs text-slate-400">Atualizado agora</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Token</th>
                  <th className="py-3 px-4">Investido</th>
                  <th className="py-3 px-4">Preço Entrada</th>
                  <th className="py-3 px-4">Valor Atual</th>
                  <th className="py-3 px-4">P&L (Lucro/Prejuízo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 text-sm">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-100 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">H</div>
                    HANDLE / SOL
                  </td>
                  <td className="py-4 px-4 text-slate-300">R$ 25,00</td>
                  <td className="py-4 px-4 text-slate-400">$0.0042</td>
                  <td className="py-4 px-4 text-slate-200">R$ 12,50</td>
                  <td className="py-4 px-4 text-rose-400 font-semibold">-50.00% (-R$ 12,50)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 mt-4 italic">
            * Conecte sua carteira Solana para sincronizar os tokens comprados automaticamente na nuvem.
          </p>
        </div>

        {/* Métricas da Banca */}
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Métricas da Banca
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Capital Disponível (Cash)</span>
                <span className="text-xl font-bold text-cyan-400">R$ 475,00</span>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Capital Alocado em Tokens</span>
                <span className="text-xl font-bold text-amber-400">R$ 25,00</span>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Resultado Acumulado (P&L Total)</span>
                <span className="text-xl font-bold text-rose-400">-R$ 12,50 (-2.5%)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <span className="text-xs text-slate-500">Axiom Risk Protocol v2 • Proteção Ativa</span>
          </div>
        </div>

      </div>
    </div>
  );
}
