const publications = [
  {
    Name: "Nurse care activity recognition based on convolution neural network for accelerometer data",
    Link: "https://dl.acm.org/doi/10.1145/3410530.3414335",
    Abstract:
      'Human activity recognition on sensor data plays a vital role in health monitoring and elderly care service monitoring. Although tremendous progress has been noticed to the use of sensor technology to collect activity recognition data, recognition still remains challenging due to the pervasive nature of the activities. In this paper, we present a Convolution Neural Network (CNN) model by our team DataDrivers_BD in "The 2nd Nurse Care Activity Recognition Challenge Using Lab and Field Data" which is quite challenging because of the similarity among the tasks. On the other hand, the dissimilarity among the users patterns of working for a particular task. Since CNN can retrieve informative features automatically, it has become one of the most prominent methods in activity recognition. Our extensive experiment on nurse care activity recognition challenge dataset also achieved significant accuracy of 91.59% outperforming the existing state of the art algorithms.',
  },

  {
    Name: "Classification of acute myeloid leukemia using convolutional neural network",
    Link: "https://ieeexplore.ieee.org/document/10269178",
    Abstract:
      "Acute myeloid leukemia is a life-threatening disease of white blood cells. It is a cancer of the blood and bone marrow. AML is considered 'acute' by physicians because the disease can progress rapidly. It is the most common type of acute leukemia in adults. The diagnosis of AML is done by a hematologist, which is time-consuming and more error-prone. Computer-aided diagnosis is more efficient and detects malignant cells more accurately. To classify and detect subtypes of this disease in an automated manner, we have proposed a convolutional neural network ANCOM, that can identify all subtypes of acute myeloid leukemia as well as healthy leukocytes. The experimental analysis of our study shows that the proposed algorithm provides better results for blast cell detection. We have used a public dataset from Cancer Imaging Archive to train our model. It has fifteen classes and a severe class imbalance problem. We have used random sampling techniques and data augmentation to balance the dataset. The model achieved an overall accuracy of 91.7% for detection and 92.5% for classification on multi-class classification. For binary classification, whether a white blood cell is malignant or not, it got 95% and 95.45% for the said dataset. A comparative analysis with VGG16, Resnet50, and Inception V3 was also done. Our model has achieved better accuracy without any need for segmentation of the microscopic images.",
  },

  {
    Name: "Short-term and Long-term Air Quality Forecasting Technique Using Stacked LSTM",
    Link: "https://dl.acm.org/doi/10.1145/3442555.3442582",
    Abstract:
      "For the entire globe, air pollution has been a worrying issue. Earth's Atmosphere contains numerous toxic gases and harmful solid particles are caused by Air pollution. Contaminated Air have been many mischievous effects on human health. Asthma, emphysema, chronic obstructive pulmonary disease and lung cancer can happen due to air contamination. Among other enlisted polluted cities, Dhaka lies in a hazardous problem for air pollution. This paper has approached two Long Short-Term Memory (Vanilla LSTM, Stacked LSTM) model and Gated Recurrent Unit (GRU) model to Predict air Quality Indexing with different hyper-parameter tuning. And analyze future the health effects based on Air Quality Index Level. We have worked on Dhaka Air Quality data which was collected by the United States Environmental Protection Agency (EPA). Among the two models, we have acquired the highest accuracy of 91.61% for Short-term prediction and 90.83% for Long-term prediction. And RMSE value of 4.65 and 16.19 for Air Quality Index value prediction on Stacked LSTM tuned with 200 hidden nodes on the first layer and 100 nodes on the second layer.",
  },
];

export default publications;
