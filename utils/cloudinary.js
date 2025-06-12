const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'onlineStorage', // Elige el nombre de tu carpeta. Si no existe se crea
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'], // Formatos permitidos
    transformation: [{ width: 800, crop: 'limit' }], 
  },
});

module.exports = storage;