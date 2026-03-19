// app/page.tsx or similar file
import HlsVideoPlayer from './reproductor'

const HomePage: React.FC = () => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    // Add other Video.js options here
  };

  const m3u8Url = 'https://pub-3e305f428cc44fd7ab4903f3ad22cec6.r2.dev/vmix_trial____60_again___otra_vez_1773874927194/master.m3u8'; // Replace with your actual M3U8 URL

  return (
    <div>
      <h1>Next.js Video.js HLS Player</h1>
      <HlsVideoPlayer src={m3u8Url} options={videoJsOptions} />
    </div>
  );
};

export default HomePage;
