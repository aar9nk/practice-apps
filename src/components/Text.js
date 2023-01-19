const getFontSize = (variant) => {
  switch(variant) {
    case 'heading':
      return '48px';
    case 'large':
      return '30px';
    case 'small':
      return '12px';
    default:
      return '20px';
  }
}

const getFontWeight = (variant) => {
  switch(variant) {
    case 'heading':
      return 'bold';
    default:
      return 'normal';
  }
}

export default function Text({children, variant, style}) {
  return(
    <p style={{
      fontSize: getFontSize(variant),
      fontWeight: getFontWeight(variant),
      ...style,
    }}>
      {children}
    </p>
  )
}