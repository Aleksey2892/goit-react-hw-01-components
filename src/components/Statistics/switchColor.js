import styles from './Styles.module.scss';

export default function switchColor(label) {
  switch (label) {
    case '.docx':
      return styles.docx;
    case '.pdf':
      return styles.pdf;
    case '.mp3':
      return styles.mp3;
    case '.psd':
      return styles.psd;
    default:
      return styles.item;
  }
}
