document.querySelector('button').addEventListener('click', getCountry);

async function getCountry() {
  const country = document.querySelector('input').value

  let div = document.querySelector('div');
  if (div) {
    document.body.removeChild(div);
  }
  div = document.createElement('div');
  document.body.appendChild(div);
  // if (document.querySelector('div')) {
  //   document.body.removeChild('div');
  //  } else {
  //    let div = document.createElement('div');
  //  }
  // document.body.appendChild(div);
  try {
    const response = await fetch(`https://country-seasons-api.herokuapp.com/api/${country}`);
    const data = await response.json();
    console.log(data);
    const h2 = document.createElement('h2');
    h2.textContent = `${
      country.split(' ').map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ')
    }`;
    div.appendChild(h2);
    for (let season in data.seasons) {
      console.log(season);
      const temps = data.seasons[season].fahrenheitTemps;
      const months = data.seasons[season].months;

      const h3 = document.createElement('h3')
      h3.textContent = `${season[0].toUpperCase() + season.slice(1)}` +
        ` (${months.join(', ')})`;
      div.appendChild(h3);
      const p = document.createElement('p');
      p.textContent = `Average Temp Range: ${temps.minAverageRange[0]} - ${temps.maxAverageRange[1]} F`;
      div.appendChild(p);
    }
  } catch(err) {
    console.error(err);
  }
}
