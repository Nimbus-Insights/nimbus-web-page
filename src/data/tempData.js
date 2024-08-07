const tempData = [
  {
    name: "SpecHunter",
    description:
      "SpecHunter is a web application capable of capturing the spectral signatures of multiband images. In addition to displaying the spectral signatures of selected pixels on the screen, it also allows downloading the data as a CSV table, enabling comparison between the signatures of different pixels and facilitating the collection of reflectance or radiance values from the images. This aids in creating datasets for training artificial intelligence algorithms or even creating a spectral library of the materials present on the study area's surface. It can be adapted for various types of images such as Sentinel, Landsat, ASTER, WorldView, or even hyperspectral images.",
    url: "https://nimbusinsights.users.earthengine.app/view/spechunter-aster-sentinel",
  },
  {
    name: "SpecHunter - ASTER/Sentinel-2: Masira Island",
    description:
      "A version of SpecHunter using ASTER and Sentinel-2 collection applied on Masira Island. Also, it's possible to check PCA applied for both collections.",
    url: "https://ee-kimgeologia.projects.earthengine.app/view/spechunteraster-sentinel-masiraisland",
  },  
  {
    name: "PCA Sentinel-2 Bands Selector: Masira Island",
    description:
      "This application demonstrates the use of PCA to reduce data dimensionality and identify patterns and internal structures without the need for predefined labels or categories. By transforming the original variables into a new set of uncorrelated variables (principal components), we can reveal hidden information in the data.",
    url: "https://ee-nimbusinsights.projects.earthengine.app/view/masiraislandselectbandspcasentinel2 ",
  },
  {
    name: "Aster Mineral Index Threshold",
    description:
      "In this application, we implemented an adjustable threshold for the selected mineral indices, allowing the user to create masks by determining the threshold values for visualizing the mineral indices. This application can also be adapted for indices calculated from other images such as Landsat, Sentinel, WorldView, among others.",
    url: "https://ee-nimbusinsights.projects.earthengine.app/view/astermineralindexthreshold",
  },
  {
    name: "Aster Mineral Index References",
    description:
      "Designed for geological mapping and mineral exploration. In the application, the entire preprocessing of the ASTER collection has been automated. Additionally, various mineral indices available in academic literature have been calculated and plotted. The application can be adapted for any area of the globe covered by the ASTER collection. The bibliographic references for each calculated index are available in the application's information card.",
    url: "https://ee-nimbusinsights.projects.earthengine.app/view/astermineralindexreferences",
  },
  {
    name: "Aster Mineral Index References - Mobile",
    description: "Mobile version of Aster Mineral Index References application. Designed for geological mapping and mineral exploration. In the application, the entire preprocessing of the ASTER collection has been automated. Additionally, various mineral indices available in academic literature have been calculated and plotted. The application can be adapted for any area of the globe covered by the ASTER collection. The bibliographic references for each calculated index are available in the application's information card.",
    url: "https://ee-nimbusinsights.projects.earthengine.app/view/astermineralindexmobile",
  },
  {
    name: "Mining Processes Filters",
    description:
      "This application allows users to filter mining process data based on various criteria such as name, year, state, phase and number of process. It provides an interactive map to visualize the filtered data, enabling detailed analysis and management of mining processes. Users can click on the map to view information about specific mining areas, facilitating easier tracking and decision-making for mining activities.",
    url: "https://ee-nimbusinsights.projects.earthengine.app/view/filtroprocessosminerarios",
  },
  {
    name: "PCA Sentinel-2 Pegmatite Seridó",
    description:
      "Utilizes the split slider functionality to compare an RGB image from the Sentinel satellite with a color composition of the new vectors extracted by Principal Component Analysis (PCA) in the Seridó region. This feature allows users to interactively visualize the differences and correlations between the original data and the PCA results, facilitating the identification of potential areas for pegmatite prospecting.",
    url: "https://ee-nimbusinsights.projects.earthengine.app/view/pagmatitosseridopca1sentinel",
  },
  {
    name: "MODIS - Monthly Burned Areas - 500m",
    description:
      "This application leverages the MODIS (Moderate Resolution Imaging Spectroradiometer) sensor data to provide monthly monitoring of burned areas worldwide at a 500-meter resolution. Users can select the year and visualize the burned areas, color-coded by quarter, enabling detailed analysis and tracking of fire patterns over time.",
    url: "https://ee-nimbusinsights.projects.earthengine.app/view/modismonthlyburnedareas",
  },
];

export default tempData;
