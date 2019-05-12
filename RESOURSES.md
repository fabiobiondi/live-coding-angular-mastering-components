# Resourses

### STATIC MAP API

#### API + token url
`https://maps.googleapis.com/maps/api/staticmap?center=Italy&zoom=5&size=200x100&key=AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus`

---

### WEATHER API

#### API + token url

`http://api.openweathermap.org/data/2.5/weather?q=MILANO&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`

#### Icon url
`https://openweathermap.org/img/w/01d.png`

---

### MOCK DATA: countries

```javascript
export const COUNTRIES = [
  { id: 1001, label: 'Trieste', lat: 45.6, lng: 13.77, temp: [12, 19, 3, 5, 2, 3]},
  { id: 1002, label: 'Paris', lat: 48.8, lng: 2.35, temp: [12, 19, 3, 35, 2, 3]},
  { id: 1003, label: 'New York', lat: 40, lng: -74, temp: [12, 19, 23, 25, 12, 3]}
];
```

---

### MOCK DATA: CHartJS

```javascript

export let CHART_DATA: ChartConfiguration = {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      data: [12, 19, 9, 15, 22, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    legend:  null,
  }
};
```

