import { docx, pdf, mp3, psd, item } from './Styles.module.scss';

export default function switchColor(label) {
  switch (label) {
    case '.docx':
      return docx;
    case '.pdf':
      return pdf;
    case '.mp3':
      return mp3;
    case '.psd':
      return psd;
    default:
      return item;
  }
}
