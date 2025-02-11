// document.getElementById('converter-form').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const fileInput = document.getElementById('file-input');
//     const formatSelect = document.getElementById('format-select');
//     const outputDiv = document.getElementById('output');

//     if (fileInput.files.length === 0) {
//         outputDiv.innerHTML = '<p style="color: red;">Please select a file.</p>';
//         return;
//     }

//     const file = fileInput.files[0];
//     const targetFormat = formatSelect.value;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('format', targetFormat);

//     outputDiv.innerHTML = `<p>Converting ${file.name} to ${targetFormat}...</p>`;

//     try {
//         const response = await fetch('/convert', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             const blob = await response.blob();
//             const downloadUrl = URL.createObjectURL(blob);
//             outputDiv.innerHTML = `<p>Conversion complete! <a href="${downloadUrl}" download="converted.${targetFormat}">Download your file</a></p>`;
//         } else {
//             const error = await response.text();
//             outputDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
//         }
//     } catch (error) {
//         outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
//     }
// });



// document.getElementById('file-input').addEventListener('change', function () {
//     const fileInput = document.getElementById('file-input');
//     const formatSelect = document.getElementById('format-select');

//     if (fileInput.files.length === 0) {
//         formatSelect.innerHTML = ''; // Clear the dropdown if no file is selected
//         return;
//     }

//     const file = fileInput.files[0];
//     const fileType = file.type.split('/')[0]; // Get the file type (e.g., 'image', 'audio', 'video')

//     // Define supported formats for each file type
//     const supportedFormats = {
//         image: ['jpg', 'png'],
//         audio: ['mp3', 'webm', 'wav', 'ogg', 'aac'],
//         video: ['mp4', 'webm', 'ogg'],
//     };

//     // Get the formats based on the file type
//     const formats = supportedFormats[fileType] || [];

//     // Populate the dropdown with the supported formats
//     formatSelect.innerHTML = formats
//         .map(format => `<option value="${format}">${format.toUpperCase()}</option>`)
//         .join('');

//     // Log the file type and supported formats for debugging
//     console.log(`File type: ${fileType}, Supported formats: ${formats.join(', ')}`);
// });

// document.getElementById('converter-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const fileInput = document.getElementById('file-input');
//     const formatSelect = document.getElementById('format-select');
//     const outputDiv = document.getElementById('output');

//     if (fileInput.files.length === 0) {
//         outputDiv.innerHTML = '<p style="color: red;">Please select a file.</p>';
//         return;
//     }

//     const file = fileInput.files[0];
//     const targetFormat = formatSelect.value;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('format', targetFormat);

//     outputDiv.innerHTML = `<p>Converting ${file.name} to ${targetFormat}...</p>`;

//     try {
//         const response = await fetch('/convert', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             const blob = await response.blob();
//             const downloadUrl = URL.createObjectURL(blob);
//             outputDiv.innerHTML = `<p>Conversion complete! <a href="${downloadUrl}" download="converted.${targetFormat}">Download your file</a></p>`;
//         } else {
//             const error = await response.text();
//             outputDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
//         }
//     } catch (error) {
//         outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
//     }
// });





// document.getElementById('file-input').addEventListener('change', function () {
//     const fileInput = document.getElementById('file-input');
//     const formatSelect = document.getElementById('format-select');

//     if (fileInput.files.length === 0) {
//         formatSelect.innerHTML = ''; // Clear the dropdown if no file is selected
//         return;
//     }

//     const file = fileInput.files[0];
//     const fileType = file.type.split('/')[0]; // Get the file type (e.g., 'image', 'audio', 'video')

//     // Define supported formats for each file type
//     const supportedFormats = {
//         image: ['jpg', 'png', 'webp', 'gif', 'tiff'],
//         audio: ['mp3', 'webm', 'wav', 'ogg', 'aac'],
//         video: ['mp4', 'webm', 'ogg'],
//     };

//     // Get the formats based on the file type
//     const formats = supportedFormats[fileType] || [];

//     // Populate the dropdown with the supported formats
//     formatSelect.innerHTML = formats
//         .map(format => `<option value="${format}">${format.toUpperCase()}</option>`)
//         .join('');

//     // Log the file type and supported formats for debugging
//     console.log(`File type: ${fileType}, Supported formats: ${formats.join(', ')}`);
// });

// document.getElementById('converter-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const fileInput = document.getElementById('file-input');
//     const formatSelect = document.getElementById('format-select');
//     const outputDiv = document.getElementById('output');

//     if (fileInput.files.length === 0) {
//         outputDiv.innerHTML = '<p style="color: red;">Please select a file.</p>';
//         return;
//     }

//     const file = fileInput.files[0];
//     const targetFormat = formatSelect.value;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('format', targetFormat);

//     outputDiv.innerHTML = `<p>Converting ${file.name} to ${targetFormat}...</p>`;

//     try {
//         const response = await fetch('/convert', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             const blob = await response.blob();
//             const downloadUrl = URL.createObjectURL(blob);
//             outputDiv.innerHTML = `<p>Conversion complete! <a href="${downloadUrl}" download="converted.${targetFormat}">Download your file</a></p>`;
//         } else {
//             const error = await response.text();
//             outputDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
//         }
//     } catch (error) {
//         outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
//     }
// });



const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB in bytes

document.getElementById('file-input').addEventListener('change', function () {
    const fileInput = document.getElementById('file-input');
    const formatSelect = document.getElementById('format-select');
    const fileSizeError = document.getElementById('file-size-error');

    if (fileInput.files.length === 0) {
        formatSelect.innerHTML = ''; // Clear the dropdown if no file is selected
        fileSizeError.style.display = 'none'; // Hide the error message
        return;
    }

    const file = fileInput.files[0];

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
        fileSizeError.style.display = 'block'; // Show the error message
        formatSelect.innerHTML = ''; // Clear the dropdown
        fileInput.value = ''; // Clear the file input
        return;
    }

    fileSizeError.style.display = 'none'; // Hide the error message

    const fileType = file.type.split('/')[0]; // Get the file type (e.g., 'image', 'audio', 'video')

    // Define supported formats for each file type
    const supportedFormats = {
        image: ['jpg', 'png', 'webp', 'gif', 'tiff'],
        audio: ['mp3', 'webm', 'wav', 'ogg', 'aac'],
        video: ['mp4', 'webm', 'ogg'],
    };

    // Get the formats based on the file type
    const formats = supportedFormats[fileType] || [];

    // Populate the dropdown with the supported formats
    formatSelect.innerHTML = formats
        .map(format => `<option value="${format}">${format.toUpperCase()}</option>`)
        .join('');

    // Log the file type and supported formats for debugging
    console.log(`File type: ${fileType}, Supported formats: ${formats.join(', ')}`);
});

document.getElementById('converter-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('file-input');
    const formatSelect = document.getElementById('format-select');
    const outputDiv = document.getElementById('output');
    const fileSizeError = document.getElementById('file-size-error');

    if (fileInput.files.length === 0) {
        outputDiv.innerHTML = '<p style="color: red;">Please select a file.</p>';
        return;
    }

    const file = fileInput.files[0];

    // Check file size again (in case the client-side validation was bypassed)
    if (file.size > MAX_FILE_SIZE) {
        fileSizeError.style.display = 'block'; // Show the error message
        outputDiv.innerHTML = '<p style="color: red;">File size must be less than 25MB.</p>';
        return;
    }

    const targetFormat = formatSelect.value;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('format', targetFormat);

    outputDiv.innerHTML = `<p>Converting ${file.name} to ${targetFormat}...</p>`;

    try {
        const response = await fetch('/convert', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);
            outputDiv.innerHTML = `<p>Conversion complete! <a href="${downloadUrl}" download="converted.${targetFormat}">Download your file</a></p>`;
        } else {
            const error = await response.text();
            outputDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
        }
    } catch (error) {
        outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});