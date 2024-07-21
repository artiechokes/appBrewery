const gateDimensions = [75, 25, 23, 75];

let fences = [
  {
    fenceName: "Chestnut 4ft x 8ft",
    sectionLength: 8,
    sectionCost: 160.0,
    postCost: 45,
    gates: 2,
    gateCost: 700.0,
  },
  {
    fenceName: "PrimRose 5ft x 7ft",
    sectionLength: 7,
    sectionCost: 135,
    postCost: 45,
    gates: 2,
    gateCost: 700.0,
  },
  {
    fenceName: "Chestnut 5ftx 8ft",
    sectionLength: 8,
    sectionCost: 180.0,
    postCost: 50,
    gates: 2,
    gateCost: 700.0,
  },
];

function gatePricing(gateName) {
  let num = 1;
  for (let i = 0; i < gateName.length; i++) {
    let chosenFence = `.fence-quote-${num}`;
    document.querySelector(`${chosenFence} .fence-name`).innerText =
      gateName[i].fenceName;

    let totalFence = 0;
    let totalPost = 0;
    let projectTotal = 1400;
    gateDimensions.forEach((dimension, j) => {
      sectionCost =
        Math.round(
          (dimension / gateName[i].sectionLength) *
            gateName[i].sectionCost *
            100
        ) / 100;
      postNum = Math.round(dimension / gateName[i].sectionLength) + 1;
      postCost =
        Math.round(dimension / gateName[i].sectionLength + 1) *
        gateName[i].postCost;

      document.querySelector(
        `${chosenFence} .section-${j + 1} .fence-section-length`
      ).innerText = `Seccion: ${dimension}ft`;
      document.querySelector(
        `${chosenFence} .section-${j + 1} .section-cost`
      ).innerText = `Costo de fence: ${postNum - 1} fence , $${sectionCost}`;

      document.querySelector(
        `${chosenFence} .section-${j + 1} .section-post-cost`
      ).innerText = `Costo de Post: ${postNum} postes , $${postCost}`;
      totalFence += sectionCost;
      totalPost += postCost;
      projectTotal += sectionCost + postCost;
      console.log(projectTotal);

      console.log(dimension, j);
    });

    num++;
  }
}

window.onload, gatePricing(fences);
