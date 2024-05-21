const tempData = [
  {
    name: "SpecHunter",
    description:
      "SpecHunter is a web application capable of capturing the spectral signatures of multiband images. In addition to displaying the spectral signatures of selected pixels on the screen, it also allows downloading the data as a CSV table, enabling comparison between the signatures of different pixels and facilitating the collection of reflectance or radiance values from the images. This aids in creating datasets for training artificial intelligence algorithms or even creating a spectral library of the materials present on the study area's surface. It can be adapted for various types of images such as Sentinel, Landsat, ASTER, WorldView, or even hyperspectral images.",
    url: "https://nimbusinsights.users.earthengine.app/view/spechunter-aster-sentinel",
  },
  {
    name: "SpecHunter - ASTER/Sentinel: Masira Island",
    description:
      "A version of SpecHunter using ASTER and Sentinel 2 collection applied on Masira Island. Also, it's possible to check PCA applied for both collections.",
    url: "https://ee-kimgeologia.projects.earthengine.app/view/spechunteraster-sentinel-masiraisland",
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
      "This application is designed for geological mapping and mineral exploration. In the application, the entire preprocessing of the ASTER collection has been automated. Additionally, various mineral indices available in academic literature have been calculated and plotted. The application can be adapted for any area of the globe covered by the ASTER collection. The bibliographic references for each calculated index are available in the application's information card.",
    url: "https://ee-nimbusinsights.projects.earthengine.app/view/astermineralindexreferences",
  },
];

export default tempData;
