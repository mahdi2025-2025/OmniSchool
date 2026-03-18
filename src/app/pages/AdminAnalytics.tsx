import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import {
  Eye,
  MousePointer,
  Calendar,
  MessageSquare,
  TrendingUp,
  ArrowUp,
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
  ResponsiveContainer,
} from 'recharts';
import { apiGet, apiPut, API_BASE_URL } from '../lib/api';

// --- Local mock datasets (fallback until backend endpoints exist) ---
const trafficSourceData: Array<{ name: string; value: number; color: string }> = [
  { name: 'Recherche', value: 45, color: '#2D472C' },
  { name: 'Réseaux sociaux', value: 25, color: '#C5A059' },
  { name: 'Direct', value: 20, color: '#6B7280' },
  { name: 'Référents', value: 10, color: '#10B981' },
];

const ctaClickData: Array<{ name: string; clicks: number }> = [
  { name: 'Demander une démo (Hero)', clicks: 128 },
  { name: 'Réserver une démo (BookDemo)', clicks: 76 },
  { name: 'Contacter (Footer)', clicks: 42 },
  { name: 'Découvrir la solution', clicks: 63 },
];

const pagePerformance: Array<{
  page: string;
  vues: number;
  visiteurs: number;
  rebond: number;
  temps: string;
}> = [
  { page: '/', vues: 3240, visiteurs: 2120, rebond: 42, temps: '02:14' },
  { page: '/solution', vues: 1410, visiteurs: 980, rebond: 38, temps: '03:02' },
  { page: '/book-demo', vues: 860, visiteurs: 650, rebond: 51, temps: '01:35' },
  { page: '/contact', vues: 410, visiteurs: 330, rebond: 36, temps: '02:05' },
];
// --- End mock datasets ---

// type DailyTrendDTO = { date: string; requests: number; conversions: number };

type DashboardStatsDTO = {
  totalDemoRequests: number;
  pendingRequests: number;
  completedRequests: number;
  conversionRate: number;
  dailyTrends: Array<{ date: string; requests: number; conversions: number }>;
  requestsByStatus: Record<string, number>;
};

type DemoRequestDTO = {
  id: number;
  createdAt?: string;
  fullName: string;
  email: string;
  phone?: string;
  schoolName: string;
  city?: string;
  numberOfStudents?: number;
  interestedIn?: string[];
  status: string;
  message?: string;
};

type PageResponse<T> = {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
};

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

const formatDateTime = (value?: string) => {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
};

const statusColor = (status: string) => {
  switch (status) {
    case 'PENDING':
      return '#C5A059';
    case 'NO_RESPONSE':
      return '#6B7280';
    case 'SCHEDULED':
      return '#3B82F6';
    default:
      return '#6B7280';
  }
};

const statusLabelFr = (status: string) => {
  switch (status) {
    case 'PENDING':
      return 'En attente';
    case 'NO_RESPONSE':
      return 'Non répondu';
    case 'SCHEDULED':
      return 'Démo planifiée';
    default:
      return status;
  }
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

  // Replace mock data with backend-connected state
  const [dashboardStats, setDashboardStats] = useState<DashboardStatsDTO | null>(null);
  const [demoRequests, setDemoRequests] = useState<DemoRequestDTO[]>([]);
  const [loadingStats, setLoadingStats] = useState(false);
  const [loadingRequests, setLoadingRequests] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Generate initial data (used as fallback)
  const [currentData, setCurrentData] = useState(() => generateDataForPeriod('7 derniers jours'));

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const adminFlag = localStorage.getItem('adminLoggedIn');
    const userRaw = localStorage.getItem('currentUser');

    let role: string | undefined;
    try {
      role = userRaw ? (JSON.parse(userRaw) as { role?: string }).role : undefined;
    } catch {
      role = undefined;
    }

    // Require both a JWT token and ADMIN role.
    if (!token || !adminFlag || role !== 'ADMIN') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('adminLoggedIn');
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
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const buildDateParams = () => {
    if (customStartDate && customEndDate && !activeDateFilter) {
      return `?startDate=${customStartDate}&endDate=${customEndDate}`;
    }
    // For preset filters, let backend default range when params are missing.
    return '';
  };

  const loadDashboard = async () => {
    try {
      setApiError(null);
      setLoadingStats(true);
      const stats = await apiGet<DashboardStatsDTO>(`/api/analytics/dashboard${buildDateParams()}`);
      setDashboardStats(stats);

      // Map backend daily trends into the chart format this page expects.
      const visitorData = (stats.dailyTrends ?? []).map((t) => {
        // keep label short: yyyy-MM-dd -> dd/MM
        const d = new Date(t.date);
        const label = Number.isNaN(d.getTime())
          ? t.date
          : `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;

        return {
          date: label,
          visiteurs: t.requests,
          pages: t.requests, // no page views tracking yet
          demos: t.requests,
        };
      });

      const kpiData = {
        visitors: stats.totalDemoRequests,
        visitorsTrend: 0,
        pages: stats.totalDemoRequests,
        pagesTrend: 0,
        demos: stats.totalDemoRequests,
        demosTrend: 0,
        messages: 0,
        messagesTrend: 0,
        conversion: `${(stats.conversionRate ?? 0).toFixed(1)}%`,
        conversionTrend: 0,
      };

      setCurrentData({ visitorData, kpiData });
    } catch (e) {
      setApiError(e instanceof Error ? e.message : 'Erreur API');
    } finally {
      setLoadingStats(false);
    }
  };

  const loadDemoRequests = async () => {
    try {
      setApiError(null);
      setLoadingRequests(true);
      const url = new URL(`${API_BASE_URL}/api/demo/requests`);
      url.searchParams.set('page', '0');
      url.searchParams.set('size', '10');
      if (searchQuery) url.searchParams.set('search', searchQuery);
      // status filter not wired in UI yet

      const res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken') ?? ''}`,
        },
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const page = (await res.json()) as PageResponse<DemoRequestDTO>;
      setDemoRequests(page.content ?? []);
    } catch (e) {
      setApiError(e instanceof Error ? e.message : 'Erreur API');
    } finally {
      setLoadingRequests(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadDashboard();
    loadDemoRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reload table on search
  useEffect(() => {
    const t = setTimeout(() => {
      loadDemoRequests();
    }, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // Hook date filter apply to reload dashboard
  const handleDateFilterChange = (filter: string) => {
    setActiveDateFilter(filter);
    setDateRangeLabel('');
    // keep existing UI behavior but reload backend stats
    setCurrentData(generateDataForPeriod(filter));
    loadDashboard();
  };

  const handleApplyCustomRange = () => {
    if (customStartDate && customEndDate) {
      setActiveDateFilter('');
      setDateRangeLabel(`${customStartDate} — ${customEndDate}`);
      loadDashboard();
    }
  };

  // Disable mock toggling: update real backend status instead
  const handleDemoStatusToggle = async (index: number) => {
    try {
      const item = demoRequests[index];
      if (!item) return;
      const statuses = ['PENDING', 'NO_RESPONSE', 'SCHEDULED'];
      const currentIdx = Math.max(0, statuses.indexOf(item.status));
      const next = statuses[(currentIdx + 1) % statuses.length];

      await apiPut<DemoRequestDTO>(`/api/demo/requests/${item.id}/status?status=${next}`);
      setToast('Statut mis à jour');
      await loadDashboard();
      await loadDemoRequests();
    } catch {
      setToast('Erreur de mise à jour');
    }
  };

  const getBounceColor = (rate: number) => {
    if (rate < 40) return '#10B981';
    if (rate <= 50) return '#C5A059';
    return '#EF4444';
  };

  const filteredDemoRequests = demoRequests;

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
                      <td style={{ padding: '12px', fontSize: '13px', color: '#333333' }}>{formatDateTime(request.createdAt)}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#333333', fontWeight: '500' }}>
                        {request.fullName}
                      </td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{request.schoolName}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{request.city ?? ''}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{request.numberOfStudents ?? ''}</td>
                      <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280' }}>{(request.interestedIn ?? []).join(', ')}</td>
                      <td style={{ padding: '12px' }}>
                        <select
                          value={request.status}
                          onChange={async (e) => {
                            const next = e.target.value;
                            const idx = demoRequests.findIndex((r) => r.id === request.id);
                            if (idx >= 0) {
                              await apiPut<DemoRequestDTO>(`/api/demo/requests/${request.id}/status?status=${next}`);
                              setToast('Statut mis à jour');
                              await loadDashboard();
                              await loadDemoRequests();
                            }
                          }}
                          style={{
                            border: '1px solid #E5E7EB',
                            borderRadius: '999px',
                            padding: '6px 10px',
                            fontSize: '12px',
                            fontWeight: '600',
                            backgroundColor: statusColor(request.status),
                            color: 'white',
                            cursor: 'pointer',
                          }}
                        >
                          <option value="PENDING">En attente</option>
                          <option value="NO_RESPONSE">Non répondu</option>
                          <option value="SCHEDULED">Démo planifiée</option>
                        </select>
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
                  {formatDateTime(selectedDemo.createdAt)}
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
                  {selectedDemo.fullName}
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
                  {selectedDemo.schoolName}
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
                  {selectedDemo.city ?? ''}
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
                  {selectedDemo.numberOfStudents}
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
                  {(selectedDemo.interestedIn ?? []).map((app: string, idx: number) => (
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
                    backgroundColor: statusColor(selectedDemo.status),
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    display: 'inline-block',
                  }}
                >
                  {statusLabelFr(selectedDemo.status)}
                </span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={async () => {
                    try {
                      await apiPut<DemoRequestDTO>(`/api/demo/requests/${selectedDemo.id}/status?status=NO_RESPONSE`);
                      setToast('Statut mis à jour');
                      setSelectedDemo(null);
                      await loadDashboard();
                      await loadDemoRequests();
                    } catch {
                      setToast('Erreur de mise à jour');
                    }
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
                  Marquer comme Non répondu
                </button>
                <button
                  onClick={async () => {
                    try {
                      await apiPut<DemoRequestDTO>(`/api/demo/requests/${selectedDemo.id}/status?status=SCHEDULED`);
                      setToast('Statut mis à jour');
                      setSelectedDemo(null);
                      await loadDashboard();
                      await loadDemoRequests();
                    } catch {
                      setToast('Erreur de mise à jour');
                    }
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
                  Démo planifiée
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
