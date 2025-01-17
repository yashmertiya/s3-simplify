const AWS = require('aws-sdk');

class s3Simplify {
    /**
     * Constructor to initialize AWS SDK with user-provided credentials.
     * @param {Object} options - Configuration options
     * @param {string} options.accessKeyId - AWS Access Key ID
     * @param {string} options.secretAccessKey - AWS Secret Access Key
     * @param {string} options.region - AWS Region
     */
    constructor({ accessKeyId, secretAccessKey, region }) {
        if (!accessKeyId || !secretAccessKey || !region) {
            throw new Error('AWS credentials and region are required!');
        }

        // Configure AWS SDK with the user-provided credentials
        AWS.config.update({
            accessKeyId,
            secretAccessKey,
            region,
        });

        this.s3 = new AWS.S3();
    }

    // Get file from S3
    async getFile(bucket, key) {
        const params = {
            Bucket: bucket,
            Key: key,
        };
        try {
            const data = await this.s3.getObject(params).promise();
            return data.Body; // The file content
        } catch (err) {
            throw new Error(`Failed to get file: ${err.message}`);
        }
    }

    // Upload file to S3
    async uploadFile(bucket, key, fileContent) {
        const params = {
            Bucket: bucket,
            Key: key,
            Body: fileContent,
        };
        try {
            const data = await this.s3.upload(params).promise();
            return data;
        } catch (err) {
            throw new Error(`Failed to upload file: ${err.message}`);
        }
    }

    // Update file on S3
    async updateFile(bucket, key, fileContent) {
        return this.uploadFile(bucket, key, fileContent); // Re-uploading will overwrite the file
    }

    // Delete file from S3
    async deleteFile(bucket, key) {
        const params = {
            Bucket: bucket,
            Key: key,
        };
        try {
            await this.s3.deleteObject(params).promise();
            return { message: 'File deleted successfully' };
        } catch (err) {
            throw new Error(`Failed to delete file: ${err.message}`);
        }
    }

    // List objects in a bucket
    async listObjects(bucket, prefix = '') {
        const params = {
            Bucket: bucket,
            Prefix: prefix,
        };
        try {
            const data = await this.s3.listObjectsV2(params).promise();
            return data.Contents;
        } catch (err) {
            throw new Error(`Failed to list objects: ${err.message}`);
        }
    }

    // Generate a signed URL for getting a file from S3
    async getSignedUrl(bucket, key, expires = 3600) {
        const params = {
            Bucket: bucket,
            Key: key,
            Expires: expires, // URL expiration time in seconds
        };
        try {
            const url = this.s3.getSignedUrl('getObject', params);
            return url;
        } catch (err) {
            throw new Error(`Failed to generate signed URL: ${err.message}`);
        }
    }
}

module.exports = s3Simplify;
