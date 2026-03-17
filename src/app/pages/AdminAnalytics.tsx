import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import {
  Eye,
  MousePointer,
  Calendar,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Search,
  Eye as EyeIcon,
  CheckCircle,
  X,
  User,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Helper function to generate data based on period
const generateDataForPeriod = (period: string, startDate?: string, endDate?: string) => {
  let visitorData: any[] = [];
  let kpiData = {
    visitors: 0,
    visitorsTrend: 0,
    pages: 0,
    pagesTrend: 0,
    demos: 0,
    demosTrend: 0,
    messages: 0,
    messagesTrend: 0,
    conversion: '0%',
    conversionTrend: 0,
  };

  if (period === 'Aujourd\'hui') {
    visitorData = [
      { date: '00h', visiteurs: 2, pages: 8, demos: 0 },
      { date: '04h', visiteurs: 1, pages: 3, demos: 0 },
      { date: '08h', visiteurs: 12, pages: 34, demos: 1 },
      { date: '12h', visiteurs: 18, pages: 52, demos: 1 },
      { date: '16h', visiteurs: 8, pages: 24, demos: 1 },
      { date: '20h', visiteurs: 4, pages: 15, demos: 0 },
    ];
    kpiData = {
      visitors: 45,
      visitorsTrend: 8,
      pages: 136,
      pagesTrend: 12,
      demos: 3,
      demosTrend: 50,
      messages: 2,
      messagesTrend: 0,
      conversion: '6.7%',
      conversionTrend: 1.2,
    };
  } else if (period === '7 derniers jours') {
    visitorData = [
      { date: '01/03', visiteurs: 120, pages: 342, demos: 5 },
      { date: '02/03', visiteurs: 145, pages: 401, demos: 8 },
      { date: '03/03', visiteurs: 98, pages: 287, demos: 4 },
      { date: '04/03', visiteurs: 167, pages: 456, demos: 11 },
      { date: '05/03', visiteurs: 203, pages: 589, demos: 9 },
      { date: '06/03', visiteurs: 178, pages: 512, demos: 7 },
      { date: '07/03', visiteurs: 156, pages: 441, demos: 6 },
    ];
    kpiData = {
      visitors: 1284,
      visitorsTrend: 12,
      pages: 4921,
      pagesTrend: 8,
      demos: 47,
      demosTrend: 23,
      messages: 31,
      messagesTrend: 5,
      conversion: '3.7%',
      conversionTrend: 0.4,
    };
  } else if (period === '30 derniers jours') {
    visitorData = [
      { date: 'S1', visiteurs: 620, pages: 1842, demos: 18 },
      { date: 'S2', visiteurs: 745, pages: 2201, demos: 24 },
      { date: 'S3', visiteurs: 598, pages: 1687, demos: 19 },
      { date: 'S4', visiteurs: 867, pages: 2456, demos: 31 },
    ];
    kpiData = {
      visitors: 4820,
      visitorsTrend: 18,
      pages: 16234,
      pagesTrend: 15,
      demos: 156,
      demosTrend: 28,
      messages: 98,
      messagesTrend: 12,
      conversion: '3.2%',
      conversionTrend: 0.6,
    };
  } else if (period === 'Cette année') {
    visitorData = [
      { date: 'Jan', visiteurs: 2140, pages: 6242, demos: 67 },
      { date: 'Fév', visiteurs: 2645, pages: 7801, demos: 89 },
      { date: 'Mar', visiteurs: 2398, pages: 6987, demos: 76 },
    ];
    kpiData = {
      visitors: 28400,
      visitorsTrend: 22,
      pages: 89234,
      pagesTrend: 19,
      demos: 892,
      demosTrend: 31,
      messages: 567,
      messagesTrend: 18,
      conversion: '3.1%',
      conversionTrend: 0.8,
    };
  } else if (startDate && endDate) {
    // Custom range - generate random data
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    
    for (let i = 0; i <= Math.min(daysDiff, 7); i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i * Math.floor(daysDiff / 7));
      visitorData.push({
        date: `${date.getDate()}/${date.getMonth() + 1}`,
        visiteurs: Math.floor(Math.random() * 150) + 80,
        pages: Math.floor(Math.random() * 400) + 200,
        demos: Math.floor(Math.random() * 10) + 2,
      });
    }
    
    kpiData = {
      visitors: Math.floor(Math.random() * 3000) + 1000,
      visitorsTrend: Math.floor(Math.random() * 20) + 5,
      pages: Math.floor(Math.random() * 10000) + 3000,
      pagesTrend: Math.floor(Math.random() * 15) + 5,
      demos: Math.floor(Math.random() * 100) + 30,
      demosTrend: Math.floor(Math.random() * 30) + 10,
      messages: Math.floor(Math.random() * 60) + 20,
      messagesTrend: Math.floor(Math.random() * 10) + 2,
      conversion: `${(Math.random() * 2 + 2).toFixed(1)}%`,
      conversionTrend: parseFloat((Math.random() * 1).toFixed(1)),
    };
  }

  return { visitorData, kpiData };
};

export default function AdminAnalytics() {
  const navigate = useNavigate();
  const [activeDateFilter, setActiveDateFilter] = useState('7 derniers jours');
  const [activeChartTab, setActiveChartTab] = useState('Visiteurs');
  const [searchQuery, setSearchQuery] = useState('');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  const [dateRangeLabel, setDateRangeLabel] = useState('');
  const [selectedDemo, setSelectedDemo] = useState<any>(null);
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
  const [selectedPageRow, setSelectedPageRow] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const chartSectionRef = useRef<HTMLDivElement>(null);
  const demoTableRef = useRef<HTMLDivElement>(null);
  const pageTableRef = useRef<HTMLDivElement>(null);

  // Generate initial data
  const [currentData, setCurrentData] = useState(() => generateDataForPeriod('7 derniers jours'));

  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Toast auto-hide
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const handleDateFilterChange = (filter: string) => {
    setActiveDateFilter(filter);
    setDateRangeLabel('');
    const newData = generateDataForPeriod(filter);
    setCurrentData(newData);
  };

  const handleApplyCustomRange = () => {
    if (customStartDate && customEndDate) {
      setActiveDateFilter('');
      setDateRangeLabel(`${customStartDate} — ${customEndDate}`);
      const newData = generateDataForPeriod('custom', customStartDate, customEndDate);
      setCurrentData(newData);
    }
  };

  const handleDemoStatusToggle = (index: number) => {
    const statuses = [
      { name: 'En attente', color: '#C5A059' },
      { name: 'Contacté', color: '#2D472C' },
      { name: 'Démo planifiée', color: '#3B82F6' },
      { name: 'Non répondu', color: '#EF4444' },
    ];
    
    const currentStatusIndex = statuses.findIndex(s => s.name === demoRequests[index].status);
    const nextStatusIndex = (currentStatusIndex + 1) % statuses.length;
    
    demoRequests[index].status = statuses[nextStatusIndex].name;
    demoRequests[index].statusColor = statuses[nextStatusIndex].color;
    
    setToast('Statut mis à jour');
    // Force re-render
    setCurrentData({ ...currentData });
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const trafficSourceData = [
    { name: 'Direct', value: 42, color: '#2D472C', id: 'traffic-direct' },
    { name: 'Google', value: 31, color: '#C5A059', id: 'traffic-google' },
    { name: 'Réseaux Sociaux', value: 18, color: '#6B7280', id: 'traffic-social' },
    { name: 'Autres', value: 9, color: '#D1D5DB', id: 'traffic-other' },
  ];

  const ctaClickData = [
    { name: 'Réserver une Démo (Hero)', clicks: 284 },
    { name: 'Réserver une Démo (Solution)', clicks: 167 },
    { name: 'Découvrir la Solution', clicks: 203 },
    { name: 'Contacter les Ventes', clicks: 89 },
    { name: 'Réserver une Démo (Contact)', clicks: 134 },
    { name: 'Voir les Fonctionnalités', clicks: 112 },
  ];

  const [demoRequests, setDemoRequests] = useState([
    {
      date: '05/03/2026',
      nom: 'Mohamed Karim',
      ecole: 'École Les Oliviers',
      ville: 'Tunis',
      eleves: '200-400',
      apps: 'Dashboard + App Parent',
      status: 'En attente',
      statusColor: '#C5A059',
      message: 'Nous souhaitons moderniser notre système de gestion.',
    },
    {
      date: '04/03/2026',
      nom: 'Sarra Jebali',
      ecole: 'Institut Avenir',
      ville: 'Sfax',
      eleves: '100-200',
      apps: 'Tous',
      status: 'Contacté',
      statusColor: '#2D472C',
      message: 'Intéressée par toutes les applications disponibles.',
    },
    {
      date: '03/03/2026',
      nom: 'Amine Trabelsi',
      ecole: 'École El Amal',
      ville: 'Sousse',
      eleves: '<100',
      apps: 'App Enseignant',
      status: 'Démo planifiée',
      statusColor: '#3B82F6',
      message: 'Besoin urgent pour la gestion des notes.',
    },
    {
      date: '02/03/2026',
      nom: 'Fatma Bouaziz',
      ecole: 'Collège Privé',
      ville: 'Tunis',
      eleves: '200-400',
      apps: 'Dashboard Assistant',
      status: 'Non répondu',
      statusColor: '#EF4444',
      message: 'Souhaitons améliorer la communication interne.',
    },
    {
      date: '01/03/2026',
      nom: 'Yassine Mejri',
      ecole: 'École Carthage',
      ville: 'Bizerte',
      eleves: '100-200',
      apps: 'App Parent',
      status: 'En attente',
      statusColor: '#C5A059',
      message: 'Les parents demandent plus de transparence.',
    },
  ]);

  const pagePerformance = [
    { page: 'Accueil (/)', vues: '2,341', visiteurs: '1,102', rebond: 42, temps: '2m 14s' },
    { page: 'Solution (/solution)', vues: '891', visiteurs: '654', rebond: 38, temps: '3m 05s' },
    { page: 'Applications (/app/teacher)', vues: '445', visiteurs: '312', rebond: 51, temps: '1m 48s' },
    { page: 'À propos (/about)', vues: '334', visiteurs: '289', rebond: 44, temps: '2m 32s' },
    { page: 'Réserver une Démo (/book-demo)', vues: '623', visiteurs: '487', rebond: 28, temps: '4m 11s' },
  ];

  const getBounceColor = (rate: number) => {
    if (rate < 40) return '#10B981';
    if (rate <= 50) return '#C5A059';
    return '#EF4444';
  };

  // Filter demo requests based on search
  const filteredDemoRequests = demoRequests.filter(request => {
    const query = searchQuery.toLowerCase();
    return (
      request.nom.toLowerCase().includes(query) ||
      request.ecole.toLowerCase().includes(query) ||
      request.ville.toLowerCase().includes(query)
    );
  });

  const getLineColor = () => {
    if (activeChartTab === 'Visiteurs') return '#2D472C';
    if (activeChartTab === 'Pages Vues') return '#C5A059';
    return '#2D472C';
  };

  const getLineDataKey = () => {
    if (activeChartTab === 'Visiteurs') return 'visiteurs';
    if (activeChartTab === 'Pages Vues') return 'pages';
    return 'demos';
  };

  return (
    <div style={{ backgroundColor: '#F9F9F7', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #E5E7EB',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
        }}
      >
        {/* Left - Logo + Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              fontWeight: '700',
              color: '#2D472C',
            }}
          >
            Omnischool
          </div>
          <div
            style={{
              backgroundColor: '#2D472C',
              color: 'white',
              fontSize: '11px',
              fontWeight: '600',
              padding: '4px 12px',
              borderRadius: '999px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Analytics
          </div>
        </div>

        {/* Right - Logout + Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'white',
              color: '#2D472C',
              border: '1px solid #2D472C',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2D472C';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#2D472C';
            }}
          >
            Déconnexion
          </button>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#2D472C',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: '600',
              position: 'relative',
            }}
            onClick={() => setShowAvatarDropdown(!showAvatarDropdown)}
          >
            A
            {showAvatarDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  zIndex: 1000,
                }}
              >
                <div
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <User size={16} style={{ color: '#2D472C' }} />
                  <span style={{ fontSize: '13px', color: '#2D472C' }}>Profil</span>
                </div>
                <div
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <X size={16} style={{ color: '#EF4444' }} />
                  <span style={{ fontSize: '13px', color: '#EF4444' }}>Déconnexion</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ padding: '32px' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Row 1 - Date Filter Bar */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              padding: '16px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333333',
                }}
              >
                Période
              </span>
              {['Aujourd\'hui', '7 derniers jours', '30 derniers jours', 'Cette année'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleDateFilterChange(filter)}
                  style={{
                    backgroundColor: activeDateFilter === filter ? '#2D472C' : 'white',
                    color: activeDateFilter === filter ? 'white' : '#333333',
                    border: activeDateFilter === filter ? 'none' : '1px solid #E5E7EB',
                    borderRadius: '4px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-out',
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Custom Date Range */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', color: '#6B7280' }}>Du</span>
              <input
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate(e.target.value)}
                style={{
                  border: '1px solid #E5E7EB',
                  borderRadius: '4px',
                  padding: '6px 10px',
                  fontSize: '13px',
                  color: '#333333',
                }}
              />
              <span style={{ fontSize: '13px', color: '#6B7280' }}>Au</span>
              <input
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate(e.target.value)}
                style={{
                  border: '1px solid #E5E7EB',
                  borderRadius: '4px',
                  padding: '6px 10px',
                  fontSize: '13px',
                  color: '#333333',
                }}
              />
              <button
                onClick={handleApplyCustomRange}
                style={{
                  backgroundColor: '#2D472C',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Appliquer
              </button>
            </div>
          </div>

          {/* Row 2 - 5 KPI Stat Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            {/* Card 1 - Visiteurs Uniques */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Eye size={20} style={{ color: '#2D472C' }} />
                <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: '500' }}>Visiteurs Uniques</span>
              </div>
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                {currentData.kpiData.visitors}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ArrowUp size={14} style={{ color: '#10B981' }} />
                <span style={{ fontSize: '12px', color: '#10B981' }}>+{currentData.kpiData.visitorsTrend}% vs période précédente</span>
              </div>
            </div>

            {/* Card 2 - Pages Vues */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <MousePointer size={20} style={{ color: '#C5A059' }} />
                <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: '500' }}>Pages Vues</span>
              </div>
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                {currentData.kpiData.pages}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ArrowUp size={14} style={{ color: '#10B981' }} />
                <span style={{ fontSize: '12px', color: '#10B981' }}>+{currentData.kpiData.pagesTrend}% vs période précédente</span>
              </div>
            </div>

            {/* Card 3 - Demandes de Démo */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Calendar size={20} style={{ color: '#2D472C' }} />
                <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: '500' }}>Demandes de Démo</span>
              </div>
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                {currentData.kpiData.demos}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ArrowUp size={14} style={{ color: '#10B981' }} />
                <span style={{ fontSize: '12px', color: '#10B981' }}>+{currentData.kpiData.demosTrend}% vs période précédente</span>
              </div>
            </div>

            {/* Card 4 - Messages Reçus */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <MessageSquare size={20} style={{ color: '#C5A059' }} />
                <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: '500' }}>Messages Reçus</span>
              </div>
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                {currentData.kpiData.messages}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ArrowUp size={14} style={{ color: '#10B981' }} />
                <span style={{ fontSize: '12px', color: '#10B981' }}>+{currentData.kpiData.messagesTrend}% vs période précédente</span>
              </div>
            </div>

            {/* Card 5 - Taux de Conversion */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <TrendingUp size={20} style={{ color: '#2D472C' }} />
                <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: '500' }}>Taux de Conversion</span>
              </div>
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '8px',
                }}
              >
                {currentData.kpiData.conversion}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ArrowUp size={14} style={{ color: '#10B981' }} />
                <span style={{ fontSize: '12px', color: '#10B981' }}>+{currentData.kpiData.conversionTrend}% vs période précédente</span>
              </div>
            </div>
          </div>

          {/* Row 3 - Main Chart + Traffic Sources */}
          <div style={{ display: 'grid', gridTemplateColumns: '65% 35%', gap: '24px', marginBottom: '24px' }}>
            {/* Left - Visitors Chart */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#333333',
                  }}
                >
                  Visiteurs par Jour
                </h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['Visiteurs', 'Pages Vues', 'Démos'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveChartTab(tab)}
                      style={{
                        backgroundColor: activeChartTab === tab ? '#2D472C' : 'white',
                        color: activeChartTab === tab ? 'white' : '#6B7280',
                        border: activeChartTab === tab ? 'none' : '1px solid #E5E7EB',
                        borderRadius: '4px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-out',
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={currentData.visitorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis dataKey="date" stroke="#6B7280" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey={getLineDataKey()}
                    stroke={getLineColor()}
                    strokeWidth={2.5}
                    dot={{ fill: '#2D472C', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Right - Traffic Sources */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                padding: '24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '20px',
                }}
              >
                Sources de Trafic
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={trafficSourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {trafficSourceData.map((entry, index) => (
                      <Cell key={`pie-cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                {trafficSourceData.map((source, index) => (
                  <div
                    key={index}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: source.color,
                        }}
                      />
                      <span style={{ fontSize: '13px', color: '#6B7280' }}>{source.name}</span>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#333333' }}>
                      {source.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 4 - Button Click Tracking */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              padding: '24px',
              marginBottom: '24px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333333',
                marginBottom: '20px',
              }}
            >
              Clics sur les Boutons CTA
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ctaClickData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis type="number" stroke="#6B7280" style={{ fontSize: '12px' }} />
                <YAxis dataKey="name" type="category" width={200} stroke="#6B7280" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Bar dataKey="clicks" fill="#2D472C" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Row 5 - Demo Requests Table */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              padding: '24px',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333333',
                }}
              >
                Dernières Demandes de Démo
              </h3>
              <div style={{ position: 'relative' }}>
                <Search
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9CA3AF',
                  }}
                />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    paddingLeft: '36px',
                    paddingRight: '12px',
                    height: '36px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '4px',
                    fontSize: '13px',
                    width: '220px',
                  }}
                />
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Date
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Nom
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      École
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Ville
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Élèves
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Apps Sélectionnées
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Statut
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDemoRequests.map((request, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: '1px solid #E5E7EB',
                        transition: 'background-color 0.2s ease-out',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F9FAFB')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                    >
                      <td style={{ padding: '12px', fontSize: '13px', color: '#333333' }}>{request.date}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#333333', fontWeight: '500' }}>
                        {request.nom}
                      </td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{request.ecole}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{request.ville}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{request.eleves}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{request.apps}</td>
                      <td style={{ padding: '12px' }}>
                        <span
                          onClick={() => handleDemoStatusToggle(index)}
                          style={{
                            backgroundColor: request.statusColor,
                            color: 'white',
                            fontSize: '11px',
                            fontWeight: '600',
                            padding: '4px 10px',
                            borderRadius: '999px',
                            whiteSpace: 'nowrap',
                            cursor: 'pointer',
                          }}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => setSelectedDemo(request)}
                            style={{
                              backgroundColor: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '4px',
                            }}
                          >
                            <EyeIcon size={16} style={{ color: '#6B7280' }} />
                          </button>
                          <button
                            onClick={() => handleDemoStatusToggle(index)}
                            style={{
                              backgroundColor: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '4px',
                            }}
                          >
                            <CheckCircle size={16} style={{ color: '#10B981' }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 6 - Page Performance */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              padding: '24px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333333',
                marginBottom: '20px',
              }}
            >
              Performance des Pages
            </h3>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Page
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Vues
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Visiteurs Uniques
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Taux de Rebond
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                      }}
                    >
                      Temps Moyen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pagePerformance.map((page, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: '1px solid #E5E7EB',
                        transition: 'background-color 0.2s ease-out',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F9FAFB')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                    >
                      <td style={{ padding: '12px', fontSize: '13px', color: '#333333', fontWeight: '500' }}>
                        {page.page}
                      </td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{page.vues}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{page.visiteurs}</td>
                      <td style={{ padding: '12px' }}>
                        <span
                          style={{
                            fontSize: '13px',
                            fontWeight: '600',
                            color: getBounceColor(page.rebond),
                          }}
                        >
                          {page.rebond}%
                        </span>
                      </td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{page.temps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#2D472C',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          {toast}
        </div>
      )}

      {/* Side Panel - Demo Details */}
      {selectedDemo && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setSelectedDemo(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          />

          {/* Side Panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '400px',
              backgroundColor: 'white',
              boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.15)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '24px',
                borderBottom: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                }}
              >
                Détails de la Demande
              </h3>
              <button
                onClick={() => setSelectedDemo(null)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} style={{ color: '#6B7280' }} />
              </button>
            </div>

            {/* Content */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '24px',
              }}
            >
              {/* Date */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Date
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: '500',
                  }}
                >
                  {selectedDemo.date}
                </div>
              </div>

              {/* Name */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Nom
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: '500',
                  }}
                >
                  {selectedDemo.nom}
                </div>
              </div>

              {/* School */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  École
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: '500',
                  }}
                >
                  {selectedDemo.ecole}
                </div>
              </div>

              {/* City */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Ville
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: '500',
                  }}
                >
                  {selectedDemo.ville}
                </div>
              </div>

              {/* Student Count */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Nombre d'Élèves
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: '500',
                  }}
                >
                  {selectedDemo.eleves}
                </div>
              </div>

              {/* Selected Apps */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Applications Sélectionnées
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedDemo.apps.split(' + ').map((app: string, idx: number) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: '#F3F4F6',
                        color: '#2D472C',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: '500',
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Message
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: '1.6',
                    backgroundColor: '#F9FAFB',
                    padding: '12px',
                    borderRadius: '6px',
                  }}
                >
                  {selectedDemo.message}
                </div>
              </div>

              {/* Status */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Statut Actuel
                </div>
                <span
                  style={{
                    backgroundColor: selectedDemo.statusColor,
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    display: 'inline-block',
                  }}
                >
                  {selectedDemo.status}
                </span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => {
                    setToast('Marqué comme contacté');
                    setSelectedDemo(null);
                  }}
                  style={{
                    backgroundColor: '#2D472C',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Marquer comme Contacté
                </button>
                <button
                  onClick={() => {
                    setToast('Démo planifiée');
                    setSelectedDemo(null);
                  }}
                  style={{
                    backgroundColor: '#C5A059',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Planifier une Démo
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}