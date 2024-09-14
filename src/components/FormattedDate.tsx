// components/FormattedDate.tsx
import React from 'react';
import { format } from 'date-fns';

type FormattedDateProps = {
  date: Date | string;
};

const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  const formattedDate = format(date, 'MMMM d, yyyy'); 
  return <span>{formattedDate}</span>;
};

export default FormattedDate;
