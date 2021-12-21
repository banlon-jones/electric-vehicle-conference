const featuredSpeakers = [
  {
    name: 'Elon Musk',
    image: 'images/tesla-ceo.jpg',
    profile: 'Leading EV manufacturer and CEO of Tesla',
    details: 'Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO and Chief Engineer at SpaceX'
  },
  {
    name: 'Mary Teresa Barra',
    image: 'images/GMC-ceo.jpg',
    profile: 'American businesswoman who has been the chair and CEO of General Motors',
    details: 'An American businesswoman who has been the chair and chief executive officer of General Motors since January 15, 2014. She is the first female CEO of a Big Three automaker.'
  },
  {
    name: 'Dara Khosrowshahi',
    image: 'images/uber-ceo.jpg',
    profile: ' businessman and the chief executive officer of Uber',
    details: 'An Iranian-American businessman and the chief executive officer of Uber. Khosrowshahi was previously CEO of Expedia Group,'
  },
  {
    name: 'Jonathan Ayache',
    image: 'images/lift-ceo.jpg',
    profile: 'Chief Executive Officer at Lift',
    details: 'Jonathan Ayache · Chief Executive Officer at Lift · Activity · Experience · Education · Licenses'
  },
  {
    name: 'Barack Hussein Obama II ',
    image: 'images/obama.jpg',
    profile: 'lawyer, and author who served as the 44th president of the United States from 2009 to 2017',
    details: 'An American politician, lawyer, and author who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party,'
  },
  {
    name: 'Olaf Scholz',
    image: 'images/german-chancellor.jpg',
    profile: 'politician serving as chancellor of Germany since 8 December 2021',
    details: ' A German politician serving as chancellor of Germany since 8 December 2021. A member of the Social Democratic Party, he previously served as Vice-Chancellor of Germany'
  },

];

let menuBtn = document.querySelector(".menu-button");
let closeBtn = document.querySelector(".close");
let menu = document.querySelector('.menu-items');

menuBtn.addEventListener('click', ()=>{
  menu.style.display = 'block';
  menu.style.visibility = 'visible';
});

closeBtn.addEventListener('click', ()=>{
  menu.style.display = 'none';
  menu.style.visibility = 'hidden';
});

let speakers = document.querySelector('#featured-speakers');

featuredSpeakers.forEach((item) => {
  speakers.innerHTML += `<div class="col-12 col-md-6">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid speaker" src="${item.image}" alt="${item.profile}"/>
                        </div>
                        <div class="col-8">
                            <h4>${item.name}</h4>
                            <div>
                                <small class="highlight"> ${item.profile} </small>
                            </div>
                            <div>
                                <p> ${item.details} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
});
