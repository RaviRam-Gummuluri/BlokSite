const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: url('./image.png') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    font-family: "Calibri", sans-serif;
    max-height: 700px;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._srry {
    font-size: 4.4em;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 25px;
    letter-spacing: 2.5px;
    margin-bottom:4rem;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 2px;
    font-size: 30px;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 30px;
  }
  
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
      
    <div class='c'>
        <div class='_srry'>SORRY</div>
        <div class='_1'>This website has been BLOCKED for your own good</div>
        <div class='_2'>STUDYING > ${pageName}</div>
        <br>
        <br>
    </div>
     `;
  };
  
  switch (window.location.hostname) 
  {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.roblox.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("ROBLOX");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "www.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
    case "www.instagram.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("INSTAGRAM");
      break;
    case "www.reddit.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("REDDIT");
      break;
    case "www.twitter.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("TWITTER");
      break;
    case "www.4chan.org":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("4CHAN");
      break;
      
  }