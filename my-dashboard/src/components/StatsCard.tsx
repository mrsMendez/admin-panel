type Props = {
  title: string;
  count: number;
  icon?: React.ReactNode;
};

export default function StatsCard({ title, count, icon }: Props) {
  return (
    <div
      style={{
        flex: '1 1 240px',
        padding: '2rem',
        borderRadius: '16px',
        background: '#161b22',
        boxShadow: '0 6px 14px rgba(0,0,0,0.4)',
        textAlign: 'center',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          fontSize: '2.5rem',
          marginBottom: '0.75rem',
          color: '#1abc9c',
        }}
      >
        {icon}
      </div>
      <h3 style={{ marginBottom: '0.5rem', color: '#f0f0f0' }}>{title}</h3>
      <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ffffff' }}>
        {count}
      </p>
    </div>
  );
}
