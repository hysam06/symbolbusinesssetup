// CommonJS version - compatible with Node.js
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Configure Cloudinary from environment variables
cloudinary.config({
    cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME || 'dlnygpreh',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Image mapping: local path -> cloudinary public_id
const imageMapping = [
    // Service images
    { local: 'src/assets/pexels-tima-miroshnichenko-5710948.jpg', cloudinary: 'services/service-1' },
    { local: 'src/assets/pexels-pavel-danilyuk-8205064.jpg', cloudinary: 'services/service-2' },
    { local: 'src/assets/pexels-august-de-richelieu-4427624.jpg', cloudinary: 'services/service-3' },
    { local: 'src/assets/pexels-leeloothefirst-6929011.jpg', cloudinary: 'services/service-4' },
    { local: 'src/assets/pexels-artempodrez-6779565.jpg', cloudinary: 'services/service-5' },
    { local: 'src/assets/legal.jpg', cloudinary: 'services/legal-1' },
    { local: 'src/assets/legal (2).jpg', cloudinary: 'services/legal-2' },
    { local: 'src/assets/immigration.jpg', cloudinary: 'services/immigration' },

    // About image
    { local: 'src/assets/about us.jpg', cloudinary: 'about/about-us' },

    // Background images
    { local: 'src/assets/pexels-tima-miroshnichenko-5717562.jpg', cloudinary: 'backgrounds/services-bg' },

    // Team image
    { local: 'src/assets/our founder.jpeg', cloudinary: 'team/founder' },

    // Logo
    { local: 'src/assets/symbol og logo.png', cloudinary: 'branding/symbol-logo' },

    // Contact background
    { local: 'src/assets/pexels-alex-andrews-271121-821754.jpg', cloudinary: 'backgrounds/contact-bg' },
];

// Logo images (35 logos)
const logoFiles = [
    '10.png', '11.png', '22.png', '33.png', '44.png', '55.png', '66.png', '77.png', '88.png', '99.png',
    '111.png', '122.png', '133.png', '144.png', '155.png', '166.png', '177.png', '188.png', '199.png', '200.png',
    '211.png', '222.png', '233.png', '244.png', '255.png', '266.png', '277.png', '288.png', '299.png', '300.png',
    '311.png', '322.png', '333.png', '344.png', '355.png'
];

logoFiles.forEach(file => {
    const logoName = file.replace('.png', '');
    imageMapping.push({
        local: `src/assets/logosss/${file}`,
        cloudinary: `logos/logo-${logoName}`
    });
});

// Upload function
async function uploadImages() {
    console.log('Starting image upload to Cloudinary...\n');
    console.log(`Cloud Name: ${cloudinary.config().cloud_name}`);
    console.log(`API Key: ${cloudinary.config().api_key ? '***' + cloudinary.config().api_key.slice(-4) : 'NOT SET'}\n`);

    if (!cloudinary.config().api_key || !cloudinary.config().api_secret) {
        console.error('❌ ERROR: Cloudinary API credentials not found!');
        console.error('Please make sure CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET are set in your .env file\n');
        process.exit(1);
    }

    const results = [];

    for (const image of imageMapping) {
        const localPath = path.join(__dirname, '..', image.local);

        // Check if file exists
        if (!fs.existsSync(localPath)) {
            console.log(`❌ File not found: ${image.local}`);
            results.push({ ...image, status: 'not_found' });
            continue;
        }

        try {
            console.log(`📤 Uploading: ${image.local} -> ${image.cloudinary}`);

            const result = await cloudinary.uploader.upload(localPath, {
                public_id: image.cloudinary,
                overwrite: true,
                resource_type: 'auto'
            });

            console.log(`✅ Success: ${result.secure_url}\n`);
            results.push({ ...image, status: 'success', url: result.secure_url });

        } catch (error) {
            console.log(`❌ Error uploading ${image.local}: ${error.message}\n`);
            results.push({ ...image, status: 'error', error: error.message });
        }
    }

    // Summary
    console.log('\n=== Upload Summary ===');
    const successful = results.filter(r => r.status === 'success').length;
    const failed = results.filter(r => r.status === 'error').length;
    const notFound = results.filter(r => r.status === 'not_found').length;

    console.log(`✅ Successful: ${successful}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`⚠️  Not Found: ${notFound}`);
    console.log(`📊 Total: ${results.length}`);

    // Save results to file
    const resultsPath = path.join(__dirname, 'upload-results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log('\n📄 Results saved to scripts/upload-results.json');

    if (successful > 0) {
        console.log('\n🎉 Upload complete! Your images are now on Cloudinary.');
        console.log('Refresh your website to see the optimized images.');
    }
}

// Run upload
uploadImages().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
