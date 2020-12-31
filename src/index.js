import _, { result } from 'lodash';

const propertyData = {
  id: 1,
  propertyName: '1BR Japanese-style Private Room near Kyoto Station',
  propertyType: 'private',
  cancelPolicy: 'strict',
  roomNum: 1,
  bathroomNum: 1,
  priceInDollars: 50,
  host: {
    id: 1,
    firstName: 'Tom'
  }
}

/*getDataを呼び出して、mainEl.innerHTMLを利用して、結果を出力します。*/
function handleClick(e) {
  e.preventDefault();
  const mainEl = document.getElementById('main');
}

 /*fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。*/
function getData() {
  fetchData().then(
    (result) => {
      console.log(result);
      //Promise.resolve();
    },
    (error) => {
      console.log(error);
    }
  );
}

function fetchData() {
  return new Promise ((resolve,reject) => {
    const percentage = _.random(1, 5);/*4/5 1/5*/
      setTimeout(() => {if (percentage <= 4) {
        resolve({
          success: true,
          propertyData: propertyData
        })
      } else {
        reject({
          success: false,
          message: 'データの取得に失敗しました。'
        })}
      },1000);
  });
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", getData/*handleClick*/);
}