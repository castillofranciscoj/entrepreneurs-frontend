import React from "react";
import { Row, Col } from "reactstrap";
import dynamic from "next/dynamic";
import BreadCrumbs from "../../layouts/breadcrumbs/BreadCrumbs";
import ComponentCard from "../../components/ComponentCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function generateData(baseval, count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([baseval, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

function generateDataHeatMap(count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = `w${(i + 1).toString()}`;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x,
      y,
    });
    i++;
  }
  return series;
}

const Apexcharts = () => {
  //-------------------------
  // Basic line chart
  //-------------------------
  const optionsbasicline = {
    chart: {
      height: 350,
      type: "line",
      fontFamily: "'Rubik', sans-serif",
      zoom: {
        type: "x",
        enabled: true,
      },
      toolbar: {
        autoSelected: "zoom",
        show: false,
      },
      shadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1,
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Month",
      },
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    colors: ["#2962ff", "#00b0ff"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "straight",
      width: "2",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriesbasicline = [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ];

  //-------------------------
  // Gradiant line chart
  //-------------------------
  const optionsgradientline = {
    chart: {
      height: 350,
      type: "line",
      fontFamily: "'Rubik', sans-serif",
      dropShadow: {
        enabled: true,
        color: "rgba(0,0,0,0.2)",
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#4e79ff"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: ["#4e79ff"],
      strokeColor: "#fff",
      strokeWidth: 2,

      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 40,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriesgradientline = [
    {
      name: "Likes",
      data: [4, 3, 10, 9, 35, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];

  //-------------------------
  // Doughnut Chart
  //-------------------------
  const optionsdoughnut = {
    chart: {
      id: "donut-chart",
      fontFamily: "'Rubik', sans-serif",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70px",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
      fontFamily: "'Montserrat', sans-serif",
      labels: {
        colors: "#8898aa",
      },
    },
    colors: [
      "rgb(30, 136, 229)",
      "rgb(38, 198, 218)",
      "rgb(236, 239, 241)",
      "rgb(116, 90, 242)",
      "#ef5350",
    ],
    tooltip: {
      fillSeriesColor: false,
      theme: "dark",
    },
  };

  const seriesdoughnut = [45, 15, 27, 18, 35];

  //-------------------------
  // Pie Chart
  //-------------------------
  const optionspie = {
    chart: {
      id: "pie-chart",
      fontFamily: "'Rubik', sans-serif",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70px",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
      fontFamily: "'Montserrat', sans-serif",
      labels: {
        colors: "#8898aa",
      },
    },
    colors: [
      "rgb(30, 136, 229)",
      "rgb(38, 198, 218)",
      "rgb(236, 239, 241)",
      "rgb(116, 90, 242)",
      "#ef5350",
    ],
    tooltip: {
      fillSeriesColor: false,
      theme: "dark",
    },
  };

  const seriespie = [45, 15, 27, 18, 35];

  //-------------------------
  // Area Chart
  //-------------------------
  const optionsarea = {
    chart: {
      id: "area-chart",
      fontFamily: "'Rubik', sans-serif",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: "3",
      curve: "smooth",
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    colors: ["#745af2", "#06d79c"],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        show: true,
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
      fontFamily: "'Montserrat', sans-serif",
      labels: {
        colors: "#8898aa",
      },
    },
  };

  const seriesarea = [
    {
      name: "Sales Summery 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales Summery 2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  //-------------------------
  // Line Chart
  //-------------------------
  const optionsline = {
    chart: {
      id: "line-bar",
      fontFamily: "'Rubik', sans-serif",
      animations: {
        easing: "easeinout",
      },
    },
    title: {
      text: "Products of the Month",
      align: "left",
      margin: 10,
      style: {
        fontSize: "14px",
        color: "#6E8192",
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      row: {
        colors: ["#e9ecef", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      categories: ["2001", "2002", "2003", "2004", "2005"],
      labels: {
        show: true,
        style: {
          colors: [
            "#99abb4",
            "#99abb4",
            "#99abb4",
            "#99abb4",
            "#99abb4",
            "#99abb4",
          ],
          fontSize: "12px",
          fontFamily: "'Montserrat', sans-serif",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#398bf7"],
    stroke: {
      curve: "straight",
      width: "4",
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriesline = [
    {
      name: "Sales Overview",
      data: [0, 150, 120, 150, 135, 210, 180, 210, 240, 220, 250, 200],
    },
  ];

  //-------------------------
  // Column Chart
  //-------------------------
  const optionscolumn = {
    colors: ["#745af2", "#263238", "#4fc3f7"],
    chart: {
      fontFamily: "'Rubik', sans-serif",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
        color: "#8898aa",
      },
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter(val) {
          return `$ ${val} thousands`;
        },
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
      fontFamily: "'Montserrat', sans-serif",
      labels: {
        colors: "#8898aa",
      },
    },
  };

  const seriescolumn = [
    {
      name: "Desktop",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Mobile",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Other",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  //-------------------------
  // Bar Chart
  //-------------------------
  const optionsbar = {
    chart: {
      fontFamily: "'Rubik', sans-serif",
    },
    colors: ["#4fc3f7"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    yaxis: {
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriesbar = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  //-------------------------
  // Mixed Chart
  //-------------------------
  const optionsmix = {
    colors: ["#745af2", "#263238", "#ef5350"],
    chart: {
      stacked: false,
      fontFamily: "'Rubik', sans-serif",
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
      fontFamily: "'Montserrat', sans-serif",
      labels: {
        colors: "#8898aa",
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    tooltip: {
      theme: "dark",
      shared: true,
      intersect: false,
      y: {
        formatter(y) {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} points`;
          }
          return y;
        },
      },
    },
  };

  const seriesmix = [
    {
      name: "TEAM A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "TEAM C",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ];

  //-------------------------
  // candlestick Chart
  //-------------------------
  const optionscandlestick = {
    chart: {
      fontFamily: "'Rubik', sans-serif",
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#745af2",
          downward: "#263238",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriescandlestick = [
    {
      data: [
        { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
        { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
        { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
        { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
        { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
        { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
        { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
        { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
        { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
        { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
        { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
        { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
        { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
        { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },
        { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
        { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
        { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
        { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
        { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
        { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },
        { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
        { x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] },
        { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },
        { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },
        { x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] },
        { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },
        { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
        { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },
        { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },
        { x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] },
        { x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] },
        { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },
        { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] },
        { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },
        { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
        { x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] },
        { x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] },
        { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
        { x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] },
        { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
        { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
        { x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] },
        { x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] },
        { x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] },
        { x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] },
        { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
        { x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] },
        { x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] },
        { x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] },
        { x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] },
        { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },
        { x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] },
        { x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] },
        { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },
        { x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] },
        { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },
        { x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] },
        { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },
        { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
      ],
    },
  ];

  const optionsbubble = {
    chart: {
      fontFamily: "'Rubik', sans-serif",
    },
    colors: ["#745af2", "#545b62", "#06d79c", "#398bf7"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    xaxis: {
      tickAmount: 12,
      type: "datetime",

      labels: {
        rotate: 0,
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      max: 70,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    theme: {
      palette: "palette2",
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
      fontFamily: "'Montserrat', sans-serif",
      labels: {
        colors: "#8898aa",
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriesbubble = [
    {
      name: "Desktop",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Mobile",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Tablet",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Others",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ];

  //-------------------------
  // scatter chart
  //-------------------------
  const optionsscatter = {
    colors: ["#745af2", "#ef5350", "#263238"],
    chart: {
      fontFamily: "'Rubik', sans-serif",
      zoom: {
        enabled: true,
        type: "xy",
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
      fontFamily: "'Montserrat', sans-serif",
      labels: {
        colors: "#8898aa",
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriesscatter = [
    {
      name: "C++",
      data: [
        [16.4, 5.4],
        [21.7, 2],
        [25.4, 3],
        [19, 2],
        [10.9, 1],
        [13.6, 3.2],
        [10.9, 7.4],
        [10.9, 0],
        [10.9, 8.2],
        [16.4, 0],
        [16.4, 1.8],
        [13.6, 0.3],
        [13.6, 0],
        [29.9, 0],
        [27.1, 2.3],
        [16.4, 0],
        [13.6, 3.7],
        [10.9, 5.2],
        [16.4, 6.5],
        [10.9, 0],
        [24.5, 7.1],
        [10.9, 0],
        [8.1, 4.7],
        [19, 0],
        [21.7, 1.8],
        [27.1, 0],
        [24.5, 0],
        [27.1, 0],
        [29.9, 1.5],
        [27.1, 0.8],
        [22.1, 2],
      ],
    },
    {
      name: "Java",
      data: [
        [6.4, 13.4],
        [1.7, 11],
        [5.4, 8],
        [9, 17],
        [1.9, 4],
        [3.6, 12.2],
        [1.9, 14.4],
        [1.9, 9],
        [1.9, 13.2],
        [1.4, 7],
        [6.4, 8.8],
        [3.6, 4.3],
        [1.6, 10],
        [9.9, 2],
        [7.1, 15],
        [1.4, 0],
        [3.6, 13.7],
        [1.9, 15.2],
        [6.4, 16.5],
        [0.9, 10],
        [4.5, 17.1],
        [10.9, 10],
        [0.1, 14.7],
        [9, 10],
        [12.7, 11.8],
        [2.1, 10],
        [2.5, 10],
        [27.1, 10],
        [2.9, 11.5],
        [7.1, 10.8],
        [2.1, 12],
      ],
    },
    {
      name: "Android",
      data: [
        [21.7, 3],
        [23.6, 3.5],
        [24.6, 3],
        [29.9, 3],
        [21.7, 20],
        [23, 2],
        [10.9, 3],
        [28, 4],
        [27.1, 0.3],
        [16.4, 4],
        [13.6, 0],
        [19, 5],
        [22.4, 3],
        [24.5, 3],
        [32.6, 3],
        [27.1, 4],
        [29.6, 6],
        [31.6, 8],
        [21.6, 5],
        [20.9, 4],
        [22.4, 0],
        [32.6, 10.3],
        [29.7, 20.8],
        [24.5, 0.8],
        [21.4, 0],
        [21.7, 6.9],
        [28.6, 7.7],
        [15.4, 0],
        [18.1, 0],
        [33.4, 0],
        [16.4, 0],
      ],
    },
  ];

  //-------------------------
  // heatmap chart
  //-------------------------
  const optionsheatmap = {
    chart: {
      fontFamily: "'Rubik', sans-serif",
    },
    colors: ["#398bf7", "#cfecfe"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriesheatmap = [
    {
      name: "Metric1",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric5",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric6",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric7",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric9",
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90,
      }),
    },
  ];

  //-------------------------
  // radialBar chart
  //-------------------------
  const optionsradialBar = {
    chart: {
      fontFamily: "'Rubik', sans-serif",
    },
    colors: ["#745af2", "#263238", "#ef5350", "#06d79c"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter() {
              return 249;
            },
          },
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriesradialBar = [44, 55, 67, 83];

  //-------------------------
  // radar chart
  //-------------------------
  const optionsradar = {
    chart: {
      fontFamily: "'Rubik', sans-serif",
    },
    colors: ["#745af2"],
    labels: ["January", "February", "March", "April", "May", "June"],
    tooltip: {
      theme: "dark",
    },
  };
  const seriesradar = [
    {
      name: "Sales",
      data: [80, 50, 30, 40, 100, 20],
    },
  ];

  return (
    <div>
      <BreadCrumbs />
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
      <Row>
        <Col md="6">
          <ComponentCard title="Basic Line chart">
            <Chart
              options={optionsbasicline}
              series={seriesbasicline}
              type="line"
              height="300"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Gradient Chart">
            <Chart
              options={optionsgradientline}
              series={seriesgradientline}
              type="line"
              height="300"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Doughnut Chart">
            <Chart
              options={optionsdoughnut}
              series={seriesdoughnut}
              type="donut"
              height="300"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Pie Chart">
            <Chart
              options={optionspie}
              series={seriespie}
              type="pie"
              height="300"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Area Chart">
            <Chart
              options={optionsarea}
              series={seriesarea}
              type="area"
              height="280"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Line Chart">
            <Chart
              options={optionsline}
              series={seriesline}
              type="line"
              height="280"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Column Chart">
            <Chart
              options={optionscolumn}
              series={seriescolumn}
              type="bar"
              height="280"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Bar Chart">
            <Chart
              options={optionsbar}
              series={seriesbar}
              type="bar"
              height="280"
            />
          </ComponentCard>
        </Col>
        <Col md="12">
          <ComponentCard title="Mixed Chart">
            <Chart
              options={optionsmix}
              series={seriesmix}
              type="line"
              height="350"
            />
          </ComponentCard>
        </Col>
        <Col md="12">
          <ComponentCard title="Candlestick Chart">
            <Chart
              options={optionscandlestick}
              series={seriescandlestick}
              type="candlestick"
              height="350"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="3D Bubble Chart">
            <Chart
              options={optionsbubble}
              series={seriesbubble}
              type="bubble"
              height="280"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Scatter Chart">
            <Chart
              options={optionsscatter}
              series={seriesscatter}
              type="scatter"
              height="280"
            />
          </ComponentCard>
        </Col>
        <Col md="12">
          <ComponentCard title="Heat Map Chart">
            <Chart
              options={optionsheatmap}
              series={seriesheatmap}
              type="heatmap"
              height="350"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Radial Bar Chart">
            <Chart
              options={optionsradialBar}
              series={seriesradialBar}
              type="radialBar"
              height="350"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Radar Chart">
            <Chart
              options={optionsradar}
              series={seriesradar}
              type="radar"
              height="350"
            />
          </ComponentCard>
        </Col>
      </Row>
      {/*--------------------------------------------------------------------------------*/}
      {/*End Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Apexcharts;
