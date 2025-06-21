import React from 'react';
import { Search, Shield, AlertTriangle, Check, FileText, Link, ExternalLink, Info, Clock, Download, User, Book, Filter, Settings, Star, Bookmark, Menu, X, ChevronRight, Share2 } from 'lucide-react';

// Define types for our data
type SecurityStatus = 'safe' | 'warning' | 'danger' | 'unknown';

interface Node {
  id: string;
  label: string;
  type: string;
  year: string;
  author: string;
  citations: number;
  security: SecurityStatus;
}

const CernasiInterfaceBiggerNetwork: React.FC = () => {
  const colors = {
    primary: '#2563eb',
    secondary: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    dark: '#1e293b',
    light: '#f8fafc',
    border: '#e2e8f0',
    lightBg: '#f1f5f9',
    nodeGreen: '#34d399',
    nodeYellow: '#fbbf24',
    nodeRed: '#f87171',
    nodeGray: '#9ca3af',
    nodeBlue: '#60a5fa',
    lightGreen: '#d1fae5',
    lightYellow: '#fef3c7',
    lightRed: '#fee2e2',
  };

  // Artificial nodes data for visualization
  const nodes: Node[] = [
    { id: 'main', label: 'Integrating Digital Literacy in Education', type: 'main', year: '2023', author: 'Chen et al.', citations: 42, security: 'safe' },
    { id: 'ref1', label: 'Digital Literacy Framework for Society 5.0', type: 'reference', year: '2021', author: 'Smith & Johnson', citations: 87, security: 'safe' },
    { id: 'ref2', label: 'Technology Integration in K-12 Education', type: 'reference', year: '2022', author: 'Williams et al.', citations: 34, security: 'safe' },
    { id: 'ref3', label: 'Future of Educational Technology', type: 'reference', year: '2020', author: 'Anderson et al.', citations: 129, security: 'safe' },
    { id: 'ref4', label: 'Digital Skills Assessment Tools', type: 'reference', year: '2023', author: 'Brown & Davis', citations: 18, security: 'warning' },
    { id: 'ref5', label: 'Technology Adoption in Schools', type: 'reference', year: '2022', author: 'Garcia et al.', citations: 27, security: 'safe' },
    { id: 'ref6', label: 'Free Educational Resources Download', type: 'reference', year: '2023', author: 'Unknown', citations: 3, security: 'danger' },
    { id: 'ref7', label: 'AI in Educational Assessment', type: 'reference', year: '2023', author: 'Lee & Wong', citations: 12, security: 'safe' },
    { id: 'ref8', label: 'Digital Divide in Rural Areas', type: 'reference', year: '2021', author: 'Thompson et al.', citations: 45, security: 'safe' },
  ];

  // Function to get security color
  const getSecurityColor = (security: SecurityStatus): string => {
    switch(security) {
      case 'safe': return colors.nodeGreen;
      case 'warning': return colors.nodeYellow;
      case 'danger': return colors.nodeRed;
      default: return colors.nodeGray;
    }
  };

  // Function to get security icon
  const SecurityIcon: React.FC<{ security: SecurityStatus }> = ({ security }) => {
    switch(security) {
      case 'safe':
        return <Check size={14} color="white" />;
      case 'warning':
        return <AlertTriangle size={14} color="white" />;
      case 'danger':
        return <AlertTriangle size={14} color="white" />;
      default:
        return <Info size={14} color="white" />;
    }
  };

  // Security label component
  const SecurityLabel: React.FC<{ security: SecurityStatus }> = ({ security }) => {
    let bg: string, text: string, label: string;
    switch(security) {
      case 'safe':
        bg = colors.lightGreen;
        text = colors.secondary;
        label = 'Tautan Aman';
        break;
      case 'warning':
        bg = colors.lightYellow;
        text = colors.warning;
        label = 'Perhatian: Verifikasi Diperlukan';
        break;
      case 'danger':
        bg = colors.lightRed;
        text = colors.danger;
        label = 'Peringatan: Tautan Tidak Aman';
        break;
      default:
        bg = colors.lightBg;
        text = colors.dark;
        label = 'Status Tidak Diketahui';
    }
    
    return (
      <div className="p-2 rounded-md flex items-center" style={{ backgroundColor: bg }}>
        <SecurityIcon security={security} />
        <span className="ml-2 text-xs font-bold" style={{ color: text }}>{label}</span>
      </div>
    );
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-2" style={{ color: colors.primary }}>
            <Shield size={24} />
          </div>
          <h2 className="text-xl font-bold" style={{ color: colors.primary }}>Cernasi</h2>
        </div>
        <div className="flex items-center">
          <div className="mr-4 relative">
            <input 
              type="text" 
              placeholder="Cari atau masukkan URL..." 
              className="pr-8 pl-3 py-1 rounded-md border text-sm w-64"
              style={{ borderColor: colors.border }}
            />
            <div className="absolute right-2 top-1.5">
              <Search size={16} color={colors.dark} />
            </div>
          </div>
          <button className="text-xs py-1 px-3 rounded-md text-white font-medium" style={{ backgroundColor: colors.primary }}>
            Login
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Left Sidebar - References List (Narrower) */}
        <div className="w-1/6 border rounded-lg" style={{ borderColor: colors.border }}>
          <div className="p-3 border-b" style={{ borderColor: colors.border }}>
            <h3 className="text-sm font-bold" style={{ color: colors.dark }}>Daftar Referensi</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Cari..." 
                  className="pr-6 pl-2 py-1 rounded-md border text-xs w-full"
                  style={{ borderColor: colors.border }}
                />
                <div className="absolute right-1.5 top-1.5">
                  <Search size={10} color={colors.dark} />
                </div>
              </div>
              <button className="ml-1 p-1 rounded" style={{ backgroundColor: colors.lightBg }}>
                <Filter size={12} color={colors.dark} />
              </button>
            </div>
          </div>
          
          <div className="p-2 border-b" style={{ borderColor: colors.border }}>
            <div className="flex justify-between text-xs" style={{ color: colors.dark }}>
              <span className="font-medium">Filter:</span>
              <button className="flex items-center font-medium" style={{ color: colors.primary }}>
                <Settings size={10} className="mr-0.5" />
                Ubah
              </button>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="px-1.5 py-0.5 rounded-full text-xs flex items-center" 
                style={{ backgroundColor: colors.lightGreen, color: colors.secondary }}>
                <Check size={8} className="mr-0.5" />
                Aman
              </div>
              <div className="px-1.5 py-0.5 rounded-full text-xs flex items-center" 
                style={{ backgroundColor: colors.lightYellow, color: colors.warning }}>
                <AlertTriangle size={8} className="mr-0.5" />
                Perhatian
              </div>
            </div>
          </div>
          
          <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
            {nodes.slice(1).map((ref) => (
              <div key={ref.id} 
                className="p-2 border-b flex items-start hover:bg-gray-50 cursor-pointer"
                style={{ borderColor: colors.border }}>
                <div className="w-3 h-3 rounded-full flex items-center justify-center mr-1.5 mt-0.5" 
                  style={{ backgroundColor: getSecurityColor(ref.security) }}>
                  <SecurityIcon security={ref.security} />
                </div>
                <div>
                  <h4 className="text-xs font-medium" style={{ color: colors.dark }}>{ref.label}</h4>
                  <p className="text-xs" style={{ color: colors.dark }}>{ref.author}, {ref.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center - Paper Network Visualization (Larger) */}
        <div className="w-3/5 p-4 rounded-lg" style={{ backgroundColor: colors.lightBg }}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold" style={{ color: colors.dark }}>Jaringan Referensi</h3>
            <div className="flex gap-2">
              <button className="p-1 rounded" style={{ backgroundColor: 'white', border: `1px solid ${colors.border}` }}>
                <Share2 size={14} color={colors.dark} />
              </button>
              <button className="p-1 rounded" style={{ backgroundColor: 'white', border: `1px solid ${colors.border}` }}>
                <Bookmark size={14} color={colors.dark} />
              </button>
              <button className="p-1 rounded" style={{ backgroundColor: 'white', border: `1px solid ${colors.border}` }}>
                <Download size={14} color={colors.dark} />
              </button>
            </div>
          </div>
          
          {/* Network visualization - Larger & more detailed */}
          <div className="relative h-96 border rounded-lg p-4 bg-white" style={{ borderColor: colors.border }}>
            {/* Main node */}
            <div className="absolute" style={{ left: '50%', top: '40%' }}>
              <div className="w-28 h-28 rounded-full border-4 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" 
                style={{ 
                  backgroundColor: colors.primary,
                  borderColor: 'white',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                }}>
                <FileText size={40} color="white" />
              </div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1.5 rounded-md border shadow-sm" 
                style={{ borderColor: colors.border, width: '180px' }}>
                <p className="text-sm text-center font-medium" style={{ color: colors.dark }}>
                  {nodes[0].label}
                </p>
              </div>
            </div>

            {/* Reference nodes - More nodes and better distribution */}
            {nodes.slice(1).map((node, index) => {
              // Calculate position in a circle around the main node with better distribution
              const totalNodes = nodes.length - 1;
              const angle = (index * (2 * Math.PI / totalNodes)) + (Math.PI / 6); // Offset to avoid clustering
              
              // Add some variation to the radius for more natural look
              const radiusVariation = 0.8 + (Math.random() * 0.4); // Between 0.8 and 1.2
              const baseRadius = 180;
              const radius = baseRadius * radiusVariation;
              
              const x = 50 + (Math.cos(angle) * radius / 5); // Convert to percentage
              const y = 40 + (Math.sin(angle) * radius / 4); // Convert to percentage
              
              // Node size varies slightly based on citations
              const citationScale = Math.min(1.2, Math.max(0.8, node.citations / 50 + 0.8));
              const baseSize = 18;
              const nodeSize = baseSize * citationScale;
              
              return (
                <div key={node.id} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
                  <div 
                    className="rounded-full border-2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 relative" 
                    style={{ 
                      backgroundColor: getSecurityColor(node.security),
                      borderColor: 'white',
                      width: `${nodeSize}px`,
                      height: `${nodeSize}px`,
                      boxShadow: `0 2px 6px rgba(0, 0, 0, 0.1)`,
                    }}>
                    <Link size={nodeSize * 0.6} color="white" />
                    <div 
                      className="absolute -top-1 -right-1 rounded-full flex items-center justify-center" 
                      style={{ 
                        backgroundColor: 'white', 
                        border: `2px solid ${getSecurityColor(node.security)}`,
                        width: `${nodeSize * 0.4}px`,
                        height: `${nodeSize * 0.4}px`
                      }}>
                      <SecurityIcon security={node.security} />
                    </div>
                  </div>
                  <div 
                    className="absolute bg-white px-2 py-1 rounded-md border shadow-sm" 
                    style={{ 
                      borderColor: colors.border, 
                      maxWidth: '140px',
                      top: nodeSize/2 + 2,
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}>
                    <p className="text-xs text-center font-medium" style={{ color: colors.dark }}>
                      {node.label}
                    </p>
                    <p className="text-xs text-center" style={{ color: colors.dark }}>
                      {node.citations} sitasi
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Connections - More sophisticated */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              {nodes.slice(1).map((node, index) => {
                const totalNodes = nodes.length - 1;
                const angle = (index * (2 * Math.PI / totalNodes)) + (Math.PI / 6);
                const radiusVariation = 0.8 + (Math.random() * 0.4);
                const baseRadius = 180;
                const radius = baseRadius * radiusVariation;
                const x = 50 + (Math.cos(angle) * radius / 5);
                const y = 40 + (Math.sin(angle) * radius / 4);
                
                // Different stroke dash patterns based on security
                let strokeDasharray = "";
                switch (node.security) {
                  case 'warning':
                    strokeDasharray = "4,2";
                    break;
                  case 'danger':
                    strokeDasharray = "2,2";
                    break;
                  default:
                    strokeDasharray = "";
                }
                
                return (
                  <line 
                    key={`line-${node.id}`}
                    x1="50%" 
                    y1="40%" 
                    x2={`${x}%`} 
                    y2={`${y}%`} 
                    stroke={getSecurityColor(node.security)} 
                    strokeWidth="1.5" 
                    strokeOpacity="0.7"
                    strokeDasharray={strokeDasharray}
                  />
                );
              })}
              
              {/* Additional connections between related nodes */}
              <line x1="29%" y1="32%" x2="35%" y2="60%" stroke={colors.nodeGreen} strokeWidth="1.2" strokeOpacity="0.4" />
              <line x1="65%" y1="25%" x2="75%" y2="35%" stroke={colors.nodeGreen} strokeWidth="1.2" strokeOpacity="0.4" />
              <line x1="75%" y1="50%" x2="65%" y2="65%" stroke={colors.nodeYellow} strokeWidth="1.2" strokeOpacity="0.4" />
            </svg>
            
            {/* Legend */}
            <div className="absolute bottom-3 right-3 bg-white p-2 rounded-md border shadow-sm" style={{ borderColor: colors.border }}>
              <div className="text-xs font-bold mb-1" style={{ color: colors.dark }}>Status Keamanan:</div>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: colors.nodeGreen }}></div>
                  <span className="text-xs" style={{ color: colors.dark }}>Aman</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: colors.nodeYellow }}></div>
                  <span className="text-xs" style={{ color: colors.dark }}>Perhatian</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: colors.nodeRed }}></div>
                  <span className="text-xs" style={{ color: colors.dark }}>Berbahaya</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Paper Info and Safety Analysis (Narrower) */}
        <div className="w-1/5">
          {/* Main paper info */}
          <div className="p-3 rounded-lg mb-4 border" style={{ borderColor: colors.border }}>
            <h3 className="text-sm font-bold mb-2" style={{ color: colors.dark }}>{nodes[0].label}</h3>
            
            <div className="flex items-center text-xs mb-1" style={{ color: colors.dark }}>
              <User size={12} className="mr-1" />
              <span>{nodes[0].author}</span>
            </div>
            
            <div className="flex items-center text-xs mb-3" style={{ color: colors.dark }}>
              <Clock size={12} className="mr-1" />
              <span>{nodes[0].year}</span>
              <span className="mx-2">•</span>
              <span>{nodes[0].citations} Citations</span>
            </div>
            
            <div className="border-t pt-2" style={{ borderColor: colors.border }}>
              <SecurityLabel security={nodes[0].security} />
            </div>
            
            <button className="mt-3 w-full py-1.5 rounded-md text-xs font-medium flex items-center justify-center" 
              style={{ backgroundColor: colors.primary, color: 'white' }}>
              <Download size={12} className="mr-1" />
              Download PDF
            </button>
          </div>

          {/* Security Analysis */}
          <div className="p-3 rounded-lg border mb-4" style={{ borderColor: colors.border }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold" style={{ color: colors.dark }}>Analisis Keamanan</h3>
              <button className="text-xs" style={{ color: colors.primary }}>Detail</button>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs p-1.5 rounded-lg" style={{ backgroundColor: colors.lightGreen }}>
                <span style={{ color: colors.dark }}>Sertifikat SSL/TLS</span>
                <span className="font-bold" style={{ color: colors.secondary }}>Valid</span>
              </div>
              
              <div className="flex items-center justify-between text-xs p-1.5 rounded-lg" style={{ backgroundColor: colors.lightGreen }}>
                <span style={{ color: colors.dark }}>Domain</span>
                <span className="font-bold" style={{ color: colors.secondary }}>Terverifikasi</span>
              </div>
              
              <div className="flex items-center justify-between text-xs p-1.5 rounded-lg" style={{ backgroundColor: colors.lightGreen }}>
                <span style={{ color: colors.dark }}>Reputasi</span>
                <span className="font-bold" style={{ color: colors.secondary }}>Terpercaya</span>
              </div>
              
              <div className="flex items-center justify-between text-xs p-1.5 rounded-lg" style={{ backgroundColor: colors.lightGreen }}>
                <span style={{ color: colors.dark }}>Analisis Malware</span>
                <span className="font-bold" style={{ color: colors.secondary }}>Aman</span>
              </div>
            </div>
          </div>

          {/* Selected reference detail */}
          <div className="p-3 rounded-lg border" style={{ borderColor: colors.border }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold" style={{ color: colors.dark }}>Referensi Terseleksi</h3>
              <button className="flex items-center text-xs" style={{ color: colors.primary }}>
                <ChevronRight size={12} />
              </button>
            </div>
            
            <div className="p-2 rounded-lg border" style={{ borderColor: colors.border, backgroundColor: colors.lightRed }}>
              <div className="flex items-start mb-1.5">
                <div className="w-4 h-4 rounded-full flex items-center justify-center mr-1.5 mt-0.5" 
                  style={{ backgroundColor: colors.nodeRed }}>
                  <AlertTriangle size={10} color="white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold" style={{ color: colors.dark }}>{nodes[6].label}</h4>
                  <p className="text-xs" style={{ color: colors.dark }}>{nodes[6].author}, {nodes[6].year}</p>
                </div>
              </div>
              
              <div className="mt-1 p-1.5 rounded-md text-xs" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', color: colors.danger }}>
                <div className="font-bold">Peringatan!</div>
                <div>Tautan ini terdeteksi berbahaya. Domain tidak terverifikasi dan berpotensi menyebarkan malware.</div>
              </div>
              
              <div className="flex justify-end mt-1.5">
                <button className="flex items-center text-xs mr-2" style={{ color: colors.danger }}>
                  <X size={10} className="mr-1" />
                  Hindari
                </button>
                <button className="flex items-center text-xs" style={{ color: colors.primary }}>
                  <ExternalLink size={10} className="mr-1" />
                  Alternatif
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CernasiInterfaceBiggerNetwork;