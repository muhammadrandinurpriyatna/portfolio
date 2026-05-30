import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import { isDev } from '@builder.io/qwik/build';
import { LocaleProvider } from './contexts/locale-context';
import './global.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && <link rel="manifest" href="/manifest.json" />}
        <RouterHead />
      </head>
      <body lang="id">
        {/* Runs synchronously before paint to prevent theme flash */}
        <script dangerouslySetInnerHTML={`(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');var l=localStorage.getItem('portfolio-locale');document.documentElement.lang=l==='en'?'en':'id';}catch(e){}})();`} />
        <LocaleProvider>
          <RouterOutlet />
        </LocaleProvider>
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
