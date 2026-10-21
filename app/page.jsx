'use client';
import { useState } from 'react';

export default function AxiomDashboard() {
  // Estado inicial da banca e operações
  const [bankroll, setBankroll] = useState(500.00);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio' | 'scanner' | 'risk'

  // Simulação de conexão com a carteira Solana (Phantom)
  const connectSolanaWallet = async () => {
    try {
      // Verifica se a extensão da Phantom está instalada no navegador
      const provider = window?.solana;
      if (provider?.isPhantom) {
        const response = await provider.connect();
        setWalletAddress(response.publicKey.toString());
        setWalletConnected(true);
      } else {
        alert('Carteira Phantom não encontrada! Instale a extensão para conectar.');
      }
    } catch (err) {
      console.error("Erro ao conectar carteira:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-[#e2e8f0] font-mono p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* TOP BAR / HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#121824] p-4 rounded-xl border border-slate-800 shadow-xl gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
            <div>
              <h1 className="text-lg font-bold text-cyan-400 tracking-wider">AXIOM CLOUD TERMINAL</h1>
              <p className="text-xs text-slate-400">Solana On-Chain Portfolio & Risk Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between">
            <div className="bg-[#0b0e14] px-4 py-2 rounded-lg border border-slate-800 text-right">
              <span className="text-[10px] text-slate-400 block uppercase">Banca Total Gerenciada</span>
              <span className="text-emerald-400 font-bold text-sm">R$ {bankroll.toFixed(2)}</span>
            </div>

            {/* Botão de Conexão Web3 */}
            {walletConnected ? (
              <div className="bg-emerald-950/40 border border-emerald-800/60 px-4 py-2 rounded-lg">
                <span className="text-[10px] text-emerald-400 block">Conectado (Solana)</span>
                <span className="text-xs text-slate-200 font-bold">
                  {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
                </span>
              </div>
            ) : (
              <button 
                onClick={connectSolanaWallet}
                className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs transition flex items-center gap-2 shadow-lg shadow-cyan-950/50"
              >
                Conectar Phantom
              </button>
            )}
          </div>
        </header>

        {/* NAVEGAÇÃO DE ABAS */}
        <div className="flex gap-2 border-b border-slate-800 pb-2">
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition ${activeTab === 'portfolio' ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Meu Portfólio & P&L
          </button>
          <button 
            onClick={() => setActiveTab('scanner')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition ${activeTab === 'scanner' ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Scanner On-Chain & IA
          </button>
          <button 
            onClick={() => setActiveTab('risk')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition ${activeTab === 'risk' ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Gestão de Risco (R$ 500)
          </button>
        </div>

        {/* CONTEÚDO DAS ABAS */}
        {activeTab === 'portfolio' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Lista de Posições Ativas / Histórico */}
            <div className="lg:col-span-2 bg-[#121824] p-5 rounded-xl border border-slate-800 space-y-4">
              <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Suas Posições & P&L em Tempo Real</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500">
                      <th className="pb-3">Token</th>
                      <th className="pb-3">Investido</th>
                      <th className="pb-3">Preço Entrada</th>
                      <th className="pb-3">Valor Atual</th>
                      <th className="pb-3 text-right">P&L (Lucro/Prejuízo)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {/* Exemplo de Operação Rastreada */}
                    <tr>
                      <td className="py-3 font-bold text-slate-200">HANDLE / SOL</td>
                      <td className="py-3 text-slate-400">R$ 25,00</td>
                      <td className="py-3 text-slate-400">$0.0042</td>
                      <td className="py-3 text-slate-400">R$ 12,50</td>
                      <td className="py-3 text-right font-bold text-rose-400">-50.00% (-R$ 12,50)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500">
                * Conecte sua carteira Solana para sincronizar os tokens comprados automaticamente na nuvem.
              </p>
            </div>

            {/* Painel lateral de Resumo da Banca */}
            <div className="bg-[#121824] p-5 rounded-xl border border-slate-800 space-y-4">
              <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Métricas da Banca</h2>
              
              <div className="space-y-3">
                <div className="bg-[#0b0e14] p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">Capital Disponível (Cash)</span>
                  <span className="text-emerald-400 font-bold text-sm">R$ 475,00</span>
                </div>
                <div className="bg-[#0b0e14] p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">Capital Alocado em Tokens</span>
                  <span className="text-cyan-400 font-bold text-sm">R$ 25,00</span>
                </div>
                <div className="bg-[#0b0e14] p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">Resultado Acumulado (P&L Total)</span>
                  <span className="text-rose-400 font-bold text-sm">-R$ 12,50 (-2.5%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scanner' && (
          <div className="bg-[#121824] p-6 rounded-xl border border-slate-800 space-y-4">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Scanner On-Chain + Análise de IA</h2>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Cole o endereço do contrato do token (CA) na Solana..." 
                className="flex-1 bg-[#0b0e14] border border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
              <button className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-6 py-2 rounded-lg text-xs transition">
                Analisar com IA
              </button>
            </div>
            <div className="bg-[#0b0e14] p-4 rounded-lg border border-slate-800 min-h-[150px] text-xs text-slate-400">
              [Aguardando contrato para processar o relatório de segurança, liquidez e viabilidade baseada na sua banca...]
            </div>
          </div>
        )}

        {activeTab === 'risk' && (
          <div className="bg-[#121824] p-6 rounded-xl border border-slate-800 space-y-4 max-w-xl">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Calculadora de Proteção de Banca</h2>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Tamanho Máximo por Entrada (Padrão: 5% a 10%)</label>
                <select className="w-full bg-[#0b0e14] border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none">
                  <option>5% da Banca (R$ 25,00) - Conservador</option>
                  <option selected>10% da Banca (R$ 50,00) - Recomendado</option>
                  <option>20% da Banca (R$ 100,00) - Agressivo</option>
                </select>
              </div>
              <div className="bg-[#0b0e14] p-4 rounded-lg border border-slate-800 text-xs space-y-1">
                <p className="text-slate-400">Limite de Exposições Simultâneas: <span className="text-slate-200 font-bold">Máximo 3 tokens</span></p>
                <p className="text-slate-400">Meta de Stop Loss Mental: <span className="text-rose-400 font-bold">-40% por operação</span></p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
 
