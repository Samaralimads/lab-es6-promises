// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction(
    "mashedPotatoes",
    1,
    (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;

      getInstruction(
        "mashedPotatoes",
        2,
        (step3) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step3}</li>`;

          getInstruction(
            "mashedPotatoes",
            3,
            (step4) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step4}</li>`;

              getInstruction(
                "mashedPotatoes",
                4,
                (step5) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step5}</li>`;
                  document
                    .querySelector("#mashedPotatoesImg")
                    .removeAttribute("hidden");

                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    },
    (error) => console.log(error)
  );
});

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction("steak", 1)
      .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
        return obtainInstruction("steak", 2);
      })
      .then((step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        return obtainInstruction("steak", 3);
      })
      .then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        return obtainInstruction("steak", 4);
      })
      .then((step4) => {
        document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
        return obtainInstruction("steak", 5);
      })
      .then((step5) => {
        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
        return obtainInstruction("steak", 6);
      })
      .then((step6) => {
        document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
        return (document.querySelector(
          "#steak"
        ).innerHTML += `<li>Stake is ready!</li>`);
      });
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
