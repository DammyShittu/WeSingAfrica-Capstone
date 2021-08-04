const wesingGuests = [
  {
    underlay: {
      imageUrl: './images/rubik.png',
      imageAlt: 'Rubik',
    },
    image: {
      imageUrl: './images/Chandler.jpg',
      imageAlt: 'Chandler Moore',
    },
    name: 'Chandler Moore',
    shortDescription: 'Gospel Artiste',
    profile: `Chandler Moore is an American Christian singer, songwriter, and worship leader. Moore is a member of
    the Maverick City Music collective, and has a leading role in the production department of All Nations
    Worship Assembly in Atlanta, Georgia.`,
  },

  {
    underlay: {
      imageUrl: './images/rubik.png',
      imageAlt: 'Rubik',
    },
    image: {
      imageUrl: './images/Jekalyn.jpg',
      imageAlt: 'Jekalyn Carr',
    },
    name: 'Jekalyn Carr',
    shortDescription: 'Gospel Artiste',
    profile: `Jekalyn Carr is a GRAMMY® nominee and GMA Dove Award-winning independent recording artist. Carr is a
    speaker, entrepreneur, actress, and author.As a top selling recording artist, Carr has earned eight
    Billboard #1’s before the age of 21, including singles, “You’re Bigger” and “You Will Win”.`,
  },

  {
    underlay: {
      imageUrl: './images/rubik.png',
      imageAlt: 'Rubik',
    },
    image: {
      imageUrl: './images/jon.jpg',
      imageAlt: 'Jonathan Mcreynolds',
    },
    name: 'Jonathan Mcreynolds',
    shortDescription: 'Gospel Artiste',
    profile: `Jonathan McReynolds is a Grammy-winning American gospel musician. He began his music career in 2012
    with the release of Life Music via Entertainment One Music. He has had two No. 1 Billboard Gospel Albums
    since with Life Music: Stage Two (2015) and Make Room (2018), eight Stellar Awards, two GMA Dove Awards
    and five Grammy Award nominations.`,
  },

  {
    underlay: {
      imageUrl: './images/rubik.png',
      imageAlt: 'Rubik',
    },
    image: {
      imageUrl: './images/mercy.jpg',
      imageAlt: 'Mercy Chinwo',
    },
    name: 'Mercy Chinwo',
    shortDescription: 'Gospel Artiste',
    profile: `Mercy Chinwo is a Nigerian gospel musician, singer and songwriter. She won the Nigerian Idol Season 2
    in 2012. In 2018,she was awarded the Best Gospel Artiste at the CLIMAX Awards 2018, and in 2020, she
    emerged as the Gospel Artiste of the year at the AFRIMMA Awards.`,
  },

  {
    underlay: {
      imageUrl: './images/rubik.png',
      imageAlt: 'Rubik',
    },
    image: {
      imageUrl: './images/Travis.jpg',
      imageAlt: 'Travis Greene',
    },
    name: 'Travis Greene',
    shortDescription: 'Gospel Artiste',
    profile: `Travis Greene is an American gospel musician and pastor. Greene's music has charted on the Billboard
    Top Gospel Albums and the Top Gospel Songs charts and he has been nominated for multiple awards, including
    5 Grammy Awards and 13 Stellar Awards.`,
  },

  {
    underlay: {
      imageUrl: './images/rubik.png',
      imageAlt: 'Rubik',
    },
    image: {
      imageUrl: './images/victoria.jpg',
      imageAlt: 'Victoria Orenze',
    },
    name: 'Victoria Orenze',
    shortDescription: 'Gospel Artiste',
    profile: `Victoria Orenze was born on the 23rd of March. She is not only a preacher, but fire personified. She
    believes in the true worship of Jesus Christ and that every Christian should believe in the Almighty God
    and the spreading of the gospel in every generation.`,
  },
];

function showGuests(guest) {
  const guestCard = `<div class="guest">
  <div class="image_design">
    <img src="${guest.underlay.imageUrl}" alt="${guest.underlay.imageAlt}" class="checker">
    <img src="${guest.image.imageUrl}" alt="${guest.image.imageAlt}">
  </div>

  <aside>
    <div>
      <h4>${guest.name}</h4>
      <p>${guest.shortDescription}</p>

      <hr width="30">
    </div>
    <span>${guest.profile}</span>
  </aside>
</div>`;
  return guestCard;
}

const sectionForGuests = document.querySelector('.guest_list');

function showMyGuests() {
  const guestKeys = Object.keys(wesingGuests);
  const guestKeysLength = Object.keys(wesingGuests).length;
  for (let i = 0; i < guestKeysLength; i += 1) {
    sectionForGuests.innerHTML += showGuests(wesingGuests[guestKeys[i]], i);
  }
}

sectionForGuests.onresize = showMyGuests();