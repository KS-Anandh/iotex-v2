import React from 'react'

const Code = () => {
  return (
    <div className="code">
    <p className='code-title'>Coding Part</p>
    <div className="container">
     <div className="about step">
           <p className='title'>ESP8266 Boards</p>
           <p>Mostly in IOT Projects ESP8266 boards are using, NodeMCU ESP8266 is a compact,
              open-source development and prototyping board that's
               based on the ESP8266 Wi-Fi transceiver 
              module and the CH340 USB converter chip. It's ideal for IoT
             applications</p>
     </div>
     <div className="libraries step">
             <p className='title'>Required Dependencies</p>
             <p>Install those libraries throught arduino IDE</p>
             <code>
                <p>{`#include <ESP8266HTTPClient.h>`}</p>
                <p>{`#include <WiFiClientSecure.h>`}</p>
             </code>
     </div>
     <div className="code step">
         <p className='title'>Working Code </p>
        <code>
         <div className="feature">
           <p>{`#include <ESP8266WiFi.h>`}</p>
           <p className='new'>{`#include <ESP8266HTTPClient.h>`}</p>
           <p className='new'>{`#include <WiFiClientSecure.h>`}</p>
           </div><br/>
           <div className="feature">
           <p className='new'>{`HTTPClient http; `}</p>
           <p className='new'>{`WiFiClientSecure client; `}</p></div><br/>
           <div className="feature">
           <p className='comment'>{`//IOTEXT server api`}</p>
           <p className='new'>{` String serverApi = "https://iotex-ajgn.vercel.app/device/"; `}</p>
           <p className='comment'>{`//paste your hotspot name`}</p>
           <p >{` String ssid = "wifi-name"; `}</p>
           <p className='comment'>{`//paste your hotspot password`}</p>
           <p>{`  String pass = "wifi-password";`}</p></div><br/>
           <div className="feature">
           <p className='comment'>{`//global variable for Device status(getDeviceSatus)`}</p>
           <p className='new'>{`String ledState ="false"; `}</p>
           <p className='comment'>{`//global varible for range of device(getDeviceRange)`}</p>
           <p className='new'>{` int ledBrightness = 0;`}</p></div><br/>
           <h4>Feature-1:Categories Like<span style={{fontWeight:"bolder",color:"red"}}> Light,Digital Device. </span> Function to get device status (ex: On/OFF)</h4>
           <div className="feature">
           <p className='new'>{` String getDeviceStatus(String key) {`}</p>
           <p className='comment'>{`//Here key must be device-key`}</p>
           <p className='new'>{`  String api = serverApi+"status/"+key;`}</p>
           <p className='new'>{`   client.setInsecure();`}</p>
           <p className='new'>{`http.begin(client, api); `}</p>
           <p className='new'>{` http.setTimeout(2000); `}</p>
           <p className='new'>{` if(http.GET()== HTTP_CODE_OK){`}</p>
           <p className='comment'>{`//don't forget declare variable in globally "String ledState="false" "`}</p> 
           <p className='new'>{` ledState = http.getString();`}</p>
            <p className='new'>{`} `}</p>
           <p className='new'>{`else{`}</p>
           <p className='new'>{`Serial.print("API Fetching Failed...");`}</p>
           <p className='new'>{`} `}</p>
           <p className='new'>{`http.end(); `}</p>
           <p className='comment'>{`//returning led_status`}</p>
           <p className='new'>{`return ledState; `}</p>
           <p className='new'>{` }`}</p><br/>
           </div>
           <h4>Feature-2:Categories like<span style={{fontWeight:"bolder",color:"red"}}> Light,ServoMotor.</span> function to get device Range (ex:Brightness of light,angles of servo-motor)</h4>
           <div className="feature">
           <p className='new'>{` int getdeviceRange(String key) {`}</p>
           <p className='comment'>{`//Here key must be device-key`}</p>
           <p className='new'>{`   String api = serverApi+"range/"+key;`}</p>
           <p className='new'>{`client.setInsecure(); `}</p>
           <p className='new'>{` http.begin(client, api);`}</p>
           <p className='new'>{`http.setTimeout(2000); `}</p>
           <p className='new'>{`   if(http.GET()== HTTP_CODE_OK){`}</p>
           <p className='comment'>{`//don't forget declare variable in globally "int ledBrightness=0 "`}</p> 
           <p className='new'>{`ledBrightness = http.getString().toInt();`}</p>
           <p className='new'>{`}`}</p>
           <p className='new'>{`else{`}</p>
           <p className='new'>{`Serial.print("API Fetching Failed...");`}</p>
           <p className='new'>{`}`}</p>
           <p className='new'>{` http.end(); `}</p>
           <p className='comment'>{`//returning led_Brightness`}</p>
           <p className='new'>{`return ledBrightness; `}</p><br/>
           <p className='new'>{`}`}</p>
           </div>
           <h4>Feature-3:Category like<span style={{fontWeight:"bolder",color:"red"}}> DataMonitor.</span> function to post data from sensors to website (Ex: Temparature Monitoring)</h4>
           <div className="feature">
           <p className='comment'>{`//function to upload data from controller to website`}</p>
           <p className='new'>{`void setdeviceRange(String key, int data) { `}</p>
           <p className='comment'>{`//data will be updated to website`}</p>
           <p className='comment'>{`//Here key must be device-key`}</p>
           <p className='new'>{`String api = serverApi + "range/" + key + "/" + data; `}</p>
           <p className='new'>{` client.setInsecure(); `}</p>
           <p className='new'>{` http.begin(client, api);  `}</p>
           <p className='new'>{`  http.setTimeout(2000); `}</p>
           <p className='comment'>{`//http.UPDATE() or http.PUT() are same.`}</p>
           <p className='new'>{` int httpResponseCode = http.PUT(" ");`}</p>
           <p className='new'>{`  if (httpResponseCode == HTTP_CODE_OK) {`}</p>
           <p className='new'>{`Serial.println("Data Updated to IoText successfully."); `}</p>
           <p className='new'>{`} else { `}</p>
           <p className='new'>{` Serial.print("API Fetching Failed. HTTP Response code: ");`}</p>
           <p className='new'>{` Serial.println(httpResponseCode); `}</p>
           <p className='new'>{` } `}</p>
           <p className='new'>{`http.end(); `}</p>
           <p className='new'>{`} `}</p>
           </div><br/>
           <h3>Common Code for all type Of devices</h3>
           <div className="feature">
           <p className='comment'>{`//Common Imp Method for all ESP8266`}</p>
           <p>{` void setup() {`}</p>
           <p>{` Serial.begin(9600);`}</p>
           <p>{`Serial.println("Connecting to WiFi..."); `}</p>
           <p>{`WiFi.begin(ssid,pass); `}</p>
           <p>{`while (WiFi.status() != WL_CONNECTED) { `}</p>
           <p>{`Serial.print("."); `}</p>
           <p>{`delay(300); `}</p>
           <p className='new'>{`}`}</p>
           <p>{`  Serial.println();`}</p>
           <p>{` Serial.println("WiFi Connected.");`}</p>
           <p className='comment'>{`//Here is the two OUTPUT pins are used for ON/OFF,Brightness Contol`}</p>
           <p className='new'>{` pinMode(D0, OUTPUT);`}</p>
           <p className='new'>{` pinMode(D1, OUTPUT);`}</p>
           <p>{`}`}</p>
           <br/>
           <p>{`void loop() {`}</p>
           <p className='comment'>{`//Copy the Device-key from device in iotext website`}</p>
           <p className='new'>{` String ledStatus=getDeviceStatus("device_key"); //ex: "52dcdf554fvfvf5665" `}</p>
           <p className='new'>{` int ledBright=getdeviceRange("device_key");`}</p>
           <p className='comment'>{`// Sample "data" to monitor data in web`}</p>
           <p>{`  int data=20;`}</p>
           <p className='comment'>{`//Copy the Device-key from device in iotext website`}</p>
           <p className='new'>{`setdeviceRange("device_key",data);`}</p>
           <p className='comment'>{`//use output for your own actuator`}</p>
           <p className='new'>{`digitalWrite(D0,ledStatus);`}</p>
           <p className='comment'>{`//use output for your own actuator`}</p>
           <p>{`analogWrite(D1,ledBright*5);`}</p>
           <p>{`} `}</p> 
           </div>
        </code>
        
     </div>
    </div>
</div>
  )
}

export default Code