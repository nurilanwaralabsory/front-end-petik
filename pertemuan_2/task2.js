/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log(`${result}`);
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = async (callShowDownload) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const result = "windows-23.exe";
      const downloadResult = await callShowDownload(result);
      resolve(downloadResult);
    }, 3000);
  });
};

download(showDownload)
  .then(() => {
    console.log("Download Selesai");
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
