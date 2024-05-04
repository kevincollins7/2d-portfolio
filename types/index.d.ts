namespace GameMap {
  type MapObject = {
    height: number;
    id: number;
    name: string;
    point: boolean;
    rotation: number;
    type: string;
    visible: true;
    width: number;
    x: number;
    y: number;
  }
  
  type MapTileSet = {
    column: number;
    firstgid: number;
    image: string;
    imageheight: number;
    imagewidth: number;
    margin: number;
    name: string;
    spacing: number;
    tilecount: number;
    tileheight: number;
    tilewidth: number;
  }
  
  type MapLayer = {
    id: number;
    name: string;
    opacity: number;
    type: string;
    visible: boolean;
    x: number;
    y: number;
    data?: number[];
    height?: number;
    width?: number;
    draworder?: string;
    objects?: MapObject[];
  }
  
  type GameMapJSON = {
    compressionlevel: number;
    height: number;
    infinite: boolean;
    layers: MapLayer[];
    nextlayerid: number;
    nextobjectid: number;
    orientation: string;
    renderorder: string;
    tiledversion: string;
    tileheight: number;
    tilesets: MapTileSet[];
    tilewidth: number;
    type: string;
    version: string;
    width: number;
  }
}
