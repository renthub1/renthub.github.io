const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    // if (entry.isIntersecting == false)
    if (!entry.isIntersecting) return;

    // animate number counter

    const counterNum = document.querySelectorAll(".counter-numbers");

    const speed = 200;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 10);
        }
      };

      updateNumber();
    });

    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSection);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-143px";
  }
}
//preloader renthub logo script
var preloader=document.getElementById("loader");
function myfunction(){
    preloader.style.display='none';
};
// type writer script
let typed2 = new Typed('.awrite',{
strings: ["rent starting ₹65/hr","hourly/daily/monthly available","affordable prices","rent bike now"],
loop: true,
typeSpeed:70,
backSpeed:60,
smartBackspace: true,
});

// $(document).ready(function(){
// {
//     document.getElementById('first_style').removeAttribute('disabled');
//     document.getElementById('animate').removeAttribute('disabled');
// }
// });
	  