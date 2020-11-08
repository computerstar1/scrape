const CrawlE = require('crawl-e/v0.5.2')

let crawlE = new CrawlE({
  cinemas: [
    {
      name: 'Kino Ebensee',
      address: ' Schulgasse 6, 4802 Ebensee',
      website: 'https://www.kino-ebensee.at/',
      phone: '0043 6133 6308'
    }
  ],

  showtimes: {
    url: 'https://www.kino-freistadt.at/?site=program&date=25-10-2020',
    urlDateFormat: 'DD-MM-YYYY',
    movies: {
      box: '.dailyProgramMovieBox',
      title: '.dailyProgramContentMovie',
    showtimes: {
      box: '.dailyProgramTime',
      dateFormat: 'HH:mm', // here should be timeFormat not dateFormat as you're framework describes. why this happens?? please be more specific and  
      dateLocale: 'de'
    }
  }
}

})
crawlE.crawl()