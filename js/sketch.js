
//VARIABLES----------------------------------------------
let canvas
let Tx = 0, Ty = 0;
let dts = 4;

let S = 0.1; //SCALA
let ds = 0.002;
//imageNES
let zoomMas, zoomMenos, gif;

let mapa

//CARGA-------------------------------------------------

function preload() {

    mapa = loadImage("https://cdn.glitch.global/20e097f8-2be8-4fa4-8f12-20d3d33c120d/MAPA%20V%20FINAL.svg?v=1669096794468");
    zoomMas = loadImage('https://cdn.glitch.global/20e097f8-2be8-4fa4-8f12-20d3d33c120d/CIRCULOMAS.png?v=1669016640586');
    zoomMenos = loadImage('https://cdn.glitch.global/20e097f8-2be8-4fa4-8f12-20d3d33c120d/circulomenos.png?v=1669016640982');

}

let porcentajeDeAltura = 0.80;

//SETUP-------------------------------------------------

function setup() {
    canvas = createCanvas(windowWidth, windowHeight * porcentajeDeAltura);
    //canvas.style("border: 2px dashed black");
    frameRate(60)
    //canvas.center('horizontal');

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight * porcentajeDeAltura);

}

//DRAW-------------------------------------------------

function draw() {

    background("#D3D4D7");

    //INICIO DE TRANSFORMACIÓN

    //========================================== TRANSFORMACIÓN ===================================================
    push();

    ZOOM();

    //zoom
    scale(S);

    //PANING
    translate(Tx, Ty);

    //MAPA
    image(mapa, 0, 0);

    //posiciónNodos();
    letras();
    ruta();



    fill("blue");
    stroke("none");
    textSize(50);

    //text("DESTINO: " + getParametros(), 2000 , 2000);

    pop();

    //texto
    //fill("red")
    //strokeWeight(1);
    //text( "X: " + mouseX ,mouseX - 50 ,mouseY );
    //fill("blue")
    //text( "Y: " + mouseY ,mouseX - 50 ,mouseY + 20);

    //==================================  MARGENES  ===========================================================================

    let porcentajeGrosos = 0.02;
    let grosorMargen = windowWidth * porcentajeGrosos;
    let alturaDeMargen = windowHeight * porcentajeDeAltura;

    //margen-------------------------------------------=====================================

    stroke("none")
    fill("white")
    //izquierda
    rect(0, 0, grosorMargen, alturaDeMargen)
    //derecha
    rect(windowWidth - (grosorMargen), 0, grosorMargen, alturaDeMargen)

    //=========================================== LUPAS =====================================================
    wImgs = 50;

    image(zoomMenos, (width * 0.04), 0.90 * height, 50, 50);

    image(zoomMas, (width * 0.96) - wImgs, 0.90 * height, 50, 50);


}




//VARIABLES DE POSICIÓN
//const NODO[ x, y, grosorNodo, GrosorLinea]
const alturaFISC = 2981.9;
const FiscPuertaH = 2949.8;
const FiscPuertaL = 3019.7;
const alturaPasilloFI = 2371.3;

let puntos = {

    A: { x: 2452.5, y: 5236.5 },
    B: { x: 2452.5, y: 4437.1 },
    C: { x: 2452.5, y: 3193.8 },
    L: { x: 3175.1, y: 3193.8 },
    D: { x: 2452.5, y: 2371.3 },
    J: { x: 2816.5, y: 2371.3 },
    E: { x: 2386.1, y: 2371.3 },
    F: { x: 2386.1, y: 2032.1 },
    G: { x: 2459, y: 2032.1 },
    H: { x: 2353.2, y: 2032.1 },
    I: { x: 2353.2, y: 1922.1 },
    K: { x: 2816.5, y: 2209.8 },
    M: { x: 3175.1, y: 2371.3 },
    M2: { x: 3175.1, y: 2618.1 },
    B9: { x: 3175.1, y: 2084.2 },
    IE1: { x: 3271.1, y: 2084.2 },
    B10: { x: 3175.1, y: 1763.2 },
    IE2: { x: 4895.2, y: 1763.2 },
    B11: { x: 3175.1, y: 1516.2 },
    IE3: { x: 3268.8, y: 1516.2 },
    N: { x: 3175.1, y: alturaFISC },
    B3: { x: 3597.9, y: 2618.1 },
    O: { x: 3432.7, y: alturaFISC },
    P: { x: 3432.7, y: FiscPuertaH },
    Q: { x: 3467.4, y: alturaFISC },
    R: { x: 3467.4, y: FiscPuertaL },
    T: { x: 3596.1, y: alturaFISC },
    U: { x: 3596.1, y: FiscPuertaH },
    W: { x: 3652.2, y: alturaFISC },
    X: { x: 3652.2, y: FiscPuertaL },
    Y: { x: 4175.1, y: alturaFISC },
    Z: { x: 4175.1, y: FiscPuertaL },
    A1: { x: 4546.0, y: alturaFISC },
    A2: { x: 4546.0, y: FiscPuertaL },
    A3: { x: 4730.8, y: alturaFISC },
    A4: { x: 4730.8, y: FiscPuertaH },
    A5: { x: 5101.1, y: alturaFISC },
    A6: { x: 5101.1, y: FiscPuertaH },
    A7: { x: 5139, y: alturaFISC },
    A8: { x: 5139, y: FiscPuertaH },
    A9: { x: 5320, y: alturaFISC },
    A10: { x: 5320, y: FiscPuertaH },
    FE1: { x: 3597.9, y: 2651.1 },
    B1: { x: 3597.9, y: alturaPasilloFI },
    B2: { x: 4730.1, y: alturaPasilloFI },
    B4: { x: 4730.1, y: 2618.1 },
    FE2: { x: 4730.1, y: 2651.1 },
    B5: { x: 5104.4, y: 2618.1 },
    B6: { x: 5104.4, y: alturaPasilloFI },
    B12: { x: 5135.1, y: 2618.1 },
    FE3: { x: 5104.4, y: 2651.1 },
    B7: { x: 5135.1, y: alturaPasilloFI },
    FE4: { x: 5135.1, y: 2651.1 },
    B13: { x: 5317.6, y: 2618.1 },
    B8: { x: 5435.1, y: alturaPasilloFI },
    FE5: { x: 5317.6, y: 2651.1 },
    IE4: { x: 5435.1, y: 1795.1 },
};

//MATRIZ DE ADYACENCIA CON PESOS===========================================
const problem = {

    //NODO A--------------------------------------------------------------------------------
    A:
    {
        B: Math.round(Math.sqrt(Math.pow(puntos.B.x - puntos.A.x, 2) + Math.pow(puntos.B.y - puntos.A.y, 2))),
    },

    //NODO B--------------------------------------------------------------------------------
    B:
    {
        A: Math.round(Math.sqrt(Math.pow(puntos.B.x - puntos.A.x, 2) + Math.pow(puntos.B.y - puntos.A.y, 2))),
        C: Math.round(Math.sqrt(Math.pow(puntos.C.x - puntos.B.x, 2) + Math.pow(puntos.C.y - puntos.B.y, 2)))
    },

    //NODO C--------------------------------------------------------------------------------
    C:
    {
        B: Math.round(Math.sqrt(Math.pow(puntos.C.x - puntos.B.x, 2) + Math.pow(puntos.C.y - puntos.B.y, 2))),
        L: Math.round(Math.sqrt(Math.pow(puntos.L.x - puntos.C.x, 2) + Math.pow(puntos.L.y - puntos.C.y, 2))),
        D: Math.round(Math.sqrt(Math.pow(puntos.D.x - puntos.C.x, 2) + Math.pow(puntos.D.y - puntos.C.y, 2)))
    },
    //NODO D--------------------------------------------------------------------------------
    D:
    {
        C: Math.round(Math.sqrt(Math.pow(puntos.D.x - puntos.C.x, 2) + Math.pow(puntos.D.y - puntos.C.y, 2))),
        J: Math.round(Math.sqrt(Math.pow(puntos.J.x - puntos.D.x, 2) + Math.pow(puntos.J.y - puntos.D.y, 2))),
        E: Math.round(Math.sqrt(Math.pow(puntos.E.x - puntos.D.x, 2) + Math.pow(puntos.E.y - puntos.D.y, 2)))
    },
    //NODO E--------------------------------------------------------------------------------
    E:
    {
        D: Math.round(Math.sqrt(Math.pow(puntos.E.x - puntos.D.x, 2) + Math.pow(puntos.E.y - puntos.D.y, 2))),
        F: Math.round(Math.sqrt(Math.pow(puntos.F.x - puntos.E.x, 2) + Math.pow(puntos.F.y - puntos.E.y, 2))),
    },
    //NODO F--------------------------------------------------------------------------------
    F:
    {
        E: Math.round(Math.sqrt(Math.pow(puntos.F.x - puntos.E.x, 2) + Math.pow(puntos.F.y - puntos.E.y, 2))),
        G: Math.round(Math.sqrt(Math.pow(puntos.G.x - puntos.F.x, 2) + Math.pow(puntos.G.y - puntos.F.y, 2))),
        H: Math.round(Math.sqrt(Math.pow(puntos.H.x - puntos.F.x, 2) + Math.pow(puntos.H.y - puntos.F.y, 2)))
    },
    //NODO G--------------------------------------------------------------------------------
    G: { F: Math.round(Math.sqrt(Math.pow(puntos.G.x - puntos.F.x, 2) + Math.pow(puntos.G.y - puntos.F.y, 2))) },
    //NODO I--------------------------------------------------------------------------------
    I: { H: Math.round(Math.sqrt(Math.pow(puntos.I.x - puntos.H.x, 2) + Math.pow(puntos.I.y - puntos.H.y, 2))) },
    //NODO H--------------------------------------------------------------------------------
    H:
    {
        F: Math.round(Math.sqrt(Math.pow(puntos.H.x - puntos.F.x, 2) + Math.pow(puntos.H.y - puntos.F.y, 2))),
        I: Math.round(Math.sqrt(Math.pow(puntos.I.x - puntos.H.x, 2) + Math.pow(puntos.I.y - puntos.H.y, 2)))
    },
    //NODO J--------------------------------------------------------------------------------
    J:
    {
        D: Math.round(Math.sqrt(Math.pow(puntos.J.x - puntos.D.x, 2) + Math.pow(puntos.J.y - puntos.D.y, 2))),
        K: Math.round(Math.sqrt(Math.pow(puntos.K.x - puntos.J.x, 2) + Math.pow(puntos.K.y - puntos.J.y, 2))),
        M: Math.round(Math.sqrt(Math.pow(puntos.M.x - puntos.J.x, 2) + Math.pow(puntos.M.y - puntos.J.y, 2)))
    },

    //NODO K--------------------------------------------------------------------------------
    K: { J: Math.round(Math.sqrt(Math.pow(puntos.K.x - puntos.J.x, 2) + Math.pow(puntos.K.y - puntos.J.y, 2))) },

    //NODO M--------------------------------------------------------------------------------
    M:
    {
        J: Math.round(Math.sqrt(Math.pow(puntos.M.x - puntos.J.x, 2) + Math.pow(puntos.M.y - puntos.J.y, 2))),
        M2: Math.round(Math.sqrt(Math.pow(puntos.M2.x - puntos.M.x, 2) + Math.pow(puntos.M2.y - puntos.M.y, 2))),
        B9: Math.round(Math.sqrt(Math.pow(puntos.B9.x - puntos.M.x, 2) + Math.pow(puntos.B9.y - puntos.M.y, 2))),
        B1: Math.round(Math.sqrt(Math.pow(puntos.B1.x - puntos.M.x, 2) + Math.pow(puntos.B1.y - puntos.M.y, 2)))
    },

    //NODO B9--------------------------------------------------------------------------------
    B9:
    {
        M: Math.round(Math.sqrt(Math.pow(puntos.B9.x - puntos.M.x, 2) + Math.pow(puntos.B9.y - puntos.M.y, 2))),
        IE1: Math.round(Math.sqrt(Math.pow(puntos.IE1.x - puntos.B9.x, 2) + Math.pow(puntos.IE1.y - puntos.B9.y, 2))),
        B10: Math.round(Math.sqrt(Math.pow(puntos.B10.x - puntos.B9.x, 2) + Math.pow(puntos.B10.y - puntos.B9.y, 2)))
    },
    //NODO IE1--------------------------------------------------------------------------------
    IE1: { B9: Math.round(Math.sqrt(Math.pow(puntos.IE1.x - puntos.B9.x, 2) + Math.pow(puntos.IE1.y - puntos.B9.y, 2))) },
    //NODO B10--------------------------------------------------------------------------------
    B10:
    {
        B9: Math.round(Math.sqrt(Math.pow(puntos.B10.x - puntos.B9.x, 2) + Math.pow(puntos.B10.y - puntos.B9.y, 2))),
        IE2: Math.round(Math.sqrt(Math.pow(puntos.IE2.x - puntos.B10.x, 2) + Math.pow(puntos.IE2.y - puntos.B10.y, 2))),
        B11: Math.round(Math.sqrt(Math.pow(puntos.B11.x - puntos.B10.x, 2) + Math.pow(puntos.B11.y - puntos.B10.y, 2)))
    },
    //NODO IE2--------------------------------------------------------------------------------
    IE2: { B10: Math.round(Math.sqrt(Math.pow(puntos.IE2.x - puntos.B10.x, 2) + Math.pow(puntos.IE2.y - puntos.B10.y, 2))) },

    //NODO B11--------------------------------------------------------------------------------
    B11:
    {
        B10: Math.round(Math.sqrt(Math.pow(puntos.B11.x - puntos.B10.x, 2) + Math.pow(puntos.B11.y - puntos.B10.y, 2))),
        IE3: Math.round(Math.sqrt(Math.pow(puntos.IE3.x - puntos.B11.x, 2) + Math.pow(puntos.IE3.y - puntos.B11.y, 2))),
    },
    //NODO IE3--------------------------------------------------------------------------------
    IE3: { B11: Math.round(Math.sqrt(Math.pow(puntos.IE3.x - puntos.B11.x, 2) + Math.pow(puntos.IE3.y - puntos.B11.y, 2))) },
    //NODO M2--------------------------------------------------------------------------------
    M2:
    {
        M: Math.round(Math.sqrt(Math.pow(puntos.M2.x - puntos.M.x, 2) + Math.pow(puntos.M2.y - puntos.M.y, 2))),
        N: Math.round(Math.sqrt(Math.pow(puntos.N.x - puntos.M2.x, 2) + Math.pow(puntos.N.y - puntos.M2.y, 2))),
        B3: Math.round(Math.sqrt(Math.pow(puntos.B3.x - puntos.M2.x, 2) + Math.pow(puntos.B3.y - puntos.M2.y, 2)))
    },
    //NODO N--------------------------------------------------------------------------------
    N:
    {
        M2: Math.round(Math.sqrt(Math.pow(puntos.N.x - puntos.M2.x, 2) + Math.pow(puntos.N.y - puntos.M2.y, 2))),
        L: Math.round(Math.sqrt(Math.pow(puntos.L.x - puntos.N.x, 2) + Math.pow(puntos.L.y - puntos.N.y, 2))),
        O: Math.round(Math.sqrt(Math.pow(puntos.O.x - puntos.N.x, 2) + Math.pow(puntos.O.y - puntos.N.y, 2)))
    },
    //NODO L--------------------------------------------------------------------------------
    L:
    {
        N: Math.round(Math.sqrt(Math.pow(puntos.L.x - puntos.N.x, 2) + Math.pow(puntos.L.y - puntos.N.y, 2))),
        C: Math.round(Math.sqrt(Math.pow(puntos.L.x - puntos.C.x, 2) + Math.pow(puntos.L.y - puntos.C.y, 2)))
    },
    //NODO O--------------------------------------------------------------------------------
    O:
    {
        N: Math.round(Math.sqrt(Math.pow(puntos.O.x - puntos.N.x, 2) + Math.pow(puntos.O.y - puntos.N.y, 2))),
        P: Math.round(Math.sqrt(Math.pow(puntos.P.x - puntos.O.x, 2) + Math.pow(puntos.P.y - puntos.O.y, 2))),
        Q: Math.round(Math.sqrt(Math.pow(puntos.Q.x - puntos.O.x, 2) + Math.pow(puntos.Q.y - puntos.O.y, 2))),
    },
    //NODO P--------------------------------------------------------------------------------
    P: { O: Math.round(Math.sqrt(Math.pow(puntos.P.x - puntos.O.x, 2) + Math.pow(puntos.P.y - puntos.O.y, 2))) },
    //NODO Q--------------------------------------------------------------------------------
    Q:
    {
        O: Math.round(Math.sqrt(Math.pow(puntos.Q.x - puntos.O.x, 2) + Math.pow(puntos.Q.y - puntos.O.y, 2))),
        R: Math.round(Math.sqrt(Math.pow(puntos.R.x - puntos.Q.x, 2) + Math.pow(puntos.R.y - puntos.Q.y, 2))),
        T: Math.round(Math.sqrt(Math.pow(puntos.T.x - puntos.Q.x, 2) + Math.pow(puntos.T.y - puntos.Q.y, 2)))
    },
    //NODO R--------------------------------------------------------------------------------
    R: { Q: Math.round(Math.sqrt(Math.pow(puntos.R.x - puntos.Q.x, 2) + Math.pow(puntos.R.y - puntos.Q.y, 2))) },

    //NODO T --------------------------------------------------------------------------------
    T:
    {
        Q: Math.round(Math.sqrt(Math.pow(puntos.T.x - puntos.Q.x, 2) + Math.pow(puntos.T.y - puntos.Q.y, 2))),
        U: Math.round(Math.sqrt(Math.pow(puntos.U.x - puntos.T.x, 2) + Math.pow(puntos.U.y - puntos.T.y, 2))),
        W: Math.round(Math.sqrt(Math.pow(puntos.W.x - puntos.T.x, 2) + Math.pow(puntos.W.y - puntos.T.y, 2)))
    },

    //NODO W --------------------------------------------------------------------------------
    W:
    {
        T: Math.round(Math.sqrt(Math.pow(puntos.W.x - puntos.T.x, 2) + Math.pow(puntos.W.y - puntos.T.y, 2))),
        X: Math.round(Math.sqrt(Math.pow(puntos.X.x - puntos.W.x, 2) + Math.pow(puntos.X.y - puntos.W.y, 2))),
        Y: Math.round(Math.sqrt(Math.pow(puntos.Y.x - puntos.W.x, 2) + Math.pow(puntos.Y.y - puntos.W.y, 2)))
    },
    //NODO X--------------------------------------------------------------------------------
    X: { W: Math.round(Math.sqrt(Math.pow(puntos.X.x - puntos.W.x, 2) + Math.pow(puntos.X.y - puntos.W.y, 2))) },
    //NODO Y --------------------------------------------------------------------------------
    Y:
    {
        W: Math.round(Math.sqrt(Math.pow(puntos.Y.x - puntos.W.x, 2) + Math.pow(puntos.Y.y - puntos.W.y, 2))),
        Z: Math.round(Math.sqrt(Math.pow(puntos.Z.x - puntos.Y.x, 2) + Math.pow(puntos.Z.y - puntos.Y.y, 2))),
        A1: Math.round(Math.sqrt(Math.pow(puntos.A1.x - puntos.Y.x, 2) + Math.pow(puntos.A1.y - puntos.Y.y, 2)))
    },
    //NODO Z--------------------------------------------------------------------------------
    Z: { Y: Math.round(Math.sqrt(Math.pow(puntos.Z.x - puntos.Y.x, 2) + Math.pow(puntos.Z.y - puntos.Y.y, 2))) },

    //NODO A1 --------------------------------------------------------------------------------
    A1:
    {
        Y: Math.round(Math.sqrt(Math.pow(puntos.A1.x - puntos.Y.x, 2) + Math.pow(puntos.A1.y - puntos.Y.y, 2))),
        A2: Math.round(Math.sqrt(Math.pow(puntos.A2.x - puntos.A1.x, 2) + Math.pow(puntos.A2.y - puntos.A1.y, 2))),
        A3: Math.round(Math.sqrt(Math.pow(puntos.A3.x - puntos.A1.x, 2) + Math.pow(puntos.A3.y - puntos.A1.y, 2)))
    },

    //NODO A2--------------------------------------------------------------------------------
    A2: { A1: Math.round(Math.sqrt(Math.pow(puntos.A2.x - puntos.A1.x, 2) + Math.pow(puntos.A2.y - puntos.A1.y, 2))) },

    //NODO A3 --------------------------------------------------------------------------------
    A3:
    {
        A1: Math.round(Math.sqrt(Math.pow(puntos.A3.x - puntos.A1.x, 2) + Math.pow(puntos.A3.y - puntos.A1.y, 2))),
        A4: Math.round(Math.sqrt(Math.pow(puntos.A4.x - puntos.A3.x, 2) + Math.pow(puntos.A4.y - puntos.A3.y, 2))),
        A5: Math.round(Math.sqrt(Math.pow(puntos.A5.x - puntos.A3.x, 2) + Math.pow(puntos.A5.y - puntos.A3.y, 2)))
    },

    //NODO A4--------------------------------------------------------------------------------
    A4: { A3: Math.round(Math.sqrt(Math.pow(puntos.A4.x - puntos.A3.x, 2) + Math.pow(puntos.A4.y - puntos.A3.y, 2))) },

    //NODO A5 --------------------------------------------------------------------------------
    A5:
    {
        A3: Math.round(Math.sqrt(Math.pow(puntos.A5.x - puntos.A3.x, 2) + Math.pow(puntos.A5.y - puntos.A3.y, 2))),
        A6: Math.round(Math.sqrt(Math.pow(puntos.A6.x - puntos.A5.x, 2) + Math.pow(puntos.A6.y - puntos.A5.y, 2))),
        A7: Math.round(Math.sqrt(Math.pow(puntos.A7.x - puntos.A5.x, 2) + Math.pow(puntos.A7.y - puntos.A5.y, 2)))
    },

    //NODO A6--------------------------------------------------------------------------------
    A6: { A5: Math.round(Math.sqrt(Math.pow(puntos.A6.x - puntos.A5.x, 2) + Math.pow(puntos.A6.y - puntos.A5.y, 2))) },

    //NODO A7 --------------------------------------------------------------------------------
    A7:
    {
        A5: Math.round(Math.sqrt(Math.pow(puntos.A7.x - puntos.A5.x, 2) + Math.pow(puntos.A7.y - puntos.A5.y, 2))),
        A8: Math.round(Math.sqrt(Math.pow(puntos.A8.x - puntos.A7.x, 2) + Math.pow(puntos.A8.y - puntos.A7.y, 2))),
        A9: Math.round(Math.sqrt(Math.pow(puntos.A9.x - puntos.A7.x, 2) + Math.pow(puntos.A9.y - puntos.A7.y, 2)))
    },
    //NODO A8--------------------------------------------------------------------------------
    A8: { A7: Math.round(Math.sqrt(Math.pow(puntos.A8.x - puntos.A7.x, 2) + Math.pow(puntos.A8.y - puntos.A7.y, 2))) },
    //NODO A9-------------------------------------------------------------------------------
    A9:
    {
        A7: Math.round(Math.sqrt(Math.pow(puntos.A9.x - puntos.A7.x, 2) + Math.pow(puntos.A9.y - puntos.A7.y, 2))),
        A10: Math.round(Math.sqrt(Math.pow(puntos.A10.x - puntos.A9.x, 2) + Math.pow(puntos.A10.y - puntos.A9.y, 2)))
    },
    //NODO A10--------------------------------------------------------------------------------
    A10: { A9: Math.round(Math.sqrt(Math.pow(puntos.A10.x - puntos.A9.x, 2) + Math.pow(puntos.A10.y - puntos.A9.y, 2))) },


    //PARTE  DE ARRIBA DE SISTEMAS==========================================================

    //NODO B3-------------------------------------------------------------------------------
    B3:
    {

        M2: Math.round(Math.sqrt(Math.pow(puntos.B3.x - puntos.M2.x, 2) + Math.pow(puntos.B3.y - puntos.M2.y, 2))),
        B1: Math.round(Math.sqrt(Math.pow(puntos.B1.x - puntos.B3.x, 2) + Math.pow(puntos.B1.y - puntos.B3.y, 2))),
        FE1: Math.round(Math.sqrt(Math.pow(puntos.FE1.x - puntos.B3.x, 2) + Math.pow(puntos.FE1.y - puntos.B3.y, 2))),
        B4: Math.round(Math.sqrt(Math.pow(puntos.B4.x - puntos.B3.x, 2) + Math.pow(puntos.B4.y - puntos.B3.y, 2)))
    },

    //NODO FE1--------------------------------------------------------------------------------
    FE1: { B3: Math.round(Math.sqrt(Math.pow(puntos.FE1.x - puntos.B3.x, 2) + Math.pow(puntos.FE1.y - puntos.B3.y, 2))) },

    //NODO B4-------------------------------------------------------------------------------
    B4:
    {
        B3: Math.round(Math.sqrt(Math.pow(puntos.B4.x - puntos.B3.x, 2) + Math.pow(puntos.B4.y - puntos.B3.y, 2))),
        B2: Math.round(Math.sqrt(Math.pow(puntos.B2.x - puntos.B4.x, 2) + Math.pow(puntos.B2.y - puntos.B4.y, 2))),
        B5: Math.round(Math.sqrt(Math.pow(puntos.B5.x - puntos.B4.x, 2) + Math.pow(puntos.B5.y - puntos.B4.y, 2))),
        FE2: Math.round(Math.sqrt(Math.pow(puntos.FE2.x - puntos.B4.x, 2) + Math.pow(puntos.FE2.y - puntos.B4.y, 2)))
    },

    //NODO FE1--------------------------------------------------------------------------------
    FE2: { B4: Math.round(Math.sqrt(Math.pow(puntos.FE2.x - puntos.B4.x, 2) + Math.pow(puntos.FE2.y - puntos.B4.y, 2))) },

    //NODO B1-------------------------------------------------------------------------------
    B1:
    {

        B3: Math.round(Math.sqrt(Math.pow(puntos.B1.x - puntos.B3.x, 2) + Math.pow(puntos.B1.y - puntos.B3.y, 2))),
        M: Math.round(Math.sqrt(Math.pow(puntos.B1.x - puntos.M.x, 2) + Math.pow(puntos.B1.y - puntos.M.y, 2))),
        B2: Math.round(Math.sqrt(Math.pow(puntos.B2.x - puntos.B1.x, 2) + Math.pow(puntos.B2.y - puntos.B1.y, 2)))
    },
    //NODO B2-------------------------------------------------------------------------------
    B2:
    {
        B4: Math.round(Math.sqrt(Math.pow(puntos.B2.x - puntos.B4.x, 2) + Math.pow(puntos.B2.y - puntos.B4.y, 2))),
        B1: Math.round(Math.sqrt(Math.pow(puntos.B2.x - puntos.B1.x, 2) + Math.pow(puntos.B2.y - puntos.B1.y, 2))),
        B6: Math.round(Math.sqrt(Math.pow(puntos.B6.x - puntos.B2.x, 2) + Math.pow(puntos.B6.y - puntos.B2.y, 2)))
    },
    //NODO B4-------------------------------------------------------------------------------
    B5:
    {
        B4: Math.round(Math.sqrt(Math.pow(puntos.B5.x - puntos.B4.x, 2) + Math.pow(puntos.B5.y - puntos.B4.y, 2))),
        FE3: Math.round(Math.sqrt(Math.pow(puntos.FE3.x - puntos.B5.x, 2) + Math.pow(puntos.FE3.y - puntos.B5.y, 2))),
        B12: Math.round(Math.sqrt(Math.pow(puntos.B12.x - puntos.B5.x, 2) + Math.pow(puntos.B12.y - puntos.B5.y, 2))),
        B6: Math.round(Math.sqrt(Math.pow(puntos.B6.x - puntos.B5.x, 2) + Math.pow(puntos.B6.y - puntos.B5.y, 2)))
    },

    //NODO FE3--------------------------------------------------------------------------------
    FE3: { B5: Math.round(Math.sqrt(Math.pow(puntos.FE3.x - puntos.B5.x, 2) + Math.pow(puntos.FE3.y - puntos.B5.y, 2))) },

    //NODO B6-------------------------------------------------------------------------------
    B6:
    {
        B5: Math.round(Math.sqrt(Math.pow(puntos.B6.x - puntos.B5.x, 2) + Math.pow(puntos.B6.y - puntos.B5.y, 2))),
        B2: Math.round(Math.sqrt(Math.pow(puntos.B6.x - puntos.B2.x, 2) + Math.pow(puntos.B6.y - puntos.B2.y, 2))),
        B7: Math.round(Math.sqrt(Math.pow(puntos.B7.x - puntos.B6.x, 2) + Math.pow(puntos.B7.y - puntos.B6.y, 2)))
    },

    //NODO 12-------------------------------------------------------------------------------
    B12:
    {
        B5: Math.round(Math.sqrt(Math.pow(puntos.B12.x - puntos.B5.x, 2) + Math.pow(puntos.B12.y - puntos.B5.y, 2))),
        B7: Math.round(Math.sqrt(Math.pow(puntos.B7.x - puntos.B12.x, 2) + Math.pow(puntos.B7.y - puntos.B12.y, 2))),
        B13: Math.round(Math.sqrt(Math.pow(puntos.B13.x - puntos.B12.x, 2) + Math.pow(puntos.B13.y - puntos.B12.y, 2))),
        FE4: Math.round(Math.sqrt(Math.pow(puntos.FE4.x - puntos.B12.x, 2) + Math.pow(puntos.FE4.y - puntos.B12.y, 2)))
    },

    //NODO FE4--------------------------------------------------------------------------------
    FE4: { B12: Math.round(Math.sqrt(Math.pow(puntos.FE4.x - puntos.B12.x, 2) + Math.pow(puntos.FE4.y - puntos.B12.y, 2))) },

    //NODO B7-------------------------------------------------------------------------------
    B7:
    {
        B6: Math.round(Math.sqrt(Math.pow(puntos.B7.x - puntos.B6.x, 2) + Math.pow(puntos.B7.y - puntos.B6.y, 2))),
        B12: Math.round(Math.sqrt(Math.pow(puntos.B7.x - puntos.B12.x, 2) + Math.pow(puntos.B7.y - puntos.B12.y, 2))),
        B8: Math.round(Math.sqrt(Math.pow(puntos.B8.x - puntos.B7.x, 2) + Math.pow(puntos.B8.y - puntos.B7.y, 2)))
    },

    //NODO 13-------------------------------------------------------------------------------
    B13:
    {
        B12: Math.round(Math.sqrt(Math.pow(puntos.B13.x - puntos.B12.x, 2) + Math.pow(puntos.B13.y - puntos.B12.y, 2))),
        FE5: Math.round(Math.sqrt(Math.pow(puntos.FE5.x - puntos.B13.x, 2) + Math.pow(puntos.FE5.y - puntos.B13.y, 2)))
    },

    //NODO FE5--------------------------------------------------------------------------------
    FE5: { B13: Math.round(Math.sqrt(Math.pow(puntos.FE5.x - puntos.B13.x, 2) + Math.pow(puntos.FE5.y - puntos.B13.y, 2))) },

    //NODO B7-------------------------------------------------------------------------------
    B8:
    {
        B7: Math.round(Math.sqrt(Math.pow(puntos.B8.x - puntos.B7.x, 2) + Math.pow(puntos.B8.y - puntos.B7.x, 2))),
        IE4: Math.round(Math.sqrt(Math.pow(puntos.IE4.x - puntos.B8.x, 2) + Math.pow(puntos.IE4.y - puntos.B8.y, 2)))
    },
    //NODO IE4--------------------------------------------------------------------------------
    IE4: { B8: Math.round(Math.sqrt(Math.pow(puntos.IE4.x - puntos.B8.x, 2) + Math.pow(puntos.IE4.y - puntos.B8.x, 2))) },

};


function getParametros() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");
    console.log("El ID es:" + id);
    return id;
}


//OPCIONES DE ENTRADA
function opcionesF(opcion) {

    let opciones = [];
    switch (opcion) {

        //1. LAB GITCE
        case '1':
            opciones.push("IE3");
            break;

        //2. Biblioteca
        case '2':
            opciones.push("IE2"); opciones.push("IE4");
            break;

        //3. SIU
        case '3':
            opciones.push("IE1");
            break;

        //4. Salon de conferencias
        case '4':
            opciones.push("U"); opciones.push("FE1");
            break;

        //5. VIPE
        case '5':
            opciones.push("A10"); opciones.push("FE5");
            break;

        //6. Cafetería
        case '6':
            opciones.push("K"); opciones.push("G");
            break;

        case '7':
            opciones.push("X");
            break;

        default:
            opciones.push(opcion);
            break;
    }
    return opciones;
}

//RUTA==============================================================================================
function ruta() {


    let nodoFinal = opcionesF(getParametros());
    //NODO INICIAL Y FINAL
    let initialV = "FE5";
    let menorDistancia;
    let rutaR = [];

    for (let i = 0; i < nodoFinal.length; i++) {

        console.log("I: " + i);
        //ALGORITMO
        let dks = dijkstra(problem, initialV, nodoFinal[i]);

        if (nodoFinal.length > 1) {
            if (i == 0) {
                menorDistancia = dks["distancia"];
                rutaR = dks["ruta"];
            }
            else if (i >= 1) {
                if (dks["distancia"] < menorDistancia) {
                    menorDistancia = dks["distancia"];
                    rutaR = dks["ruta"];
                }

            }
        }
        else {
            menorDistancia = dks["distancia"];
            rutaR = dks["ruta"];
        }
    }



    console.log("--------------------------------");
    console.log("ARISTAS");

    let x1, x2, y1, y2;

    for (let i = 0; i < rutaR.length; i++) {

        if (i < rutaR.length - 1) {
            nodoI = rutaR[i];
            nodoF = rutaR[i + 1];

            x1 = (puntos[nodoI]["x"]);
            y1 = (puntos[nodoI]["y"]);
            x2 = (puntos[nodoF]["x"]);
            y2 = (puntos[nodoF]["y"]);
            stroke("#9900FF");
            strokeWeight(25);
            line(x1, y1, x2, y2);
        }
    }
}




//PASILLO ===============================================
function letras() {
    fill("red");
    stroke("none");
    textSize(80);

    text("A", puntos.A.x + 50, puntos.A.y);
    text("B", puntos.B.x + 50, puntos.B.y);
    text("C", puntos.C.x - 80, puntos.C.y - 50);
    text("D", puntos.D.x, puntos.D.y - 50);
    text("E", puntos.E.x - 100, puntos.E.y);

    textSize(40);

    text("F", puntos.F.x, puntos.F.y - 20);
    text("G", puntos.G.x + 20, puntos.G.y);
    text("H", puntos.H.x - 60, puntos.H.y + 20);
    text("I", puntos.I.x, puntos.I.y - 20);

    textSize(80);

    text("K", puntos.K.x - 25, puntos.K.y - 50);
    text("J", puntos.J.x, puntos.J.y + 100);
    text("L", puntos.L.x + 20, puntos.L.y + 100);
    text("M", puntos.M.x + 20, puntos.M.y + 100);
    text("M2", puntos.M2.x + 20, puntos.M2.y + 100);
    text("N", puntos.N.x - 90, puntos.N.y);

    //text("QUERIMA TE AMO ♥",M[0]+220, M[1]-20);
    textSize(30);

    text("O", puntos.O.x - 20, puntos.O.y + 30);
    text("P", puntos.P.x - 20, puntos.P.y - 20);
    text("Q", puntos.Q.x - 20, puntos.Q.y - 10);
    text("R", puntos.R.x, puntos.R.y + 40);
    text("T", puntos.T.x - 10, puntos.T.y + 40);
    text("U", puntos.U.x - 10, puntos.U.y - 20);
    text("W", puntos.W.x - 10, puntos.W.y - 10);
    text("X", puntos.X.x - 10, puntos.X.y + 40);
    text("Y", puntos.Y.x, puntos.Y.y - 10);
    text("Z", puntos.Z.x - 10, puntos.Z.y + 40);
    text("A1", puntos.A1.x - 10, puntos.A1.y - 10);
    text("A2", puntos.A2.x - 10, puntos.A2.y + 40);
    text("A3", puntos.A3.x, puntos.A3.y + 30);
    text("A4", puntos.A4.x - 10, puntos.A4.y - 20);
    text("A5", puntos.A5.x - 10, puntos.A5.y + 30);
    text("A6", puntos.A6.x - 10, puntos.A6.y - 20);
    text("A7", puntos.A7.x - 10, puntos.A7.y + 30);
    text("A8", puntos.A8.x - 10, puntos.A8.x - 20);

    text("A9", puntos.A9.x - 10, puntos.A9.y + 30);
    text("A10", puntos.A10.x - 10, puntos.A10.y - 20);

    textSize(35);

    text("B1", puntos.B1.x, puntos.B1.y - 30);
    text("B2", puntos.B2.x, puntos.B2.y - 30);
    text("B3", puntos.B3.x + 20, puntos.B3.y);
    text("B4", puntos.B4.x + 20, puntos.B4.y);
    text("B5", puntos.B5.x - 50, puntos.B5.y - 20);
    text("B6", puntos.B6.x - 20, puntos.B6.y - 30);
    text("B7", puntos.B7.x, puntos.B7.y - 30);
    text("B8", puntos.B8.x, puntos.B8.y + 50);
    text("B9", puntos.B9.x - 70, puntos.B9.y);

    text("B10", puntos.B10.x - 80, puntos.B10.y + 40);
    text("B11", puntos.B11.x - 80, puntos.B11.y + 40);
    text("B12", puntos.B12.x + 10, puntos.B12.y - 20);
    text("B13", puntos.B13.x + 10, puntos.B13.y - 20);

    text("FE1", puntos.FE1.x - 15, puntos.FE1.y + 40);
    text("FE2", puntos.FE2.x - 15, puntos.FE2.y + 40);
    text("FE3", puntos.FE3.x - 50, puntos.FE3.y + 40);
    text("FE4", puntos.FE4.x + 10, puntos.FE4.y + 40);
    text("FE5", puntos.FE5.x + 10, puntos.FE5.y + 40);
    text("IE1", puntos.IE1.x + 10, puntos.IE1.y + 40);
    text("IE2", puntos.IE2.x + 25, puntos.IE2.y + 15);
    text("IE3", puntos.IE3.x + 25, puntos.IE3.y + 15);
    text("IE4", puntos.IE4.x + 25, puntos.IE4.y + 15);
}


// PANNING --------------------------------------------------------------------------------------------------

function touchMoved() {

    if (estaEnELCanvas()) {
        Tx += (mouseX - pmouseX) * dts;
        Ty += (mouseY - pmouseY) * dts;

        //console.log( "TX: " + Tx+ " TY: " + Ty )
    }

    return;
}


// ZOOM -----------------------------------------------------------------------------------------------------

function ZOOM() {

    if (touches.length >= 1) {
        if (((width * 0.96) - wImgs <= mouseX && mouseX <= (width * 0.96) + wImgs) && (0.90 * height <= mouseY && mouseY <= 0.90 * height + wImgs)) {
            S += ds;
            Tx -= 1;
        }
        else if (((width * 0.04) <= mouseX && mouseX <= (width * 0.04) + wImgs) && (0.90 * height <= mouseY && mouseY <= 0.90 * height + wImgs)) {
            S -= ds;
            Tx += 1;
        }
    }

}

//VERIFICACIÓN SI ESTÁ EN EL CANVAS?========================================================================

function estaEnELCanvas() {
    return (0.0 <= mouseX && mouseX <= width) && (0.0 <= mouseY && mouseY <= height) ? true : false;
}

// POSICIÓN DE  NODOS===========================================================================================

/*
function posiciónNodos(){

  stroke("#9900FF");
  strokeWeight(0);

  //NODOS----------------------------------------------------------------------------
  fill("red")

  //A=======================================================
  ellipse( puntos.A.x, puntos.A.y, 50 );
  //B=======================================================
  ellipse( puntos.B.x, puntos.B.y, 50 );
  //C=======================================================
  ellipse( puntos.C.x, puntos.C.y, 50 );
  //D=======================================================
  ellipse( puntos.D.x, puntos.D.y, 50 );
  //E=======================================================
  ellipse( puntos.E.x, puntos.E.y, 50 );
  //F=======================================================
  ellipse( puntos.F.x, puntos.F.y, 50 );
  //G=======================================================
  ellipse( puntos.G.x, puntos.G.y, 50 );
  //H=======================================================
  ellipse( puntos.H.x, puntos.H.y, 50 ); 
  //I=======================================================
  ellipse( puntos.I.x, puntos.I.y, 50 );
  //J=======================================================
  ellipse( puntos.J.x, puntos.J.y, 50 );
  //K======================================================= 
  ellipse( puntos.K.x, puntos.K.y, 50 );
  //L=======================================================
  ellipse( puntos.L.x, puntos.L.y, 50 );
  //M======================================================
  ellipse( puntos.M.x, puntos.M.y, 50 );
  //M2====================================================== 
  ellipse( puntos.M2.x, puntos.M2.y, 50 );
  //N======================================================
  ellipse( puntos.N.x, puntos.N.y, 50 );
  //B1====================================================== 
  ellipse( puntos.B1.x, puntos.B1.y, 50 );
  //B2======================================================
  ellipse( puntos.B2.x, puntos.B2.y, 50 );
  //B6====================================================== 
  ellipse( puntos.B6.x, puntos.B6.y, 50);
  //B7======================================================
  ellipse( puntos.B7.x, puntos.B7.y, 50);
  //B8======================================================
  ellipse( puntos.B8.x, puntos.B8.y, 50);
  //B9======================================================
  ellipse( puntos.B9.x, puntos.B9.y, 50);
  //B10======================================================
  ellipse( puntos.B10.x, puntos.B10.y, 50);


  //FISC----------------------------------------------------------------

  //O======================================================
  ellipse( puntos.O.x, puntos.O.y, 20 );
  //P======================================================
  ellipse( puntos.P.x, puntos.P.y, 20);
  //Q======================================================
  ellipse( puntos.Q.x, puntos.Q.y, 20);
  //R======================================================
  ellipse( puntos.R.x, puntos.R.y, 20);
  //T======================================================
  ellipse( puntos.T.x, puntos.T.y, 20);
  //U======================================================
  ellipse( puntos.U.x, puntos.U.y, 20);
  //W======================================================
  ellipse( puntos.W.x, puntos.W.y, 20);
  //X======================================================
  ellipse( puntos.X.x, puntos.X.y, 20);
  //Y======================================================
  ellipse( puntos.Y.x, puntos.Y.y, 20);
  //Z======================================================
  ellipse( puntos.Z.x, puntos.Z.y, 20);
  //A1======================================================
  ellipse( puntos.A1.x, puntos.A1.y, 20);
  //A2======================================================
  ellipse( puntos.A2.x, puntos.A2.y, 20);
  //A3======================================================
  ellipse( puntos.A3.x, puntos.A3.y, 20);
  //A4======================================================
  ellipse( puntos.A4.x, puntos.A4.y, 20);
  //A5======================================================
  ellipse( puntos.A5.x, puntos.A5.y, 20);
  //A6======================================================
  ellipse( puntos.A6.x, puntos.A6.y, 20);
  //A7======================================================
  ellipse( puntos.A7.x, puntos.A7.y, 20);
  //A8======================================================
  ellipse( puntos.A8.x, puntos.A8.y, 20);
  //A9======================================================
  ellipse( puntos.A9.x, puntos.A9.y, 20);
  //A10======================================================
  ellipse( puntos.A10.x, puntos.A10.y, 20);
  //B3======================================================
  ellipse( puntos.B3.x, puntos.B3.y, 20);
  //B4======================================================
  ellipse( puntos.B4.x, puntos.B4.y, 20);
  //B5======================================================
  ellipse( puntos.B5.x, puntos.B5.y, 20);
  //B12======================================================
  ellipse( puntos.B12.x, puntos.B12.y, 20);
  //B13======================================================
  ellipse( puntos.B13.x, puntos.B13.y, 30);
  //B11======================================================
  ellipse( puntos.B11.x, puntos.B11.y, 30);
  //FE1=====================================================
  ellipse( puntos.FE1.x, puntos.FE1.y, 20);
  //FE2=====================================================
  ellipse( puntos.FE2.x, puntos.FE2.y, 30);
  //FE3======================================================
  ellipse( puntos.FE3.x, puntos.FE3.y, 30);
  //FE4======================================================
  ellipse( puntos.FE4.x, puntos.FE4.y, 30);
  //FE5======================================================
  ellipse( puntos.FE5.x, puntos.FE5.y, 30);


  //INDUSTRIAL----------------------------------------------------------------
 //IE1======================================================
 ellipse( puntos.IE1.x, puntos.IE1.y, 30);
 //IE2======================================================
 ellipse( puntos.IE2.x, puntos.IE2.y, 30);
 //IE3======================================================
 ellipse( puntos.IE3.x, puntos.IE3.y, 30);
 //IE4======================================================
 ellipse( puntos.IE4.x, puntos.IE4.y, 30);

  //LINEAS---------------------------------------------------------------------------
  
  //PASILLOS EXTERNOS

  strokeWeight(25);
  
  line( puntos.A.x, puntos.A.y, puntos.D.x, puntos.D.y );
  line( puntos.D.x, puntos.D.y, puntos.E.x, puntos.E.y );
  line( puntos.E.x, puntos.E.y, puntos.F.x, puntos.F.y );
  line( puntos.H.x, puntos.H.y, puntos.G.x, puntos.G.y );
  line( puntos.H.x, puntos.H.y, puntos.I.x, puntos.I.y );
  line( puntos.D.x, puntos.D.y, puntos.B8.x, puntos.B8.y );
  line( puntos.J.x, puntos.J.y, puntos.K.x, puntos.K.y );
  line( puntos.L.x, puntos.L.y, puntos.B11.x, puntos.B11.y );
  line( puntos.L.x, puntos.L.y, puntos.B11.x, puntos.B11.y );
  //PASILLO INTERNO

  //FISC

  strokeWeight(20); 
  line( puntos.B11.x, puntos.B11.y, puntos.IE3.x, puntos.IE3.y );
  line( puntos.B10.x, puntos.B10.y, puntos.IE2.x, puntos.IE2.y );
  line( puntos.N.x, puntos.N.y, puntos.A9.x, puntos.A9.y );
  line( puntos.M2.x, puntos.M2.y, puntos.B13.x, puntos.B13.y );
  line( puntos.B1.x, puntos.B1.y, puntos.FE1.x, puntos.FE1.y );
  line( puntos.B2.x, puntos.B2.y, puntos.FE2.x, puntos.FE2.y );
  line( puntos.B6.x, puntos.B6.y, puntos.FE3.x, puntos.FE3.y );
  line( puntos.B7.x, puntos.B7.y, puntos.FE4.x, puntos.FE4.y );
  line( puntos.B8.x, puntos.B8.y, puntos.IE4.x, puntos.IE4.y );
  line( puntos.B13.x, puntos.B13.y, puntos.FE5.x, puntos.FE5.y );
  line( puntos.O.x, puntos.O.y, puntos.P.x, puntos.P.y );
  line( puntos.T.x, puntos.T.y, puntos.U.x, puntos.U.y );
  line( puntos.Y.x, puntos.Y.y, puntos.Z.x, puntos.Z.y );
  line( puntos.A1.x, puntos.A1.y, puntos.A2.x, puntos.A2.y );
  line( puntos.A3.x, puntos.A3.y, puntos.A4.x, puntos.A4.y );
  line( puntos.A5.x, puntos.A5.y, puntos.A6.x, puntos.A6.y );
  line( puntos.A7.x, puntos.A7.y, puntos.A8.x, puntos.A8.y );
  line( puntos.A9.x, puntos.A9.y, puntos.A10.x, puntos.A10.y );
  line( puntos.C.x, puntos.C.y, puntos.L.x, puntos.L.y );
}
  
  


*/


