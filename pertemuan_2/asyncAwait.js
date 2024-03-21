function download() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Download selama 3 detik");
    }, 3000);
  });
}

function verify() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Verify selama 2 detik");
    }, 2000);
  });
}

function notify() {
  console.log("Download Selesai");
}

// keyword async memberi tahu bahwa ada operasi asynchronous di dalamnya
async function main() {
  // solusi pengganti then catch bis menggunakan async await
  try {
    console.log(await download());
    console.log(await verify());
    notify();
  } catch (error) {
    console.log(error);
  }
}

main();
