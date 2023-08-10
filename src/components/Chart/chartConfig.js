import { Bar } from "react-chartjs-2";
import { nestedValues } from "./dataTransaction";

const labels = [];
const summ = [];

const getItems = (categoryData) => {
  const objEntries = Object.entries(categoryData)
    ?.filter(([elem, _]) => elem !== "total")
    .sort((a, b) => b[1] - a[1]);

  objEntries.forEach(([item, sum]) => {
    labels.push(item);
    summ.push(sum);
  });
};
getItems(nestedValues);

function addSpaceForAmount(amount) {
  const floatNum = amount.toFixed(2);
  const parts = floatNum.toString().split(".");
  const integerReverse = parts[0].split("").reverse();

  const newString = integerReverse
    .map((char, index) => {
      if ((index + 1) % 3 === 0) {
        return ` ${char}`;
      }
      return char;
    })
    .reverse()
    .join("");

  return `${newString}.${parts[1]}`;
}

// const mobileData = {
//   labels,
//   datasets: [
//     {
//       data: summ,
//       datalabels: {
//         font: {
//           size: "10",
// letterSpacing: "0.2px",
//         },
//         color: "#52555f",
//         labels: {
//           title: {
//             align: "end",
//             anchor: "end",
//           },
//         },
//         formatter: (value) => {
//           return `${addSpaceForAmount(Math.floor(value)).split(".")[0]} грн`;
//         },
//       },
//       borderColor: "transparent",
//       backgroundColor: ["#ff751d", "#ffdac0", "#ffdac0"],
//       borderRadius: "12",
//       barPercentage: 0.5,
//       categoryPercentage: 1,
//       barThickness: 15,
//     },
//   ],
// };
const tabletData = {
  labels,
  datasets: [
    {
      data: summ,
      datalabels: {
        font: {
          size: "12",
          letterSpacing: "0.24px",
        },
        color: "#52555f",
        labels: {
          title: {
            align: "end",
            anchor: "end",
          },
        },
        formatter: (value) => {
          return `${addSpaceForAmount(Math.floor(value)).split(".")[0]} грн`;
        },
      },
      borderColor: "transparent",
      backgroundColor: ["#ff751d", "#ffdac0", "#ffdac0"],
      borderRadius: "12",
      barThickness: 38,
    },
  ],
};

export function tabletChart(data) {
  const labels = [];
  const summ = [];

  const getItems = (categoryData) => {
    const objEntries = Object.entries(categoryData)
      ?.filter(([elem, _]) => elem !== "total")
      .sort((a, b) => b[1] - a[1]);

    objEntries.forEach(([item, sum]) => {
      labels.push(item);
      summ.push(sum);
    });
  };
  getItems(nestedValues);

  function addSpaceForAmount(amount) {
    const floatNum = amount.toFixed(2);
    const parts = floatNum.toString().split(".");
    const integerReverse = parts[0].split("").reverse();

    const newString = integerReverse
      .map((char, index) => {
        if ((index + 1) % 3 === 0) {
          return ` ${char}`;
        }
        return char;
      })
      .reverse()
      .join("");

    return `${newString}.${parts[1]}`;
  }
  return (
    <Bar
      type="bar"
      options={{
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            //   left: 40,
            right: 10,
            top: 50,
            bottom: 0,
          },
        },
        indexAxis: "x",
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          legend: {
            display: false,
            position: "bottom",
          },

          x: {
            grid: {
              offset: true,
              lineWidth: 0,
              borderColor: "transparent",
            },
            ticks: {
              autoSkip: false,
              maxRotation: 0,

              maxTicksLimit: 10,
            },
          },

          y: {
            grid: {
              lineWidth: 1,
              borderColor: "transparent",
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            data: summ,
            datalabels: {
              font: {
                size: "12",
                letterSpacing: "0.24px",
              },
              color: "#52555f",
              labels: {
                title: {
                  align: "end",
                  anchor: "end",
                },
              },
              formatter: (value) => {
                return `${
                  addSpaceForAmount(Math.floor(value)).split(".")[0]
                } грн`;
              },
            },
            borderColor: "transparent",
            backgroundColor: ["#ff751d", "#ffdac0", "#ffdac0"],
            borderRadius: "12",
            barThickness: 38,
          },
        ],
      }}
    />
  );
}

// export const tabletChart = (
//   <Bar
//     type="bar"
//     options={{
//       maintainAspectRatio: false,
//       responsive: true,
//       layout: {
//         padding: {
//           //   left: 40,
//           right: 10,
//           top: 50,
//           bottom: 0,
//         },
//       },
//       indexAxis: "x",
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//       scales: {
//         legend: {
//           display: false,
//           position: "bottom",
//         },

//         x: {
//           grid: {
//             offset: true,
//             lineWidth: 0,
//             borderColor: "transparent",
//           },
//           ticks: {
//             autoSkip: false,
//             maxRotation: 0,
//             maxTicksLimit: 10,
//           },
//         },

//         y: {
//           grid: {
//             lineWidth: 1,
//             borderColor: "transparent",
//           },
//           ticks: {
//             display: false,
//           },
//         },
//       },
//     }}
//     data={tabletData}
//   />
// export const mobileChart = (
//   <Bar
//     type="bar"
//     width={100}
//     height={150}
//     options={{
//       layout: {
//         padding: { right: 80, top: 30 },
//       },
//       indexAxis: "y",
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//       scales: {
//         legend: {
//           display: false,
//           position: "bottom",
//         },

//         x: {
//           grid: {
//             offset: true,
//             lineWidth: 0,
//             borderColor: "transparent",
//           },

//           ticks: {
//             display: false,
//           },
//         },

//         y: {
//           grid: {
//             lineWidth: 0,
//             borderColor: "transparent",
//           },
//           ticks: {
//             labelOffset: -15,
//             align: "end",
//             mirror: true,
//             padding: 0,
//           },
//         },
//       },
//     }}
//     data={mobileData}
//   />
// );
