import localStorageAPI from './localStorageAPI';

// set Quote of the Day
(async () => {
  let quoteData = await localStorageAPI.getQuoteOfTheDay();
  document.querySelector('.quote-author').textContent = quoteData.author;
  document.querySelector('.quote-text').textContent = quoteData.quote;
})();

import './header';
import './scroll';