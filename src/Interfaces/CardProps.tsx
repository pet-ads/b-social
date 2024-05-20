export default interface CardProps {
    id: string;
    CardImg: string;
    CardTitle: string;
    CardText: string;
    bgColor: string;
    CardExpandedText?: string;
    recommendation?: string;
    bgColorRecommendation?: string;
    theme?: string;
    bgColorTheme?: string;
  }