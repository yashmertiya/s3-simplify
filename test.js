const s3Simplify = require('./src/s3-simplify');

// Initialize the s3Simplify class with user-specific AWS credentials and region
const s3 = new s3Simplify({
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key',
    region: 'your-region',
});

// Upload a file
s3.uploadFile('your-bucket-name', 'file-key', fileContent)
    .then(data => console.log('File uploaded:', data))
    .catch(err => console.error('Error uploading file:', err));

    
// Get a file
s3.getFile('your-bucket-name', 'file-key')
    .then(data => console.log('File content:', data))
    .catch(err => console.error('Error getting file:', err));

// Update a file
s3.updateFile('your-bucket-name', 'file-key', updatedFileContent)
    .then(data => console.log('File updated:', data))
    .catch(err => console.error('Error updating file:', err));

// Delete a file
s3.deleteFile('your-bucket-name', 'file-key')
    .then(response => console.log(response))
    .catch(err => console.error('Error deleting file:', err));

// List objects in a bucket
s3.listObjects('your-bucket-name', 'your-prefix')
    .then(objects => console.log('Objects in bucket:', objects))
    .catch(err => console.error('Error listing objects:', err));

// Get a signed URL for accessing a file
s3.getSignedUrl('your-bucket-name', 'file-key')
    .then(url => console.log('Signed URL:', url))
    .catch(err => console.error('Error generating signed URL:', err));
