import axios from 'axios'


const api = axios.get('https://api-sa-east-1.hygraph.com/v2/cl4syg68z2n3t01zcg8wmdhau/master?query=%7B%0A%20%20questions%20%7B%0A%20%20%20%20identify%0A%20%20%20%20questionText%0A%20%20%7D%0A%20%20answers%20%7B%0A%20%20%20%20identify%0A%20%20%20%20answerOption%0A%20%20%7D%0A%7D%0A')



