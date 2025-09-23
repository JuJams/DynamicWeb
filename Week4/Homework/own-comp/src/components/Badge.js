import PropTypes from 'prop-types'

// Simple reusable Badge component
// Props:
// - label: text to show
// - color: background color (e.g., '#e11d48' or 'purple')
// - outline: draws an outline instead of solid fill
// - rounded: pill style when true
const Badge = (props) => {
  const {label, color = '#3b82f6', outline = false, rounded = false} = props

  const baseStyles = {
    display: 'inline-block',
    padding: '2px 8px',
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.4,
    borderRadius: rounded ? 9999 : 6,
    border: `1px solid ${color}`,
    color: outline ? color : '#fff',
    background: outline ? 'transparent' : color,
  }

  return <span style={baseStyles}>{label}</span>
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
}

export default Badge

