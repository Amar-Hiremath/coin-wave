import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "FOREXCOM:ETHUSD",
        "width": 350,
        "height": 220,
        "locale": "en",
        "dateRange": "1D",
        "colorTheme": "dark",
        "isTransparent": true,
        "autosize": false,
        "largeChartUrl": "",
        "chartOnly": true,
        "noTimeScale": true
      }
    `;
    
    const container = document.getElementById('tradingview-widget-container');
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, []);

  return (
    <div id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
