import ReactS3 from 'react-s3';

/**
* Returns status of the upload to S3
*
* @param {object} file
*
* @return {object}
*/
export default function importCsv(file) {
  const config = {
    bucketName: 'tbd',
    albumName: 'tbd',
    region: 'eu-west-1',
    accessKeyId: 'tbd',
    secretAccessKey: 'tbd',
  };


  ReactS3.upload(file, config)
    .then(data => data)
    .catch(err => err);
}
