export const scrollAnchors = (anchors) => {
  if (anchors.length > 0) {
    const yOffset = -182;
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substring(1);
        const obj = document.getElementById(blockID);
        const y = obj.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      })
    }
  }
};