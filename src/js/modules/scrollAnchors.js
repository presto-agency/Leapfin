export const scrollAnchors = (anchors, yOffset ) => {
  if (anchors.length > 0) {
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substring(1);
        console.log(blockID.replace(/[^a-zA-Z]/g, ''))
        const obj = document.getElementById(blockID);
        const y = obj.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      })
    }
  }
};