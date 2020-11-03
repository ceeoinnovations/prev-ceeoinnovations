/*
Calls for a Chuck Norris Joke - pulling heavily from the 
*/
#include <WiFiNINA.h>
#include <Arduino_JSON.h>
#include <Arduino_MKRIoTCarrier.h>
MKRIoTCarrier carrier;
bool CARRIER_CASE = false;

char ssid[] = SECRET_SSID;      // your network SSID (name) 
char pass[] = SECRET_PASS;   // your network password
char server[] = "api.chucknorris.io";  // server address
int port = 443;

WiFiSSLClient client;
int status = WL_IDLE_STATUS;

void setup() {
  Serial.begin(9600);
  //Wait to open the Serial monitor to start the program and see details on errors
  delay(1000);  
  Serial.println("starting");
  
  while ( status != WL_CONNECTED) { 
    Serial.print("Trying ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
    // wait 10 seconds for connection:
    delay(10000);    
  }
  printWifiStatus();
  carrier.begin();
}

void loop() {
  GetJoke();
  delay(30000);
}

void GetJoke(){
  Serial.println("\nStarting connection to server...");
  // if you get a connection, report back via serial:
  if (client.connect(server, 443)) {
    Serial.println("making GET request");
    client.println("GET /jokes/random?category=food  HTTP/1.1");
    client.println("Host: api.chucknorris.io");
    client.println("Connection: close");
    client.println();
  }
  if (client.connected()) {
    String line = client.readStringUntil('\n\n'); //should read 200
    int code = line.substring(line.indexOf(' ')).toInt();  // length of HTTP/1.1 
    Serial.println(code);
    if (code != 200) {
      Serial.print("Error: ");
      Serial.println(code);
    }
    while (line.indexOf('{') < 0){
      line = client.readStringUntil('\n');  // should be the JSON package
    }
    Serial.println("disconnecting from server.");
    client.stop();
    JSONVar myObject = JSON.parse(line);

    Serial.println(myObject["value"]);
    carrier.display.setCursor(10, 40);
    carrier.display.setTextColor(ST77XX_BLUE);
    carrier.display.setTextSize(2); //medium sized text
    carrier.display.println(myObject["value"]);
  }

}

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
  // print where to go in a browser:
  Serial.print("http://");
  Serial.println(ip);
    
  //carrier.display.fillScreen(ST77XX_BLACK); //oled clear()
  //carrier.display.setTextSize(2); //medium sized text
  //carrier.display.setCursor(10, 10);
  //carrier.display.print("IP:  ");
  //carrier.display.setTextColor(ST77XX_MAGENTA);
  //carrier.display.print(ip);

}