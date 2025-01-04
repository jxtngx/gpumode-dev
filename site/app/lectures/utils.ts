import { XMLParser } from 'fast-xml-parser';
import fs from 'fs';

export function readXMLFile(filePath: string): any {
  const xmlString = fs.readFileSync(filePath, 'utf-8');
  const parser = new XMLParser();
  const jsonObj = parser.parse(xmlString);

  return jsonObj;
}