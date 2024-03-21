function download(callbackVerify) {
  setTimeout(() => {
    console.log("Download");
    callbackVerify();
  }, 3000);
}
function verify(callbackNotify) {
  setTimeout(() => {
    console.log("Verify");
    callbackNotify();
  }, 2000);
}

function notify() {
  setTimeout(() => console.log("Download selama 3 detik"));
}

function main() {
  download(function () {
    verify(function () {
      notify();
    });
  });
}

main();
