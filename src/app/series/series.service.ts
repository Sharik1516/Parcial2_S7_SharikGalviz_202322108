import { Injectable } from '@angular/core';
import { Serie } from './serie.model';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  getSeries(): Serie[] {
    return [
    {
        "id": "36ea5179-d5f2-44cc-878d-bb0289ae97b5",
        "airlineName": "Air Canada",
        "country": "Russia",
        "city": "Chashnikovo",
        "address": "552 Anniversary Circle",
        "identityColor": "#5af2fd",
        "slogan": "iterate 24/365 e-commerce",
        "flights": [
            {
                "id": "251831a9-b61d-4f41-b415-c9bed8c6b39e",
                "departureAirport": "Los Angeles International",
                "departureCountry": "USA",
                "departureCity": "Los Angeles",
                "arrivalAirport": "San Francisco International",
                "arrivalCountry": "USA",
                "arrivalCity": "San Francisco",
                "departureTime": "15:45",
                "flightDuration": 1.5,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
            },
            {
                "id": "84beb667-8d80-49e4-8c0c-e8a9c1bde6bd",
                "departureAirport": "Dubai International",
                "departureCountry": "UAE",
                "departureCity": "Dubai",
                "arrivalAirport": "Jomo Kenyatta International",
                "arrivalCountry": "Kenya",
                "arrivalCity": "Nairobi",
                "departureTime": "17:15",
                "flightDuration": 4,
                "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
            },
            {
                "id": "6e73ece7-d5ca-4cd0-95dc-5b55ee891b0e",
                "departureAirport": "Los Angeles International",
                "departureCountry": "USA",
                "departureCity": "Los Angeles",
                "arrivalAirport": "San Francisco International",
                "arrivalCountry": "USA",
                "arrivalCity": "San Francisco",
                "departureTime": "15:00",
                "flightDuration": 1.5,
                "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            },
            {
                "id": "780611a0-5753-484b-95c4-467737dc4761",
                "departureAirport": "Los Angeles International",
                "departureCountry": "USA",
                "departureCity": "Los Angeles",
                "arrivalAirport": "San Francisco International",
                "arrivalCountry": "USA",
                "arrivalCity": "San Francisco",
                "departureTime": "17:15",
                "flightDuration": 1.5,
                "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
            },
            {
                "id": "53378da1-9149-431d-ad9f-458cc942632a",
                "departureAirport": "Leonardo da Vinci International",
                "departureCountry": "Italy",
                "departureCity": "Rome",
                "arrivalAirport": "Adolfo Suárez Madrid–Barajas",
                "arrivalCountry": "Spain",
                "arrivalCity": "Madrid",
                "departureTime": "08:00",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
            }
        ]
    },
    {
        "id": "e0d44239-d35a-40b9-99c0-e9a07cde6b40",
        "airlineName": "Korean Air",
        "country": "Portugal",
        "city": "Arcena",
        "address": "2 Talmadge Point",
        "identityColor": "#dc1379",
        "slogan": "drive impactful architectures",
        "flights": [
            {
                "id": "2f1962d5-00b3-4b69-b908-dd936a3c100b",
                "departureAirport": "O.R. Tambo International",
                "departureCountry": "South Africa",
                "departureCity": "Johannesburg",
                "arrivalAirport": "Charles de Gaulle",
                "arrivalCountry": "France",
                "arrivalCity": "Paris",
                "departureTime": "11:45",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
            },
            {
                "id": "32908deb-35c5-416f-9f16-2ad7cfd136e0",
                "departureAirport": "Sydney Airport",
                "departureCountry": "Australia",
                "departureCity": "Sydney",
                "arrivalAirport": "Charles de Gaulle",
                "arrivalCountry": "France",
                "arrivalCity": "Paris",
                "departureTime": "18:00",
                "flightDuration": 14,
                "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            },
            {
                "id": "44d45a22-915c-4280-b2e0-196a1ff4b482",
                "departureAirport": "Benito Juárez International",
                "departureCountry": "Mexico",
                "departureCity": "Mexico City",
                "arrivalAirport": "O'Hare International",
                "arrivalCountry": "USA",
                "arrivalCity": "Chicago",
                "departureTime": "19:00",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
            },
            {
                "id": "67f9469d-9821-47fd-b92d-f87a39b6ea80",
                "departureAirport": "Haneda",
                "departureCountry": "Japan",
                "departureCity": "Tokyo",
                "arrivalAirport": "Incheon International",
                "arrivalCountry": "South Korea",
                "arrivalCity": "Seoul",
                "departureTime": "10:45",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
            },
            {
                "id": "2405a0bd-7bb2-4ea0-bf26-8affbaad951d",
                "departureAirport": "Leonardo da Vinci International",
                "departureCountry": "Italy",
                "departureCity": "Rome",
                "arrivalAirport": "Charles de Gaulle",
                "arrivalCountry": "France",
                "arrivalCity": "Paris",
                "departureTime": "21:45",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            }
        ]
    },
    {
        "id": "3b04ad2f-6e88-40a9-a31f-8bedb546c536",
        "airlineName": "Southwest Airlines",
        "country": "Palestinian Territory",
        "city": "An Naşr",
        "address": "3 Erie Lane",
        "identityColor": "#efaa88",
        "slogan": "expedite bleeding-edge web-readiness",
        "flights": [
            {
                "id": "7828ccb0-2b01-4427-8173-57762614ce35",
                "departureAirport": "Bole International",
                "departureCountry": "Ethiopia",
                "departureCity": "Addis Ababa",
                "arrivalAirport": "Hamad International",
                "arrivalCountry": "Qatar",
                "arrivalCity": "Doha",
                "departureTime": "17:15",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
            },
            {
                "id": "b102d3e9-ddc8-44db-ad45-f7fd63555290",
                "departureAirport": "John F. Kennedy International",
                "departureCountry": "USA",
                "departureCity": "New York",
                "arrivalAirport": "Hartsfield-Jackson Atlanta",
                "arrivalCountry": "USA",
                "arrivalCity": "Atlanta",
                "departureTime": "15:00",
                "flightDuration": 1.5,
                "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            },
            {
                "id": "eecdecb9-a1da-4229-9906-fb445af9c11b",
                "departureAirport": "Incheon International",
                "departureCountry": "South Korea",
                "departureCity": "Seoul",
                "arrivalAirport": "Haneda",
                "arrivalCountry": "Japan",
                "arrivalCity": "Tokyo",
                "departureTime": "15:30",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
            },
            {
                "id": "118a947a-b38e-472c-8ef5-71b9968d9722",
                "departureAirport": "Haneda",
                "departureCountry": "Japan",
                "departureCity": "Tokyo",
                "arrivalAirport": "Incheon International",
                "arrivalCountry": "South Korea",
                "arrivalCity": "Seoul",
                "departureTime": "13:45",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            },
            {
                "id": "a63f88c4-ddd0-4746-9f47-369af14fad37",
                "departureAirport": "Amsterdam Airport Schiphol",
                "departureCountry": "Netherlands",
                "departureCity": "Amsterdam",
                "arrivalAirport": "Charles de Gaulle",
                "arrivalCountry": "France",
                "arrivalCity": "Paris",
                "departureTime": "19:15",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
            }
        ]
    },
    {
        "id": "2c820b84-61f1-4e6b-9e4a-575e9bfa53aa",
        "airlineName": "Cathay Pacific",
        "country": "China",
        "city": "Jiangchuanlu",
        "address": "0 Bunting Center",
        "identityColor": "#903aac",
        "slogan": "recontextualize synergistic niches",
        "flights": [
            {
                "id": "68b220a2-40dc-407d-9cf5-05fca72435de",
                "departureAirport": "Amsterdam Airport Schiphol",
                "departureCountry": "Netherlands",
                "departureCity": "Amsterdam",
                "arrivalAirport": "Charles de Gaulle",
                "arrivalCountry": "France",
                "arrivalCity": "Paris",
                "departureTime": "18:30",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
            },
            {
                "id": "923edf3a-035a-495f-926d-6877615c7672",
                "departureAirport": "Toronto Pearson",
                "departureCountry": "Canada",
                "departureCity": "Toronto",
                "arrivalAirport": "John F. Kennedy International",
                "arrivalCountry": "USA",
                "arrivalCity": "New York",
                "departureTime": "15:15",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            },
            {
                "id": "03dec9a8-5670-4cc0-a461-92e1245453f3",
                "departureAirport": "Amsterdam Airport Schiphol",
                "departureCountry": "Netherlands",
                "departureCity": "Amsterdam",
                "arrivalAirport": "Hamad International",
                "arrivalCountry": "Qatar",
                "arrivalCity": "Doha",
                "departureTime": "10:00",
                "flightDuration": 4,
                "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            },
            {
                "id": "d9941251-13ff-4b01-8bf5-b57d5d935e68",
                "departureAirport": "Indira Gandhi International",
                "departureCountry": "India",
                "departureCity": "Delhi",
                "arrivalAirport": "Chhatrapati Shivaji International",
                "arrivalCountry": "India",
                "arrivalCity": "Mumbai",
                "departureTime": "21:15",
                "flightDuration": 1.5,
                "image": "http://dummyimage.com/100x100.png/dddddd/000000"
            },
            {
                "id": "e18cb20a-e5fa-45c4-95f6-84bee22c2192",
                "departureAirport": "Dubai International",
                "departureCountry": "UAE",
                "departureCity": "Dubai",
                "arrivalAirport": "Bole International",
                "arrivalCountry": "Ethiopia",
                "arrivalCity": "Addis Ababa",
                "departureTime": "20:15",
                "flightDuration": 4,
                "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
            }
        ]
    },
    {
        "id": "67b9c14f-8713-4366-b4a9-5460089f573b",
        "airlineName": "Lufthansa",
        "country": "Croatia",
        "city": "Rešetari",
        "address": "995 Sullivan Court",
        "identityColor": "#a04ad8",
        "slogan": "engineer magnetic synergies",
        "flights": [
            {
                "id": "5e684331-a9ff-45d0-b593-e18c4f48d7f3",
                "departureAirport": "Amsterdam Airport Schiphol",
                "departureCountry": "Netherlands",
                "departureCity": "Amsterdam",
                "arrivalAirport": "Stockholm Arlanda",
                "arrivalCountry": "Sweden",
                "arrivalCity": "Stockholm",
                "departureTime": "06:00",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
            },
            {
                "id": "0b4785d6-684e-4038-bb5e-f7b201fc5198",
                "departureAirport": "Auckland Airport",
                "departureCountry": "New Zealand",
                "departureCity": "Auckland",
                "arrivalAirport": "Melbourne Airport",
                "arrivalCountry": "Australia",
                "arrivalCity": "Melbourne",
                "departureTime": "13:45",
                "flightDuration": 5,
                "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
            },
            {
                "id": "4b6706b0-2ebe-4313-b298-873c2a8e07c7",
                "departureAirport": "Adolfo Suárez Madrid–Barajas",
                "departureCountry": "Spain",
                "departureCity": "Madrid",
                "arrivalAirport": "John F. Kennedy International",
                "arrivalCountry": "USA",
                "arrivalCity": "New York",
                "departureTime": "21:45",
                "flightDuration": 12,
                "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
            },
            {
                "id": "f64e7956-e9be-4fda-a5d9-b4db149821c2",
                "departureAirport": "Copenhagen Airport",
                "departureCountry": "Denmark",
                "departureCity": "Copenhagen",
                "arrivalAirport": "Charles de Gaulle",
                "arrivalCountry": "France",
                "arrivalCity": "Paris",
                "departureTime": "09:00",
                "flightDuration": 3,
                "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
            },
            {
                "id": "93825c21-1ac0-4e5e-83f2-bd7831c93b50",
                "departureAirport": "Los Angeles International",
                "departureCountry": "USA",
                "departureCity": "Los Angeles",
                "arrivalAirport": "Seattle-Tacoma International",
                "arrivalCountry": "USA",
                "arrivalCity": "Seattle",
                "departureTime": "11:15",
                "flightDuration": 1.5,
                "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
            }
        ]
    }
];
  }
}