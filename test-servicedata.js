// Quick test to verify serviceData imports correctly
import { serviceData } from './src/data/serviceData.js';

console.log('Service Data loaded successfully!');
console.log('Number of main services:', serviceData.main.length);
console.log('Number of additional services:', serviceData.additional.length);

// Check the immigration service specifically
const immigrationService = serviceData.main.find(s => s.id === 7);
console.log('Immigration service found:', immigrationService ? 'YES' : 'NO');
if (immigrationService) {
    console.log('Immigration service image:', immigrationService.image);
    console.log('Immigration service title:', immigrationService.title);
}
