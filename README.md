# AI-Driven Smart Farming System

An integrated **IoT and Machine Learning** platform designed to modernize agriculture through real-time soil monitoring and automated decision support.

## 📋 Table of Contents
* [System Architecture](#-system-architecture)
* [System Workflow](#-system-workflow)
* [Technology Stack](#-technology-stack)
* [Future Scope](#-future-scope)

## 🏗️ System Architecture
The system follows a 5-layer structure:
1. **Sensor Layer:** Physical collection of pH, Moisture, and NPK data.
2. **Connectivity Layer:** Data transmission via ESP32 Wi-Fi module.
3. **Processing Layer:** Cloud-based ML analysis (Random Forest/CNN).
4. **Database Layer:** Storage of historical soil records.
5. **Application Layer:** Farmer-facing Web Dashboard.

## 🔄 System Workflow
As detailed in the research methodology, the system operates in a linear four-stage process:

1. **Data Acquisition:** The IoT sensors (Soil Moisture, pH, DHT11) are embedded in the field to collect raw environmental data.
2. **Data Transmission:** The ESP32 microcontroller digitizes the analog signals and transmits them to the Flask-based cloud server using the HTTP protocol.
3. **AI Processing & Prediction:** * The server receives the data and passes it through a trained **Machine Learning Model**.
    * The model compares current soil health against a dataset of crop requirements.
    * It identifies nutrient deficiencies (Nitrogen, Phosphorus, Potassium).
4. **Actionable Output:** The system pushes the final recommendation (Best Crop & Fertilizer) to the Web Dashboard for the farmer to view instantly.

## 🛠️ Technology Stack
* **Frontend:** HTML5, CSS3, JavaScript
* **Backend:** Python (Flask Framework)
* **ML Library:** Scikit-Learn (for Crop Prediction)
* **Hardware:** ESP32, NPK Sensor, pH Sensor, DHT11

## 🔮 Future Scope
* Drone-based aerial monitoring.
* Blockchain for secure crop data storage.
* Fully automated robotic weeding and spraying units.

---
*Published in IJSRET, Volume 11, Issue 6, 2025.*