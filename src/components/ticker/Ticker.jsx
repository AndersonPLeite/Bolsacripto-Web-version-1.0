import React, { useEffect, useRef } from 'react';

const TradingViewTicker = () => {
  const containerRef = useRef(null);

  useEffect(() => {

    if (containerRef.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
        { proName: 'BMFBOVESPA:IBOV' },
        { proName: 'SP:SPX' },
        { proName: 'TVC:DXY' },
        { proName: 'CAPITALCOM:US100' },
        { proName: 'BINANCE:SOLUSDT' },
        { proName: 'COINBASE:PAXGUSDC.P' },
        { proName: 'TVC:DJI' },
        { proName: 'SPREADEX:NIKKEI' },
        { proName: 'HSI:HSI' },
        { proName: 'TVC:USOIL' },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en',
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
        </a>
      </div>
    </div>
  );
};

export default TradingViewTicker;
