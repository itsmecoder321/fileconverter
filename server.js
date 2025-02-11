// // const express = require('express');
// // const multer = require('multer');
// // const sharp = require('sharp');
// // const ffmpeg = require('fluent-ffmpeg');
// // const path = require('path');
// // const fs = require('fs');

// // const app = express();
// // const upload = multer({ dest: 'uploads/' });

// // // Serve static files (HTML, CSS, JS)
// // app.use(express.static('public'));

// // // Create uploads and converted directories if they don't exist
// // if (!fs.existsSync('uploads')) {
// //     fs.mkdirSync('uploads');
// // }
// // if (!fs.existsSync('converted')) {
// //     fs.mkdirSync('converted');
// // }

// // // Endpoint to handle file uploads and conversions
// // app.post('/convert', upload.single('file'), (req, res) => {
// //     const file = req.file;
// //     const targetFormat = req.body.format;

// //     if (!file) {
// //         return res.status(400).send('No file uploaded.');
// //     }

// //     // Validate file type for images
// //     const allowedImageTypes = ['image/jpeg', 'image/png'];
// //     if (['jpg', 'png'].includes(targetFormat) && !allowedImageTypes.includes(file.mimetype)) {
// //         return res.status(400).send('Invalid file type. Only JPEG and PNG images are supported.');
// //     }

// //     const outputFilePath = path.join(__dirname, 'converted', `converted.${targetFormat}`);

// //     // Log the file and target format for debugging
// //     console.log(`File received: ${file.originalname}, Target format: ${targetFormat}`);

// //     // Handle image conversions
// //     if (['jpg', 'png'].includes(targetFormat)) {
// //         sharp(file.path)
// //             .toFormat(targetFormat)
// //             .toFile(outputFilePath, (err) => {
// //                 if (err) {
// //                     console.error('Error converting image:', err);
// //                     return res.status(500).send(`Error converting image: ${err.message}`);
// //                 }
// //                 res.download(outputFilePath, () => {
// //                     // Clean up the uploaded and converted files after download
// //                     fs.unlinkSync(file.path);
// //                     fs.unlinkSync(outputFilePath);
// //                 });
// //             });
// //     }
// //     // Handle audio/video conversions
// //     else if (['mp3', 'mp4'].includes(targetFormat)) {
// //         ffmpeg(file.path)
// //             .toFormat(targetFormat)
// //             .on('end', () => {
// //                 res.download(outputFilePath, () => {
// //                     // Clean up the uploaded and converted files after download
// //                     fs.unlinkSync(file.path);
// //                     fs.unlinkSync(outputFilePath);
// //                 });
// //             })
// //             .on('error', (err) => {
// //                 console.error('Error converting audio/video:', err);
// //                 res.status(500).send(`Error converting audio/video: ${err.message}`);
// //             })
// //             .save(outputFilePath);
// //     } else {
// //         res.status(400).send('Unsupported format.');
// //     }
// // });

// // // Start the server
// // const PORT = 3000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`);
// // });



// const express = require('express');
// const multer = require('multer');
// const sharp = require('sharp');
// const ffmpeg = require('fluent-ffmpeg');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// // Serve static files (HTML, CSS, JS)
// app.use(express.static('public'));

// // Create uploads and converted directories if they don't exist
// if (!fs.existsSync('uploads')) {
//     fs.mkdirSync('uploads');
// }
// if (!fs.existsSync('converted')) {
//     fs.mkdirSync('converted');
// }

// // Endpoint to handle file uploads and conversions
// app.post('/convert', upload.single('file'), (req, res) => {
//     const file = req.file;
//     const targetFormat = req.body.format;

//     if (!file) {
//         return res.status(400).send('No file uploaded.');
//     }

//     // Validate file type for images
//     const allowedImageTypes = ['image/jpeg', 'image/png'];
//     if (['jpg', 'png'].includes(targetFormat) && !allowedImageTypes.includes(file.mimetype)) {
//         return res.status(400).send('Invalid file type. Only JPEG and PNG images are supported.');
//     }

//     const outputFilePath = path.join(__dirname, 'converted', `converted.${targetFormat}`);

//     // Log the file and target format for debugging
//     console.log(`File received: ${file.originalname}, Target format: ${targetFormat}`);

//     // Handle image conversions
//     if (['jpg', 'png'].includes(targetFormat)) {
//         sharp(file.path)
//             .toFormat(targetFormat)
//             .toFile(outputFilePath, (err) => {
//                 if (err) {
//                     console.error('Error converting image:', err);
//                     return res.status(500).send(`Error converting image: ${err.message}`);
//                 }
//                 res.download(outputFilePath, () => {
//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path);
//                     fs.unlinkSync(outputFilePath);
//                 });
//             });
//     }
//     // Handle audio conversions
//     else if (['mp3', 'webm', 'wav', 'ogg', 'aac'].includes(targetFormat)) {
//         ffmpeg(file.path)
//             .toFormat(targetFormat)
//             .on('end', () => {
//                 res.download(outputFilePath, () => {
//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path);
//                     fs.unlinkSync(outputFilePath);
//                 });
//             })
//             .on('error', (err) => {
//                 console.error('Error converting audio:', err);
//                 res.status(500).send(`Error converting audio: ${err.message}`);
//             })
//             .save(outputFilePath);
//     } else {
//         res.status(400).send('Unsupported format.');
//     }
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });





// const express = require('express');
// const multer = require('multer');
// const sharp = require('sharp');
// const ffmpeg = require('fluent-ffmpeg');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// // Serve static files (HTML, CSS, JS)
// app.use(express.static('public'));

// // Create uploads and converted directories if they don't exist
// if (!fs.existsSync('uploads')) {
//     fs.mkdirSync('uploads');
// }
// if (!fs.existsSync('converted')) {
//     fs.mkdirSync('converted');
// }

// // Endpoint to handle file uploads and conversions
// app.post('/convert', upload.single('file'), (req, res) => {
//     const file = req.file;
//     const targetFormat = req.body.format;

//     if (!file) {
//         return res.status(400).send('No file uploaded.');
//     }

//     // Validate file type for images
//     const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/tiff'];
//     if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat) && !allowedImageTypes.includes(file.mimetype)) {
//         return res.status(400).send('Invalid file type. Only JPEG, PNG, WebP, GIF, and TIFF images are supported.');
//     }

//     const outputFilePath = path.join(__dirname, 'converted', `converted.${targetFormat}`);

//     // Log the file and target format for debugging
//     console.log(`File received: ${file.originalname}, Target format: ${targetFormat}`);

//     // Handle image conversions
//     if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat)) {
//         sharp(file.path)
//             .toFormat(targetFormat)
//             .toFile(outputFilePath, (err) => {
//                 if (err) {
//                     console.error('Error converting image:', err);
//                     return res.status(500).send(`Error converting image: ${err.message}`);
//                 }
//                 res.download(outputFilePath, () => {
//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path);
//                     fs.unlinkSync(outputFilePath);
//                 });
//             });
//     }
//     // Handle audio conversions
//     else if (['mp3', 'webm', 'wav', 'ogg', 'aac'].includes(targetFormat)) {
//         ffmpeg(file.path)
//             .toFormat(targetFormat)
//             .on('end', () => {
//                 res.download(outputFilePath, () => {
//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path);
//                     fs.unlinkSync(outputFilePath);
//                 });
//             })
//             .on('error', (err) => {
//                 console.error('Error converting audio:', err);
//                 res.status(500).send(`Error converting audio: ${err.message}`);
//             })
//             .save(outputFilePath);
//     } else {
//         res.status(400).send('Unsupported format.');
//     }
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });





// const express = require('express');
// const multer = require('multer');
// const sharp = require('sharp');
// const ffmpeg = require('fluent-ffmpeg');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// // Serve static files (HTML, CSS, JS)
// app.use(express.static('public'));

// // Create uploads and converted directories if they don't exist
// if (!fs.existsSync('uploads')) {
//     fs.mkdirSync('uploads');
// }
// if (!fs.existsSync('converted')) {
//     fs.mkdirSync('converted');
// }

// // Endpoint to handle file uploads and conversions
// app.post('/convert', upload.single('file'), (req, res) => {
//     const file = req.file;
//     const targetFormat = req.body.format;

//     if (!file) {
//         return res.status(400).send('No file uploaded.');
//     }

//     // Validate file type for images
//     const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/tiff'];
//     if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat) && !allowedImageTypes.includes(file.mimetype)) {
//         return res.status(400).send('Invalid file type. Only JPEG, PNG, WebP, GIF, and TIFF images are supported.');
//     }

//     const outputFilePath = path.join(__dirname, 'converted', `converted.${targetFormat}`);

//     // Log the file and target format for debugging
//     console.log(`File received: ${file.originalname}, Target format: ${targetFormat}`);

//     // Handle image conversions
//     if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat)) {
//         sharp(file.path)
//             .toFormat(targetFormat)
//             .toFile(outputFilePath, (err) => {
//                 if (err) {
//                     console.error('Error converting image:', err);
//                     return res.status(500).send(`Error converting image: ${err.message}`);
//                 }
//                 res.download(outputFilePath, () => {
//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path);
//                     fs.unlinkSync(outputFilePath);
//                 });
//             });
//     }
//     // Handle audio conversions
//     else if (['mp3', 'webm', 'wav', 'ogg', 'aac'].includes(targetFormat)) {
//         ffmpeg(file.path)
//             .toFormat(targetFormat)
//             .on('end', () => {
//                 res.download(outputFilePath, () => {
//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path);
//                     fs.unlinkSync(outputFilePath);
//                 });
//             })
//             .on('error', (err) => {
//                 console.error('Error converting audio:', err);
//                 res.status(500).send(`Error converting audio: ${err.message}`);
//             })
//             .save(outputFilePath);
//     } else {
//         res.status(400).send('Unsupported format.');
//     }
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });





// const express = require('express');
// const multer = require('multer');
// const sharp = require('sharp');
// const ffmpeg = require('fluent-ffmpeg');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// // Serve static files (HTML, CSS, JS)
// app.use(express.static('public'));

// // Create uploads and converted directories if they don't exist
// if (!fs.existsSync('uploads')) {
//     fs.mkdirSync('uploads');
// }
// if (!fs.existsSync('converted')) {
//     fs.mkdirSync('converted');
// }

// // Endpoint to handle file uploads and conversions
// app.post('/convert', upload.single('file'), (req, res) => {
//     const file = req.file;
//     const targetFormat = req.body.format;

//     if (!file) {
//         return res.status(400).send('No file uploaded.');
//     }

//     // Validate file type for images
//     const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/tiff'];
//     if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat) && !allowedImageTypes.includes(file.mimetype)) {
//         return res.status(400).send('Invalid file type. Only JPEG, PNG, WebP, GIF, and TIFF images are supported.');
//     }

//     const outputFilePath = path.join(__dirname, 'converted', `converted.${targetFormat}`);

//     // Log the file and target format for debugging
//     console.log(`File received: ${file.originalname}, Target format: ${targetFormat}`);

//     // Handle image conversions
//     if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat)) {
//         sharp(file.path)
//             .toFormat(targetFormat)
//             .toFile(outputFilePath, (err) => {
//                 if (err) {
//                     console.error('Error converting image:', err);
//                     return res.status(500).send(`Error converting image: ${err.message}`);
//                 }

//                 // Send the converted file to the client
//                 res.download(outputFilePath, (err) => {
//                     if (err) {
//                         console.error('Error sending file to client:', err);
//                     }

//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path); // Delete the uploaded file
//                     fs.unlinkSync(outputFilePath); // Delete the converted file
//                 });
//             });
//     }
//     // Handle audio conversions
//     else if (['mp3', 'webm', 'wav', 'ogg', 'aac'].includes(targetFormat)) {
//         ffmpeg(file.path)
//             .toFormat(targetFormat)
//             .on('end', () => {
//                 // Send the converted file to the client
//                 res.download(outputFilePath, (err) => {
//                     if (err) {
//                         console.error('Error sending file to client:', err);
//                     }

//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path); // Delete the uploaded file
//                     fs.unlinkSync(outputFilePath); // Delete the converted file
//                 });
//             })
//             .on('error', (err) => {
//                 console.error('Error converting audio:', err);
//                 res.status(500).send(`Error converting audio: ${err.message}`);
//             })
//             .save(outputFilePath);
//     } else {
//         res.status(400).send('Unsupported format.');
//     }
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });






// const express = require('express');
// const multer = require('multer');
// const sharp = require('sharp');
// const ffmpeg = require('fluent-ffmpeg');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB in bytes

// // Configure multer to enforce file size limit
// const upload = multer({
//     dest: 'uploads/',
//     limits: { fileSize: MAX_FILE_SIZE },
// });

// // Serve static files (HTML, CSS, JS)
// app.use(express.static('public'));

// // Create uploads and converted directories if they don't exist
// if (!fs.existsSync('uploads')) {
//     fs.mkdirSync('uploads');
// }
// if (!fs.existsSync('converted')) {
//     fs.mkdirSync('converted');
// }

// // Endpoint to handle file uploads and conversions
// app.post('/convert', upload.single('file'), (req, res) => {
//     const file = req.file;

//     if (!file) {
//         return res.status(400).send('No file uploaded or file size exceeds 25MB.');
//     }

//     const targetFormat = req.body.format;

//     // Validate file type for images
//     const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/tiff'];
//     if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat) && !allowedImageTypes.includes(file.mimetype)) {
//         return res.status(400).send('Invalid file type. Only JPEG, PNG, WebP, GIF, and TIFF images are supported.');
//     }

//     const outputFilePath = path.join(__dirname, 'converted', `converted.${targetFormat}`);

//     // Log the file and target format for debugging
//     console.log(`File received: ${file.originalname}, Target format: ${targetFormat}`);

//     // Handle image conversions
//     if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat)) {
//         sharp(file.path)
//             .toFormat(targetFormat)
//             .toFile(outputFilePath, (err) => {
//                 if (err) {
//                     console.error('Error converting image:', err);
//                     return res.status(500).send(`Error converting image: ${err.message}`);
//                 }

//                 // Send the converted file to the client
//                 res.download(outputFilePath, (err) => {
//                     if (err) {
//                         console.error('Error sending file to client:', err);
//                     }

//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path); // Delete the uploaded file
//                     fs.unlinkSync(outputFilePath); // Delete the converted file
//                 });
//             });
//     }
//     // Handle audio conversions
//     else if (['mp3', 'webm', 'wav', 'ogg', 'aac'].includes(targetFormat)) {
//         ffmpeg(file.path)
//             .toFormat(targetFormat)
//             .on('end', () => {
//                 // Send the converted file to the client
//                 res.download(outputFilePath, (err) => {
//                     if (err) {
//                         console.error('Error sending file to client:', err);
//                     }

//                     // Clean up the uploaded and converted files after download
//                     fs.unlinkSync(file.path); // Delete the uploaded file
//                     fs.unlinkSync(outputFilePath); // Delete the converted file
//                 });
//             })
//             .on('error', (err) => {
//                 console.error('Error converting audio:', err);
//                 res.status(500).send(`Error converting audio: ${err.message}`);
//             })
//             .save(outputFilePath);
//     } else {
//         res.status(400).send('Unsupported format.');
//     }
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });





const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB in bytes

// Configure multer to enforce file size limit
const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: MAX_FILE_SIZE },
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Create uploads and converted directories if they don't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}
if (!fs.existsSync('converted')) {
    fs.mkdirSync('converted');
}

// Endpoint to handle file uploads and conversions
app.post('/convert', upload.single('file'), (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).send('No file uploaded or file size exceeds 25MB.');
    }

    const targetFormat = req.body.format;

    // Validate file type for images
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/tiff'];
    if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat) && !allowedImageTypes.includes(file.mimetype)) {
        return res.status(400).send('Invalid file type. Only JPEG, PNG, WebP, GIF, and TIFF images are supported.');
    }

    const outputFilePath = path.join(__dirname, 'converted', `converted.${targetFormat}`);

    // Log the file and target format for debugging
    console.log(`File received: ${file.originalname}, Target format: ${targetFormat}`);

    // Handle image conversions
    if (['jpg', 'png', 'webp', 'gif', 'tiff'].includes(targetFormat)) {
        sharp(file.path)
            .toFormat(targetFormat)
            .toFile(outputFilePath, (err) => {
                if (err) {
                    console.error('Error converting image:', err);
                    return res.status(500).send(`Error converting image: ${err.message}`);
                }

                // Send the converted file to the client
                res.download(outputFilePath, (err) => {
                    if (err) {
                        console.error('Error sending file to client:', err);
                    }

                    // Clean up the uploaded and converted files after download
                    fs.unlink(file.path, (err) => {
                        if (err) console.error('Error deleting uploaded file:', err);
                    });
                    fs.unlink(outputFilePath, (err) => {
                        if (err) console.error('Error deleting converted file:', err);
                    });
                });
            });
    }
    // Handle audio conversions
    else if (['mp3', 'webm', 'wav', 'ogg', 'aac'].includes(targetFormat)) {
        ffmpeg(file.path)
            .toFormat(targetFormat)
            .on('end', () => {
                // Send the converted file to the client
                res.download(outputFilePath, (err) => {
                    if (err) {
                        console.error('Error sending file to client:', err);
                    }

                    // Clean up the uploaded and converted files after download
                    fs.unlink(file.path, (err) => {
                        if (err) console.error('Error deleting uploaded file:', err);
                    });
                    fs.unlink(outputFilePath, (err) => {
                        if (err) console.error('Error deleting converted file:', err);
                    });
                });
            })
            .on('error', (err) => {
                console.error('Error converting audio:', err);
                res.status(500).send(`Error converting audio: ${err.message}`);
            })
            .save(outputFilePath);
    } else {
        res.status(400).send('Unsupported format.');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});