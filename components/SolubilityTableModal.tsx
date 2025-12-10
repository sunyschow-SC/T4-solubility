import React from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SolubilityTableModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-slate-800">Solubility of Ionic Compounds</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 text-sm md:text-base">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-3 text-left w-1/4">Ions</th>
                  <th className="border border-slate-300 p-3 text-left w-1/4">Formula</th>
                  <th className="border border-slate-300 p-3 text-left w-1/4">Salt Solubility</th>
                  <th className="border border-slate-300 p-3 text-left w-1/4">Exception</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-2">Potassium<br/>Sodium<br/>Ammonium</td>
                  <td className="border border-slate-300 p-2">K⁺<br/>Na⁺<br/>NH₄⁺</td>
                  <td className="border border-slate-300 p-2 text-green-600 font-bold">Soluble</td>
                  <td className="border border-slate-300 p-2">Null</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2">Nitrates</td>
                  <td className="border border-slate-300 p-2">NO₃⁻</td>
                  <td className="border border-slate-300 p-2 text-green-600 font-bold">Soluble</td>
                  <td className="border border-slate-300 p-2">Null</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2">Hydrogencarbonates</td>
                  <td className="border border-slate-300 p-2">HCO₃⁻</td>
                  <td className="border border-slate-300 p-2 text-green-600 font-bold">Soluble</td>
                  <td className="border border-slate-300 p-2">Null</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2">Halides</td>
                  <td className="border border-slate-300 p-2">Cl⁻, Br⁻, I⁻</td>
                  <td className="border border-slate-300 p-2 text-green-600 font-bold">Soluble</td>
                  <td className="border border-slate-300 p-2 font-bold text-red-600">AgX (s), PbX₂ (s)</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2">Sulphate</td>
                  <td className="border border-slate-300 p-2">SO₄²⁻</td>
                  <td className="border border-slate-300 p-2 text-green-600 font-bold">Soluble</td>
                  <td className="border border-slate-300 p-2 font-bold text-red-600">BaSO₄ (s), CaSO₄ (s), PbSO₄ (s)</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2">Carbonates</td>
                  <td className="border border-slate-300 p-2">CO₃²⁻</td>
                  <td className="border border-slate-300 p-2 text-red-600 font-bold">Insoluble</td>
                  <td className="border border-slate-300 p-2 font-bold text-green-600">K₂CO₃ (s), Na₂CO₃ (s), (NH₄)₂CO₃ (s)</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2">Hydroxide</td>
                  <td className="border border-slate-300 p-2">OH⁻</td>
                  <td className="border border-slate-300 p-2 text-red-600 font-bold">Insoluble</td>
                  <td className="border border-slate-300 p-2">
                    <span className="font-bold text-green-600">KOH (aq), NaOH (aq)</span><br/>
                    <span className="text-xs">*Ca(OH)₂ (aq) is slightly soluble.</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2">Oxide</td>
                  <td className="border border-slate-300 p-2">O²⁻</td>
                  <td className="border border-slate-300 p-2 text-red-600 font-bold">Insoluble</td>
                  <td className="border border-slate-300 p-2">
                    <span className="font-bold text-green-600">K₂O (s), Na₂O (s), CaO (s)</span><br/>
                    <span className="text-xs">*React with water to form metal hydroxide</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolubilityTableModal;