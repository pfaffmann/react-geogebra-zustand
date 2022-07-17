export enum PanelNames {
  VIEW_GRAPHICS = 'Graphics',
  VIEW_GRAPHICS_2 = 'Graphics 2',
  VIEW_3D_GRAPHICS = '3D Graphics',
  VIEW_ALGEBRA = 'Algebra',
  VIEW_SPREADSHEET = 'Spreadsheet',
  VIEW_CAS = 'CAS',
  VIEW_CONSTRUCTION_PROTOCOL = 'Construction Protocol',
  VIEW_PROBABILITY_CALCULATOR = 'Probability Calculator',
}
export const viewNoToViewXMLNo = (viewNo: number) => {
  return viewNo == 2 ? 16 : viewNo;
};

export const viewNamesMap = new Map<number, PanelNames>();
//1-> Graphics 1, 2->Algebra, 4->Spreadsheet, 8->CAS, 16->Graphics 2, 512->Graphics3D
//Graphic2 = 16 in XML view
viewNamesMap.set(1, PanelNames.VIEW_GRAPHICS);
viewNamesMap.set(2, PanelNames.VIEW_ALGEBRA);
viewNamesMap.set(4, PanelNames.VIEW_SPREADSHEET);
viewNamesMap.set(8, PanelNames.VIEW_CAS);
viewNamesMap.set(16, PanelNames.VIEW_GRAPHICS_2);
viewNamesMap.set(32, PanelNames.VIEW_CONSTRUCTION_PROTOCOL);
viewNamesMap.set(64, PanelNames.VIEW_PROBABILITY_CALCULATOR);
viewNamesMap.set(512, PanelNames.VIEW_3D_GRAPHICS);
