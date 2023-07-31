    const texts = [
        "Every time you saw another human today, you wished it was Spock. Your brother bent over in front of you and you got hard as a rock imagining it was nude Spock exposing his true self to you.",
        "You need to bang Spock - there is just no way around it. You just really really really need to bang Spock.",
        "If you do not bang Spock your prostate will quietly disintegrate in less than 15 seconds. Get Going!",
        "You have thought about spock for days. It is all that is on your mind. 10/10 you need to bang Spock",
        "You have had a stressful day. You need to vent and you need relief now. Spock, this might hurt a bit",
        "To be honest you don't need to bang Spock... but you really want to and won't go down without a fight.",
        "The only thing that can improve your day is the wide girth of Spock's Vulcan cock in your mouth. The feeling of his warm cum on your tongue will wash away all the troubles in life",
        "You need to bang Spock so hard his mom and dad both get pregnant and give birth to 2 more Spocks... that you also need to bang",
        "Your balls are aching and you have waited long enough, and you gotta bang him now",
        "The last time someone needed to bang someone else this badly 9/11 happened",
        "Spock's cum is gasoline, your ass is a car, and your ass's gas light just turned on",
        "You are planning on buying a horse.  You need to bang Spock to get practice riding something big, strong, smart, and hung",
        "Let's face it. You banged him yesterday. But today's a new day. Spock saaaaaays he's tired and wants a rest, but you can’t help but notice the way his cock grows into its full form as you penetrate deeper and deeper."
    ];


    const images = [
        "https://pbs.twimg.com/profile_images/824295440527093760/FwMJObu2_400x400.jpg",
        "https://imgix.bustle.com/inverse/b1/46/25/48/9add/4f6c/a3e0/4fd167a1186a/slack-imgscomjpeg.jpeg?w=400&h=300&fit=crop&crop=faces&auto=format%2Ccompresspath_to_image2.jpg",
        "https://cinemabythesea.files.wordpress.com/2013/09/tumblr_l9dozzebsp1qb4ej3o1_500.jpg",
        "https://www.denofgeek.com/wp-content/uploads/2018/12/spock-smiles-this-side-of-paradise.jpg",
        "https://live.staticflickr.com/3591/3589676673_4b2051d7ff_z.jpg",
        "https://i.pinimg.com/originals/d9/5f/19/d95f19cd051bb264a69ba7ff7a807522.jpg",
        "https://i.pinimg.com/originals/9e/90/18/9e9018291d76abc2dea423afa76c45fc.gif",
        "https://i.pinimg.com/1200x/18/ea/da/18eadacdc9678f650960d92ffd3e53dd.jpg",
        "https://www.ravishly.com/sites/default/files/spock.png",
        "https://www.startrek.com/sites/default/files/images/2019-07/2_nomad_goes_mad.jpg",
    ];
    const specialText = "If you do not bang Spock your prostate will quietly disintegrate in less than 15 seconds. Get Going!";
    const specialGif = "https://thumbs.gfycat.com/DefiantAnimatedGelding-size_restricted.gif";

// Function to shuffle array items randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Randomly shuffle the arrays
shuffleArray(texts);
shuffleArray(images);

let textIndex = 0;
let imageIndex = 0;

function displayRandomContent() {
    if (textIndex >= texts.length) {
        // If all responses have been displayed, reset the textIndex and shuffle the texts array again
        textIndex = 0;
        shuffleArray(texts);
    }

    const randomTextDiv = document.getElementById("random-text-content");
    randomTextDiv.textContent = texts[textIndex];
    
    if (texts[textIndex] === specialText) {
        // If the current text matches the special text, show the special GIF
        const randomImageElement = document.getElementById("random-image");
        randomImageElement.src = specialGif;
    } else {
        // Otherwise, show a random image from the shuffled images array
        if (imageIndex >= images.length) {
            // If all images have been displayed, reset the imageIndex and shuffle the images array again
            imageIndex = 0;
            shuffleArray(images);
        }

        const randomImageElement = document.getElementById("random-image");
        randomImageElement.src = images[imageIndex];
        imageIndex++;
    }

    textIndex++;

}
    
    
function showDiv(divNumber) {
  const divs = document.getElementsByClassName('boxborder');
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }
  document.getElementById('div' + divNumber).style.display = 'block';
}

