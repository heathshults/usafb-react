import ReactS3 from 'react-s3';

/**
* Returns status of the upload to S3
*
* @param {file} file
*
* @param {string} type
*
* @return {object}
*/
export default function importCsv(file, type) {
  const config = {
    bucketName: 'tbd',
    albumName: type,
    region: 'eu-west-1',
    accessKeyId: 'tbd',
    secretAccessKey: 'tbd',
  };


  ReactS3.upload(file, config)
    .then(data => data)
    .catch(err => err);
}
