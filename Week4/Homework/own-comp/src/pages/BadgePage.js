import Badge from '../components/Badge'

const BadgePage = () => {
  return (
    <div style={{padding: 16}}>
      <h1 style={{marginBottom: 12}}>Badge Demo</h1>
      <div style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
        <Badge label="New" />
        <Badge label="Sale" color="#10b981" />
        <Badge label="Alert" color="#ef4444" />
        <Badge label="Info" color="#6366f1" />
        <Badge label="Outline" color="#f59e0b" outline />
        <Badge label="Rounded" color="#a855f7" rounded />
        <Badge label="Outline + Rounded" color="#334155" outline rounded />
      </div>
    </div>
  )
}

export default BadgePage

