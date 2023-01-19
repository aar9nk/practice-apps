export default function Home() {
  return(
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>Weather app!</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <input type="text" />
        <button style={{
          padding: '8px',
          borderRadius: '8px',
          border: '1px solid black',
          cursor: 'pointer',
        }}
        >Ok</button>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h2 style={{color: 'blue'}}>21</h2>
      </div>
    </div>
  )
}