fetch("https://v1.hitokoto.cn")
  .then(response => response.json())
  .then(data => {
    // const hitokoto = document.getElementById("say");
    // hitokoto.innerText = data.hitokoto;
    // from.innerText = data.from;
    let hitokoto = data[Math.floor(Math.random() * data.length)];
    document.querySelector("#say-content").innerText = data.hitokoto;
    if (data.from_who) {
      document.querySelector("#say-author").innerText = data.from_who;
    }
    if (data.from) {
      document.querySelector("#say-from").innerText = "「" + data.from + "」";
    }
  })
  .catch(console.error);
