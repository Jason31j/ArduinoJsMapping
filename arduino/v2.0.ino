//display
#include <TFT.h>  // Arduino LCD library
#include <SPI.h>
#define cs 10
#define dc 9
#define rst 8
TFT TFTscreen = TFT(cs, dc, rst);

//buttons
const int btnUp =4 ;
const int btnOk = 3;
const int btnDown = 2;

//base URL
char *URL = "https://kind-longhaired-carbon.glitch.me/?id=";

//counter for the menu
int cont = 1;

//qr code
#include "qrcode.h"
QRCode qrcode;

void setup() {
  Serial.begin(9600);

  // initialize the pushbutton pin as an input:
  pinMode(btnUp, INPUT);
  pinMode(btnOk, INPUT);
  pinMode(btnDown, INPUT);

  //screen settings
  TFTscreen.begin();
  // Rotate the screen
  TFTscreen.setRotation(0);
  // clear the screen with a white background
  TFTscreen.background(255, 255, 255);
  TFTscreen.setTextSize(1.7);
  TFTscreen.stroke(0, 0, 0);
  TFTscreen.fill(0, 0, 0);

  //printing on screen the logo
  TFTscreen.background(0, 0, 0);
  TFTscreen.stroke(255, 255, 255);
  TFTscreen.setTextSize(2);
  TFTscreen.text("EXPLICIT", 20, 60);
  TFTscreen.text("CODE", 40, 90);  
  delay(8000);


  //reseting the settings
  TFTscreen.background(255, 255, 255);
  TFTscreen.setTextSize(1.7);
  TFTscreen.stroke(0, 0, 0);

  //show menu
  menu();
}

void loop() {

  // read the state of the pushbutton value:
  int btnStateUp = digitalRead(btnUp);
  int btnStateOk = digitalRead(btnOk);
  int btnStateDown = digitalRead(btnDown);

  showSelected(cont);

  if (btnStateDown == HIGH) {
    delay(300);
    if (cont != 1)
      cont--;
    menu();
    showSelected(cont);
    Serial.println("btn down");
  }

  if (btnStateUp == HIGH) {
    delay(300);
    if (cont != 7)
      cont++;
    menu();
    showSelected(cont);
    Serial.println("btn up");
  }

  if (btnStateOk == HIGH) {
    delay(300);
    Serial.println("btn ok");
    char id = String(cont)[0];
    Serial.println(id);
    TFTscreen.background(255, 255, 255);
    TFTscreen.fill(0,0,0);    
    URL[45] = id;
    Serial.println(URL);
    uint8_t qrcodeData[qrcode_getBufferSize(3)];
    qrcode_initText(&qrcode, qrcodeData, 3, 0, URL);
    for (uint8_t y = 0; y < qrcode.size; y++) {
      // Each horizontal module
      for (uint8_t x = 0; x < qrcode.size; x++) {
        if (qrcode_getModule(&qrcode, x, y)) {
          TFTscreen.rect(5 + (x * 4), 40 + (y * 4), 4, 4);
        }
      }
    }
    delay(10000);
    URL = "https://kind-longhaired-carbon.glitch.me/?id=";    
    menu();
  }
}

//this function print the option's list on the st7735 1.8" display
void menu() {
  int cantOptions = 8;
  int x = 5;
  int y = 5;
TFTscreen.textSize(1.7);
  TFTscreen.background(255, 255, 255);

  String options[8] = { "GITCE", "Biblioteca", "SIU", "Salon de conf.", "VIPE", "Cafeteria", "Dirección"};
  for (int i = 0; i < cantOptions; i++) {

    char aux[15] = {};
    for (int j = 0; j < options[i].length(); j++) {
      aux[j] = options[i][j];
      //Serial.println(aux);
    }

    TFTscreen.text(aux, x, y);
    y += 23;
  }
}

//this function make the animation and show us wich option is selected
void showSelected(int cont) {
  TFTscreen.noFill();
  TFTscreen.stroke(255, 0, 0);
  TFTscreen.rect(3, (cont-1) * 23, 125, 23);
  TFTscreen.stroke(0, 0, 0);
}
