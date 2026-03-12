export default function LiveChatPage() {
  // Une simple page Next.js avec l'iframe en plein écran (100% de la largeur et de la hauteur)
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, overflow: 'hidden', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe 
        src="https://siamvisapro.com/liveavatar" 
        allow="microphone" 
        title="LiveAvatar Embed" 
        style={{ width: '100%', height: '100%', border: 'none', aspectRatio: '16/9' }}
      />
    </div>
  );
}
