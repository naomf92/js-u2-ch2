import _ from 'lodash';

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
  return getData()
  .catch((error) => {
    mainEl.innerHTML = `
      <p>${error.message}</p>
    `
  })
  .then((result) => {
    // 引数resultにはオブジェクトpropertyDataが丸ごと入っています
    // オブジェクトを丸ごと呼び出すと「具体的にpropertyDataのどの値ですか？」と返されるのでundefinedとなります
    // オブジェクトpropertyDataのidを呼び出す場合は、どう書いたら良いでしょうか？
    // その他の値も同様です
    console.log(result);
    mainEl.innerHTML = `
      <p>${result.propertyData}</p>
      `
  })
}

/*fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。*/
function getData() {
  return fetchData().then((result) => {
    if (result.success) {
      return Promise.resolve(result.propertyData);
    } else {
      return Promise.reject(result.message);
    }
  });
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
  button1.addEventListener("click", handleClick);
}