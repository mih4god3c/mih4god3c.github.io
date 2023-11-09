let coloredSquares = [
  93, 94, 95, 96, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 188, 189,
  190, 191, 192, 193, 194, 195, 196, 197, 238, 239, 240, 241, 242, 243, 244,
  245, 246, 247, 253, 254, 255, 259, 260, 261, 262, 263, 264, 265, 281, 282,
  283, 284, 285, 286, 289, 290, 291, 292, 293, 294, 295, 296, 297, 302, 303,
  304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 331, 332,
  333, 334, 335, 336, 337, 339, 340, 341, 342, 343, 344, 345, 346, 347, 352,
  353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367,
  368, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391,
  392, 393, 394, 395, 396, 397, 402, 403, 404, 405, 406, 407, 408, 409, 410,
  411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 427, 428, 429, 430, 431,
  432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446,
  452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466,
  467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481,
  482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 503,
  504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518,
  519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533,
  534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 554, 555,
  556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570,
  571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585,
  586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 605, 606, 607,
  608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622,
  623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637,
  638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 656, 657, 658, 659, 660,
  661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675,
  676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690,
  691, 692, 693, 694, 695, 696, 697, 705, 706, 707, 708, 709, 710, 711, 712,
  713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727,
  728, 729, 730, 731, 732, 733, 734, 735, 736, 738, 739, 740, 744, 745, 746,
  747, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766,
  767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781,
  782, 783, 784, 785, 786, 795, 796, 797, 803, 804, 805, 806, 807, 808, 809,
  810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824,
  825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 853, 854,
  855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869,
  870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884,
  885, 886, 887, 888, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913,
  914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928,
  929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 954, 955, 956, 957, 958,
  959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973,
  974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988,
  1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018,
  1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031,
  1032, 1033, 1034, 1035, 1036, 1037, 1038, 1058, 1059, 1060, 1061, 1062, 1063,
  1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076,
  1077, 1078, 1079, 1080, 1081, 1082, 1105, 1106, 1107, 1108, 1109, 1110, 1111,
  1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124,
  1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1154, 1155, 1156, 1157, 1158,
  1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1161, 1162, 1163,
  1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176,
  1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1204, 1205, 1206, 1207, 1208,
  1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1222, 1223, 1224, 1225,
  1228, 1229, 1230, 1231, 1232, 1233, 1234, 1254, 1255, 1256, 1257, 1258, 1259,
  1260, 1262, 1263, 1264, 1265, 1266, 1273, 1274, 1275, 1279, 1280, 1281, 1282,
  1283, 1284, 1304, 1305, 1306, 1307, 1308, 1309, 1330, 1331, 1332, 1333, 1334,
];

let data;
let cols = 50;
let rows = 50;
let squareSize;
let groups = []; // Array to store groups of squares
let hoveredGroup = -1; // Store the index of the hovered group
let fillColor = 255;
let borderColor = 255;

function setup() {
  strokeWeight(2);

  // Load the data/statistika.json file
  data = loadJSON("data/stats.json");

  createCanvas(windowWidth, windowHeight);
  squareSize = width / cols;

  // Define the groups of squares
  const pomurska = [
    93, 94, 95, 96, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 188, 189,
    190, 191, 192, 193, 194, 195, 196, 197, 238, 239, 240, 241, 242, 243, 244,
    245, 246, 247, 289, 290, 291, 292, 293, 294, 295, 296, 297, 341, 342, 343,
    344, 345, 346, 347, 392, 393, 394, 395, 396, 397, 442, 443, 444, 445, 446,
    491, 492, 493, 494, 495, 541, 542, 543, 544, 545, 546, 591, 592, 593, 594,
    595, 596, 597, 640, 641, 642, 643, 644, 645, 646, 647, 689, 690, 691, 692,
    693, 694, 695, 696, 697, 739, 740, 744, 745, 746, 747, 795, 796, 797,
  ];
  const podravska = [
    686, 687, 688, 738, 788, 436, 437, 387, 437, 487, 537, 586, 536, 486, 636,
    637, 587, 388, 438, 488, 339, 389, 439, 489, 539, 589, 639, 590, 540, 490,
    440, 390, 340, 391, 441, 538, 588, 638,
  ];
  const koroska = [
    337, 336, 286, 285, 335, 334, 284, 283, 333, 332, 282, 281, 331, 432, 431,
    430, 429, 428, 386, 385, 384, 434, 433, 427, 378, 379, 380, 381, 382, 383,
  ];
  const savinjska = [
    576, 577, 578, 579, 580, 581, 582, 533, 484, 435, 485, 535, 585, 635, 685,
    735, 736, 734, 784, 834, 833, 832, 830, 684, 634, 584, 534, 583, 633, 683,
    733, 783, 782, 732, 682, 632, 631, 681, 731, 781, 831, 476, 526, 477, 527,
    478, 528, 479, 529, 480, 530, 481, 531, 532, 482, 483, 630,
  ];
  const zasavska = [
    675, 725, 775, 826, 876, 877, 827, 828, 829, 779, 780, 730, 680, 679, 629,
    628, 678, 677, 676, 675, 726, 727, 728, 776, 777, 778, 729, 625, 626, 627,
  ];
  const posavska = [
    786, 785, 835, 885, 935, 985, 1035, 1036, 986, 936, 886, 836, 786, 837, 887,
    937, 987, 1037, 1038, 988, 938, 888, 884, 883, 933, 934, 984, 983, 1033,
    1034,
  ];
  const jugovzhodna = [
    1032, 1031, 1030, 1079, 1078, 1077, 1027, 1026, 1025, 1024, 1023, 1073,
    1072, 1122, 1172, 1222, 1073, 1123, 1173, 1223, 1273, 1274, 1275, 1225,
    1224, 1174, 1175, 1124, 1125, 1126, 1127, 1128, 1129, 1074, 1075, 1076,
    1176, 1177, 1178, 1179, 1130, 1080, 1081, 1082, 1132, 1131, 1181, 1182,
    1183, 1184, 1234, 1233, 1232, 1231, 1230, 1229, 1228, 1279, 1280, 1281,
    1282, 1283, 1284, 1334, 1333, 1331, 1330, 1180, 1332, 825, 875, 925, 975,
    926, 976, 927, 977, 878, 928, 978, 1028, 1029, 979, 929, 879, 880, 930, 980,
    981, 931, 881, 882, 932, 982,
  ];
  const osrednjeslovenska = [
    863, 864, 865, 815, 765, 766, 716, 666, 616, 566, 567, 568, 518, 519, 469,
    470, 471, 472, 473, 474, 475, 866, 915, 966, 967, 1017, 1018, 1068, 1118,
    1168, 1169, 1170, 1120, 1171, 1121, 1071, 1021, 1022, 972, 973, 974, 575,
    525, 618, 816, 916, 917, 918, 919, 969, 1019, 1069, 1119, 1070, 1020, 970,
    971, 921, 922, 923, 924, 874, 873, 872, 871, 870, 869, 868, 767, 768, 769,
    770, 771, 772, 773, 774, 724, 723, 722, 721, 720, 719, 718, 668, 669, 670,
    671, 672, 673, 717, 667, 617, 817, 867, 968, 920, 818, 819, 820, 821, 823,
    824, 674, 624, 623, 622, 621, 620, 619, 569, 570, 571, 572, 573, 574, 524,
    523, 522, 521, 520, 822,
  ];
  const gorenjska = [
    259, 260, 261, 262, 263, 264, 265, 315, 364, 365, 414, 464, 514, 515, 565,
    614, 615, 664, 714, 713, 712, 711, 661, 611, 561, 560, 510, 460, 409, 359,
    358, 357, 307, 308, 309, 310, 311, 312, 313, 314, 360, 361, 362, 363, 410,
    411, 412, 413, 461, 462, 463, 511, 512, 513, 562, 563, 564, 612, 613, 662,
    663, 465, 415, 665, 715, 761, 811, 861, 862, 812, 762, 763, 813, 814, 764,
    516, 466, 416, 366, 316, 367, 417, 467, 517, 468, 418, 368, 419, 420,
  ];
  const goriska = [
    253, 254, 255, 302, 303, 304, 305, 306, 352, 353, 354, 355, 356, 402, 403,
    404, 405, 406, 407, 408, 452, 453, 454, 455, 456, 457, 458, 459, 502, 503,
    504, 505, 506, 507, 508, 509, 554, 555, 556, 557, 558, 559, 605, 606, 607,
    608, 609, 610, 656, 657, 658, 659, 660, 705, 706, 707, 708, 709, 710, 753,
    754, 755, 756, 757, 758, 759, 760, 803, 804, 805, 806, 807, 808, 809, 810,
    853, 854, 855, 856, 857, 858, 859, 860, 903, 904, 905, 906, 907, 908, 909,
    910,
  ];
  const obalnokraska = [
    954, 955, 956, 957, 958, 959, 1006, 1007, 1008, 1009, 1010, 1058, 1059,
    1060, 1061, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1154, 1155, 1156,
    1157, 1158, 1159, 1160, 1161, 1162, 1204, 1205, 1206, 1207, 1208, 1209,
    1210, 1211, 1212, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1262, 1304,
    1305, 1306, 1307, 1308, 1309,
  ];
  const notranjska = [
    911, 912, 913, 914, 960, 961, 962, 963, 964, 965, 1011, 1012, 1013, 1014,
    1015, 1016, 1062, 1063, 1064, 1065, 1066, 1067, 1112, 1113, 1114, 1115,
    1116, 1117, 1163, 1164, 1165, 1166, 1167, 1213, 1214, 1215, 1216, 1217,
    1263, 1264, 1265, 1266,
  ];

  groups = [
    pomurska,
    podravska,
    koroska,
    savinjska,
    zasavska,
    posavska,
    jugovzhodna,
    osrednjeslovenska,
    gorenjska,
    goriska,
    obalnokraska,
    notranjska,
  ];

  // Draw a slider at 10,10
  slider = createSlider(0, 100, 0, 50);
  slider.position(10, 10);
  slider.style("width", "150");

  // Add text to the slider 2020,2021,2022
  text2020 = createDiv("2020");
  text2020.position(10, 30);
  text2020.style("color", "#ffffff");
  text2020.style("font-size", "18px");
  text2020.style("font-family", "Arial");
  text2020.style("font-weight", "bold");

  text2021 = createDiv("2021");
  text2021.position(60, 30);
  text2021.style("color", "#ffffff");
  text2021.style("font-size", "18px");
  text2021.style("font-family", "Arial");
  text2021.style("font-weight", "bold");

  text2022 = createDiv("2022");
  text2022.position(110, 30);
  text2022.style("color", "#ffffff");
  text2022.style("font-size", "18px");
  text2022.style("font-family", "Arial");
  text2022.style("font-weight", "bold");
}

function draw() {
  const groupMap = {
    0: "pomurska",
    1: "podravska",
    2: "koroska",
    3: "savinjska",
    4: "zasavska",
    5: "posavska",
    6: "jugovzhodna",
    7: "osrednjeslovenska",
    8: "gorenjska",
    9: "goriska",
    10: "obalnokraska",
    11: "notranjska",
  };

  const yearMap = {
    0: "2020",
    50: "2021",
    100: "2022",
  };

  background(0);
  stroke(255);
  strokeWeight(2);

  let isHovered = false;

  // Set the fill color based on the average age if it exists in the colors object otherwise set it to white
  const colors = [
    [250, 163, 7],
    [244, 140, 6],
    [232, 93, 4],
    [220, 47, 2],
    [208, 0, 0],
    [157, 2, 8],
    [106, 4, 15],
  ];

  const colors2 = [
    [173, 232, 244],
    [144, 224, 239],
    [72, 202, 228],
    [0, 180, 216],
    [0, 150, 199],
    [0, 119, 182],
    [2, 62, 138],
  ];

  let colorIndex = 0;
  let pop = 0;
  let ratio = 0;
  let size = 0;

  let baseAlpha = 5000;
  let hoverAlpha = 1;

  for (let index of coloredSquares) {
    let x = index % cols;
    let y = floor(index / cols);
    let xPos = x * squareSize;
    let yPos = y * squareSize;

    let groupIndex = -1; // Variable to store the group index of the current square

    // Check which group the square belongs to
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].includes(index)) {
        groupIndex = i;
        break; // Stop searching for the group once found
      }
    }

    // Check which group is being hovered
    if (
      mouseX >= xPos &&
      mouseX <= xPos + squareSize &&
      mouseY >= yPos &&
      mouseY <= yPos + squareSize
    ) {
      hoveredGroup = groupIndex;
      isHovered = true;
      // Get the group data for the current square
      // Map the correct slider value to the correct year
      let year = yearMap[slider.value()];
      let groupJson = groupMap[groupIndex];

      let title = data[groupJson][year].title;
      let area = data[groupJson][year].area;
      let population = data[groupJson][year].population;
      let average_age = data[groupJson][year].average_age;
      let municipalities = data[groupJson][year].municipalities;
      let avg_salary = data[groupJson][year].avg_salary;
      let num_students = data[groupJson][year].num_students;
      let num_flats = data[groupJson][year].num_flats;
      let flat_size = data[groupJson][year].flat_size;

      // transform population to a number from 570.003 to 570003
      pop = population.replace(/\./g, "");
      ratio = ((num_students / num_flats) * 10).toFixed(2);
      size = flat_size;

      fill(255);
      strokeWeight(0);
      textSize(25); // Reduce the font size to make it smaller
      textFont("Arial"); // Use a common font like Arial for better readability
      text(title, 1500, 610);

      textSize(20);
      text("Area: " + area, 1500, 640);
      text("Population: " + population, 1500, 670);
      text("Students (per 1000 people): " + num_students, 1500, 700);
      text("Flats (per 1000 people): " + num_flats, 1500, 730);
      // Razmerje med stevilom studentov in stevilom stanovanj
      text("Ratio of students to flats: " + ratio, 1500, 760);
      text("Average flat size: " + flat_size + "m2", 1500, 790);

      strokeWeight(2);
    }

    if (groupIndex >= 0) {
      // Get the group data for the current square
      let groupJson = groupMap[groupIndex];
      let year = yearMap[slider.value()];
      let ratio = (
        (data[groupJson][year].num_students / data[groupJson][year].num_flats) *
        10
      ).toFixed(2);

      let flat_size = data[groupJson][year].flat_size;

      // Determine the fill color for this group based on the ratio
      let fillColor;
      if (ratio > 1) {
        fillColor = colors[6];
      } else if (ratio > 0.9) {
        fillColor = colors[5];
      } else if (ratio > 0.85) {
        fillColor = colors[4];
      } else if (ratio > 0.8) {
        fillColor = colors[3];
      } else if (ratio > 0.75) {
        fillColor = colors[2];
      } else if (ratio > 0.7) {
        fillColor = colors[1];
      } else if (ratio > 0.5) {
        fillColor = colors[0];
      } else {
        fillColor = color(0); // Default to black
      }

      // Determine the border color for this group based on the flat size
      let borderColor;
      if (flat_size > 100) {
        borderColor = colors[0];
      } else if (flat_size > 90) {
        borderColor = colors[1];
      } else if (flat_size > 80) {
        borderColor = colors[2];
      } else if (flat_size > 70) {
        borderColor = colors[3];
      } else if (flat_size > 60) {
        borderColor = colors[4];
      } else if (flat_size > 50) {
        borderColor = colors[5];
      } else if (flat_size > 0) {
        borderColor = colors[6];
      } else {
        borderColor = color(0); // Default to black
      }

      console.log(hoveredGroup);

      if (isHovered && hoveredGroup === groupIndex) {
        // apply this to the whole group
        for (let i = 0; i < groups[groupIndex].length; i++) {
          // Check if the current square is in the group
          if (groups[groupIndex].includes(index)) {
            let x = groups[groupIndex][i] % cols;
            let y = floor(groups[groupIndex][i] / cols);
            let xPos = x * squareSize;
            let yPos = y * squareSize;
            //make border thicker
            strokeWeight(4);
            fill(fillColor);
            stroke(borderColor);
            rect(xPos, yPos, squareSize - 3, squareSize - 3, 10);
            strokeWeight(2);
          }
        }
      } else {
        fill(fillColor);
        stroke(borderColor);
        rect(xPos, yPos, squareSize - 5, squareSize - 5, 10);
      }
    }
  }

  // Draw a title to the middle top of the canvas
  fill(255);
  strokeWeight(0);
  textSize(30);
  textFont("Arial");
  // Align the text to the center of the canvas
  textAlign(CENTER);
  text("Housing Crisis in Slovenian statistical regions", windowWidth / 2, 100);
  // Add a subtitle
  textSize(18);
  text("Hover over a region to see more information", windowWidth / 2, 130);

  // Add an author
  textSize(15);
  text("Author: @mihagodec", windowWidth / 2, 190);

  // Add a current year
  textSize(15);
  text("Year: " + yearMap[slider.value()], windowWidth / 2, 160);

  const legend = [1240, 1241, 1242, 1243, 1244, 1245, 1246];
  const legendColors = [
    [250, 163, 7],
    [244, 140, 6],
    [232, 93, 4],
    [220, 47, 2],
    [208, 0, 0],
    [157, 2, 8],
    [106, 4, 15],
  ];
  legendColors.reverse();

  // Draw rectangles at this indeces and make each be darker than the previous one
  for (let index of legend) {
    let x = index % cols;
    let y = floor(index / cols);
    let xPos = x * squareSize;
    let yPos = y * squareSize - 20;
    fill(colors[index - 1240]);
    rect(xPos, yPos, squareSize - 7, squareSize - 7, 5);
  }

  // Draw them again but only with the border without the fill
  for (let index of legend) {
    let x = index % cols;
    let y = floor(index / cols);
    let xPos = x * squareSize;
    let yPos = y * squareSize + 40;
    fill(0);
    strokeWeight(2);
    stroke(colors[index - 1240]);
    rect(xPos, yPos, squareSize - 7, squareSize - 7, 5);
  }

  // Add a text under the first and last rectangle of the legend
  fill(255);
  strokeWeight(0);
  textSize(20);
  textFont("Arial");
  textAlign(CENTER);
  text("0.65", 1400, 860);
  text("Ratio", 1500, 860);
  text("1.00", 1600, 860);
  text("72m2", 1400, 920);
  text("Flat size", 1500, 920);
  text("90m2", 1600, 920);
}

function mousePressed() {
  // Calculate the index of the clicked square
  let clickedX = floor(mouseX / squareSize);
  let clickedY = floor(mouseY / squareSize);
  let clickedIndex = clickedY * cols + clickedX;
  // Log the index to the console
  console.log("Clicked square index:", clickedIndex);
}
