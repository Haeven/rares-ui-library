import ReactReadMoreReadLess from 'react-read-more-read-less';
import {
  bodyStyles,
  headingStyles,
  Typography,
} from '../Typography/Typography';

interface ReadMoreProps {
  text: string;
  readMoreTextColor?: string;
  readMoreText?: string;
  readLessText?: string;
  charLimit?: number;
  fontStyle?: keyof typeof headingStyles | keyof typeof bodyStyles;
  hideReadMoreButton?: boolean;
}

export const ReadMore = ({
  text,
  readMoreTextColor = 'var(--rares-purple)',
  readMoreText = 'Read More',
  readLessText = 'Read Less',
  charLimit = 125,
  fontStyle = 'BodyM',
  hideReadMoreButton,
}: ReadMoreProps) => {
  const readMoreLessStyle = {
    color: readMoreTextColor,
    cursor: 'pointer',
    display: hideReadMoreButton ? 'none' : 'inline',
  };

  return (
    <Typography fontStyle={fontStyle}>
      <ReactReadMoreReadLess
        charLimit={charLimit}
        readMoreText={readMoreText}
        readLessText={readLessText}
        readMoreStyle={readMoreLessStyle}
        readLessStyle={readMoreLessStyle}>
        {text}
      </ReactReadMoreReadLess>
    </Typography>
  );
};
