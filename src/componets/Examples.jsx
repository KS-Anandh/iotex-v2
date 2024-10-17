import React from "react";

const Examples = () => {
  return (
    <div className="code">
      <p className="code-title">Examples Codes</p>
      <div className="container">
        <div className="about step" style={{ overflow: "hidden" }}>
          <p className="title">LED ON/OFF Through website Program</p>
          <div className="feature" style={{ overflow: "scroll" }}>
            <code>
              <p>{`#include <ESP8266WiFi.h>`}</p>
              <p className="new">{`#include <ESP8266HTTPClient.h>`}</p>
              <p className="new">{`#include <WiFiClientSecure.h>`}</p>
              <br />
              <p className="new">{`HTTPClient http; `}</p>
              <p className="new">{`WiFiClientSecure client; `}</p>
              <p className="comment">{`//IOTEXT server api`}</p>
              <p className="new">{` String serverApi = "https://iotex-ajgn.vercel.app/device/"; `}</p>
              <p className="comment">{`//paste your hotspot name`}</p>
              <p>{` String ssid = "wifi-name"; `}</p>
              <p className="comment">{`//paste your hotspot password`}</p>
              <p>{`  String pass = "wifi-password";`}</p>
              <p className="comment">{`//global variable for return Device status(getDeviceSatus)`}</p>
              <p className="new">{`String ledState ="false"; `}</p>
              <br />
              <p className="new">{` String getDeviceStatus(String key) {`}</p>
              <p className="comment">{`//Here key must be device-key`}</p>
              <p className="new">{`  String api = serverApi+"status/"+key;`}</p>
              <p className="new">{`   client.setInsecure();`}</p>
              <p className="new">{`http.begin(client, api); `}</p>
              <p className="new">{` http.setTimeout(2000); `}</p>
              <p className="new">{` if(http.GET()== HTTP_CODE_OK){`}</p>
              <p className="comment">{`//don't forget declare variable in globally "String ledStatus="false" "`}</p>
              <p className="new">{` ledState = http.getString();`}</p>
              <p className="new">{`} `}</p>
              <p className="new">{`else{`}</p>
              <p className="new">{`Serial.print("API Fetching Failed...");`}</p>
              <p className="new">{`} `}</p>
              <p className="new">{`http.end(); `}</p>
              <p className="comment">{`//returning led_status`}</p>
              <p className="new">{`return ledState; `}</p>
              <p className="new">{` }`}</p>
              <br />
              <p className="comment">{`//Common Imp Method for all ESP8266`}</p>
              <p>{` void setup() {`}</p>
              <p>{` Serial.begin(9600);`}</p>
              <p>{`Serial.println("Connecting to WiFi..."); `}</p>
              <p>{`WiFi.begin(ssid,pass); `}</p>
              <p>{`while (WiFi.status() != WL_CONNECTED) { `}</p>
              <p>{`Serial.print("."); `}</p>
              <p>{`delay(300); `}</p>
              <p>{`}`}</p>
              <p>{`  Serial.println();`}</p>
              <p>{` Serial.println("WiFi Connected.");`}</p>
              <p className="comment">{`//Here is OUTPUT pin are used for ON/OFF led`}</p>
              <p className="new">{` pinMode(D0, OUTPUT);`}</p>
              <p>{`}`}</p>
              <br />
              <p>{`void loop() {`}</p>
              <p className="comment">{`//Copy the Device-key from website`}</p>
              <p className="comment">{`//Ex: 25b25ah744j561752a5`}</p>
              <p className="new">{` String ledStatus=getDeviceStatus("device_key"); `}</p>
              <p className="comment">{`//use output for your own actuator`}</p>
              <p className="new">{`digitalWrite(D0,ledStatus=="true"?HIGH:LOW);`}</p>
              <p>{`} `}</p>
            </code>
          </div>
        </div>
        <div className="about step">
          <p className="title">LED Brigntness Contol Through website Program</p>
          <div className="feature" style={{ overflow: "scroll" }}>
            <code>
              <p>{`#include <ESP8266WiFi.h>`}</p>
              <p className="new">{`#include <ESP8266HTTPClient.h>`}</p>
              <p className="new">{`#include <WiFiClientSecure.h>`}</p>
              <br />
              <p className="new">{`HTTPClient http; `}</p>
              <p className="new">{`WiFiClientSecure client; `}</p>
              <p className="comment">{`//IOTEXT server api`}</p>
              <p className="new">{` String serverApi = "https://iotex-ajgn.vercel.app/device/"; `}</p>
              <p className="comment">{`//paste your hotspot name`}</p>
              <p>{` String ssid = "wifi-name"; `}</p>
              <p className="comment">{`//paste your hotspot password`}</p>
              <p>{`  String pass = "wifi-password";`}</p>
              <p className="comment">{`//global variable for return Device Brightness(getdeviceRange)`}</p>
              <p className="new">{`int ledBrightness=0; `}</p>
              <br />
              <p className="new">{` int getdeviceRange(String key) {`}</p>
              <p className="comment">{`//Here key must be device-key`}</p>
              <p className="new">{`   String api = serverApi+"range/"+key;`}</p>
              <p className="new">{`client.setInsecure(); `}</p>
              <p className="new">{` http.begin(client, api);`}</p>
              <p className="new">{`http.setTimeout(2000); `}</p>
              <p className="new">{`   if(http.GET()== HTTP_CODE_OK){`}</p>
              <p className="comment">{`//don't forget declare variable in globally "int ledBrightness=0 "`}</p>
              <p className="new">{`ledBrightness = http.getString().toInt();`}</p>
              <p className="new">{`}`}</p>
              <p className="new">{`else{`}</p>
              <p className="new">{`Serial.print("API Fetching Failed...");`}</p>
              <p className="new">{`}`}</p>
              <p className="new">{` http.end(); `}</p>
              <p className="comment">{`//returning led_Brightness`}</p>
              <p className="new">{`return ledBrightness;} `}</p>
              <br />
              <p className="comment">{`//Common Imp Method for all ESP8266`}</p>
              <p>{` void setup() {`}</p>
              <p>{` Serial.begin(9600);`}</p>
              <p>{`Serial.println("Connecting to WiFi..."); `}</p>
              <p>{`WiFi.begin(ssid,pass); `}</p>
              <p>{`while (WiFi.status() != WL_CONNECTED) { `}</p>
              <p>{`Serial.print("."); `}</p>
              <p>{`delay(300); `}</p>
              <p>{`}`}</p>
              <p>{`  Serial.println();`}</p>
              <p>{` Serial.println("WiFi Connected.");`}</p>
              <p className="comment">{`//Here is OUTPUT pin is used Brightness Contol`}</p>
              <p className="new">{` pinMode(D0, OUTPUT);`}</p>
              <p>{`}`}</p>
              <br />
              <p>{`void loop() {`}</p>
              <p className="comment">{`//Copy the Device-key from website`}</p>
              <p className="comment">{`//Ex: 25b25ah744j561752a5`}</p>
              <p className="new">{` int ledBright=getdeviceRange("device_key"); `}</p>
              <p className="comment">{`//use output for your own actuator`}</p>
              <p className="new">{`digitalWrite(D0,ledBright*5);`}</p>
              <p>{`} `}</p>
            </code>
          </div>
        </div>
        <div className="about step">
          <p className="title">Sensor Data Monitoring in website Program</p>
          <div className="feature" style={{ overflow: "scroll" }}>
            <code>
              <p>{`#include <ESP8266WiFi.h>`}</p>
              <p className="new">{`#include <ESP8266HTTPClient.h>`}</p>
              <p className="new">{`#include <WiFiClientSecure.h>`}</p>
              <br />
              <p className="new">{`HTTPClient http; `}</p>
              <p className="new">{`WiFiClientSecure client; `}</p>
              <p className="comment">{`//IOTEXT server api`}</p>
              <p className="new">{` String serverApi = "https://iotex-ajgn.vercel.app/device/"; `}</p>
              <p className="comment">{`//paste your hotspot name`}</p>
              <p>{` String ssid = "wifi-name"; `}</p>
              <p className="comment">{`//paste your hotspot password`}</p>
              <p>{`  String pass = "wifi-password";`}</p>
              <br />

              <p className="comment">{`//function to upload data from controller to website`}</p>
              <p className="new">{`void setdeviceRange(String key, int data) { `}</p>
              <p className="comment">{`//data will be updated to website`}</p>
              <p className="comment">{`//Here key must be device-key`}</p>
              <p className="new">{`String api = serverApi + "range/" + key + "/" + data; `}</p>
              <p className="new">{` client.setInsecure(); `}</p>
              <p className="new">{` http.begin(client, api);  `}</p>
              <p className="new">{`  http.setTimeout(2000); `}</p>
              <p className="comment">{`//http.UPDATE() or http.PUT() are same.`}</p>
              <p className="new">{` int httpResponseCode = http.PUT(" ");`}</p>
              <p className="new">{`  if (httpResponseCode == HTTP_CODE_OK) {`}</p>
              <p className="new">{`Serial.println("Data Updated to IoText successfully."); `}</p>
              <p className="new">{`} else { `}</p>
              <p className="new">{` Serial.print("API Fetching Failed. HTTP Response code: ");`}</p>
              <p className="new">{` Serial.println(httpResponseCode); `}</p>
              <p className="new">{` } `}</p>
              <p className="new">{`http.end(); `}</p>
              <p className="new">{`} `}</p>

              <br />
              <p className="comment">{`//Common Imp Method for all ESP8266`}</p>
              <p>{` void setup() {`}</p>
              <p>{` Serial.begin(9600);`}</p>
              <p>{`Serial.println("Connecting to WiFi..."); `}</p>
              <p>{`WiFi.begin(ssid,pass); `}</p>
              <p>{`while (WiFi.status() != WL_CONNECTED) { `}</p>
              <p>{`Serial.print("."); `}</p>
              <p>{`delay(300); `}</p>
              <p>{`}`}</p>
              <p>{`  Serial.println();`}</p>
              <p>{` Serial.println("WiFi Connected.");`}</p>
              <p>{`}`}</p>
              <br />
              <p>{`void loop() {`}</p>
              <p className='comment'>{`//Sample "data" to monitor data in web`}</p>
              <p className='comment'>{`//use your own sensor data`}</p>
           <p>{`  int data=20;`}</p>
           <p className='comment'>{`//Copy the Device-key from device in iotext website`}</p>
           <p className='new'>{`setdeviceRange("device_key",data);`}</p>
              <p>{`} `}</p>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
