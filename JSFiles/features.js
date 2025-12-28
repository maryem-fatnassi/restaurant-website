const featuresCardLeft = document.getElementsByClassName('features-card-left');
const featuresCardRight = document.getElementsByClassName('features-card-right');

for (let index = 0; index < featuresCardLeft.length; index++) {
    featuresCardLeft[index].setAttribute('data-aos','fade-left');
    featuresCardRight[index].setAttribute('data-aos','fade-right');
}

