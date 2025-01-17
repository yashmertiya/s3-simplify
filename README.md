# s3-simplify
A NPM package for simplifying the S3 methods of AWS for data manupulation. 

# S3 Simply

`S3 Simplify` is a simple and flexible package that simplifies AWS S3 operations, including uploading, downloading, updating, deleting files, and more. It allows users to interact with Amazon S3 storage using their own AWS credentials and region.

## Features

- **Upload files** to S3
- **Download files** from S3
- **Update files** in S3
- **Delete files** from S3
- **List objects** in a bucket
- **Generate signed URLs** for temporary file access

## Installation

You can install `s3-simplify` via npm:

```bash
npm install s3-simply

Methods

1. uploadFile(bucket, key, fileContent)
bucket: The name of the S3 bucket.
key: The key (file name) for the file to be uploaded.
fileContent: The content of the file (can be a string or a buffer).
Uploads a file to the specified S3 bucket and key.

2. getFile(bucket, key)
bucket: The name of the S3 bucket.
key: The key (file name) of the file to be fetched.
Retrieves the file from S3 and returns its content.

3. updateFile(bucket, key, fileContent)
bucket: The name of the S3 bucket.
key: The key (file name) of the file to be updated.
fileContent: The updated content of the file.
Uploads a new version of the file, overwriting the existing one.

4. deleteFile(bucket, key)
bucket: The name of the S3 bucket.
key: The key (file name) of the file to be deleted.
Deletes the specified file from S3.

5. listObjects(bucket, prefix)
bucket: The name of the S3 bucket.
prefix: (Optional) A string to filter the objects by prefix (folder name).
Lists all objects in the S3 bucket that match the given prefix.

6. getSignedUrl(bucket, key, expires)
bucket: The name of the S3 bucket.
key: The key (file name) for which the signed URL is generated.
expires: The expiration time in seconds (default is 3600 seconds or 1 hour).
Generates a pre-signed URL for the file to give temporary access to download it.