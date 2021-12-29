  
  $.getJSON('http://www.geoplugin.net/json.gp', function(data) {
    console.log(JSON.stringify(data.geoplugin_countryCode));

    const carouselText = []

    let date = new Date()
    let waktu = date.getHours()
    console.log(date.getUTCHours())

    let user = data.geoplugin_countryCode
    console.log(user)

    switch(user){
        case 'ID':
              if(waktu < 12){
                carouselText.push({text : "Selamat Pagi", color: "black"})
              }else if( waktu > 12){
                carouselText.push({text : "Selamat Siang", color: "black"})
              }else if( waktu > 18){
                carouselText.push({text : "Selamat Malam", color: "black"})
              }
        break;
        case 'TR':
          if(waktu < 12){
            carouselText.push({text : "Gunaydin", color: "black"})
          }else if( waktu > 12){
            carouselText.push({text : "İyi günler", color: "black"})
          }else if( waktu > 18){
            carouselText.push({text : "İyi geceler", color: "black"})
          }
        break;
        case 'BR':
          if(waktu < 12){
            carouselText.push({text : "Bom Dia", color: "black"})
          }else if( waktu > 12){
            carouselText.push({text : "Boa tarde", color: "black"})
          }else if( waktu > 18){
            carouselText.push({text : "Boa noite", color: "black"})
          }
        break;
        case 'FR':
          if(waktu < 12){
            carouselText.push({text : "Bonjour", color: "black"})
          }else if( waktu > 12){
            carouselText.push({text : "Bon après-midi", color: "black"})
          }else if( waktu > 18){
            carouselText.push({text : "Bonne soirée", color: "black"})
          }
        break;
        case 'DE':
          if(waktu < 12){
            carouselText.push({text : "Gutten Morgen", color: "black"})
          }else if( waktu > 12){
            carouselText.push({text : "Guten Tag", color: "black"})
          }else if( waktu > 18){
            carouselText.push({text : "Guten Abend", color: "black"})
          }
        break;
        default:
          if(waktu < 12){
            carouselText.push({text : "Good Morning", color: "black"})
          }else if( waktu > 12){
            carouselText.push({text : "Good Afternoon", color: "black"})
          }else if( waktu > 18){
            carouselText.push({text : "Good Evening", color: "black"})
          }
        break;
      }

      $(document).ready(async function() {
        carousel(carouselText, "#feature-text")
        
        let date = new Date()
        let waktu = date.getHours()
        console.log(date.getUTCHours())
      });
      
      async function typeSentence(sentence, eleRef, delay = 100) {
        const letters = sentence.split("");
        let i = 0;
        while(i < letters.length) {
          await waitForMs(delay);
          $(eleRef).append(letters[i]);
          i++
        }
        return;
      }
      
      async function deleteSentence(eleRef) {
        const sentence = $(eleRef).html();
        const letters = sentence.split("");
        let i = 0;
        while(letters.length > 0) {
          await waitForMs(100);
          letters.pop();
          $(eleRef).html(letters.join(""));
        }
      }
      
      async function carousel(carouselList, eleRef) {
          var i = 0;
          while(true) {
            updateFontColor(eleRef, carouselList[i].color)
            await typeSentence(carouselList[i].text, eleRef);
            await waitForMs(1500);
            await deleteSentence(eleRef);
            await waitForMs(500);
            i++
            if(i >= carouselList.length) {
              i = 0;
              window.location.href = "main.html"
            }
          }
      }
      
      function updateFontColor(eleRef, color) {
        $(eleRef).css('color', color);
      }
      
      function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
});
  